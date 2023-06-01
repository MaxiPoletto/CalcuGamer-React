import React, { useState } from 'react'

const Cart = ({dolar,titulo,website,imagen}) => {
  
  const [price, setPrice]= useState(0)
  
  console.log(dolar)
  const handleChange=(e)=>{
    
    setPrice(e.target.value)

  }


  return (
    <div className='cart'>
      
      <h1 className='cart--title'>{titulo}</h1>

      <img src={imagen} className='cart--img'/>

      <div className='cart--form'>
        {/* <form action='' name="priceForm" method='post'> */}
          <input className="form" type="number" value={price} onChange={handleChange}></input> 
        {/* </form> */}
      </div>
      
      <p className='cart--price'>{price*(Number(dolar*1.71))} ARS</p>
      
      <a href={website} target='_blank' className='cart--link'> link a {titulo}</a>

    </div>
  )
}

export default Cart