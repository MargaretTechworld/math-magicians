import React from 'react';
import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import './App.css';
import RootLayout from './routes/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
    </Route>,
  ),
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
