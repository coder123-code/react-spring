
// Routes.tsx - Current incorrect import
// Remove this line


// Change to:
//import ContactPage from "../features/contact/ContactPage";

// Routes.tsx

{/*import { createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';
import HomePage from '../features/home/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />
      }
    ]
  }
]);

export { router };
*/}

//import {Navigate, createBrowserRouter } from "react-router-dom";
//import Catalog from "../features/catalog/Catalog";
import HomePage from "../features/home/HomePage";
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
