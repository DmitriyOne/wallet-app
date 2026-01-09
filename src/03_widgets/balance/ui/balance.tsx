import { memo, useMemo } from "react"
import { Card } from "@/06_shared/ui/card"
import { Price } from "@/06_shared/ui/price/price"
import { CURRENCIES } from "@/05_entities/transaction"
import { CARD_LIMIT } from "@/06_shared/constants"

type TBalanceProps = {
  className?: string
}

export const Balance = memo(({ className }: TBalanceProps) => {
  const balance = useMemo(() => Math.random() * CARD_LIMIT, [])
  const available = CARD_LIMIT - balance

  return (
    <Card className={className}>
      <h3 className='text-base font-normal text-[#030303]'>Card Balance</h3>
      <Price
        amount={balance}
        currency={CURRENCIES.USD}
        className='text-3xl font-bold text-[#030303]'
      />
      <p className='text-sm text-[#9e9ea2]'>
        <Price
          amount={available}
          currency={CURRENCIES.USD}
        />{" "}
        Available
      </p>
    </Card>
  )
})

Balance.displayName = "Balance"
