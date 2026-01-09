import { TransactionsListPage } from "@/02_pages/transactions-list"
import type { Route } from "./+types/transactions"
import type { TTransactionListResponse } from "@/05_entities/transaction"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export function meta({}: Route.MetaArgs) {
  return [{ title: "Transactions" }, { name: "description", content: "Transactions list" }]
}

export async function loader(): Promise<TTransactionListResponse> {
  const filePath = join(process.cwd(), "data", "transactions.json")
  const fileContent = await readFile(filePath, "utf-8")
  const data = JSON.parse(fileContent) as TTransactionListResponse
  return data
}

export default TransactionsListPage
