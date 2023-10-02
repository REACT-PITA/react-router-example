import { NavLink } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1>Products Page</h1>
      <br />

      <p>Example for sub-routes :</p>
      <br />
      <NavLink style={{ textDecoration: "underline" }} to={"/Products/Details/5"}>
        Product with id : 5
      </NavLink>
    </>
  );
};

export default Products;
