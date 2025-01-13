import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg  overflow-hidden w-[12rem] mx-3 border hover:shadow-purple-700 hover:shadow-2xl '>
        <div className="h-[13rem]  w-[13rem]">
            <img className='object-cover object-top w-full h-full' src={product.imageUrl} alt="mens1" />
            {/* <img className='object-cover object-top w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSObfddu25OcY8rj-QtgJfVrXQi7fDnW-sgfA&usqp=CAU" alt="mens1" /> */}
        </div>

        <div className="p-4">
            <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
            {/* <h3 className='text-lg font-medium text-gray-900'>Black RRR</h3> */}
            <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
            {/* <p className='mt-2 text-sm text-gray-500'>Black Shirt cotton 100% OG</p> */}
        </div>
      
    </div>
  )
}

export default HomeSectionCard
