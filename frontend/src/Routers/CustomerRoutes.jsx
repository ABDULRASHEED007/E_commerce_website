import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../customer/components/Navigator/Navigation'
import Homepage from '../customer/pages/HomePage/Homepage'
import Cart from '../customer/components/Cart/Cart'
import Product from '../customer/components/Product/Product'
import Footer from '../customer/components/Footer/Footer'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import PaymentSuccess from '../customer/components/Payment/PaymentSuccess'

const CustomerRoutes = () => {
  return (
    <div>
      <div className="">
     <Navigation />

      </div>
      <Routes>
        <Route path='/login' element={<Homepage />} />
        <Route path='/register' element={<Homepage />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/account/order' element={<Order />} />
        <Route path='/account/order/:orderId' element={<OrderDetails />} />
        <Route path='/payment/:orderId' element={<PaymentSuccess />}/>






         {/* <Homepage /> */}
      {/* <Product /> */}
      {/* <ProductDetails /> */}
      {/* <Cart /> */}
      {/* <Checkout /> */}
      {/* <Order /> */}
      {/* <OrderDetails /> */}

      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default CustomerRoutes