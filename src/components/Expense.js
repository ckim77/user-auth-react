import React, { useState, useEffect } from 'react';
import Header from './Header';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import './Expense.css';

function Expense() {
	const [expense, setExpense] = useState([]);
	const [totalExpense, setTotalExpense] = useState(0);

	useEffect(() => {
		let temp = 0;
		for(let i = 0; i < expense.length; i++) {
			temp += parseInt(expense[i].price);
		}

		setTotalExpense(temp);
	}, [expense]);
	

	return (
		<div className="expense">
			<Header totalExpense={totalExpense} />
			<ExpenseForm expense={expense} setExpense={setExpense} />
			<ExpenseList expense={expense} setExpense={setExpense} />
		</div>
	);
}

export default Expense;