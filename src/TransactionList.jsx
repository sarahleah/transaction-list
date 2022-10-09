import { useEffect } from 'react';
import Transaction from './Transaction';
import data from './data.json';
import './transaction-list.css'

export default function TransactionList() {
  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <div className="transaction-list">
      {data.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)}
    </div>
  )
}