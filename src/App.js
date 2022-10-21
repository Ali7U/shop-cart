import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import data from "./data";
import Main from "./components/Main";
import ShpCart from "./components/ShpCart";

function App() {
  const { products } = data;
  const [cart, setCart] = useState([]);

  const onAdd = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };
    const onRem = (product) => {
      const exist = cart.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        setCart(cart.filter((x) => x.id === product.id - 1));
      } else {
        setCart(
          cart.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };
  return (
    <div className="App">
      <Nav countCart={cart.length}/>
      <div className="block">
        <Main products={products} onAdd={onAdd} onRem={onRem}/>
        <ShpCart cart={cart} onAdd={onAdd} onRem={onRem}/>
      </div>
    </div>
  );
}

export default App;
