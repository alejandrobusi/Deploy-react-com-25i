import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';


const Test = () => {


  const getData = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/obtener-saludo')
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataById = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/obtener-saludo-por-id/32')
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const createData = async () => {
    const userData = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
    try {
      const { data } = await axios.post('http://localhost:8080/crear-saludo', userData)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button className='btn btn-success' onClick={() => getData()}>GET</button>
      <button className='btn btn-success' onClick={() => getDataById()}>GET BY ID</button>
      <button className='btn btn-success' onClick={() => createData()}>POST</button>
    </div>
  )
}

export default Test;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Test />  */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

