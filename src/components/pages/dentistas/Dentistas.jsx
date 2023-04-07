import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { CartDentistasContexReducer } from '../../../context/CartDentistasContexReducer'


const Dentistas = () => {

    const [arregloDentistas,setArregloDentistas] = useState([])

   useEffect(()=>{
    const  dentistas = axios.get("https://jsonplaceholder.typicode.com/users")
    dentistas  
    .then(res => setArregloDentistas(res.data))
    .catch((err)=> console.log(err))
   },[])


const {state,dispatch} = useContext(CartDentistasContexReducer)

 
// dispatch({type: "CREAR_LISTADO_DENTISTA_FAVORITOS", payload})


  return (
   <div>
  <br/>  <br/>
      <ul>
          {arregloDentistas.map( item =>(
              <li key={item.id}> <br/>
                  {item.name}     <br/>                 
                  {item.email} <br/>
                  {item.phone} <br/>
                  {item.website} <br/>
           <button onClick={()=>dispatch({type:"CREAR_LISTADO_DENTISTA_FAVORITOS", payload: item})} >Favoritos</button>
                  <br/>

              </li>
          ))}
      </ul>
                



   </div>



  )
}

export default Dentistas