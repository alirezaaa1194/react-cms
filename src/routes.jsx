import Content from "./components/Content";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import NewUser from "./pages/NewUser";
import Users from "./pages/Users";
const routes = [
  {
    path: "/*",
    element: <Content />,
    children: [
      {
        path: "*",
        element: <h1 className="text-red-600 text-center mt-24 text-4xl font-bold">404 Not Found</h1>,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:productId",
        element: <Product />,
      },
      {
        path: "NewUser",
        element: <NewUser />,
      },
    ],
  },
];

export default routes;
