import React,{ useContext } from 'react';
import Expenseitem from './Expenseitem';
import { AppContext } from '../AppContext';

const Expenselist = () => {
  const {expenses}=useContext(AppContext);
   

  return (
    <ul className='list-group'>
      {expenses.map((expense) => (
        <Expenseitem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default Expenselist;
