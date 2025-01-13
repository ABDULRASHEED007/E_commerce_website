import React from 'react'
import AddressCard from "../AddressCard/AddressCard"
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const OrderDetails = () => {
  return (
    <div className='lg:px-20 px-5'>
        <div className="">
            <h1 className='font-bold py-6 text-xl'>Deliviry Address</h1>
        <AddressCard />
        </div>

        <div className='py-10'>
            <OrderTracker activeStep={3}/>
        </div>

        <Grid container className='space-y-5'>
            {[1,1,1,1,1].map((item)=>  <Grid item container className='shadow-xl rounded-md p-5 border ' sx={{alignItems:"center", justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className="flex items-center space-x-4">
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0G57xBtQPPvgsr6nwEwYIMrBccJlD913TxQ&usqp=CAU" alt="img" />

                    <div className='space-y-2 ml-5'>
                        <p className='font-semibold'>Men's slim pants 100% cotton washable</p>
                        <p className='space-x-3'><span className='space-x-5 opacity-50 text-xs'>Color: Grey</span >
                        <span className='space-x-5 opacity-50 text-xs'>
                             Size: 30
                            </span>
                             </p>
                        <p>Seller: Reload</p>
                        <p>₹1099</p>
                    </div>

                    </div>
                </Grid>

                <Grid item>
                    <Box sx={{color:deepPurple[500]}}>

                    <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2 "/>
                    <span>Rate & Review Product</span>

                    </Box>
                </Grid>

            </Grid> )} 

        </Grid>

    </div>
  )
}

export default OrderDetails