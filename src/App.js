import { Routes, Route } from 'react-router-dom';

import Navigation from './pages/Navigation';
import Home from './pages/Home';
import Authentication from './pages/Auth';
import Shop from './pages/Shop';
import Bag from './pages/Bag';
import ProductDetails from './pages/Product/ProductDetails';
import Favorites from './pages/Favorites/Favorites';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='products/:id' element={<ProductDetails />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='bag' element={<Bag />} />
        <Route path='favorites' element={<Favorites />} />
      </Route>
    </Routes>
  );
};

export default App;
