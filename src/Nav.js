import React from 'react'

const Nav = () => {
  return (
    <div className='nav'>
      <h1 className='nav--title'>CalcuGamer</h1>
      <div className='nav--link'>
        <a className='nav--link--a' target="_blank" href='https://tecito.app/maxipole'>Donaciones</a>
        <a className='nav--link--a' href='#footer'>Contacto</a>
      </div>
    </div>
  )
}

export default Nav