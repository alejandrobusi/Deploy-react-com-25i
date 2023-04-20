import React, { useState, useEffect } from 'react';
import { alertSuccess, alertError } from '../../utils/alertCustom';
import { messages } from '../../utils/configs';
import { endPoints } from '../../utils/configs';
import clientAxios from '../../utils/clientAxios';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await clientAxios.post(`${endPoints.login}`, userData);
      console.log(data);
      localStorage.setItem('token', data?.token);
      // alertSuccess(messages.logSuccess, data, () => {window.location.href = 'http://localhost:3000/home'});
    } catch (err) {
      alertError(`${err.response.data.errors[0].msg}`, 'Error', () => {console.log(err)});
    }
  };

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-8'>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="exampleInputPassword1" name='password'
              onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
