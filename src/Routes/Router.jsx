import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Details from "../Pages/Details";
import Cart from "../Pages/Cart";
const router = createBrowserRouter([
{
  path: '/',
  element: <Main />,
},
{
  path: '/:id',
  element: <Details />,
},
{
  path: '/cart',
  element: <Cart />
}
]);

export default router ;