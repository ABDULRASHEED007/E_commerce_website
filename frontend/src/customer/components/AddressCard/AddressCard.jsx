import React from 'react'

const AddressCard = ({address}) => {
  return (
    <div className=''>
      <h2 className='text-2xl font-bold'>Address to Deliver</h2>
        <div className='space-y-1 py-2' >
            <p className='font-semibold'>{address?.firstName +" "+address?.lastName}</p>
            <p>{address?.state}, {address?.streetAddress}, {address?.zipCode}</p>
        </div>

        <div className='space-y-1'>
            <p className='font-semibold'>Phone Number</p>
            <p>{address?.mobile}</p>
        </div>

    </div>
  )
}

export default AddressCard