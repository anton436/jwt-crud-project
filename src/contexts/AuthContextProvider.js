import axios from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = 'http://34.173.115.25/api/v1';
export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    setLoading(true);

    try {
      const res = await axios.post(`${API}/account/register/`, formData);
      // console.log(res);
      navigate('/register-success');
    } catch (error) {
      setError(Object.values(error.response.data).flat(2));
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (formData, email) => {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/account/login/`, formData);
      localStorage.setItem('tokens', JSON.stringify(res.data));
      localStorage.setItem('email', email);
      setUser(email);
      navigate('/');
    } catch (error) {
      setError(error.response.data.detail);
    } finally {
      setLoading(false);
    }
  };

  const values = { handleRegister, handleLogin, error, user };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
