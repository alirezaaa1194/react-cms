import Content from "./components/Content";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import NewUser from "./pages/NewUser";
import Users from "./pages/Users";

const routes = [
  {
    path: "react-cms/*",
    element: <h1 className="text-red-600 text-center mt-24 text-4xl font-bold">404 Not Found</h1>,
  },
  {
    path: "react-cms/home",
    element: <Home />,
  },

  {
    path: "react-cms/users",
    element: <Users />,
  },
  {
    path: "react-cms/products",
    element: <Products />,
  },
  {
    path: "react-cms/product/:productId",
    element: <Product />,
  },
  {
    path: "react-cms/NewUser",
    element: <NewUser />,
  },
];
export default routes;
