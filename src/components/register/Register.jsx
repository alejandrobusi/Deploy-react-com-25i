import React, { useState } from 'react';
import { alertSuccess, alertError } from '../../utils/alertCustom';
import { messages } from '../../utils/configs';
import { endPoints } from '../../utils/configs';
import clientAxios from '../../utils/clientAxios';


const Register = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    lastName: '',
    age: '',
  });

  const validationsFields = {
    user: /^[a-zA-Z0-9_-]{4,16}$/,
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!validationsFields.email.test(userData.email)) {
      alertError('Email incorrecto', 'Error', () => {console.log('test')});
      return;
    }
    if(!validationsFields.password.test(userData.password)) {
      alertError('Password invalido', 'Error', () => {console.log('test')});
      return;
    }
    if (userData.password !== userData.passwordCheck) {
      alertError('Las contraseñas no coinciden', 'Error', () => {console.log('test')});
      return;
    }
    if(!validationsFields.name.test(userData.name)) {
      alertError('Usuario invalido', 'Error', () => {console.log('test')});
      return;
    }
    try {
      const { data } = await clientAxios.post(`${endPoints.register}/create-user`, userData);
      alertSuccess(messages.logSuccess, data, () => {window.location.href = 'http://localhost:3000/home'});
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
              <label htmlFor="name" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="name" name='name' onChange={handleChange}/>
              <label htmlFor="lastName" className="form-label">Apellido</label>
              <input type="text" className="form-control" id="lastName" name='lastName' onChange={handleChange}/>
              <label htmlFor="age" className="form-label">Edad</label>
              <input type="number" className="form-control" id="age" name='age' onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="exampleInputPassword1" name='password'
              onChange={handleChange}/>
              <label htmlFor="exampleInputPassword2" className="form-label">Repita la contraseña</label>
              <input type="password" className="form-control" id="exampleInputPassword2" name='passwordCheck'onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
