import { TransactionsListPage } from "@/02_pages/transactions-list"
import type { Route } from "./+types/transactions"

export function meta({}: Route.MetaArgs) {
  return [{ title: "Transactions" }, { name: "description", content: "Transactions list" }]
}

export default TransactionsListPage
