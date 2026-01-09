import { useLoaderData } from "react-router"
import type { TTransactionListResponse } from "@/05_entities/transaction"

export const TransactionsListPage = () => {
  const data = useLoaderData() as TTransactionListResponse

  console.log(data)

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-gray-900'>Transactions</h1>
    </div>
  )
}
