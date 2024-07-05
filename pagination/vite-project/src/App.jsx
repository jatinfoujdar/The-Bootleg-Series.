import React, { useEffect, useState } from "react";
import "./index.css"

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchProduct = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      if (data && data.products) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      // Handle error state here if needed
    } finally {
      setLoading(false); // Set loading to false whether fetch was successful or not
    }
  };
  const selectedPage = (selectedPage)=>{
    setPage(selectedPage);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="products">
          {products.length > 0 &&
            products.slice(page*10 -10,page*10).map((prod) => (
              <div className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </div>
            ))}
        </div>
      )}
      {
        products.length>0 && <div className="pagination">
          <span>⬅️</span>
          {
            [...Array(products.length/10)].map((_,i)=>{
              return <span onClick={()=> selectedPage(i+1)} key={i}>{i+1}</span>
            })
          }
          <span>1</span>
          <span>⬅️</span>
          </div>
      }
    </div>
  );
}

export default App;
