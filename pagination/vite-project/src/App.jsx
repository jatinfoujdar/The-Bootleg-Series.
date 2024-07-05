import { useEffect, useState } from "react";



function App() {

  const [products,setProducts] = useState([]);

  const fetchProduct = async()=>{
  const res = await fetch("https://dummyjson.com/products?limit=20");
  const data = await res.json();

  if(data && data.products){
    setProducts(data.products)
  }
  
  // console.log(data);
  }
 useEffect(()=>{
  fetchProduct()
 })
  return (
   <div>
    hello
   </div>
  )
}

export default App
