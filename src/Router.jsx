import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout";
import App from "./App";
import About from "./components/About";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<App />} />
      <Route path="About" element={<About />} />
      <Route path="Products">
        <Route index element={<Products />} />
        <Route path="Details/:id" element={<ProductDetails />} />
      </Route>
    </Route>
  )
);

export default router;
