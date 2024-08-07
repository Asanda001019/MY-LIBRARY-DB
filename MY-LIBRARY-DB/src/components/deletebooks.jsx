//This is a an Delete function in crud operation

import React from 'react'

function DeleteBooks({ISBN}){

  let MYBOOKS = JSON.parse(localStorage.getItem("MY LIBRARY DATABASE"))

  function handleDelete(){

  }

  return (
    <div>
        <button onClick={handleDelete}>DELETE</button>
 </div>
  )
}
export default DeleteBooks