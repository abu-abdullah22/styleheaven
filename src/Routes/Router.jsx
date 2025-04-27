import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import Details from "../Pages/Details";
const router = createBrowserRouter([
{
  path: '/',
  element: <Main />,
},
{
  path: '/:id',
  element: <Details />,
}
]);

export default router ;