import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import ProductList from "./Pages/ProductsList/ProductList";
import Product from "./Pages/Product/Product";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <>
      <Switch style={{ padding: 0 }}>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={SignUp} />
        <Route path="/product" component={Product} />
        <Route path="/category" component={ProductList} />
      </Switch>
    </>
  );
}

export default App;
