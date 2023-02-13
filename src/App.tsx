import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

function App() {

  return (
    <>
      <h2>Nav bar</h2>
      <RouterProvider router={router} />
    </>
  )
}

export default App
