import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

//We can improve this.
const initialState = JSON.parse(localStorage.getItem('transactions')) || [];
export const AuditAssistantContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

  return (
    <AuditAssistantContext.Provider value={{
      transactions,
      balance,
      deleteTransaction,
      addTransaction,
    }}
    >
      {children}
    </AuditAssistantContext.Provider>
  );
};
