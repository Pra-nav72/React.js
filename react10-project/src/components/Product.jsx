import React from 'react'
import Description from './Description'

const Product = ({data}) => {
  return (
    <div>
      <main className='flex p-4 m-6 bg-stone-800 text-gray-100 gap-10 rounded-lg'>

            <div className='pl-4 py-4'>
                <img src={data.image} alt="product image" />
            </div>
            <div>
                <div>
                    <h1 className='text-xl font-bold'>{data.title}</h1>
                    <div className='flex items-center gap-2 text-gray-400'>
                        <p>{data.rating} </p>
                        <h3 className='inline'>| {data.reviews}</h3>
                    </div>
                    <Description data={data}/>
                    <div className='text-green-400 mt-auto'>
                        <h3>{data.offers.exchangeOffer}</h3>
                        <h3>{data.offers.bankOffer}</h3>
                    </div>
                </div>
            </div>
            <div className='flex flex-col ml-auto justify-center text-center pr-4'>
                <h2 className='font-bold text-lg'>{data.price}</h2>
                <h3 className='line-through text-gray-400'>{data.originalPrice}</h3>
                <h2 className='text-lg text-green-400'>{data.discount}</h2>
            </div>
      </main>
    </div>
  )
}

export default Product
