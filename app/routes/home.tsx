import { Badge } from "lucide-react";
import { useState, useTransition } from "react";
import { FiiCard } from "~/components/FiiCard";
import { FiiComparator } from "~/components/FiiComparator";
import { SearchAndFilters } from "~/components/SearchAndFilters";
import { StatsCards } from "~/components/StatsCards";
import { Card, CardContent } from "~/components/ui/card";
import type { Route } from "./+types/home";

import Loading from "~/components/Loading";
import { useFiis } from "~/hooks/useFiis";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Meu FII Dashboard" },
    {
      name: "description",
      content:
        "Dashboard completo para análise de FIIs: patrimônio, dividend yield, setores e mais.",
    },
  ];
}

export default function Home() {
  const tickers = [
    "HGLG11",
    "KNRI11",
    "MXRF11",
    "AAGR11",
    "ALZC11",
    "EQIR11",
    "IRDM11",
    "BTHF11",
  ];
  const { data: fiis, isLoading, error } = useFiis(tickers);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFiis, setSelectedFiis] = useState<string[]>([]);
  const [showComparator, setShowComparator] = useState(false);
  const [isPending, startTransition] = useTransition();

  if (isLoading) return <Loading className="flex justify-center" />;
  if (error) return <p>Erro: {(error as Error).message}</p>;

  const handleSearchChange = (value: string) => {
    startTransition(() => {
      setSearchTerm(value);
    });
  };

  const handleFiiSelect = (ticker: string) => {
    setSelectedFiis((prev) => {
      if (prev.includes(ticker)) {
        return prev.filter((t) => t !== ticker);
      } else if (prev.length < 2) {
        return [...prev, ticker];
      }
      return prev;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Dashboard de FIIs
              </h1>
              <p className="text-gray-600">
                Análise completa de Fundos de Investimento Imobiliário
              </p>
            </div>

            <SearchAndFilters
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              selectedFiis={selectedFiis}
              onCompare={() => setShowComparator(true)}
              isPending={isPending}
            />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <StatsCards fiis={fiis || []} />

        {selectedFiis.length > 0 && (
          <Card className="mb-6 bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-blue-900">
                  FIIs selecionados para comparação:
                </span>
                {selectedFiis.map((ticker) => (
                  <Badge key={ticker} className="bg-blue-100 text-blue-800">
                    {ticker}
                  </Badge>
                ))}
                {selectedFiis.length < 2 && (
                  <span className="text-xs text-blue-600">
                    Selecione {2 - selectedFiis.length} FII(s) para comparar
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fiis?.map((fii) => (
            <FiiCard
              key={fii.ticker}
              fii={fii}
              isSelected={selectedFiis.includes(fii.ticker)}
              onSelect={() => handleFiiSelect(fii.ticker)}
              canSelect={
                selectedFiis.length < 2 || selectedFiis.includes(fii.ticker)
              }
            />
          ))}
        </div>

        {fiis?.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">
              Nenhum FII encontrado
            </div>
            <p className="text-gray-500">
              Tente buscar por outro ticker, nome ou setor
            </p>
          </div>
        )}
      </div>

      {showComparator && selectedFiis.length === 2 && (
        <FiiComparator
          fii1={fiis?.find((f) => f.ticker === selectedFiis[0])!}
          fii2={fiis?.find((f) => f.ticker === selectedFiis[1])!}
          onClose={() => setShowComparator(false)}
        />
      )}
    </div>
  );
}
