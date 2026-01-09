import { memo } from "react"
import { formatDate } from "@/06_shared/lib/date"
import { Price } from "@/06_shared/ui/price/price"
import { Label } from "@/06_shared/ui/label/label"
import { Icon, Link } from "@/06_shared/ui"
import { cn } from "@/06_shared/lib/tailwind-classes"
import { getIconIdFromName } from "@/06_shared/lib/icons"
import type { TTransaction } from "../model"
import { TRANSACTION_STATUSES } from "../model"

type TTransactionCardProps = {
  transaction: TTransaction
  className?: string
}

export const TransactionCard = memo(({ transaction, className }: TTransactionCardProps) => {
  const { id, title, amount, currency, status, description, date, authorizedUserName, icon, type, label } =
    transaction || {}

  if (!id) {
    return null
  }

  const formattedDate = formatDate(date)
  const isPending = status === TRANSACTION_STATUSES.PENDING
  const hasAuthorizedUser = Boolean(authorizedUserName)

  const dateText = formattedDate || date
  const dateDisplay = hasAuthorizedUser ? `${authorizedUserName} - ${dateText}` : dateText

  const iconId = getIconIdFromName(icon.name)

  return (
    <Link
      href={`/transactions/${id}`}
      className={cn("flex items-start gap-3 py-3", "last:border-b-0 border-b border-[#e5e5e5]", className)}
    >
      {iconId && (
        <Icon
          id={iconId}
          rounded='md'
          size='2xl'
          className='w-12 h-12'
        />
      )}

      <div className='flex-1 min-w-0'>
        <div className='flex items-center justify-between gap-2 mb-1'>
          <h3 className='text-base font-semibold text-[#030303] truncate'>{title}</h3>
          <Price
            amount={amount}
            currency={currency}
            type={type}
            className='text-base font-semibold text-[#030303] shrink-0'
          />
        </div>

        <div className='flex items-center gap-2 mb-1'>
          <div className='text-sm text-[#9e9ea2] truncate flex-1'>
            {isPending && <span>Pending</span>}
            {isPending && description && <span> - </span>}
            {description && <span>{description}</span>}
          </div>
          {label && <Label text={label} />}
        </div>

        <div className='text-sm text-[#9e9ea2]'>{dateDisplay}</div>
      </div>

      <Icon
        id='arrowRight'
        size='sm'
        className='mt-1'
      />
    </Link>
  )
})

TransactionCard.displayName = "TransactionCard"
