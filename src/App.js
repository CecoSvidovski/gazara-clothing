import { Routes, Route } from 'react-router-dom';

import Navigation from './pages/Navigation';
import Home from './pages/Home';
import SignIn from './pages/User/SignIn';

const Shop = () => <h1>I am the shop page</h1>;

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
