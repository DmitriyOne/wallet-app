import { type KeyboardEvent } from "react"
import { Link as RouterLink, type LinkProps as TRouterLinkProps } from "react-router"

type TLinkProps = Omit<TRouterLinkProps, "className" | 'to'> & {
  href: string
  className?: string
}

export const Link = ({ href, className, children, ...props }: TLinkProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      event.currentTarget.click()
    }
  }

  return (
    <RouterLink
      className={className}
      to={href}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </RouterLink>
  )
}
