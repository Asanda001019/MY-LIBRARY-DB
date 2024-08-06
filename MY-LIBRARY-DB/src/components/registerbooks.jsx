//This is a register form
import Addbook from './addbooks'
import React from 'react'

function RegisterBooks(Addbook){
  return (
    <>
        <form>
<h1>My Registration Form</h1>
      <label>Enter ISBN:
        <input type="text" />
      </label>
      <br></br>
      <br></br>
      <label>Enter The Book Title:
        <input type="text" />
      </label>
      <br></br>
      <br></br>
      <label>Enter the number of pages:
        <input type="text" />
      </label>
      <br></br>
      <br></br>
      <label>Enter edition:
        <input type="text" />
      </label>
      <br></br>
      <br></br>
      <label>Enter publisher's name:
        <input type="text" />
      </label>
      <br></br>
      <br></br>
      <label>Enter editor name:
        <input type="text" />
      </label>
      <br></br>
      <br></br>
      <label>Enter edition:
        <input type="text" />
      </label>
      <br></br>
      <br></br>


      <div>
                    <button type="submit">Submit</button>
                </div>
    </form>
 </>
  )
}
export default RegisterBooks