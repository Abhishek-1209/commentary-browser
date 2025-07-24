#  Commentary Browser

This is a React-based project built as part of a frontend evaluation task for the interview process.

The application fetches comments and posts from a public API, displays them in a table, and allows basic interaction such as searching, editing, and pagination.

---

##  Features

- Fetches comments and post titles from `jsonplaceholder.typicode.com`
- Search functionality (name, email, or comment body)
- Editable `name` and `body` fields (click ✏️ or double-click to edit)
- Changes are saved using local storage, even after page refresh
- Pagination (10 comments per page)
- Responsive layout (works on both desktop and mobile)

---

##  Tech Stack

- React (with Create React App)
- Plain CSS
- Fetch API
- LocalStorage API

---

## 📁 Folder Structure

src/
├── components/
│ ├── NavBar/
│ ├── CommentTable/
│ └── TableRow/
├── utils/
│ └── localStorageUtils.js
├── App.js
├── App.css
└── index.css


---

## 🚀 Run Locally

```bash
git clone https://github.com/Abhishek-1209/commentary-browser.git
cd commentary-browser
npm install
npm start
# commentary-browser
