import { Link } from "@/06_shared/ui"
import type { Route } from "./+types/404"
import { paths } from "@/06_shared/constants"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "404 - Page Not Found" },
    { name: "description", content: "The page you are looking for does not exist" },
  ]
}

export default function NotFoundPage() {
  return (
    <div className='container mx-auto px-4 py-16 text-center'>
      <h1 className='text-6xl font-bold text-[#030303] mb-4'>404</h1>
      <p className='text-xl text-[#9e9ea2] mb-8'>Page not found</p>
      <Link
        href={paths.home}
        className='inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
      >
        Go to Home
      </Link>
    </div>
  )
}
