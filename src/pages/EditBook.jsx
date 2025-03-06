import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateBook } from "../components/api";
export default function EditBook() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [book, setBook] = useState(state.book || {});

  function handleChange(e) {
    setBook({ ...book, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateBook(book.id, { ...book, modifiedAt: new Date().toISOString() })  
      .then(() => navigate("/"));
  }

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={book.title} onChange={handleChange} />
        <input name="author" value={book.author} onChange={handleChange} />
        <input name="category" value={book.category} onChange={handleChange} />
        <input name="isbn" value={book.isbn} onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
