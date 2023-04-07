import React, { useState } from 'react'
import { createContext } from 'react'

export  const CartDentistasContext = createContext()

const CartDentistasContextProvider = ({children}) => {
   

    const [arregloDentistasFavoritos,setArregloDentistasFavoritos] = useState([])


    const  idRepetido = (id) =>{
        let existe = arregloDentistasFavoritos.some((item) => item.id === id )
        return existe
    }

    const  crearListadoDentistasFavoritos = (item) =>{  
        if(idRepetido(item.id)) {
        } else{
            setArregloDentistasFavoritos([
                ...arregloDentistasFavoritos, item
            ])
        }
               
    }

    const limpiarListadoDentistasFavoritos = () =>{
        setArregloDentistasFavoritos([])
    }


  return (
     <CartDentistasContext.Provider value={
         {  
            arregloDentistasFavoritos,
            crearListadoDentistasFavoritos,
            limpiarListadoDentistasFavoritos
        }} >
       {children}
     </CartDentistasContext.Provider>
  )
}

export default CartDentistasContextProvider