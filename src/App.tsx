import { RouterProvider } from 'react-router-dom';
import {  ToastContainer } from 'react-toastify';

import { Navbar } from './components/Navbar';
import { ProductsProvider } from './Provider';
import "react-toastify/dist/ReactToastify.css";

import { router } from './routes';

function App() {
  return (
    <>
      <ProductsProvider>
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <RouterProvider router={router} />
      </ProductsProvider>
    </>
  );
}

export default App;
