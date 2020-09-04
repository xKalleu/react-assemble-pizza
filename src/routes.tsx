import React, { useReducer, useEffect, Dispatch } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Crust from './pages/Crust'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Topping from './pages/Topping'
import CustomPizza from './pages/CustomPizza'

const initialState = {
  size: [],
  crusts: undefined,
  value: undefined,
  toppings: []
}

export interface IStateTypes {
  size?: any;
  crusts?: string;
  value?: number;
  toppings: any;
}

export type TPizzaAction =
  | { type: 'SET_SIZE'; sizeId: any }
  | { type: 'SET_CRUST'; crustStr: string; }
  | { type: 'SET_VALUE'; value: number; }
  | { type: 'TOGGLE_TOPPINGS'; toppings: any; }

export type PizzaDispatch = Dispatch<TPizzaAction>;

function reducer(state: IStateTypes, action: TPizzaAction): IStateTypes {
  switch (action.type) {
    case 'SET_SIZE':
      return {
        ...state,
        size: [action.sizeId]
      };

    case 'SET_CRUST':
      return {
        ...state,
        crusts: action.crustStr
      };

    case 'SET_VALUE':
      return {
        ...state,
        value: action.value
      };

    case 'TOGGLE_TOPPINGS':
      const hasItem = state.toppings.includes(action.toppings)
      if (hasItem) {
        return {
          ...state,
          toppings: state.toppings.filter((topping: any) => topping !== action.toppings)
        };
      }
      return {
        ...state,
        toppings: [...state.toppings, action.toppings]
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
          <Route path="/" element={<Home stepsDispatch={dispatch} state={state} />} />
          <Route path="crusts" element={<Crust stepsDispatch={dispatch} state={state} />} />
          <Route path="toppings" element={<Topping stepsDispatch={dispatch} state={state} />} />
          <Route path="custom-pizza" element={<CustomPizza state={state} />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
