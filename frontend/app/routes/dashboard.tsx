import type { Route } from "./+types/dashboard";
import Dashboard from "~/components/Dashboard/dasbor";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Arsana | Dashboard" },
    { name: "description", content: "Welcome to Arsana!" },
  ];
}

export default function DashboardRoute() {
  return <Dashboard />;
}