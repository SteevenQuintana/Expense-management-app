import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const starEditingHandler = () => {
    setIsEditing(true);
  };
  const cancelEditingHandler = () => {
    setIsEditing(false);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="onsubmit" onClick={starEditingHandler}>
          Add New expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelEditing={cancelEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
