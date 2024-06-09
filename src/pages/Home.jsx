import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import { Circles } from 'react-loader-spinner';
import ProductTile from '../components/product-tile';

function Home() {
    const [product, setProduct] = useState([]);
    const [loading,setLoading]=useState(false);

    const fetchListOfProduct = async()=>{
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        if(data){
            setLoading(false);
            setProduct(data)
        }
    }
    useEffect(()=>{
        fetchListOfProduct();
    },[])
  return (
    <div>
       {loading?<div className='min-h-screen w-full flex justify-center items-center'>
        <Circles 
         height={'120'}
         width={'120'}
         color='rgb(20,20,127)'
         visible={true}
        />
     </div>:
     <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3'>
        {product && product.length>0 ?product.map((item)=><ProductTile product={item}/>)
        :null}
        </div>}
    </div>
  )
}

export default Home