import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import NotFound from "../shared/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;