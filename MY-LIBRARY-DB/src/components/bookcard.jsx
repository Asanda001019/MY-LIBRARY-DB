import React from 'react'


function BookCard ({book}){
    return (
      <>
<div class="container">
<div className="big-card">
  <div className="small-card">
  <img src={book.CDESIGNER}alt='ssss' className='bg' />
    <div className="card-content">
      {/* <img style={{width: "400px",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "5px",
                    marginLeft:'10px',
                    marginBottom: "10px",}} src={"https://miro.medium.com/max/10944/1*S81O15rjKfG-BFdnNC6-GQ.jpeg"}/> */}
      {/* <h3 className="card-title italic">The</h3>
      <h2 className="card-title bold">Psychology</h2>
      <h3 className="card-title italic">of</h3>
      <h2 className="card-title bold">Money</h2> */}
    </div>
    {/* <img src="your-image.jpg" alt="Image description" class="card-image"> */}
    {/* <p className="card-paragraph">Paragraph text goes here.</p>
    <p className="card-paragraph">Another paragraph.</p> */}
  </div>
  <p className="card-heading">{book.TITLE}</p>
  <p className="card-author">{book.PUBLISHER}</p>
  <p className="card-price">{book.PRICE}</p>
</div>
</div>

          
   </>
    )
  }
  export default BookCard