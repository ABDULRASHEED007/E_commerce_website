import { Grid } from '@mui/material'
import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div onClick={()=> navigate(`/account/order/${5}`)} className='border p-5 shadow-md hover:shadow-black hover:shadow-lg'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0G57xBtQPPvgsr6nwEwYIMrBccJlD913TxQ&usqp=CAU" alt="pants" />
            
            <div className="ml-5 space-y-2">
                <p className='font-semibold'>Men slim Pants cotton washable</p>
                <p className='opacity-50 text-xs font-semibold '>Size: M</p>
                <p className='opacity-50 text-xs font-semibold' >Color: Black</p>
            </div>

            </div>
        </Grid>
        <Grid item xs={2}>
          <p>₹1099</p>
        </Grid>

        <Grid item xs={4}>
      { true && <div>

      <p className='flex items-center'>
        <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
        <span className='font-semibold'>
          Delivered on March 03
        </span>
      </p>
        <p className='text-sm opacity-80'>
          Your Item has been arrived!!
        </p>

      </div>}
    { false && <div>

        <p>
        <span>
         Expected Delivered on March 03
        </span>
      </p>
       

    </div>}
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard
