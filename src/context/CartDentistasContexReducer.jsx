import React, { createContext, useReducer } from 'react'

export const CartDentistasContexReducer = createContext()


const initialState = {
    arregloDentistasFavoritos: []
}


function reducer(state,action){
    switch(action.type){        
case "CREAR_LISTADO_DENTISTA_FAVORITOS":    

        let existe = state.arregloDentistasFavoritos.some((item) => item.id === action.payload.id )
        if(existe){                       
             let nuevoArregloDentistasFavoritos = state.arregloDentistasFavoritos.map((item) =>{
                 if(item.id === action.payload.id){
                     return {
                         ...item
                     };
                 }else{
                     return item
                 }
             });
             return{...state, arregloDentistasFavoritos:nuevoArregloDentistasFavoritos}
        }else{
            return {...state,arregloDentistasFavoritos: [...state.arregloDentistasFavoritos, action.payload] }
        }
                      
case "LIMPIAR_LISTADO_DENTISTAS_FAVORITOS":
         return {...state,arregloDentistasFavoritos: []}
        
case "CANTIDAD_DENTISTAS_FAVORITOS":     
        return {...state, arregloDentistasFavoritos: arregloDentistasFavoritos }

         default:
            return state
    }
}


const CartDentistasContexReducerProvider = ({children}) => {

  const [state,dispatch] = useReducer(reducer,initialState)


  return (
   <CartDentistasContexReducer.Provider value={{state,dispatch}}>
       {children}
   </CartDentistasContexReducer.Provider>

  )
}

export default CartDentistasContexReducerProvider