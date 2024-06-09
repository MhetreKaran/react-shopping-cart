import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeToCart } from '../../store/cartSlice';

function ProductTile({product}) {
  const dispatch = useDispatch();
  const carts = useSelector((state)=>state?.cart.cart);
  const handleAddtoCart = () =>{
    dispatch(addToCart(product));
  }
  const handleRemovetoCart = () =>{
    dispatch(removeToCart(product));
  }

  return (
    <div className='group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl'>
      <div className='h-[180px]'>
        <img 
        src={product?.image}
        alt={product?.title}
        className='object-cover h-full w-full'/>
      </div>
      <div >
        <h1 className='w-40 truncate mt-3 text-gray-700 font-bold text-lg'>{product?.title}</h1>
      </div>
      <div className='flex item-center justify-center w-full mt-5'>
        <button onClick={carts.some(item=> item?.id===product?.id)?handleRemovetoCart:handleAddtoCart} className='bg-green-900 text-white border-1 rounded-lg font-bold p-4'>{carts.some(item=> item?.id===product?.id) ?'Remove to Cart':'Add to Cart'}</button>
      </div>
    </div>
  )
}

export default ProductTile
