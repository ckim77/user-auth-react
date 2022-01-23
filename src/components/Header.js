import React from 'react';

function Header({totalExpense}) {
  return <header className="expense-header">
      <h1 className="expense-title">Expense Tracker</h1>
      <div className="total-expense">${totalExpense}</div>
  </header>;
}

export default Header;
