import { StatsCards } from "~/components/StatsCards";
import { mockFiis } from "~/data/mockFiis";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <StatsCards fiis={mockFiis} />;
}
