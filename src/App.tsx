import { RouterProvider } from 'react-router-dom'
import { Navbar } from './components/Navbar'

import { router } from './routes'

function App() {

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
