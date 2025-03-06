export default function BookRow({ book, onEdit, onToggleActive, onDelete }) {
    return (
      <tr style={{ background: book.active ? "white" : "#ccc" }}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.category}</td>
        <td>{book.isbn}</td>
        <td>{book.createdAt}</td>
        <td>{book.modifiedAt ? new Date(book.modifiedAt).toLocaleDateString() : "-"}</td>
        <td>
          <button onClick={() => onEdit(book)}>Edit</button>
          <button onClick={() => onToggleActive(book.id)}>
            {book.active ? "Deactivate" : "Activate"}
          </button>
          <button onClick={() => onDelete(book.id)} disabled={book.active}>
            Delete
          </button>
        </td>
      </tr>
    );
  }