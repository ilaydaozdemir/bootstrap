import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "react-use-cart";

import "./App.css";
import Cart from "./components/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
