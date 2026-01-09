import type { TTransactionType, TCurrency } from "@/05_entities/transaction"
import { formatPrice } from "@/06_shared/lib"

type TPriceType = TTransactionType | "balance"

type TPriceProps = {
  amount: number
  currency: TCurrency
  type?: TPriceType
  className?: string
}

export const Price = ({ amount, currency, type, className }: TPriceProps) => {
  const formattedAmount = formatPrice(amount, currency)

  if (!formattedAmount) {
    return null
  }

  const displayAmount = type === "debit" ? `+${formattedAmount}` : formattedAmount

  return <span className={className}>{displayAmount}</span>
}
