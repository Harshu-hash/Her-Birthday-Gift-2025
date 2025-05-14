import Home from './components/Home'
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Timeline from './components/Timeline';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar />
        <Home />
        </>
    },
    {
      path: "/timeline",
      element: <>
        <Navbar />
        <Timeline />
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
