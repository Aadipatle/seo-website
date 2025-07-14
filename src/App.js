import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/header/Header';
import Home from './pages/home/Home';
import { lazy, Suspense } from 'react';

function App() {
  const HomePage = lazy(()=>import('./pages/home/Home'))
  return (
    <>
  <BrowserRouter basename="/seo-website">
 
  <Routes>
  
    <Route path='/' element={<Suspense fallback={<h1>Loading...</h1>} > <HomePage/>    </Suspense>} />
 
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
