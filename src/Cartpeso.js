import React, { useState } from 'react'

const Cartpeso = ({titulo,website,imagen}) => {
  
  const [price, setPrice]= useState(0)
  
  const handleChange=(e)=>{
    
    setPrice(e.target.value)

  }


  return (
    <div className='cart'>
      
      <h1 className='cart--title'>{titulo}</h1>

      <img src={imagen} className='cart--img'/>

      <div className='cart--form'>
          <input className="form" type="number" value={price} onChange={handleChange}></input> 
      </div>
      
      {titulo=== "Ubisoft"? ( <p className='cart--price'>{price*(Number(1.27))} ARS</p>):( <p className='cart--price'>{price*(Number(1.71))} ARS</p>)}
      
      <a href={website} target='_blank' className='cart--link'> link a {titulo}</a>

    </div>
  )
}

export default Cartpeso