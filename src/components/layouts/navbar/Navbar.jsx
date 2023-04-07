import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { CartDentistasContexReducer } from '../../../context/CartDentistasContexReducer'

import  "./Navbar.css"

const Navbar = () => {

  const {state,dispatch} = useContext(CartDentistasContexReducer)

  return (
    <div>
       <ul>
           <NavLink to="/dentistas" className={({isActive}) => isActive ? "activeNavbar" : "navbar"}>Dentistas</NavLink>
           <br/>
           <NavLink to="/contacto"  className={({isActive}) => isActive ? "activeNavbar" : "navbar"}>contacto</NavLink>
           <br/>
           <NavLink to="/dentistasFavoritos" className={({isActive}) => isActive ? "activeNavbar" : "navbar"}>Dentistas Favoritos</NavLink>

       </ul>
              <h2>Dentistas Favoritos:{state.arregloDentistasFavoritos.length}</h2>
<Outlet/>

    </div>
  )
}

export default Navbar