import './App.css';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { Home, DashBoardLayout, About, Error } from './pages';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import store from './store';

// actions
import { loginAction } from './pages/actions/loginAction';

// loader
import { dashBoardLoader } from './pages/loaders/dashBoardLoader';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    action: loginAction,
  },
  {
    path: '/dashboard',
    element: <DashBoardLayout />,
    // errorElement: <Error />,
    loader: dashBoardLoader(store.getState().user.user),
    children: [
      {
        index: true,
        // element: <Games />,
        // errorElement: <ErrorElement />,
        // loader: landingLoader(queryClient),
      },
      {
        path: 'games/:id',
        // element: <SingleGame />,
        // errorElement: <ErrorElement />,
        // loader: singleProductLoader(queryClient),
      },
    ],
  },
  {
    path: '/about',
    element: <About />,
    // errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Navigate to="/" />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
