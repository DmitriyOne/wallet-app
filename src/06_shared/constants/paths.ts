export const paths = {
  home: "/",
  transactions: "/transactions",
  transaction_detail: (id: string) => `/transactions/${id}`,
} as const
