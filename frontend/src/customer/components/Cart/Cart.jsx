import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../State/Cart/Action'

const Cart = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const {cart} = useSelector(store => store);

  const handleCheckout = () => {
    navigate("/checkout?step=2")
  }


  useEffect(() => {
    dispatch(getCart())
  },[cart.updateCartItem, cart.deleteCartItem])


  

  return (
    <div className=''>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">

        <div className='col-span-2'>
        {cart.cart?.cartItems.map((item, i)=> <CartItem item={item} key={item._id}/>)  }
        </div>

          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-7">
                <div className="border pl-5 pr-5 h-[338px]">
                      <p className="uppercase text-lg text-center text-purple-600 font-bold pb-2 pt-2 ">Price Details</p>
                  <hr />
                  <div className="space-y-3 font-semibold mb-2">
                    <div className="flex justify-between pt-3 text-black">
                      <span>Price</span>
                      <span>₹ {cart.cart?.totalPrice}</span>

                    </div>
                    <div className="flex justify-between pt-3 text-slate-600">
                      <span>Delivery Charge</span>
                      <span className='text-green-600 text-base'>Free</span>

                    </div>
                    <div className="flex justify-between pt-3 text-slate-600">
                      <span>Discount</span>
                      <span className='text-green-600 text-base'>- ₹{cart.cart?.discount}</span>

                    </div>
                    <div className="flex justify-between pt-3 font-bold text-black">
                      <span>Total Amount</span>
                      <span className='text-green-600'>₹ {cart.cart?.totalDiscountedPrice}</span>

                    </div>

                  </div>

                  <Button color='secondary' onClick={handleCheckout} className='w-full' variant='contained' sx={{px:"2.5rem", py:".7rem", mt:"2rem"}}>
                Checkout

              </Button>


                </div>
          </div>

     </div>


    </div>
  )
}

export default Cart