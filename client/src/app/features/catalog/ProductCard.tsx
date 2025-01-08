{/*real import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../models/product";


interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
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

  return (
    <Card>
      <CardHeader avatar={
        <Avatar sx={{bgcolor: 'secondary.main'}}>
          {product.name.charAt(0).toUpperCase()}
        </Avatar>
      }
      title={product.name}
      titleTypographyProps={{sx: {fontWeight: 'bold', color: 'primary.main' }}}
      />
      <CardMedia
        sx={{ height: 140, backgroundSize: 'contain'}}
        image={`/images/products/${extractImageName(product)}`}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5">
          {formatPrice(product.price)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.productBrand} / {product.productType}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  )
}

*/}


//real
{/*import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../models/product";

interface Props {
  product: Product;
  onSelect: () => void;  // Added this prop
}

export default function ProductCard({ product, onSelect }: Props) {
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

  return (
    <Card>
      <CardHeader 
        avatar={
          <Avatar sx={{bgcolor: 'secondary.main'}}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: 'bold', color: 'primary.main' }
        }}
      />
      <CardMedia
        sx={{ 
          height: 140, 
          backgroundSize: 'contain',
          cursor: 'pointer'  // Added cursor pointer
        }}
        image={`/images/products/${extractImageName(product)}`}
        title={product.name}
        onClick={onSelect}  // Added click handler to image
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5">
          {formatPrice(product.price)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.productBrand} / {product.productType}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small" onClick={onSelect}>View</Button>
      </CardActions>
    </Card>
  )
}
  */}
  import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../models/product";
import { Basket } from "../../api/agent";
import { useAppDispatch } from "../../store/configureStors";


interface Props {
 product: Product;
 onSelect: () => void;
}

export default function ProductCard({ product, onSelect }: Props) {
 const dispatch = useAppDispatch();

 const handleAddItem = async () => {
   try {
     await Basket.addItem(product, dispatch);
   } catch (error) {
     console.error('Error adding item:', error);
   }
 };

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

 return (
   <Card>
     <CardHeader 
       avatar={
         <Avatar sx={{bgcolor: 'secondary.main'}}>
           {product.name.charAt(0).toUpperCase()}
         </Avatar>
       }
       title={product.name}
       titleTypographyProps={{
         sx: { fontWeight: 'bold', color: 'primary.main' }
       }}
     />
     <CardMedia
       sx={{ 
         height: 140, 
         backgroundSize: 'contain',
         cursor: 'pointer'
       }}
       image={`/images/products/${extractImageName(product)}`}
       title={product.name}
       onClick={onSelect}
     />
     <CardContent>
       <Typography gutterBottom color="secondary" variant="h5">
         {formatPrice(product.price)}
       </Typography>
       <Typography variant="body2" color="text.secondary">
         {product.productBrand} / {product.productType}
       </Typography>
     </CardContent>
     <CardActions>
       <Button size="small" onClick={handleAddItem}>Add to cart</Button>
       <Button size="small" onClick={onSelect}>View</Button>
     </CardActions>
   </Card>
 )
}