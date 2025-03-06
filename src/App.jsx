import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditBook from "./pages/EditBook";
import BookForm from "./components/BookForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<BookForm />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
      </Routes>
    </Router>
  );
}

export default App;
