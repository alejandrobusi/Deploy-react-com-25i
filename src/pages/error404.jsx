import React from 'react';
import { useNavigate } from 'react-router-dom';

function Error404() {
  const navigate = useNavigate();

  return (
    <div className='text-center'>
      <h1>404</h1>
      <h4>Es posible que el recurso no este disponible o no tengas los permisos necesarios.</h4>
      <button className='btn btn-danger' onClick={() => navigate('/home')}>Volver a home</button>
    </div>
  )
}

export default Error404;