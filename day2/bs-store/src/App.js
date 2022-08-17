import { useState } from "react";
import data, { tobeaddedbook } from "./data";
import Counter from "./Counter";
import Search from "./components/search/Search";
import BookList from "./components/bookList/BookList";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import { Routes, Route } from "react-router-dom";
import SimpleAppbar from "./components/simpleAppbar/SimpleAppbar";
import Home from "./pages/home/Home";
import BookDetails from "./components/book/BookDetails";



function App() {
  const [books, setBooks] = useState(data);

  //Arrow(ok)
  const clearAll = () => {
    setBooks([]);
    console.log(books);
  };

  const addBook = (book) => {
    setBooks([...books, book]); //rest operator(...)
    console.log(books);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const AddAll = () => {
    setBooks([...books, ...tobeaddedbook]);
  };

  return (
    <>
  
    <SimpleAppbar/>
      <Routes>
        <Route path="/books/list" element={<BookList books={books}
          addBook={addBook}
          removeBook={removeBook} />} />

      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/books/details/:id" element={<BookDetails/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/" element={<Home/>}/>
     
    
      </Routes>
    </>
  );
}
export default App;
