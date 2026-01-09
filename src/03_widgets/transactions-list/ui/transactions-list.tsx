import { memo } from "react"
import { TransactionCard } from "@/05_entities/transaction"
import type { TTransaction } from "@/05_entities/transaction"

type TTransactionsListProps = {
  transactions: TTransaction[]
}

export const TransactionsList = memo(({ transactions }: TTransactionsListProps) => {
  return (
    <div className='space-y-1 bg-white px-3 rounded-lg'>
      {transactions.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          transaction={transaction}
        />
      ))}
    </div>
  )
})

TransactionsList.displayName = "TransactionsList"
