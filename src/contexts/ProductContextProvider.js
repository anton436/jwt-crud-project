import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 6),
      };
    default:
      return state;
  }
}

const API = 'http://34.173.115.25/api/v1';

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      console.log(window);
      const res = await axios.get(
        `${API}/products/${window.location.search}`,
        config
      );

      dispatch({ type: 'GET_PRODUCTS', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const values = { getProducts, products: state.products, pages: state.pages };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
