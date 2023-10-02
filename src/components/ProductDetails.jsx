import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Product Details Page</h1>
      <h1>with id : {id}</h1>
    </>
  );
};

export default ProductDetails;
