//This is a register form
import  { addbook } from './addbooks'
import { useState } from "react";



function RegisterBooks({pdf}){
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

<h1>update</h1>

      <label>Enter ISBN:
        <input 
         type="number" 
         name="ISBN" 
         value={inputs.ISBN || pdf.ISBN} 
         onChange={handleChange}/>
     </label>
      <br></br>
      <br></br>   

      <label>Enter The Book Title:
        <input type="text" 
         name="TITLE" 
         value={inputs.TITLE || pdf.TITLE} 
         onChange={handleChange}/>
      </label>
      <br></br>
      <br></br>

      <label>Enter the number of pages:
        <input type="number" placeholder='name'
         name="NumPages" 
         value={inputs.NumPages || pdf.NumPages} 
         onChange={handleChange} />
      </label>
      <br></br>
      <br></br>

      <label>Enter edition:
        <input type="text"
         name="EDITION" 
         value={inputs.EDITION || pdf.EDITION} 
         onChange={handleChange} />
      </label>
      <br></br>
      <br></br>

      <label>Enter publisher's name:
        <input type="text" 
         name="PUBLISHER" 
        value={inputs.PUBLISHER || pdf.PUBLISHER} 
        onChange={handleChange}/>
      </label>
      <br></br>
      <br></br>

      <label>Enter editor name:
        <input type="text" 
        name="EDITOR" 
        value={inputs.EDITOR || pdf.EDITOR} 
        onChange={handleChange} />
      </label>
      <br></br>
      <br></br>

      <label>Enter the price:
        <input type="PRICE"
         name="PRICE" 
         value={inputs.PRICE || pdf.PRICE} 
         onChange={handleChange} />
      </label>
      <br></br>
      <br></br>

<label>Enter the release date:
        <input type="date"
         name="Rdate" 
         value={inputs.Rdate || pdf.Rdate} 
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