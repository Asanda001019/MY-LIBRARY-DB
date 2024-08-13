//This component reads 
import BookCard from "./bookcard"
import React from 'react'

function DisplayBooks({book}){
    console.log(book, "yhtu")

  //let MYBOOKS = JSON.parse(localStorage.getItem("MY LIBRARY DATABASE"))

  return (
    <>

{book.map((book) => (
<BookCard key={book.ISBN} books={book} />
           
  ))}
    
        
        
   </>
  )
}
export default DisplayBooks

