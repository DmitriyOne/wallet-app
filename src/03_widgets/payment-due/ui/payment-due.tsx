import { memo } from "react"
import { Card } from "@/06_shared/ui/card"
import { Icon } from "@/06_shared/ui/icon/icon"
import { cn } from "@/06_shared/lib"

type TPaymentDueStatus = "due" | "paid"

type TPaymentDueProps = {
  status: TPaymentDueStatus
  dueAmount?: number
  dueDate?: string
  className?: string
}

export const PaymentDue = memo(({ className, status, dueAmount, dueDate }: TPaymentDueProps) => {
  const isDue = status === "due"

  const title = isDue ? "Payment Due" : "No Payment Due"
  const description = isDue ? `You have to pay ${dueAmount} by ${dueDate}.` : "You've paid your September balance."

  return (
    <Card className={cn("flex flex-col h-full", className)}>
      <h3 className='text-base font-semibold text-[#030303]'>{title}</h3>
      <p className='text-sm text-[#9e9ea2] mb-3'>{description}</p>
      <Icon
        id={isDue ? "cash" : "checked"}
        rounded='full'
        size='lg'
        className='ml-auto mt-auto w-12 h-12'
      />
    </Card>
  )
})

PaymentDue.displayName = "PaymentDue"
