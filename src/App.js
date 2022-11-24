import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import AppContextProvider from './context/AppContext';


const router = createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '/about', element: <About/>},
]);

function App() {
  return <AppContextProvider>
    <RouterProvider router={router}/>
  </AppContextProvider>
}

export default App;
