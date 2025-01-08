

{/*import { Container, CssBaseline } from "@mui/material";
import Catalog from "../features/catalog/Catalog";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function App() {

 return (
   <>
     <CssBaseline />
     <Header darkMode={false} handleThemeChange={function (): void {
       throw new Error("Function not implemented.");
     } } />
     <Container>
       <Outlet />
     </Container>
   </>
 );
}

export default App;
/*}



{/* theme */}
{/*import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { useState } from "react";

import Catalog from "../features/catalog/Catalog";

function App() {
  console.log('App component rendering');
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  
  const theme = createTheme({
    palette: {
      mode: paletteType,
    }
  }); // removed stray 'r' here

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalog/>
     
      </Container>
    </ThemeProvider>
  );
}

export default App;
*/}


// Import your Store component

// The Home component (you can customize this as needed)




//trial
// index.tsx
// App.tsx
// App.tsx
{/*import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";  // Import Outlet for rendering nested routes

function App() {
  console.log('App component rendering');
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  
  const theme = createTheme({
    palette: {
      mode: paletteType,
    }
  }); // Removed stray 'r' here

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
       
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
*/}
{/*import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import Catalog from "../features/catalog/Catalog";
import HomePage from "../features/home/HomePage";
import ProductDetails from "../features/catalog/ProductDetails";
import ContactPage from "../features/contact/ContactPage";

export type Page = 'home' | 'catalog' | 'product' | 'contact';

function App() {
  console.log('App component rendering');
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const paletteType = darkMode ? 'dark' : 'light';
 
  const theme = createTheme({
    palette: {
      mode: paletteType,
    }
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  function navigateToPage(page: Page, productId?: number) {
    setCurrentPage(page);
    if (productId !== undefined) {
      setSelectedProductId(productId);
    }
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateToPage} />;
      case 'catalog':
        return (
          <Catalog 
            onProductSelect={(id) => navigateToPage('product', id)} 
          />
        );
      case 'product':
        return selectedProductId ? (
          <ProductDetails 
            productId={selectedProductId}
            onBack={() => navigateToPage('catalog')}
          />
        ) : (
          <Catalog 
            onProductSelect={(id) => navigateToPage('product', id)}
          />
        );
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={navigateToPage} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header 
        darkMode={darkMode} 
        handleThemeChange={handleThemeChange}
        onNavigate={navigateToPage}
        currentPage={currentPage}
      />
      <Container>
        {renderPage()}
      </Container>
    </ThemeProvider>
  );
}

export default App;


*/}
{/*import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { useState, useEffect } from "react";
import Catalog from "../features/catalog/Catalog";
import HomePage from "../features/home/HomePage";
import ProductDetails from "../features/catalog/ProductDetails";
import ContactPage from "../features/contact/ContactPage";

export type Page = 'home' | 'catalog' | 'product' | 'contact';

function App() {
  console.log('App component rendering');
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const paletteType = darkMode ? 'dark' : 'light';
  
  const theme = createTheme({
    palette: {
      mode: paletteType,
    }
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  function navigateToPage(page: Page, productId?: number) {
    setCurrentPage(page);
    if (productId !== undefined) {
      setSelectedProductId(productId);
    }
    
    let newPath = '/';
    switch(page) {
      case 'catalog':
        newPath = '/catalog';
        break;
      case 'product':
        newPath = `/catalog/${productId}`;
        break;
      case 'contact':
        newPath = '/contact';
        break;
    }
    window.history.pushState({}, '', newPath);
  }

  // For initial URL and direct access
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/contact') {
      setCurrentPage('contact');
    } else if (path === '/catalog') {
      setCurrentPage('catalog');
    } else if (path.startsWith('/catalog/')) {
      const id = parseInt(path.split('/')[2]);
      if (!isNaN(id)) {
        setCurrentPage('product');
        setSelectedProductId(id);
      }
    } else if (path === '/') {
      setCurrentPage('home');
    }
  }, []);

  // Add new useEffect for browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/contact') {
        setCurrentPage('contact');
      } else if (path === '/catalog') {
        setCurrentPage('catalog');
      } else if (path.startsWith('/catalog/')) {
        const id = parseInt(path.split('/')[2]);
        if (!isNaN(id)) {
          setCurrentPage('product');
          setSelectedProductId(id);
        }
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateToPage} />;
      case 'catalog':
        return (
          <Catalog 
            onProductSelect={(id) => navigateToPage('product', id)}
          />
        );
      case 'product':
        return selectedProductId ? (
          <ProductDetails 
            productId={selectedProductId}
            onBack={() => navigateToPage('catalog')}
          />
        ) : (
          <Catalog 
            onProductSelect={(id) => navigateToPage('product', id)}
          />
        );
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={navigateToPage} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header 
        darkMode={darkMode}
        handleThemeChange={handleThemeChange}
        onNavigate={navigateToPage}
        currentPage={currentPage}
      />
      <Container>
        {renderPage()}
      </Container>
    </ThemeProvider>
  );
}

export default App;
*/}
{/*import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { useState, useEffect } from "react";
import Catalog from "../features/catalog/Catalog";
import HomePage from "../features/home/HomePage";
import ProductDetails from "../features/catalog/ProductDetails";
import ContactPage from "../features/contact/ContactPage";
import LoginPage from "../features/login/LoginPage";
import RegisterPage from "../features/resgister/RegisterPage";


export type Page = 'home' | 'catalog' | 'product' | 'contact' | 'login' | 'register';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    }
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  function navigateToPage(page: Page, productId?: number) {
    setCurrentPage(page);
    if (productId !== undefined) {
      setSelectedProductId(productId);
    }
    
    let newPath = '/';
    switch(page) {
      case 'catalog':
        newPath = '/catalog';
        break;
      case 'product':
        newPath = `/catalog/${productId}`;
        break;
      case 'contact':
        newPath = '/contact';
        break;
      case 'login':
        newPath = '/login';
        break;
      case 'register':
        newPath = '/register';
        break;
    }
    window.history.pushState({}, '', newPath);
  }

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/contact') {
      setCurrentPage('contact');
    } else if (path === '/catalog') {
      setCurrentPage('catalog');
    } else if (path.startsWith('/catalog/')) {
      const id = parseInt(path.split('/')[2]);
      if (!isNaN(id)) {
        setCurrentPage('product');
        setSelectedProductId(id);
      }
    } else if (path === '/login') {
      setCurrentPage('login');
    } else if (path === '/register') {
      setCurrentPage('register');
    } else if (path === '/') {
      setCurrentPage('home');
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/contact') {
        setCurrentPage('contact');
      } else if (path === '/catalog') {
        setCurrentPage('catalog');
      } else if (path.startsWith('/catalog/')) {
        const id = parseInt(path.split('/')[2]);
        if (!isNaN(id)) {
          setCurrentPage('product');
          setSelectedProductId(id);
        }
      } else if (path === '/login') {
        setCurrentPage('login');
      } else if (path === '/register') {
        setCurrentPage('register');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateToPage} />;
      case 'catalog':
        return <Catalog onProductSelect={(id) => navigateToPage('product', id)} />;
      case 'product':
        return selectedProductId ? (
          <ProductDetails 
            productId={selectedProductId}
            onBack={() => navigateToPage('catalog')}
          />
        ) : (
          <Catalog onProductSelect={(id) => navigateToPage('product', id)} />
        );
      case 'contact':
        return <ContactPage />;
        case 'login':
          return <LoginPage />;
        case 'register':
          return <RegisterPage />;
      default:
        return <HomePage onNavigate={navigateToPage} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header 
        darkMode={darkMode}
        handleThemeChange={handleThemeChange}
        onNavigate={navigateToPage}
        currentPage={currentPage}
      />
      <Container>
        {renderPage()}
      </Container>
    </ThemeProvider>
  );
}

export default App;
*/}
{/*import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { useState, useEffect } from "react";
import Catalog from "../features/catalog/Catalog";
import HomePage from "../features/home/HomePage";
import ProductDetails from "../features/catalog/ProductDetails";
import ContactPage from "../features/contact/ContactPage";
import LoginPage from "../features/login/LoginPage";
import RegisterPage from "../features/resgister/RegisterPage";
import CartPage from "../features/cart/CartPage";



export type Page = 'home' | 'catalog' | 'product' | 'contact' | 'login' | 'register' | 'cart';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    }
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  function navigateToPage(page: Page, productId?: number) {
    setCurrentPage(page);
    if (productId !== undefined) {
      setSelectedProductId(productId);
    }
    
    let newPath = '/';
    switch(page) {
      case 'catalog':
        newPath = '/catalog';
        break;
      case 'product':
        newPath = `/catalog/${productId}`;
        break;
      case 'contact':
        newPath = '/contact';
        break;
      case 'login':
        newPath = '/login';
        break;
      case 'register':
        newPath = '/register';
        break;
      case 'cart':
        newPath = '/cart';
        break;
    }
    window.history.pushState({}, '', newPath);
  }

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/contact') {
      setCurrentPage('contact');
    } else if (path === '/catalog') {
      setCurrentPage('catalog');
    } else if (path.startsWith('/catalog/')) {
      const id = parseInt(path.split('/')[2]);
      if (!isNaN(id)) {
        setCurrentPage('product');
        setSelectedProductId(id);
      }
    } else if (path === '/login') {
      setCurrentPage('login');
    } else if (path === '/register') {
      setCurrentPage('register');
    } else if (path === '/cart') {
      setCurrentPage('cart');
    } else if (path === '/') {
      setCurrentPage('home');
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/contact') {
        setCurrentPage('contact');
      } else if (path === '/catalog') {
        setCurrentPage('catalog');
      } else if (path.startsWith('/catalog/')) {
        const id = parseInt(path.split('/')[2]);
        if (!isNaN(id)) {
          setCurrentPage('product');
          setSelectedProductId(id);
        }
      } else if (path === '/login') {
        setCurrentPage('login');
      } else if (path === '/register') {
        setCurrentPage('register');
      } else if (path === '/cart') {
        setCurrentPage('cart');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateToPage} />;
      case 'catalog':
        return <Catalog onProductSelect={(id) => navigateToPage('product', id)} />;
      case 'product':
        return selectedProductId ? (
          <ProductDetails 
            productId={selectedProductId}
            onBack={() => navigateToPage('catalog')}
          />
        ) : (
          <Catalog onProductSelect={(id) => navigateToPage('product', id)} />
        );
      case 'contact':
        return <ContactPage />;
      case 'login':
        return <LoginPage />;
      case 'register':
        return <RegisterPage />;
      case 'cart':
        return <CartPage />;
      default:
        return <HomePage onNavigate={navigateToPage} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header 
        darkMode={darkMode}
        handleThemeChange={handleThemeChange}
        onNavigate={navigateToPage}
        currentPage={currentPage}
      />
      <Container>
        {renderPage()}
      </Container>
    </ThemeProvider>
  );
}

export default App;
*/}
import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'; // Add this import
import basketService from "../api/basketService"; // Add this import
import Catalog from "../features/catalog/Catalog";
import HomePage from "../features/home/HomePage";
import ProductDetails from "../features/catalog/ProductDetails";
import ContactPage from "../features/contact/ContactPage";
import LoginPage from "../features/login/LoginPage";
import RegisterPage from "../features/resgister/RegisterPage";
import CartPage from "../features/cart/CartPage";

