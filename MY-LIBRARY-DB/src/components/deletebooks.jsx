//This is a an Delete function in crud operation

import React from 'react'
import { useState, useEffect } from 'react';

function DeleteBooks({ISBN}){

    const [books, setBooks] = useState([]);
    useEffect(() => {
      const storedBooks = JSON.parse(localStorage.getItem('Booktable'));
     setBooks(storedBooks || [])
    }, []);
    const handleDelete = () => {
      const updatedBooks = books.filter((item) => item.ISBN !== ISBN);
      setBooks(updatedBooks);
      console.log(updatedBooks)
      localStorage.setItem('Booktable', JSON.stringify(updatedBooks));
    };
    return (
      <button style={{backgroundColor:"Red"}} onClick={handleDelete}>Delete</button>
    );
  }

export default DeleteBooks



