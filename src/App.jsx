import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Home />
        </>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App
