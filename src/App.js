import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import "./App.scss";
import Womens from "./components/category/womens/Womens";
import Electronics from "./components/category/electronics/Electronics";
import Jewelery from "./components/category/jewelery/Jewelery";
import Mens from "./components/category/mens/Mens";
import Heading from "./components/heading/Heading";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import ProductDetails from "./components/main/productdetails/ProductDetails";

function App() {
  return (
    <>
      <Heading />
      <Navbar />
      <Switch>
        <Route exact path="/fakeStore">
          {<Main />}
        </Route>
        <Route exact path="/mens">
          {<Mens />}
        </Route>
        <Route exact path="/jewelery">
          {<Jewelery />}
        </Route>
        <Route exact path="/electronics">
          {<Electronics />}
        </Route>
        <Route exact path="/womens">
          {<Womens />}
        </Route>
        <Route exact path="/productdetail/:id">
          {<ProductDetails />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
