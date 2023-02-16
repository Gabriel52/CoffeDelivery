import { RouterProvider } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ProductsProvider } from './Provider'

import { router } from './routes'

function App() {

  return (
    <>
      <ProductsProvider>
        <Navbar />
        <RouterProvider router={router} />
      </ProductsProvider>
    </>
  )
}

export default App
