// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expense} = props
  return (
    <div className="data-container">
      <div className="data-green">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="data-image"
        />
        <div>
          <p className="data-upper-text">Your Balance</p>
          <p className="data-rs">
            Rs <p data-testid="balanceAmount">{balance}</p>
          </p>
        </div>
      </div>
      <div className="data-blue">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="data-image"
        />
        <div>
          <p className="data-upper-text">Your Income</p>
          <p className="data-rs">
            Rs <p data-testid="incomeAmount">{income}</p>
          </p>
        </div>
      </div>
      <div className="data-purple">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="data-image"
        />
        <div>
          <p className="data-upper-text">Your Expenses</p>
          <p className="data-rs">
            Rs <p data-testid="expensesAmount">{expense}</p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
