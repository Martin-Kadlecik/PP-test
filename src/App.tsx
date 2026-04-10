import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import ServicePage from './pages/ServicePage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import ShowroomPage from './pages/ShowroomPage';
import CollectionPage from './pages/CollectionPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ServicePage />} />
          <Route path="sluzba" element={<ServicePage />} />
          <Route path="produkt" element={<ProductPage />} />
          <Route path="produkt/thermofix-pro-wood" element={<CollectionPage />} />
          <Route path="kontakt" element={<ContactPage />} />
          <Route path="showroom" element={<ShowroomPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
