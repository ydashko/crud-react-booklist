export const API_URL = "http://localhost:5001/books";

export async function fetchBooks() {
  const response = await fetch(API_URL);
  return response.json();
}

export async function addBook(book) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  return response.json();
}

export async function updateBook(id, updatedBook) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedBook),
  });
  return response.json();
}

export async function deleteBook(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}