{/*import { Typography } from "@mui/material";

export default function ProductDetails() {
    return(
        <Typography variant="h2">Product Details</Typography>
    );
}
    */}
   {/* import { Typography } from "@mui/material";

    interface Props {
      productId: number;
      onBack: () => void;
    }
    
    export default function ProductDetails({ productId, onBack }: Props) {
      return (
        <Typography variant="h2">Product Details</Typography>
      );
    }

    */}
    
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../../models/product";
import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";

interface Props {
  productId: number;
  onBack: () => void;
}

export default function ProductDetails({ productId, onBack }: Props) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const extractImageName = (item: Product): string | null => {
    if(item && item.pictureUrl) {
      const parts = item.pictureUrl.split('/');
      if(parts.length>0) {
        return parts[parts.length-1];
      }
    }
    return null;
  }

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(price);
  }

  useEffect(() => {
    console.log('Fetching product with ID:', productId); // Add this log
    axios.get(`http://localhost:8080/api/products/${productId}`) 
      .then(response => {
        console.log('API Response:', response.data); // Add this log
        setProduct(response.data);
      })
      .catch(error => {
        console.error('API Error:', error); // Add this log
        console.error(error)
      })
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) return <h3>Loading Product...</h3>;
  if (!product) return <h3>Product not found</h3>;

  return (
<>
      <Typography variant="h2">Product Details</Typography>
      <Typography variant="h3">{product.name}</Typography>
      <Grid container spacing={6}>
      <Grid item xs={6}>
        <img src={`/images/products/${extractImageName(product)}`} alt={product.name} style={{width: '100%'}} />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{mb: 2}} />
        <Typography gutterBottom color="secondary" variant="h4">{formatPrice(product.price)}</Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>{product.productType}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Brand</TableCell>
                <TableCell>{product.productBrand}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
 

   </>
    
  );
}