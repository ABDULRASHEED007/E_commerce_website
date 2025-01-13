import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../../State/Order/Action'
import { useNavigate } from 'react-router-dom'

const AddressForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {auth} = useSelector(store => store);
    console.log("auth", auth.user)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);

            const address = {
                firstName:data.get("firstName"),
                lastName:data.get("lastName"),
                streetAddress:data.get("address"),
                city:data.get("city"),
                state:data.get("state"),
                zipCode:data.get("zip"),
                mobile:data.get("phoneNumber"),
            }

            const orderData = {address, navigate}

            dispatch(createOrder(orderData))
            console.log(address)
    }


  return (
    <div className=''>
    <Grid container spacing={4}>
        <Grid xs={12} lg={5} className='border rounded-md shadow-md h-[30.5rem] overflow-y-scroll'>
            <div className="p-5 py-7 border-b cursor-pointer">
                { auth.user?.address?.map((item) => <AddressCard key={item._id} address={item} />) }
                <Button color='secondary' variant="outlined" className='mt-5 my-4'>
                    Deliver Here
                </Button>
            </div>

        </Grid>

        <Grid item xs={12} lg={7}>
            <Box className="border rounded-s-md shadow-md p-5">

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id='firstName'
                            name='firstName'
                            label='First Name'
                            fullWidth
                            autoComplete='given-name'
                            />

                            

                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id='lastName'
                            name='lastName'
                            label='Last Name'
                            fullWidth
                            autoComplete='given-name'
                            />

                            

                        </Grid>


                        <Grid item xs={12} >
                            <TextField
                            required
                            id='address'
                            name='address'
                            label='Address'
                            fullWidth
                            autoComplete='given-name'
                            multiline
                            rows={4}
                            />

                            

                        </Grid>

                        
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id='city'
                            name='city'
                            label='City'
                            fullWidth
                            autoComplete='given-name'
                            />

                            

                        </Grid>

                        
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id='state'
                            name='state'
                            label='State'
                            fullWidth
                            autoComplete='given-name'
                            />

                            

                        </Grid>

                        
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id='zip'
                            name='zip'
                            label='ZipCode'
                            fullWidth
                            autoComplete='shippingpostal-code'
                            />

                            

                        </Grid>

                        
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id='phoneNumber'
                            name='phoneNumber'
                            label='Phone Number'
                            type='Number'
                            fullWidth
                            autoComplete='given-name'
                            />

                            

                        </Grid>

                        
                        <Grid item xs={12} sm={6}>

                <Button color='secondary' type='submit' className='' variant='contained' sx={{px:"2.5rem", py:".7rem", mt:"2rem"}}>
                Add Address

              </Button>
                            

                        </Grid>

                    </Grid>
                </form>

            </Box>

        </Grid>



    </Grid>
      
    </div>
  )
}

export default AddressForm
