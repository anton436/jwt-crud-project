import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContextProvider';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { handleRegister } = useAuth();

  function handleSave(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert('заполните все поля');
    } else {
      let formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('password_confirm', passwordConfirm);
      handleRegister(formData);
    }
  }

  return (
    <div>
      <h1>Register</h1>

      <form action='submit' onSubmit={handleSave}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='email'
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='password'
        />
        <input
          onChange={(e) => setPasswordConfirm(e.target.value)}
          type='password'
          placeholder='confirm password'
        />
        <button>register</button>
      </form>
    </div>
  );
};

export default Register;
