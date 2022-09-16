import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { BagProvider } from './contexts/BagContext';
import { AuthProvider } from './contexts/AuthContext';
import { ProductsProvider } from './contexts/ProductsContext';
import { FavoritesProvider } from './contexts/FavoritesContext';

import App from './App';
import { ToastContainer } from 'react-toastify';

import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <FavoritesProvider>
            <BagProvider>
              <App />
              <ToastContainer />
            </BagProvider>
          </FavoritesProvider>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
