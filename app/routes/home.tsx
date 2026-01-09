import { paths } from "@/06_shared/constants"
import type { Route } from "./+types/home"
import { Link, Card, Icon } from "@/06_shared/ui"

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }, { name: "description", content: "Wallet home page" }]
}

export default function Home() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold text-gray-900 mb-6'>Home</h1>
      <Card className='hover:shadow-md transition-shadow'>
        <Link
          href={paths.transactions}
          className='flex items-center justify-between py-2'
          aria-label='View transactions'
        >
          <span className='text-base font-semibold text-[#030303]'>View Latest Transactions</span>
          <Icon
            id='arrowRight'
            size='sm'
            className='mt-1'
          />
        </Link>
      </Card>
    </div>
  )
}
