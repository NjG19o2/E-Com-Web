import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Contactus from "./components/Contactus";
import ElectronicsLink from "./components/ElectronicsLink";
import GamingAccessoriesLink from "./components/GamingAccessoriesLink";
import WatchesLink from "./components/WatchesLink";
import VideoGamesLink from "./components/VideoGamesLink";
import GroceryLink from "./components/GroceryLink";
import FashionLink from "./components/FashionLink";
import HomeKitchenLink from "./components/HomeKitchenLink";
import PCsLink from "./components/PCsLink";
import ItemState from "./context/items/ItemState";

import AlertState from "./context/items/AlertState";
import Alert from "./components/Alert";
import Order from "./components/sidebarComponents/Order";
import Wishlist from "./components/sidebarComponents/Wishlist";
import Coupons from "./components/sidebarComponents/Coupons";
import Notification from "./components/sidebarComponents/Notifications";
import HelpCenter from "./components/sidebarComponents/HelpCenter";
import Cart from "./components/sidebarComponents/Cart";
import ProductProvider from './context/items/ProductProvider';

function App() {
  return (
    <>
      <ItemState>
        <AlertState>
        <ProductProvider>
          
          <BrowserRouter>
            <Navbar />
            <Alert />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contactus />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />

              <Route
                exact
                path="/electronicslink"
                element={<ElectronicsLink />}
              />
              <Route
                exact
                path="/gamingAccessorieslink"
                element={<GamingAccessoriesLink />}
              />
              <Route exact path="/watcheslink" element={<WatchesLink />} />
              <Route
                exact
                path="/videoGameslink"
                element={<VideoGamesLink />}
              />
              <Route exact path="/grocerylink" element={<GroceryLink />} />
              <Route exact path="/fashionlink" element={<FashionLink />} />
              <Route
                exact
                path="/homeKitchenlink"
                element={<HomeKitchenLink />}
              />
              <Route exact path="/pcslink" element={<PCsLink />} />
              <Route exact path="/orders" element={<Order />} />
              <Route exact path="/wishlist" element={<Wishlist />} />
              <Route exact path="/coupons" element={<Coupons />} />
              <Route exact path="/notifications" element={<Notification />} />
              <Route exact path="/helpcenter" element={<HelpCenter />} />
              <Route exact path="/cart" element={<Cart/>} />
            </Routes>

            <Footer />
          </BrowserRouter>
         
          </ProductProvider>
        </AlertState>
      </ItemState>
    </>
  );
}

export default App;
