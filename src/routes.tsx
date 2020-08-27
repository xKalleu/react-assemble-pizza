import React, { useReducer, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Crust from './pages/Crust'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Topping from './pages/Topping'

const initialState = {
  size: null,
  crusts: null,
  toppings: []
}

export interface ActionType {
  type: string;
  payload: any;
}

interface StateTypes {
  size: any;
  crusts: any;
  toppings: Array<number>;
}

function reducer(state: StateTypes, action: ActionType) {
  switch (action.type) {
    case 'SET_SIZE':
      return {
        ...state,
        size: action.payload
      };

    case 'SET_CRUST':
      return {
        ...state,
        crusts: action.payload
      };

    case 'TOGGLE_TOPPINGS':
      return {
        ...state,
        toppings: [...state.toppings, action.payload]
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home stepsDispatch={dispatch} />} />
          <Route path="crusts" element={<Crust stepsDispatch={dispatch} />} />
          <Route path="toppings" element={<Topping stepsDispatch={dispatch} />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
