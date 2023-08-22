import ItemListContainer from "./Components/ItemListContainer"
import NavBar from "./Components/Navbar"
import ItemDetailContainer from './Components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Cart from "./Components/Cart"
import ProductDetail from "./Components/ProductDetail"

const App = () => { 
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes> 
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/product/:id" element={<ProductDetail/>} />
        <Route exact path="/category/:category" element={<ItemListContainer/>} />
        <Route exact path="/item/:id" element={<ItemDetailContainer/>} />     


      </Routes>
      
    </BrowserRouter>
  )
}

export default App