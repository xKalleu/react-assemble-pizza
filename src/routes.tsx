import React, { useReducer, useEffect, Dispatch } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Crust from './pages/Crust'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Topping from './pages/Topping'

const initialState = {
  size: undefined,
  crusts: undefined,
  value: undefined,
  toppings: []
}

export interface ActionType {
  type: string;
  payload: any;
}

export interface StateTypes {
  size?: number;
  crusts?: number;
  value?: number;
  toppings: number[];
}

export type PizzaAction =
  | { type: 'SET_SIZE'; sizeId: number; }
  | { type: 'SET_CRUST'; crustId: number; }
  | { type: 'SET_VALUE'; value: number; }
  | { type: 'TOGGLE_TOPPINGS'; toppings: number[]; }

export type PizzaDispatch = Dispatch<PizzaAction>;

function reducer(state: StateTypes, action: PizzaAction): StateTypes {
  switch (action.type) {
    case 'SET_SIZE':
      return {
        ...state,
        size: action.sizeId
      };

    case 'SET_CRUST':
      return {
        ...state,
        crusts: action.crustId
      };

    case 'SET_VALUE':
      return {
        ...state,
        value: action.value + action.value
      };

    // case 'TOGGLE_TOPPINGS':
    //   return {
    //     ...state,
    //     toppings: [...state.toppings, action.toppings]
    //   };

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
          <Route path="/" element={<Home stepsDispatch={dispatch} state={state} />} />
          <Route path="crusts" element={<Crust stepsDispatch={dispatch} state={state} />} />
          <Route path="toppings" element={<Topping stepsDispatch={dispatch} state={state} />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
