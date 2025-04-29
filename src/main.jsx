import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Product from "./components/Product/Product.jsx";
import Help from "./components/Help/Help.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import Offer from "./components/Offer/Offer.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/help" element={<Help />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/offer" element={<Offer />} />
      <Route path="/about" element={<About />} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
