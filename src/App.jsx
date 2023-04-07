import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from './components/layouts/navbar/Navbar'
import Footer from './components/layouts/footer/Footer'
import Dentistas from './components/pages/dentistas/Dentistas'
import Contacto from './components/pages/contacto/Contacto'
import DentistasFavoritos from './components/pages/dentistasFavoritos/DentistasFavoritos'
import CartDentistasContexReducerProvider from './context/CartDentistasContexReducer'


function App() {

  return (
  <BrowserRouter>
      <CartDentistasContexReducerProvider>
            <Routes>
                <Route element={<Navbar/>}>
                  <Route element={<Footer/>}>
                    <Route path="/" element={<h1>home</h1>}  />
                    <Route path="/dentistas" element={<Dentistas/>}  />
                    <Route path="/dentista/:id" element={<h1>dentista</h1>}  />
                    <Route path="/contacto" element={<Contacto/>}  />
                    <Route path="/dentistasFavoritos" element={<DentistasFavoritos/>}  />
                  </Route>                  
                  </Route>      
                  <Route path="*" element={<h1>No existe la pagina</h1>}  />
            </Routes>            
      </CartDentistasContexReducerProvider>
  </BrowserRouter>
  )
}

export default App
