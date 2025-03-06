import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BookForm({ onSave, editingBook }) {
  const [book, setBook] = useState({ title: "", author: "", category: "", isbn: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (editingBook) setBook(editingBook);
  }, [editingBook]);

  function handleChange(e) {
    setBook({ ...book, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(book);
    navigate("/");
  }

  return (
    <div>
      <button onClick={() => navigate("/")}>Back</button>
      <form onSubmit={handleSubmit}>
        <input name="title" value={book.title} onChange={handleChange} placeholder="Title" required />
        <input name="author" value={book.author} onChange={handleChange} placeholder="Author" required />
        <input name="category" value={book.category} onChange={handleChange} placeholder="Category" required />
        <input name="isbn" value={book.isbn} onChange={handleChange} placeholder="ISBN" required />
        <button type="submit">{editingBook ? "Update" : "Add"} Book</button>
      </form>
    </div>
  );
}