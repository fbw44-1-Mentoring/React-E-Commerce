import React, { useContext, useEffect } from 'react'
import { MyContext } from './App'

export default function Products() {

    const {products,setProducts,cart,setCart} = useContext(MyContext)

    useEffect(()=>{
        fetch("http://localhost:3000/products")
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                setProducts(result.data)
            }else{
               console.log(result.message) 
            }
        })
    }, [])


    const addItemToCart =(product)=>{
        setCart([...cart,product])
    }
    return (
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
            {products && products.map(product=>{
                return (
                    <div key={product._id} style={{width:"250px"}}>
                        <h2>{product.productName}</h2>
                        <h3>price: ${product.productPrice}</h3>
                        <img src={product.productImage} alt="" width="200" />
                        <div>
                            <button onClick={()=>addItemToCart(product)}>add to cart</button>
                            <button>get more details</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
