import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar} from "./components/navbar";
import {Cart} from './pages/cart/cart.jsx';
import {Shop} from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <div>welcome! click on shop</div>
      <ShopContextProvider>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/react-Ecommerce-site" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
