import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
            <Box>
                <Avatar className='text-white' sx={{width:"56",height:"56", bgcolor:"purple"}}>R</Avatar>

            </Box>
        </Grid>
        <Grid item xs={9}>
            <div className="space-y-2"></div>
            <div className="">
                <p className='font-semibold text-lg'>Roman</p>
                <p className='opacity-60'>April 15, 1999</p>
            </div>

            <Rating value={4.5} readOnly name='half-rating' precision={.5} />
            <h6>Good product!</h6>

        </Grid>


      </Grid>
    </div>
  )
}

export default ProductReviewCard
