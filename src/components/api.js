export const API_URL = "http://localhost:5001/books";

export async function fetchBooks() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function addBook(book) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...book, active: true, createdAt: new Date().toISOString(), modifiedAt: "" }),
  });
  return response.json();
}

export async function updateBook(id, updatedBook) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...updatedBook,
      modifiedAt: new Date().toISOString(),
    }),
  });
  return response.json();
}

export async function deleteBook(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}

export async function toggleActive(id, currentState) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ active: !currentState }),
  });
  return response.json();
}
