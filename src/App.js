import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/products", element: <Product /> },
// ]);

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />}></Route>
    <Route path="/products" element={<Product />}></Route>
  </Route>
);
const router = createBrowserRouter(routeDefinitions)
function App() {
  return <RouterProvider router={router} />;
}

export default App;
