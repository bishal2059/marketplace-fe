import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProductPage from "./pages/ProductPage";
import FavouritePage from "./pages/FavouritePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import HistoryPage from "./pages/HistoryPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/favourite" element={<FavouritePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