export type Page = 'home' | 'catalog' | 'product' | 'contact' | 'login' | 'register' | 'cart';

function App() {
  const dispatch = useDispatch(); // Add this hook
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  // Add basket initialization effect
  useEffect(() => {
    basketService.initializeBasket(dispatch);
  }, [dispatch]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    }
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  function navigateToPage(page: Page, productId?: number) {
    setCurrentPage(page);
    if (productId !== undefined) {
      setSelectedProductId(productId);
    }
    
    let newPath = '/';
    switch(page) {
      case 'catalog':
        newPath = '/catalog';
        break;
      case 'product':
        newPath = `/catalog/${productId}`;
        break;
      case 'contact':
        newPath = '/contact';
        break;
      case 'login':
        newPath = '/login';
        break;
      case 'register':
        newPath = '/register';
        break;
      case 'cart':
        newPath = '/cart';
        break;
    }
    window.history.pushState({}, '', newPath);
  }

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/contact') {
      setCurrentPage('contact');
    } else if (path === '/catalog') {
      setCurrentPage('catalog');
    } else if (path.startsWith('/catalog/')) {
      const id = parseInt(path.split('/')[2]);
      if (!isNaN(id)) {
        setCurrentPage('product');
        setSelectedProductId(id);
      }
    } else if (path === '/login') {
      setCurrentPage('login');
    } else if (path === '/register') {
      setCurrentPage('register');
    } else if (path === '/cart') {
      setCurrentPage('cart');
    } else if (path === '/') {
      setCurrentPage('home');
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/contact') {
        setCurrentPage('contact');
      } else if (path === '/catalog') {
        setCurrentPage('catalog');
      } else if (path.startsWith('/catalog/')) {
        const id = parseInt(path.split('/')[2]);
        if (!isNaN(id)) {
          setCurrentPage('product');
          setSelectedProductId(id);
        }
      } else if (path === '/login') {
        setCurrentPage('login');
      } else if (path === '/register') {
        setCurrentPage('register');
      } else if (path === '/cart') {
        setCurrentPage('cart');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateToPage} />;
      case 'catalog':
        return <Catalog onProductSelect={(id) => navigateToPage('product', id)} />;
      case 'product':
        return selectedProductId ? (
          <ProductDetails 
            productId={selectedProductId}
            onBack={() => navigateToPage('catalog')}
          />
        ) : (
          <Catalog onProductSelect={(id) => navigateToPage('product', id)} />
        );
      case 'contact':
        return <ContactPage />;
      case 'login':
        return <LoginPage />;
      case 'register':
        return <RegisterPage />;
      case 'cart':
        return <CartPage />;
      default:
        return <HomePage onNavigate={navigateToPage} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header 
        darkMode={darkMode}
        handleThemeChange={handleThemeChange}
        onNavigate={navigateToPage}
        currentPage={currentPage}
      />
      <Container>
        {renderPage()}
      </Container>
    </ThemeProvider>
  );
}

export default App;