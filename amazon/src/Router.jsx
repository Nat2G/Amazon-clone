import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import SignUp from './Pages/Auth/SignUp'
import Landing from './Pages/Landing/Landing'
import Results from './Pages/Results/Results' 
import ProductDetail from "./Pages/ProductDetail/ProductDetail"

function Routering() {
  return (
    
       <Router>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<SignUp />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/catagory/:catagoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail/>} />
        <Route path="/Cart" element={<Cart />} />
    </Routes>
</Router>


   
  )
}

export default Routering