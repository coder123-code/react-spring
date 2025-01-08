/*import { Typography, Container, IconButton, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppSelector } from "../../store/configureStors";
import { useDispatch } from "react-redux";
import { Basket } from "../../api/agent";
export default function CartPage() {
    const { basket } = useAppSelector(state => state.basket);
    const dispatch = useDispatch();
   
    const handleRemoveItem = async (productId: number) => {
      try {
        await Basket.removeItem(productId, dispatch);
      } catch (error) {
        console.log(error);
      }
    }
   
    // Added new quantity update handler
    const handleUpdateQuantity = async (productId: number, delta: number) => {
      try {
        if (delta > 0) {
          await Basket.incrementItemQuantity(productId, 1, dispatch);
        } else {
          await Basket.decrementItemQuantity(productId, 1, dispatch);
        }
      } catch (error) {
        console.log(error);
      }
    }
   
    if (!basket) return <Typography variant="h3">Your basket is empty</Typography>;
 
    return (

    <TableContainer>
  <TableHead>
    <TableRow>
      <TableCell>Product Image</TableCell>
      <TableCell>Product Name</TableCell>
      <TableCell>Price</TableCell>
      <TableCell>Quantity</TableCell>
      <TableCell>Subtotal</TableCell>
      <TableCell>Remove</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>
        <img src="/images/default-product-image.png" alt="Product" width="50" height="50" />
      </TableCell>
      <TableCell>Product Name</TableCell>
      <TableCell>$0.00</TableCell>
      <TableCell>1</TableCell>
      <TableCell>$0.00</TableCell>
      <TableCell>
        <IconButton  aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  </TableBody>
</TableContainer>

  );
}
  */
//working
{/* import { Typography, Container, IconButton, TableBody, TableCell, TableContainer, TableHead, TableRow, Table, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useAppSelector } from "../../store/configureStors";
import { useDispatch } from "react-redux";
import { Basket } from "../../api/agent";

export default function CartPage() {
    const { basket } = useAppSelector(state => state.basket);
    const dispatch = useDispatch();
    console.log('Basket contents:', basket);
   
    const handleRemoveItem = async (productId: number) => {
      try {
        await Basket.removeItem(productId, dispatch);
      } catch (error) {
        console.error('Error removing item:', error);
      }
    }
   
    const handleUpdateQuantity = async (productId: number, delta: number) => {
      try {
        if (delta > 0) {
          await Basket.incrementItemQuantity(productId, 1, dispatch);
        } else {
          await Basket.decrementItemQuantity(productId, 1, dispatch);
        }
      } catch (error) {
        console.error('Error updating quantity:', error);
      }
    }
   
    if (!basket) return <Typography variant="h3">Your basket is empty</Typography>;
 
    return (
      <Container>
        <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="right">Subtotal</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {basket.items.map(item => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img 
                        src={item.pictureUrl} 
                        alt={item.name} 
                        style={{ width: 50, marginRight: 20 }}
                      />
                      <div>
                        <Typography variant="body1">{item.name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                          {item.productBrand} - {item.productType}
                        </Typography>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    ${(item.price / 100).toFixed(2)}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton 
                      color="primary" 
                      onClick={() => handleUpdateQuantity(item.id, -1)}
                      disabled={item.quantity === 1}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography component="span" mx={2}>
                      {item.quantity}
                    </Typography>
                    <IconButton 
                      color="primary" 
                      onClick={() => handleUpdateQuantity(item.id, 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    ${((item.price * item.quantity) / 100).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      color="error"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={3} align="right">
                  <Typography variant="h6">Total</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">
                    ${(basket.items.reduce((total, item) => 
                      total + (item.price * item.quantity), 0) / 100).toFixed(2)}
                  </Typography>
                </TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
}
    */}
   {/*import { Typography, Container, IconButton, TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useAppSelector } from "../../store/configureStors";
import { useDispatch } from "react-redux";
import { Basket } from "../../api/agent";

export default function CartPage() {
    const { basket } = useAppSelector(state => state.basket);
    const dispatch = useDispatch();
   
    const handleRemoveItem = async (productId: number) => {
        try {
            await Basket.removeItem(productId, dispatch);
        } catch (error) {
            console.error('Error removing item:', error);
        }
    }
   
    const handleUpdateQuantity = async (productId: number, delta: number) => {
        try {
            if (delta > 0) {
                await Basket.incrementItemQuantity(productId, 1, dispatch);
            } else {
                await Basket.decrementItemQuantity(productId, 1, dispatch);
            }
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    }
   
    if (!basket) return <Typography variant="h3">Your basket is empty</Typography>;
 
    return (
        <Container>
            <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="right">Subtotal</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {basket.items.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img 
                                            src={`/images/products/${item.pictureUrl}`}
                                            alt={item.name} 
                                            style={{ width: 50, height: 50, marginRight: 20, objectFit: 'contain' }}
                                        />
                                        <div>
                                            <Typography variant="body1">{item.name}</Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {item.productBrand} - {item.productType}
                                            </Typography>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell align="right">${(item.price / 100).toFixed(2)}</TableCell>
                                <TableCell align="center">
                                    <IconButton 
                                        color="primary" 
                                        onClick={() => handleUpdateQuantity(item.id, -1)}
                                        disabled={item.quantity === 1}
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    <Typography component="span" mx={2}>{item.quantity}</Typography>
                                    <IconButton 
                                        color="primary" 
                                        onClick={() => handleUpdateQuantity(item.id, 1)}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right">
                                    ${((item.price * item.quantity) / 100).toFixed(2)}
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        color="error"
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell colSpan={3} align="right">
                                <Typography variant="h6">Total</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="h6">
                                    ${(basket.items.reduce((total, item) => 
                                        total + (item.price * item.quantity), 0) / 100).toFixed(2)}
                                </Typography>
                            </TableCell>
                            <TableCell />
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
    */}
    import { Typography, Container, IconButton, TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useAppSelector } from "../../store/configureStors";
