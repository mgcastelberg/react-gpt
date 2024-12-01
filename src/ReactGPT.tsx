
import { RouterProvider } from 'react-router-dom'
import { router } from './presentation/router/router'

export const ReactGPT = () => {
  return (
    // <h1 className="text-3xl font-bold underline">ReactGPT</h1>
    <RouterProvider router={ router } />
  )
}
