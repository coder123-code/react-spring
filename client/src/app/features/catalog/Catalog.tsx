import { useState, useEffect } from "react";



import { Product } from "../../models/product";
import ProductList from "./ProductList";


export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
      fetch('http://localhost:8080/api/products')
        .then(response => response.json())
        .then(data => {
          console.log('Products:', data); // Added logging
          setProducts(data.content || data);
        })
        .catch(error => console.error('Error:', error));
    }, []);
    
    return (
      <>
        <ProductList products={products} />
      </>
    );
  }