import { useDispatch } from "react-redux";
import { Basket } from "../../api/agent";

export default function CartPage() {
    const { basket } = useAppSelector(state => state.basket);
    const dispatch = useDispatch();
   
    const handleRemoveItem = async (productId: number) => {
        try {
            await Basket.removeItem(productId, dispatch);
        } catch (error) {
            console.error('Error removing item:', error);
        }
    }
   
    const handleUpdateQuantity = async (productId: number, delta: number) => {
        try {
            if (delta > 0) {
                await Basket.incrementItemQuantity(productId, 1, dispatch);
            } else {
                await Basket.decrementItemQuantity(productId, 1, dispatch);
            }
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    }

    // Debug function to help identify the correct path
    const getImagePath = (pictureUrl: string) => {
        // Log the original URL for debugging
        console.log('Original pictureUrl:', pictureUrl);
        
        if (!pictureUrl) return '';
        
        // Remove any leading 'images/Product/' if it exists
        const cleanUrl = pictureUrl.replace('images/Product/', '');
        const finalPath = `/images/products/${cleanUrl}`;
        
        console.log('Final image path:', finalPath);
        return finalPath;
    };
   
    if (!basket) return <Typography variant="h3">Your basket is empty</Typography>;

    // Debug log to see the entire basket content
    console.log('Current basket:', basket);
 
    return (
        <Container>
            <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="right">Subtotal</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {basket.items.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img 
                                            src={getImagePath(item.pictureUrl)}
                                            alt={item.name} 
                                            style={{ width: 50, height: 50, marginRight: 20, objectFit: 'contain' }}
                                            onError={(e) => console.error('Image failed to load:', e.currentTarget.src)}
                                        />
                                        <div>
                                            <Typography variant="body1">{item.name}</Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {item.productBrand} - {item.productType}
                                            </Typography>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell align="right">${(item.price / 100).toFixed(2)}</TableCell>
                                <TableCell align="center">
                                    <IconButton 
                                        color="primary" 
                                        onClick={() => handleUpdateQuantity(item.id, -1)}
                                        disabled={item.quantity === 1}
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                    <Typography component="span" mx={2}>{item.quantity}</Typography>
                                    <IconButton 
                                        color="primary" 
                                        onClick={() => handleUpdateQuantity(item.id, 1)}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right">
                                    ${((item.price * item.quantity) / 100).toFixed(2)}
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        color="error"
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell colSpan={3} align="right">
                                <Typography variant="h6">Total</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="h6">
                                    ${(basket.items.reduce((total, item) => 
                                        total + (item.price * item.quantity), 0) / 100).toFixed(2)}
                                </Typography>
                            </TableCell>
                            <TableCell />
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}