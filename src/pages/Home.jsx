import { useState, useEffect } from "react";
import { fetchBooks, addBook, updateBook, deleteBook } from "../components/api";
import BookForm from "../components/BookForm";
import BookTable from "../components/BookTable";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  async function handleSave(book) {
    if (book.id) {
      const updated = await updateBook(book.id, { ...book, modifiedAt: new Date().toISOString() });
      setBooks(books.map((b) => (b.id === book.id ? updated : b)));
    } else {
      const newBook = await addBook({ ...book, id: Date.now(), createdAt: new Date().toISOString(), active: true });
      setBooks([...books, newBook]);
    }
    setEditingBook(null);
  }

  function handleEdit(book) {
    setEditingBook(book);
  }

  function handleToggleActive(id) {
    setBooks(books.map((b) => (b.id === id ? { ...b, active: !b.active } : b)));
  }

  async function handleDelete(id) {
    await deleteBook(id);
    setBooks(books.filter((b) => b.id !== id));
  }

  return (
    <div>
      <h1>Book Management</h1>
      <BookForm onSave={handleSave} editingBook={editingBook} />
      <BookTable books={books} onEdit={handleEdit} onToggleActive={handleToggleActive} onDelete={handleDelete} />
    </div>
  );
}