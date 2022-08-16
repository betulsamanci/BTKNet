import { useState } from "react";
import data,{tobeaddedbook} from "./data";



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
    setBooks(books.filter((book) => book.id!== id));
  };
  const AddAll=()=>{
    setBooks([...books,...tobeaddedbook]);
  };

  return (
    <>
     

      {books.map((book, index) => (
        <div key={index}>
          {book.title} {book.price}
          <button onClick={() => removeBook(book.id)}>Remove</button>
        </div>
      ))}

      <button onClick={() => clearAll()}>clear all</button>
 
      <button onClick={() => AddAll(tobeaddedbook)}>Add all</button>

    </>
  );
}

export default App;
