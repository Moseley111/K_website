import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Layout } from './comp/Layout';
import { Page404 } from './pages/Page404';
import { RndColour } from './serv/RndColour';

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      errorElement: <Page404 />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        // other pages....
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ])
  return (
    <div className="App">
      <RndColour/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
