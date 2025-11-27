import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Page404 from './components/Page404';
import routes from './utils/routes';
import ParticlesBG from './components/Particles';

const router = createBrowserRouter([
  {
    element : <Layout />,
    errorElement : <Page404 />,
    children : routes
  }
]);

function App() {
  return (
    <div className="main">
        <RouterProvider router={router} />
        <ParticlesBG />
    </div>
  );
}

export default App;
