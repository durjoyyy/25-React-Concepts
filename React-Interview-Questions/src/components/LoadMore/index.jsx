import React, { useEffect, useState } from "react";
import "./styles.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled,setDisabled]=useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await res.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData)=> [...prevData,...result.products]);
        setLoading(false);
        //console.log(products);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if(products && products.length ===100) setDisabled(true);
  }, [products]);

  if (loading) {
    return <div className="mainScreen"> Please Wait, Data is Loading</div>;
  }

  return (
    <div className="mainScreen">
      <div className="load-more-container">
          <div className="product-container">
            {
              products&&products.length
              ?products.map((item)=>(
                <div className="product" key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              ))
              :null
            }
          </div>
        <div className="button-container">
          <button disabled={disabled} onClick={()=>setCount(count+1)}> Load More Products</button>
          {
            disabled?<p> You have reached 100 products</p> :null
          }
        </div>
      </div>
    </div>
  );
};

export default LoadMoreData;
