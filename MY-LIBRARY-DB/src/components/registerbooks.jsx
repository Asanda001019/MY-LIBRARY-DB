//This is a register form
import  { addbook } from './addbooks'
import { useState } from "react";



function RegisterBooks(){
  const [inputs, setInputs] = useState({addbook});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(inputs);
    // alert('Form successfully submitted!');
    addbook(inputs)
    
  }


  return (
    <>
        <form onSubmit={handleSubmit}>

<h1>My Registration Form</h1>

      <label>Enter ISBN:
        <input 
         type="number" 
         name="isbn" 
         value={inputs.isbn || ""} 
         onChange={handleChange}/>
     </label>
      <br></br>
      <br></br>   

      <label>Enter The Book Title:
        <input type="text" 
         name="title" 
         value={inputs.title || ""} 
         onChange={handleChange}/>
      </label>
      <br></br>
      <br></br>

      <label>Enter the number of pages:
        <input type="number" placeholder='name'
         name="NumPages" 
         value={inputs.NumPages || ""} 
         onChange={handleChange} />
      </label>
      <br></br>
      <br></br>

      <label>Enter edition:
        <input type="text"
         name="edition" 
         value={inputs.edition || ""} 
         onChange={handleChange} />
      </label>
      <br></br>
      <br></br>

      <label>Enter publisher's name:
        <input type="text" 
         name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}/>
      </label>
      <br></br>
      <br></br>

      <label>Enter editor name:
        <input type="text" 
        name="editorName" 
        value={inputs.editorName || ""} 
        onChange={handleChange} />
      </label>
      <br></br>
      <br></br>

      <label>Enter the price:
        <input type="price"
         name="price" 
         value={inputs.price || ""} 
         onChange={handleChange} />
      </label>
      <br></br>
      <br></br>

<label>Enter the release date:
        <input type="date"
         name="Rdate" 
         value={inputs.Rdate || ""} 
         onChange={handleChange} />
      </label>
      <br></br>
      <br></br>
      {/* <select>  
  <option value="PDF">PDF</option>
  <option value="e-BOOK" selected>e-BOOK</option>
  <option value="HARD-COPY">HARD-COPY</option>
</select> */}

      <div>
        <button type="submit">Submit</button>
        </div>
        
                
    </form>
    
 </>
 
  )
 
}




export default RegisterBooks