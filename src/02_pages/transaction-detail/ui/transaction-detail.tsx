import { useLoaderData } from "react-router"
import { formatDate } from "@/06_shared/lib/date"
import { formatPrice } from "@/06_shared/lib/price"
import { Icon, Link } from "@/06_shared/ui"
import { Card } from "@/06_shared/ui/card"
import { TRANSACTION_STATUSES, type TTransactionDetail } from "@/05_entities/transaction"
import { useMemo } from "react"
import { paths } from "@/06_shared/constants"

export const TransactionDetailPage = () => {
  const detail = useLoaderData<TTransactionDetail>()

  if (!detail) {
    return <div>Transaction not found</div>
  }

  const { title, amount, currency, status, date, type, bank } = detail

  const formattedDate = formatDate(date)
  const dateDisplay = formattedDate || date
  const formattedAmount = formatPrice(amount, currency) || ""

  const getStatusText = useMemo(() => {
    switch (status) {
      case TRANSACTION_STATUSES.COMPLETED:
        return "Approved"
      case TRANSACTION_STATUSES.PENDING:
        return "Pending"
      case TRANSACTION_STATUSES.FAILED:
        return "Failed"
      default:
        return status
    }
  }, [status])

  return (
    <div className='container mx-auto px-4 py-8 max-w-md'>
      <Link
        href={paths.transactions}
        className='inline-block mb-8'
      >
        <Icon
          id='arrowLeft'
          size='sm'
        />
      </Link>

      <div className='flex flex-col items-center text-center mb-8'>
        <div className='text-4xl font-bold text-[#030303] mb-2'>{formattedAmount}</div>
        <div className='text-base text-[#9e9ea2] mb-1'>{title}</div>
        <div className='text-base text-[#9e9ea2]'>{dateDisplay}</div>
      </div>

      <Card className='rounded-lg p-4 space-y-3'>
        <div>
          <div className='text-base font-bold text-[#030303] mb-1'>Status: {getStatusText}</div>
          <div className='text-sm text-[#9e9ea2]'>{bank} Debit Card</div>
        </div>

        <div className='flex items-center justify-between pt-3 border-t border-[#e5e5e5]'>
          <span className='text-base font-bold text-[#030303]'>Total</span>
          <span className='text-base font-bold text-[#030303]'>{formattedAmount}</span>
        </div>
      </Card>
    </div>
  )
}
