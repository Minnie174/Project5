import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from '../pages/auth-pages/RegistrationPage';
import LoginPage from '../pages/auth-pages/LoginPage';
import Header from '../components/header/Header';
import ItemPage from '../pages/item-page/ItemPage';
import Footer from '../components/footer/Footer';
import UserPage from '../pages/user-page/UserPage';
import MainPage from '../pages/main-page/MainPage';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/items/:slug" element={<ItemPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/sign-in" element={<LoginPage />} />
      <Route path="users/:id/*" element={<UserPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
