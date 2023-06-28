import React , {useContext} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartProvider from "./store/CartProvider";
import { Route,Switch,Redirect } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Store from "./components/Store";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import AuthContext from "./store/auth-context";

function App() {
  const loginCtx = useContext(AuthContext);
  return (
    <CartProvider>
      <Header /> 

      <main>
        <Switch>
        <Route path="/" exact>
          {!loginCtx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route path="/store/:productID">
          <ProductDetails  />
        </Route>
       {loginCtx.isLoggedIn && <Route path="/store">
          <Store />
        </Route>}
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        </Switch>
      </main>

      <Footer />
    </CartProvider>
  );
}

export default App;
