// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDelete} = props
  const {title, amount, type, id} = transactionDetails
  const deleteIconClicked = () => {
    onDelete(id)
  }
  return (
    <li className="list-item">
      <div>
        <div className="list-container">
          <p className="list-text">{title}</p>
          <p className="list-text">{amount}</p>
          <p className="list-text">{type}</p>
        </div>
        <button type="button" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="delete-img"
            alt="delete"
            onClick={deleteIconClicked}
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
