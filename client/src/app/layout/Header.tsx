{/*import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" sx={{ mb: 4, width: '100%' }}>
      <Toolbar>
        <Typography variant="h6">
          Sports Center
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
*/}

{/* theme real*/}
 {/*import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
 darkMode: boolean;
 handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange}: Props) {
 return (
   <AppBar position="static" sx={{mb:4}}>
     <Toolbar>
       <Typography variant="h6">
         Sports Center
       </Typography>
       <Switch checked={darkMode} onChange={handleThemeChange} />
     </Toolbar>
   </AppBar>
 );
}
*/}
{/*import { AppBar, Switch, Toolbar, Typography, Button, Box } from "@mui/material";
import { Page } from './App';

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export default function Header({ darkMode, handleThemeChange, onNavigate, currentPage }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ cursor: 'pointer', flexGrow: 1 }}
          onClick={() => onNavigate('home')}
        >
          SPORTS CENTER
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button 
            color="inherit" 
            onClick={() => onNavigate('catalog')}
            sx={{ 
              textDecoration: currentPage === 'catalog' || currentPage === 'product' 
                ? 'underline' 
                : 'none' 
            }}
          >
            Products
          </Button>
          <Button 
            color="inherit" 
            onClick={() => onNavigate('contact')}
            sx={{ 
              textDecoration: currentPage === 'contact' ? 'underline' : 'none' 
            }}
          >
            Contact
          </Button>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
  */}
  {/*import { AppBar, Switch, Toolbar, Typography, Button, Box } from "@mui/material";
import { Page } from './App';

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export default function Header({ darkMode, handleThemeChange, onNavigate, currentPage }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ cursor: 'pointer', flexGrow: 1 }}
          onClick={() => onNavigate('home')}
        >
          SPORTS CENTER
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            color="inherit"
            onClick={() => onNavigate('catalog')}
            sx={{
              textDecoration: currentPage === 'catalog' || currentPage === 'product'
                ? 'underline'
                : 'none'
            }}
          >
            Products
          </Button>
          <Button
            color="inherit"
            onClick={() => onNavigate('contact')}
            sx={{
              textDecoration: currentPage === 'contact' ? 'underline' : 'none'
            }}
          >
            Contact
          </Button>
          <Button
            color="inherit"
            onClick={() => onNavigate('login')}
            sx={{
              textDecoration: currentPage === 'login' ? 'underline' : 'none'
            }}
          >
            Login
          </Button>
          <Button
            color="inherit"
            onClick={() => onNavigate('register')}
            sx={{
              textDecoration: currentPage === 'register' ? 'underline' : 'none'
            }}
          >
            Register
          </Button>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
  */}
  import { AppBar, Switch, Toolbar, Typography, Button, Box, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Page } from './App';

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export default function Header({ darkMode, handleThemeChange, onNavigate, currentPage }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ cursor: 'pointer', flexGrow: 1 }}
          onClick={() => onNavigate('home')}
        >
          SPORTS CENTER
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            color="inherit"
            onClick={() => onNavigate('catalog')}
            sx={{
              textDecoration: currentPage === 'catalog' || currentPage === 'product'
                ? 'underline'
                : 'none'
            }}
          >
            Products
          </Button>
          <Button
            color="inherit"
            onClick={() => onNavigate('contact')}
            sx={{
              textDecoration: currentPage === 'contact' ? 'underline' : 'none'
            }}
          >
            Contact
          </Button>
          <Button
            color="inherit"
            onClick={() => onNavigate('login')}
            sx={{
              textDecoration: currentPage === 'login' ? 'underline' : 'none'
            }}
          >
            Login
          </Button>
          <Button
            color="inherit"
            onClick={() => onNavigate('register')}
            sx={{
              textDecoration: currentPage === 'register' ? 'underline' : 'none'
            }}
          >
            Register
          </Button>
          <IconButton 
            color="inherit" 
            onClick={() => onNavigate('cart')}
            sx={{
              bgcolor: currentPage === 'cart' ? 'rgba(255, 255, 255, 0.12)' : 'transparent'
            }}
          >
            <Badge badgeContent={0} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}