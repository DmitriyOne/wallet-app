export const TRANSACTION_TYPES = {
  CREDIT: "credit",
  DEBIT: "debit",
} as const

export const TRANSACTION_STATUSES = {
  PENDING: "pending",
  COMPLETED: "completed",
  FAILED: "failed",
} as const

export const CURRENCIES = {
  USD: "USD",
  GBP: "GBP",
  EUR: "EUR",
} as const

export type TTransactionType = (typeof TRANSACTION_TYPES)[keyof typeof TRANSACTION_TYPES]

export type TTransactionStatus = (typeof TRANSACTION_STATUSES)[keyof typeof TRANSACTION_STATUSES]

export type TCurrency = (typeof CURRENCIES)[keyof typeof CURRENCIES]
