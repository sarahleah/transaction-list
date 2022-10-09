import { formatAmount, isAmountNegative, formatDate } from './transaction-utils';
import { ThridayTag } from './ThridayTag';
import './transaction.css';


export default function Transaction({transaction: {
  amount,
  date,
  industry,
  isInternal,
  shopName,
}}) {
  return (
    <div className="transaction">
      <div className="transaction-header">
        <h2 className="transaction-header--name">{shopName}</h2>
        <h3 className="transaction-header--industry">{`${formatDate(date)} ${date ? '|' : ''} ${industry === 'n/a' ? 'Payment' : industry}`}</h3>
      </div>
      <div className="transaction-body">
        {isInternal ? <ThridayTag /> : <div></div>}
        <p
          className={
            `transaction-amount transaction-amount__${isAmountNegative(amount)
            ? 'expense'
            : 'income'}`
          }
        >
          {formatAmount(amount)}
        </p>
      </div>
    </div>
  )
}