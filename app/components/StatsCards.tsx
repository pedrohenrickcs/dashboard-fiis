import { Building, DollarSign, Percent, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import type { mockFiis } from "~/data/mockFiis";

interface StatsCardsProps {
  fiis: typeof mockFiis;
}

export const StatsCards = ({ fiis }: StatsCardsProps) => {
  const totalMarketCap = fiis.reduce((sum, fii) => sum + fii.marketCap, 0);
  const averageDY =
    fiis.reduce((sum, fii) => sum + fii.dividendYield, 0) / fiis.length;
  const uniqueSectors = Array.from(
    new Set(fiis.map((fii) => fii.sector))
  ).length;

  const stats = [
    {
      title: "Total de FIIs",
      value: fiis.length.toString(),
      description: "fundos analisados",
      icon: Building,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "DY Médio",
      value: `${averageDY.toFixed(2)}%`,
      description: "dividend yield",
      icon: Percent,
      gradient: "from-green-500 to-green-600",
    },
    {
      title: "Patrimônio Total",
      value: `R$ ${(totalMarketCap / 1000000000).toFixed(1)}B`,
      description: "valor de mercado",
      icon: DollarSign,
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Setores",
      value: uniqueSectors.toString(),
      description: "diferentes setores",
      icon: TrendingUp,
      gradient: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card
            key={stat.title}
            className={`bg-gradient-to-br ${stat.gradient} text-white`}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium opacity-90">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 opacity-90" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs opacity-90">{stat.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
