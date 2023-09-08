import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './Components/Budget';
import Remaining from './Components/Remaining';
import Expense from './Components/Expense';
import Expenselist from './Components/Expenselist';
import AddExpenseform from './AddExpenseform'; 
import { AppProvider } from './AppContext';

const App =()=>{
   return (
    <AppProvider>
         <div className='container'>
    <h1 className ='mt-3'> My Budget Planner </h1>
    <div className='row mt-3'>
      <div className='col-sm'>
        <Budget />
      </div>
      <div className='col-sm'>
        <Remaining />
      </div>
      <div className='col-sm'>
        <Expense />
      </div>
    </div>
    <h3 className = 'mt-3'>Total Expenditure</h3>
    <div className='row mt-3'>
      <div className='col-sm'>
        <Expenselist />
      </div>
      </div>
      <h3 className = 'mt-3'>Add Expense</h3>
      <div className='mt-3'>
      <div className='col-sm'>
        <AddExpenseform />
      </div>
      </div>
     
   </div>

    </AppProvider>

   );
};
export default App;