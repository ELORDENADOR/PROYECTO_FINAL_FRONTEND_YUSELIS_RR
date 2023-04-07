import React, { useContext } from 'react'
import { CartDentistasContexReducer } from '../../../context/CartDentistasContexReducer'



const DentistasFavoritos = () => {

   const {state,dispatch} = useContext(CartDentistasContexReducer)

   console.log(state.arregloDentistasFavoritos)
  return (
    <div>
        DentistasFavoritos
        
        <ul>
            {state.arregloDentistasFavoritos.map(item => (
                <li key={item.id}><br/>    <br/> 
                    {item.name}  <br/>                 
                    {item.email} <br/>
                    {item.phone} <br/>
                    {item.website} <br/>
                    <button>Quitar</button>
                </li>
            ))}
        </ul>
        <br/>  <br/>
        <button onClick={()=> dispatch({type: "LIMPIAR_LISTADO_DENTISTAS_FAVORITOS"})} >Limpiar</button>
    </div>


    
  )
}

export default DentistasFavoritos