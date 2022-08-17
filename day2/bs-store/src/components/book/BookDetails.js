import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from "../../data";


export default function BookDetails() {
    const navigate=useNavigate();
    const { id } = useParams();
    const initial={
        id:0,
        title:"xx",
        price:0,
        summary:"..."

    }
    const [book,setBook]=useState(initial);
    useEffect(()=>{
         setBook(data.find((book )=> book.id == id)||initial)
    },[]);
   
    return (
        <div>
            <h3>{book.title}</h3>
            <p>{book.summary}</p>
            <h5><b>price:</b>{book.price}</h5>


            <button onClick={()=>navigate("/books/list")}>Go to BookList</button>
        </div>
    )
   
}
