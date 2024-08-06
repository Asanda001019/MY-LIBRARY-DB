//This function adds create / adds a new book in a database

import React from 'react'

function Addbook ({book}){

    let MYBOOKS = JSON.parse(localStorage.getItem("MY LIBRARY DATABASE"))

    console.log(book)
    console.log(MYBOOKS)


   
    MYBOOKS.push(book)
   
    localStorage.setItem('MY LIBRARY DATABASE', JSON.stringify(MYBOOKS))






  return (
    <>

    </>
  )
}

export default Addbook