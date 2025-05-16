import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleProduct } from "../../../api/routes/products";

function ProductInnerPage() {
  const params = useParams();
  const id = params.id;
  const [productData, setProductData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchProduct() {
    try {
      setLoading(true);
      const data = await getSingleProduct(id);
      setProductData(data.data);
      if (!data.data) {
        setError("something went wrong");
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) return <div> loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div>
      <img src={productData?.image} height={100} width={100} alt="" />
      <h1> {productData?.title}</h1>
      <h2>{productData?.category}</h2>
      <p>{productData?.description}</p>
    </div>
  );
}

export default ProductInnerPage;
