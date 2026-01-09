import { TransactionDetailPage } from "@/02_pages/transaction-detail"
import type { Route } from "./+types/transactions.$id"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { isRouteErrorResponse } from "react-router"
import { Link } from "@/06_shared/ui"
import type { TTransactionDetail } from "@/05_entities/transaction"
import { paths } from "@/06_shared/constants"

export function meta({ params }: Route.MetaArgs) {
  const title = params.id ? `Transaction ${params.id}` : "Transaction Detail"
  return [{ title }, { name: "description", content: "Transaction details" }]
}

export async function loader({ params }: Route.LoaderArgs): Promise<TTransactionDetail> {
  const { id } = params

  if (!id) {
    throw new Response("Transaction ID is required", { status: 400 })
  }

  const detailsPath = join(process.cwd(), "data", "transaction-details.json")
  const detailsContent = await readFile(detailsPath, "utf-8")
  const detailsData = JSON.parse(detailsContent) as { transactionDetails: TTransactionDetail[] }

  const detail = detailsData.transactionDetails.find((d) => d.id === id)

  if (!detail) {
    throw new Response("Transaction details not found", { status: 404 })
  }

  return detail
}

export default TransactionDetailPage

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div className='container mx-auto px-4 py-16 text-center'>
        <h1 className='text-6xl font-bold text-[#030303] mb-4'>404</h1>
        <p className='text-xl text-[#9e9ea2] mb-8'>Transaction not found</p>
        <Link
          href={paths.transactions}
          className='inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
        >
          Back to Transactions
        </Link>
      </div>
    )
  }

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
