import { TransactionDetailPage } from "@/02_pages/transaction-detail"
import type { Route } from "./+types/transactions.$id"

export function meta({}: Route.MetaArgs) {
  return [{ title: "Transaction Detail" }, { name: "description", content: "Transaction details" }]
}

export default TransactionDetailPage

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='bg-red-50 border border-red-200 rounded-lg p-6'>
        <h1 className='text-xl font-bold text-red-900 mb-2'>Error</h1>
        <p className='text-red-700'>
          {error instanceof Error ? error.message : "An error occurred while loading the transaction"}
        </p>
      </div>
    </div>
  )
}
