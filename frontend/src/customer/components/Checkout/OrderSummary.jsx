import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action.js'
import { useLocation } from 'react-router-dom'
import { createPayment } from '../../../State/Payment/Action.js'

const OrderSummary = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const {order} = useSelector(store => store);
  const searchParams = new URLSearchParams(location.search)
  const orderId = searchParams.get("order_id");

  useEffect(()=> {
    dispatch(getOrderById(orderId))
  }, [orderId])


  const handleCheckout = ( ) => {
    dispatch(createPayment(orderId))
  }

  return (
    <div className=''>
        <div className="p-5 shadow-2xl rounded-lg border">
            <AddressCard address={order.order?.shippingAddress}/>
        </div>

        <div className=''>
      <div className="lg:grid grid-cols-3  relative">

        <div className='col-span-2 mb-8'>
        {order.order?.orderItems?.map((item)=>  <CartItem item={item} key={item._id}/>)  }
        </div>

          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-7">
                <div className="border pl-5 pr-5 h-[337px]">
                      <p className="uppercase text-lg text-center text-purple-600 font-bold pb-2 pt-2 ">Price Details</p>
                  <hr />
                  <div className="space-y-3 font-semibold mb-2">
                    <div className="flex justify-between pt-3 text-black">
                      <span>Price</span>
                      <span>₹{order.order?.totalPrice}</span>

                    </div>
                    <div className="flex justify-between pt-3 text-black">
                      <span>Delivery Charge</span>
                      <span className='text-green-600'>Free</span>

                    </div>
                    <div className="flex justify-between pt-3 ">
                      <span>Discount</span>
                    <span className='text-green-600'>-₹{order.order?.discount}</span>

                    </div>
                    <hr />
                    <div className="flex justify-between pt-1 font-bold text-black">
                      <span>Total Amount</span>
                    <span className='text-green-600'>₹{order.order?.totalDiscountedPrice}</span>

                    </div>

                  </div>

                  <Button color='secondary' className='w-full' variant='contained' sx={{px:"2.5rem", py:".7rem", mt:"2rem"}}
                  onClick={handleCheckout}
                  >
                Checkout

              </Button>


                </div>
          </div>

     </div>


    </div>

    </div>
  )
}

export default OrderSummary