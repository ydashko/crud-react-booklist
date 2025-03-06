import BookRow from "./BookRow";

export default function BookTable({ books, onEdit, onToggleActive, onDelete, }) {
  if (books.length === 0) {
    return <p>No books here, add some books</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Category</th>
          <th>ISBN</th>
          <th>Created</th>
          <th>Modified</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <BookRow
            key={book.id}
            book={book}
            onEdit={onEdit} 
            onToggleActive={onToggleActive}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}