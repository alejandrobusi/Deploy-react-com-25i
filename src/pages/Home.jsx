import React from 'react';
import Main from '../components/main/Main';
import { endPoints } from '../utils/configs';
import clientAxios from '../utils/clientAxios';

const Home = () => {
  const getUsers = async () => {
    try {
      const resp = await clientAxios.get(endPoints.getAllUsers);
      console.log(resp);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    // <Main //
    <div>
      <h1>Este es el home</h1>
      <button className='btn btn-primary' onClick={() => getUsers()}>Obtener usuarios</button>
    </div>
  )
}

export default Home;
