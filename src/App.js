import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Root from "./pages/Root";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Product /> },
    ],
  },
]);

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />}></Route>
//     <Route path="/products" element={<Product />}></Route>
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions)
function App() {
  return <RouterProvider router={router} />;
}

export default App;
