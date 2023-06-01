import React, { useState } from 'react'
import Cart from './Cart'
import Cartpeso from './Cartpeso';

const Body = () => {
  const datos = [
  
    {
      name: "PlayStation Store",
      website: "https://store.playstation.com/",
      imagen: "https://www.svgrepo.com/show/331538/playstation.svg" 
    },
    {
      name: "Epic Games Store",
      website: "https://www.epicgames.com/store/",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Epic_Games_logo.png"
    },
    {
      name: "Nintendo",
      website: "https://www.nintendo.com/es-cl/",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nintendo_red_logo.svg/1280px-Nintendo_red_logo.svg.png"
    }
  ];
  const datopeso = [
    {
      name: "Steam",
      website: "https://store.steampowered.com/",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png"
    },
    {
      name: "Xbox Store",
      website: "https://www.microsoft.com/en-us/store/b/xbox",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/480px-Xbox_one_logo.svg.png"
    },
    {
      name: "Epic Games Store",
      website: "https://www.epicgames.com/store/",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Epic_Games_logo.png"
    },
    {
      name: "Origin/EA",
      website: "https://www.ea.com/es-es",
      imagen: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/ea-512.png"
    },
    {
      name: "Ubisoft",
      website: "https://store.ubisoft.com/ofertas/home?lang=es_AR",
      imagen: "https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/064e3a5648fb4a7f911155bd81f87fd2/32/256x256.png"
    },
    {
      name: "Battle.net",
      website: "https://us.shop.battle.net/es-es?from=root",
      imagen: "https://cdn.iconscout.com/icon/free/png-256/battlenet-3215370-2673788.png"
    },
  ];


  const [dolar,setDolar]=useState(0)
  const handleDolar=(f)=>{
    setDolar(f.target.value)
    
  }
 
  return (
    <div className='body'>
      <h2 className='body--h2'>¡Disponible para precio final con impuestos incluidos!</h2>
      <div className='cartConteiner'>
        {datopeso.map((datos,index)=>(
          <Cartpeso
          key={index}
          titulo={datos.name} 
          website={datos.website}
          imagen={datos.imagen}
          />
        ))}
      </div>


      <div className='dolar'>
        <p className='dolar--text'>Indique el valor del dolar BNA hoy:</p>

        {/* <form action='' name="dolarForm" method='post'> */}
          <input className="form dolar--inp" type="number" value={dolar} onChange={handleDolar} placeholder='0.00 DLS'></input> 
        {/* </form> */}

        <a href="https://www.cronista.com/MercadosOnline/dolar.html" target='_blank' className='dolar--link'>Click para conocer el valor del dolar</a>
      </div>
       

        <div className='cartConteiner'>
          {datos.map((dato, index)=>(
            <Cart 
              key={index} 
              dolar={dolar} 
              titulo={dato.name} 
              website={dato.website}
              imagen={dato.imagen}
            />
          ))}
        </div>
      
        
        
    </div>
  )
}

export default Body