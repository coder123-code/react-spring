

{/*real import { Box } from "@mui/material";
import ProductCard from "./ProductCard";
import { Product } from "../../models/product";  // This should match product.ts

interface Props {
  products: Product[];
}

interface Props {
  products: Product[];
}





export default function ProductList({ products }: Props) {
    if (!products?.length) return <div>Loading...</div>;
    
    return (
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4 }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    );
  }
    */}
    import { Box } from "@mui/material";
    import ProductCard from "./ProductCard";
    import { Product } from "../../models/product";
    
    interface Props {
      products: Product[];
      onProductSelect: (id: number) => void;
    }
    
    export default function ProductList({ products, onProductSelect }: Props) {
      if (!products?.length) return <div>Loading...</div>;
        
      return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4 }}>
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelect={() => onProductSelect(product.id)}
            />
          ))}
        </Box>
      );
    }