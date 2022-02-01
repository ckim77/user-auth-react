import React from 'react';

function Header({totalExpense}) {
  return <header className="expense-header">
      <h2 className="expense-title">Expense Tracker</h2>
      <div className="total-expense">${totalExpense}</div>
  </header>;
}

export default Header;
