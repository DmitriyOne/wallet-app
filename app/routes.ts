import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("transactions", "routes/transactions.tsx"),
  route("transactions/:id", "routes/transactions.$id.tsx"),
] satisfies RouteConfig;
