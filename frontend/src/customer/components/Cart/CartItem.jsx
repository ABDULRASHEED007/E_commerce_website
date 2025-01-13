import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const handleUpdateCartItem = (num)=> {
    const data = {data: {quantity: item.quantity + num}, cartItemId:item?._id}
    dispatch(updateCartItem(data))
  }


  const handleRemoveCartItem = ()=> {
    dispatch(removeCartItem(item._id))
  }


  return (
    <div className='p-5 shadow-lg mt-7 border rounded-lg bg-[#f5f5f5]'>
        <div  className="flex items-center">

        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">

        <img  className='w-full h-full object-cover object-top' src={item.product.imageUrl} alt="pants" />
      
        </div>
        <div className="ml-5 space-y-1">
            <h2 className="text-xl font-semibold text-gray-800 ">{item.product.title}</h2>
            <p className="opacity-70">Size: {item.size}, White</p>
            <p className="opacity-70 mt-2">Seller: {item.product.brand}</p>
       

        <div className="flex space-x-2 items-center  text-gray-900 pt-3">
                <p className='font-semibold'>
                ₹{item.discountedPrice}
                </p>
              <p className='opacity-50 line-through'>
              ₹{item.price} 
              </p>
              <p className='font-semibold text-green-600'>
               {item.discountPersent && `${item?.discountPersent} % Off`}
              </p>
              
              </div>

              
        </div>

        


        </div>

        <div className="lg:flex items-center lg:space-x-10 pt-4">
            

        <div className="flex items-center space-x-2">
            <IconButton onClick={() => handleUpdateCartItem(-1)} disabled = {item.quantity <= 1}>
            <RemoveCircleOutlineIcon  sx={{color:"red"}} />
            </IconButton>
            <span className="py-1 px-7 border rounded">
              {item.quantity}
            </span>
            <IconButton onClick={() => handleUpdateCartItem(1)} sx={{color:"purple"}}>
            <AddCircleOutlineIcon />
            </IconButton>
        </div>

      <div>
        <Button onClick={handleRemoveCartItem} variant="outlined" color='secondary' className='hover:bg-purple-800' sx={{color:"purple"}}>
          Remove
        </Button>
      </div>


        </div>
    </div>
  )
}

export default CartItem
