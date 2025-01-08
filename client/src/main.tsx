{/*import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './app/layout/index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/Routes';
*/}

{/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



import './app/layout/index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/Routes.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
  */}
  

{/*import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import '@fontsource/roboto/300.css';
  import '@fontsource/roboto/400.css';
  import '@fontsource/roboto/500.css';
  import '@fontsource/roboto/700.css';
  
  
  
  import './app/layout/index.css'
  import { RouterProvider } from 'react-router-dom';
  import { router } from './app/router/Routes.tsx';
  
  
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
       <RouterProvider router={router} />
    </StrictMode>,
  )
    */}

{/*import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/layout/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/}
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/layout/App';

import { Provider } from 'react-redux';
import { store } from './app/store/configureStors';

ReactDOM.createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
   <Provider store={store}>
     <App />
   </Provider>
 </React.StrictMode>
);

{/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './app/layout/index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './app/layout/App';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
  */}
 {/* import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './app/layout/index.css';
import App from './app/layout/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
*/}
//trial
// index.tsx
{/*import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './app/layout/index.css';

import { Routing } from './app/router/Routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routing />
  </StrictMode>
);
*/}
