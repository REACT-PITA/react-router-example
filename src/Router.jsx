import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from './App'
import Layout from "./Layout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<App />} />
    </Route>
  )
);

export default router;
