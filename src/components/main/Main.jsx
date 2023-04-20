import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../card/Card';
import { endPoints, messages } from '../../utils/configs';
import { useNavigate } from 'react-router-dom';
import Loader from '../loader/Loader';
import Swal from 'sweetalert2';

const Main = () => {
  const [products, setProducts] = useState([]);
  const URL_BASE = process.env.REACT_APP_URL_BASE;
  const navigate = useNavigate();

  useEffect(() => {
   getData()
  }, [])
  
  const getData = async () => {
    try {
      const { data } = await axios.get(`${URL_BASE}${endPoints.products}`);
      setProducts(data);
    } catch (error) {
      alert(messages.failGetProducts)
      Swal.fire({
        title: messages.failGetProducts,
        confirmButtonText: 'Ok',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/');
        }
      })
    }
  }

  return (
    <div className='container'>
      <h1 className='text-center'>Bienvenidos a Software Store</h1>
      <div className='row mt-4 justify-content-center'>
        {
          products.length >= 1
          ?
          products.map((prod) => <Card key={prod.id} prod={prod}/>)
          :
          <Loader />
        }
      </div>
    </div>
  )
}

export default Main
