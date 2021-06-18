
import React,{createContext, useState} from 'react';
import Products from "./Products"
import Cart from "./Cart"
import Orders from "./Orders"
export const MyContext = createContext(null)

function App() {
  const [status,setStatus]=useState(false)
  const [products, setProducts]=useState([])
  const [cart,setCart]=useState([])
  const [orders,setOrders]=useState([])
  return (
    <MyContext.Provider value={{products, setProducts, cart,setCart,orders,setOrders  }}>
    <div className="App">
      <header style={{display:"flex",justifyContent:"space-between"}}>
        <h1>Products Shop</h1> 
        <h2 onClick={()=>setStatus(!status)}>Cart: {cart.length}</h2>
      </header>
     
   {status? <Cart/>: <Products/> }
     
    <Orders/>
    </div> 
    </MyContext.Provider>
  );
}


export default App;