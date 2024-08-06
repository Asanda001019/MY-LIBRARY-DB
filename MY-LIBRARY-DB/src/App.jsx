import React from 'react'
import Addbook from './components/addbooks'
import DisplayBooks from './components/displaybook'
import DeleteBooks from './components/deletebooks'
import RegisterBooks from './components/registerbooks'

function App() {


  localStorage.getItem("MY LIBRARY DATABASE")
 
  return (
    <>
     

   <Addbook/>
   <DisplayBooks/>
   <DeleteBooks/>
   <RegisterBooks/>
    </>
  )
}

export default App
