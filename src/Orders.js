import React, { useContext, useEffect } from 'react'
import { MyContext } from './App'

export default function Orders() {
    const {orders,setOrders,cart}= useContext(MyContext)
    useEffect(()=>{
        fetch("http://localhost:3000/orders").then(res=>res.json()).then(result=>{
            if(result.success){
                setOrders(result.data)
            }else{
                console.log(result.message)
            }
        })
    },[cart])

const deleteOrder=(id)=>{
    fetch(`http://localhost:3000/orders/${id}`,{method:"DELETE"})
    .then(res=>res.json())
    .then(result=>{
        if(result.success){
            let updatedOrders= orders.filter(order=>order._id!==id)
            setOrders(updatedOrders)
        }else{
            console.log(result.message)
        }
    })
}


    return (
        <div >
            {orders.map(order=>{
                return(
                    <div >
                        <p>{order.userName}</p>
                         <div> {order.products.map(prod=>{
                             return (<p>{prod.productName}</p>)
                         })}</div>
                         <button onClick={()=> deleteOrder(order._id)}> delete order</button>
                    </div>
                )
            })}
        </div>
    )
}
