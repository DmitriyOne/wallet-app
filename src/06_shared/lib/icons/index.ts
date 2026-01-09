import { faCreditCard, faStore, faBullseye, faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import type { TIcon } from "@/06_shared/types"

export const ICONS = {
  creditCard: {
    provider: "fontawesome",
    name: "fa-credit-card",
    background: "#F6B73C",
  },
  store: {
    provider: "fontawesome",
    name: "fa-store",
    background: "#0051BA",
  },
  bullseye: {
    provider: "fontawesome",
    name: "fa-bullseye",
    background: "#CC0000",
  },
  checked: {
    provider: "fontawesome",
    name: "fa-check",
    background: "#eeeeef",
  },
  arrowRight: {
    provider: "fontawesome",
    name: "fa-chevron-right",
    background: "#cfcfd0",
  },
} as const satisfies Record<string, TIcon>

export { faCreditCard, faStore, faBullseye, faCheck, faChevronRight }
