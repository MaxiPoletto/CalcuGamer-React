import React from 'react'

const Footer = () => {
  return (
    <div id="footer">
      <h3>Para más info...</h3>
      <div className='footer--cont'>
        <div className='footer--linkedin footer--red'>
          <img className='footer--img' src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png"/>
          <a href='https://www.linkedin.com/in/maximiliano-poletto/' target='_blank'>Linkedin</a>
        </div>
        <div className='footer--instagram footer--red'>
          <img className='footer--img' src="https://img.icons8.com/?size=512&id=32323&format=png"/>
          <a href='https://www.instagram.com/maxipoletto' target='_blank'>Instagram</a>
        </div>
        <div className='footer--github footer--red'>
          <img className='footer--img' src="https://img.icons8.com/?size=512&id=12598&format=png"/>
          <a href='https://github.com/MaxiPoletto' target='_blank'>GitHub</a>
        </div>
      </div>
  
    </div>
  )
}

export default Footer