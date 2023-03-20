import React from 'react';
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    function onSaveExpenseHandler(enteredExpense) {
        const expenseData = {
            ...enteredExpense,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={onSaveExpenseHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;