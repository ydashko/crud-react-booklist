import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchBooks, toggleActive, deleteBook } from "../components/api";
import BookTable from "../components/BookTable";
import Filter from "../components/Filter";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  // function handleEdit(book) {
  //   navigate(`/edit-book/${book.id}`, { state: { book } });
  // }

  function handleToggleActive(id) {
    const book = books.find(b => b.id === id);
    toggleActive(id, book.active).then(() => fetchBooks().then(setBooks));
  }

  function handleDelete(id) {
    deleteBook(id).then(() => fetchBooks().then(setBooks));
  }

  const filteredBooks = books.filter(book =>
    filter === "all" ? true : filter === "active" ? book.active : !book.active
  );

  return (
    <div>
      <button onClick={() => navigate("/add-book")}>Add Book</button>
      <Filter filter={filter} setFilter={setFilter} books={books} />
      <BookTable books={filteredBooks} onToggleActive={handleToggleActive} onDelete={handleDelete} />
    </div>
  );
}