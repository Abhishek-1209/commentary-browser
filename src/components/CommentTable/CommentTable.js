import React, { useEffect, useState } from "react";
import TableRow from "../TableRow/TableRow";
import "../TableRow/TableRow.css";
import "./CommentTable.css";

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const ITEMS_PER_PAGE = 10;

function CommentTable({ searchQuery }) {
  const [comments, setComments] = useState([]);
  const [postTitles, setPostTitles] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(POSTS_URL)
      .then((res) => res.json())
      .then((data) => {
        const titles = {};
        data.forEach((post) => {
          titles[post.id] = post.title;
        });
        setPostTitles(titles);
      })
      .catch((err) => console.error("Post fetch error:", err));
  }, []);

  useEffect(() => {
    fetch(COMMENTS_URL)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error("Comment fetch error:", err));
  }, []);

  const filtered = comments.filter((c) => {
    const text = `${c.name} ${c.email} ${c.body}`.toLowerCase();
    return text.includes(searchQuery.toLowerCase());
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="table-container">
      <p className="edit-hint">Double-click name or body to edit.</p>

      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Body</th>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
  {paginated.length === 0 ? (
    <tr>
      <td colSpan="4" style={{ textAlign: "center", color: "#777" }}>
        No comments found.
      </td>
    </tr>
  ) : (
    paginated.map((comment) => (
      <TableRow
        key={comment.id}
        comment={comment}
        postTitle={postTitles[comment.postId] || "Loading..."}
      />
    ))
  )}
</tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CommentTable;
