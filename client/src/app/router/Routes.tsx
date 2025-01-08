
// Routes.tsx - Current incorrect import
// Remove this line




{/*import { createBrowserRouter } from "react-router-dom";
import Catalog from "../features/catalog/Catalog";
import ProductDetails from "../features/catalog/ProductDetails";
import HomePage from "../features/home/HomePage";
import App from "../layout/App";
import ContactPage from "../features/contact/ContactPage";


// Change to:
//import ContactPage from "../features/contact/ContactPage";

// Routes.tsx



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {index: true, element: <HomePage/>},  // Changed this line
            {path:'store', element:<Catalog/>},
            {path:'store/:id', element: <ProductDetails/>},
            {path:'contact', element: <ContactPage/>}
        ]
    }
]);
*/}


//import {Navigate, createBrowserRouter } from "react-router-dom";
//import Catalog from "../features/catalog/Catalog";
{/*import HomePage from "../features/home/HomePage";
import App from "../layout/App";

import Catalog from "../features/catalog/Catalog";
import ProductDetails from "../features/catalog/ProductDetails";
import ContactPage from "../features/contact/ContactPage";
import { createBrowserRouter } from "react-router-dom";
//import ProductDetails from "../features/catalog/ProductDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path:'', element: <HomePage/>},
            {path:'store', element:<Catalog/>},
            {path:'store/:id', element: <ProductDetails/>},
            {path:'contact', element: <ContactPage/>}
        ]
    }
]);
*/}
{/*import { Routes, Route, RouteProps } from "react-router-dom";
import Catalog from "../features/catalog/Catalog";
import ProductDetails from "../features/catalog/ProductDetails";
import HomePage from "../features/home/HomePage";

export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}
*/}
//trial
// app/router/Routes.tsx
// app/router/Routes.tsx
// Routes.tsx
/*import { Routes, Route } from 'react-router-dom';
import HomePage from "../features/home/HomePage";
import App from "../layout/App";
import Catalog from "../features/catalog/Catalog";
import ProductDetails from "../features/catalog/ProductDetails";
import ContactPage from "../features/contact/ContactPage";

export const router = (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="store" element={<Catalog />} />
      <Route path="store/:id" element={<ProductDetails />} />
      <Route path="contact" element={<ContactPage />} />
    </Route>
  </Routes>
);
*/