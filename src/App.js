import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';
import Error404 from './pages/error404';
import Home from './pages/Home';
import ProdDetail from './pages/ProdDetail';
import Login from './components/login/Login';

function App() {
  const isLog = true;
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/home' element={ <Home />}/>
          <Route path='/prod/:id' element={ isLog ? <ProdDetail /> : <Error404 />} />
          <Route path='*' element={ <Home />}/>
          <Route path='/register' element={ <Register />} />
          <Route path='/login' element={ <Login />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
