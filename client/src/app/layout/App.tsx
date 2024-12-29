{/*import { Container, CssBaseline } from "@mui/material";
import Catalog from "../features/catalog/Catalog";
import Header from "./Header";

function App() {

 return (
   <>
     <CssBaseline />
     <Header />
     <Container>
       <Outlet />
     </Container>
   </>
 );
}

export default App;
*/}


{/* theme */}
 import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
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


// Import your Store component

// The Home component (you can customize this as needed)





