import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import "./App.scss";
import Footer from "./components/footer/Footer";
import NewNavbar from "./components/navbar/NewNavbar";
import NewMain from "./components/newMain/NewMain";
import SelectedCategory from "./components/selectedCategory/SelectedCategory";
import ProductDetails from "./components/main/productdetails/ProductDetails";
import NewMens from "./components/category/mens/NewMens";
import Womens from "./components/category/womens/Womens";
import NewJewelery from "./components/category/jewelery/NewJewelery";
import NewElectronics from "./components/category/electronics/NewElectronics";
import Login from "./pages/login/Login"
import About from "./pages/about/About"
import Signin from "./pages/signin/Signin"
import ContactUs from "./pages/contactus/ContactUs";
import Complaints from "./pages/complaints/Complaints";
import TypeWriter from "./components/typewriter/TypeWriter";
import Video from "./components/video/Video";


// JUST CHECKING 

function App() {

  return (
    <>
      <NewNavbar />
      <SelectedCategory />
      <TypeWriter />

      <Switch>
        <Route exact path="/">
          {<NewMain />}
        </Route>
        <Route exact path="/mens">
          {<NewMens />}
        </Route>
        <Route exact path="/womens">
          {<Womens />}
        </Route>
        <Route exact path="/jewelery">
          {<NewJewelery />}
        </Route>
        <Route exact path="/electronics">
          {<NewElectronics />}
        </Route>
        <Route exact path="/productdetail/:id">
          {<ProductDetails />}
        </Route>
        <Route exact path="/about">
          {<About />}
        </Route>
        <Route exact path="/signin">
          {<Signin />}
        </Route>
        <Route exact path="/login">
          {<Login />}
        </Route>
        <Route exact path="/contactus">
          {<ContactUs />}
        </Route>
        <Route exact path="/complaints">
          {<Complaints />}
        </Route>
      </Switch>

      <Video />
      <Footer />
    </>
  );
}

export default App;
