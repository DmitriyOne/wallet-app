import type { TTransactionType, TTransactionStatus, TCurrency } from "./constants"
import type { TIcon } from "@/06_shared/types"

export type TTransaction = {
  id: string
  type: TTransactionType
  title: string
  description: string
  amount: number
  authorizedUserName: string
  status: TTransactionStatus
  icon: TIcon
  date: string // M/D/YYYY American format (e.g., "10/1/2022")
  currency: TCurrency
  label?: string
}

export type TTransactionListResponse = {
  transactions: TTransaction[]
  total: number
}
