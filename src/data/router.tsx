import LoginPage from '../pages/login';
import { createBrowserRouter } from "react-router-dom";
import Homepage from '../pages/homepage';
import DefaultLayout from '../layout/default';
import DashboardPage from '../pages/dashboard';


const routerConfig = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,

  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/db",
        element: <DashboardPage />,
      },
    ],

  },
]);

export default routerConfig;