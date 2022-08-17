import React from 'react'
import { Link } from 'react-router-dom'

export default function Book({book,removeBook,addBook}) {
  return (
    <div >
      <Link to={`/books/details/${book.id}`}>{book.title}</Link>

        {book.title}

        <button onClick={()=> removeBook(book.id)}>Remove</button>
       

    </div>
  )
}
