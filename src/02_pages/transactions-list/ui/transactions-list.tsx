import { useLoaderData } from "react-router"
import { TransactionsList } from "@/03_widgets/transactions-list"
import { PaymentDue } from "@/03_widgets/payment-due"
import { Balance } from "@/03_widgets/balance"
import { DailyPoints } from "@/03_widgets/daily-points"
import type { TTransactionListResponse } from "@/05_entities/transaction"

export const TransactionsListPage = () => {
  const { transactions } = useLoaderData<TTransactionListResponse>()

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-2 gap-2 mb-6'>
        <Balance className='h-full' />
        <PaymentDue
          status='paid'
          className='h-full row-span-2'
        />
        <DailyPoints className='h-full' />
      </div>
      <h1 className='text-2xl font-bold text-gray-900 mb-1'>Latest Transactions</h1>
      <TransactionsList transactions={transactions} />
    </div>
  )
}
