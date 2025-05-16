import { NavLink } from "react-router";
import { getProducts } from "../../api/routes/products";
import { useDataFetch } from "../../hooks/useDataFetch";
import ThemeSwitcher from "../../components/ThemeSwitcher";

function Products() {
  const { data, loading, error } = useDataFetch(getProducts);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    //early return method of error
    return <div>Something went wrong</div>;
  }
  console.log("Products data:", data);

  const dataToRender = data.map((product) => {
    return (
      <NavLink to={"/products/" + product.id}>
        <div className="border border-slate-200 m-2 p-2 max-w-[500px] hover:cursor-pointer hover:shadow-lg">
          {product.title}
        </div>
      </NavLink>
    );
  });

  return (
    <div>
      <ThemeSwitcher />
      {dataToRender}{" "}
    </div>
  );
}

export default Products;
