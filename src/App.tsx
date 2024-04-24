import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Home, DashBoardLayout, About } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <Error />,
    // action: loginAction(store),
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        // element: <Games />,
        // errorElement: <ErrorElement />,
        // loader: landingLoader(queryClient),
      },
      {
        path: "games/:id",
        // element: <SingleGame />,
        // errorElement: <ErrorElement />,
        // loader: singleProductLoader(queryClient),
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
    // errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Navigate to="/" />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
