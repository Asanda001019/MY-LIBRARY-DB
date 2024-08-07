//This function adds create / adds a new book in a database

import React from 'react'

export function addbook(book){

    let MYBOOKS = JSON.parse(localStorage.getItem("MY LIBRARY DATABASE"))

    // console.log(book)
    // console.log(MYBOOKS)


   
    MYBOOKS.push(book)
   
    localStorage.setItem('MY LIBRARY DATABASE', JSON.stringify(MYBOOKS))
  
}

