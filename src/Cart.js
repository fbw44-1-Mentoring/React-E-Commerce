import React, { useContext } from "react";
import { MyContext } from "./App";

export default function Cart() {
  const { cart,setCart } = useContext(MyContext);

  const placeOrder=()=>{


    let order= {
        userName: "Naqvi",
        products:cart
    }

    fetch("http://localhost:3000/orders",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(order)
    }).then(res=>res.json())
    .then(result=>{
        if(result.success){
            setCart([])
            console.log("order placed successfully")
        }else{
            console.log(result.message)
        }
    })
  }

  const DeleteItemFromCart=(id)=>{
    let updatedCart= cart.filter(product=>product._id!==id)
    setCart(updatedCart)
  }

  return (
    <div>
      {cart &&
        cart.map((product) => {
            return ( <div key={product._id} style={{ width: "250px" }}>
            <h2>{product.productName}</h2>
            <h3>price: ${product.productPrice}</h3>
            <img src={product.productImage} alt="" width="200" />
            <div>
              <button onClick={()=>DeleteItemFromCart(product._id)}>delete item</button>
              <div>
                <p>quantity: </p>
                <button>-</button>
                <button>+</button>{" "}
              </div>
            </div>
          </div> )
         
        })}
        <button onClick={placeOrder}>checkout</button>
    </div>
  );
}
