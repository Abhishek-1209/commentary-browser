import React, { useState, useEffect } from "react";
import "./TableRow.css";
import { getSavedEdits, saveEdit } from "../../utils/localStorageUtils";

function TableRow({ comment, postTitle }) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingBody, setIsEditingBody] = useState(false);

  const [nameValue, setNameValue] = useState(comment.name);
  const [bodyValue, setBodyValue] = useState(comment.body);
  
  useEffect(() => {
    const saved = getSavedEdits();
    if (saved[comment.id]) {
      setNameValue(saved[comment.id].name || comment.name);
      setBodyValue(saved[comment.id].body || comment.body);
    }
  }, [comment]);

  const handleNameBlur = () => {
    setIsEditingName(false);
    saveEdit(comment.id, { name: nameValue });
  };

  const handleBodyBlur = () => {
    setIsEditingBody(false);
    saveEdit(comment.id, { body: bodyValue });
  };

  return (
    <tr>
      <td>{comment.email}</td>

      <td onDoubleClick={() => setIsEditingName(true)} className="editable-cell">
        {isEditingName ? (
          <input
            type="text"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            onBlur={handleNameBlur}
            autoFocus
          />
        ) : (
          <span className="cell-content">
            {nameValue}
            <span
              className="edit-icon"
              onClick={() => setIsEditingName(true)}
              title="Edit name"
            >
              ✏️
            </span>
          </span>
        )}
      </td>

      <td onDoubleClick={() => setIsEditingBody(true)} className="editable-cell">
        {isEditingBody ? (
          <textarea
            value={bodyValue}
            onChange={(e) => setBodyValue(e.target.value)}
            onBlur={handleBodyBlur}
            autoFocus
            rows={3}
            style={{ width: "100%" }}
          />
        ) : (
          <span className="cell-content">
            {bodyValue}
            <span
              className="edit-icon"
              onClick={() => setIsEditingBody(true)}
              title="Edit body"
            >
              ✏️
            </span>
          </span>
        )}
      </td>

      <td>{postTitle}</td>
    </tr>
  );
}

export default TableRow;
