import { Navbar } from "./components/Navbar"
import {Routes,Route } from "react-router-dom"
import { Home } from "./pages/Home"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Login from "./pages/Login"
import Register from "./pages/Register"
function App() {
  

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

     </Routes>
        
    </>
  )
}

export default App
