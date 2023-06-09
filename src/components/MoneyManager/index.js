import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    balance: 0,
    income: 0,
    expense: 0,
    transactionList: [],
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onaddTransaction = () => {
    const {title, amount, type, income, expense} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    if (type === 'INCOME') {
      const newIncome = parseInt(income) + parseInt(amount)
      const newBalance = parseInt(newIncome) - parseInt(expense)
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, newTransaction],
        title: '',
        amount: '',
        type: transactionTypeOptions[0].optionId,
        income: newIncome,
        balance: newBalance,
      }))
    } else {
      const newExpense = parseInt(expense) + parseInt(amount)
      const newBalance = parseInt(income) - parseInt(newExpense)
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, newTransaction],
        title: '',
        amount: '',
        type: transactionTypeOptions[0].optionId,
        expense: newExpense,
        balance: newBalance,
      }))
    }
  }

  onDelete = id => {
    const {transactionList, income, expense} = this.state
    const filteredUsersData = transactionList.filter(each => each.id !== id)
    const deletedUser = transactionList.filter(each => each.id === id)
    if (deletedUser[0].type === 'INCOME') {
      const newIncome = parseInt(income) - parseInt(deletedUser[0].amount)
      const newBalance = parseInt(newIncome) - parseInt(expense)
      this.setState(prevState => ({
        transactionList: filteredUsersData,
        income: newIncome,
        balance: newBalance,
      }))
    } else {
      const newExpense = parseInt(expense) - parseInt(deletedUser[0].amount)
      const newBalance = parseInt(income) - parseInt(newExpense)
      this.setState(prevState => ({
        transactionList: filteredUsersData,
        expense: newExpense,
        balance: newBalance,
      }))
    }
  }

  render() {
    const {
      title,
      amount,
      type,
      balance,
      income,
      expense,
      transactionList,
    } = this.state
    console.log(
      'income,expense, transactionList',
      income,
      expense,
      transactionList,
    )
    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="header-container">
            <h1 className="header-heading">Hi, Richard</h1>
            <p className="header-description">
              Welcome back to your{' '}
              <span className="blue-text">Money Manager</span>
            </p>
          </div>
          <MoneyDetails balance={balance} income={income} expense={expense} />
          <div className="bottom-container">
            <div className="add-transaction">
              <h1 className="form-heading">Add Transaction</h1>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                className="form-input"
                onChange={this.onChangeTitle}
                value={title}
              />
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                className="form-input"
                onChange={this.onChangeAmount}
                value={amount}
              />
              <label htmlFor="type">TYPE</label>
              <select
                name="type"
                id="type"
                className="form-input"
                onChange={this.onChangeType}
                value={type}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="button-add"
                onClick={this.onaddTransaction}
              >
                Add
              </button>
            </div>
            <div className="history-conatiner">
              <h1>History</h1>
              <div className="list-item">
                <p className="list-text">Title</p>
                <p className="list-text">Amount</p>
                <p className="list-text">Type</p>
              </div>
              <ul className="unordered-list">
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    onDelete={this.onDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
