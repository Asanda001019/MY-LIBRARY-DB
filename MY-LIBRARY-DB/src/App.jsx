import React from 'react'
// import {addbook} from './components/addbooks'
// import DisplayBooks from './components/displaybook'

import RegisterBooks from './components/registerbooks'

import BookCard from './components/bookcard'

function App() {


  let bookTable =[
    { ISBN : "1235",
      TITLE :"PURPLE HEARTS",
      NumPages :"2000",
      EDITION : "4TH",
      PUBLISHER :"Maya angelour",
      EDITOR : "Grace",
      CDESIGNER: "https://images.unsplash.com/photo-1601447316670-a117862110c1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      PRICE : "R300",
      FORMAT: "PDF",
      RDATE : "11-Dec-01",
  
  },  { ISBN : "6789",
    TITLE :"LIFE IN A YEAR",
    NumPages :"1000",
    EDITION : "6TH",
    PUBLISHER :"JESSICA NDABA",
    EDITOR : "TYSON ",
    CDESIGNER: "https://images.unsplash.com/photo-1653260449106-de99850d87e7?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    PRICE : "R500",
    FORMAT: "PDF",
    RDATE : "15-Jan-22",
  
  },  { ISBN : "10-364",
    TITLE :"THE CHOSEN ONE",
    NumPages :"3000",
    EDITION : "3RD",
    PUBLISHER :"PITCH BLACK",
    EDITOR : "Grace",
    CDESIGNER: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.&=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    PRICE : "R500",
    FORMAT: "E-BOOK",
    RDATE : "12-Dec-24",
  
  },
  ]
  
 
  return (
    <>
     
   {/* <Addbook book={bookTable[0]}/> */}
   {/* <DisplayBooks/> */}
   
   <RegisterBooks/>
   
   <BookCard book={bookTable[2]}/>
   <BookCard book={bookTable[2]}/>
   
    </>
  )
}

export default App
