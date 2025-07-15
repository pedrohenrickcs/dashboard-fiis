import { Building, Calendar, Percent } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import type { Fii } from "~/data/mockFiis";

interface FiiCardProps {
  fii: Fii;
  isSelected: boolean;
  onSelect: () => void;
  canSelect: boolean;
}

export const FiiCard = ({
  fii,
  isSelected,
  onSelect,
  canSelect,
}: FiiCardProps) => {
  console.log("fii -----", fii);
  const getSectorColor = (sector: string) => {
    const colors = {
      Logística: "bg-blue-100 text-blue-800",
      Shopping: "bg-purple-100 text-purple-800",
      Corporativo: "bg-green-100 text-green-800",
      Residencial: "bg-orange-100 text-orange-800",
      Híbrido: "bg-gray-100 text-gray-800",
      Hospitalar: "bg-red-100 text-red-800",
    };
    return colors[sector as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR");
  };

  return (
    <Card
      className={`hover:shadow-lg transition-all duration-300 ${
        isSelected ? "ring-2 ring-blue-500 bg-blue-50" : "hover:shadow-xl"
      } cursor-pointer`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg font-bold text-gray-900">
              {fii.ticker ?? "-"}
            </CardTitle>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
              {fii.name ?? "-"}
            </p>
          </div>
          <Badge className={getSectorColor(fii.sector)}>
            {fii.sector ?? "-"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-2xl font-bold text-gray-900">
              {fii.price ? formatCurrency(fii.price) : "-"}
            </div>
            <div className="text-xs text-gray-500">Cotação</div>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end">
              <div className="text-2xl font-bold text-green-600">
                {fii?.dividendYield ? fii.dividendYield.toFixed(1) : "-"}
              </div>
              <Percent className="w-4 h-4 ml-1 text-green-600" />
            </div>
            <div className="text-xs text-gray-500">Dividend Yield</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="font-semibold text-gray-900">
              {fii?.pvp ? fii.pvp.toFixed(2) : "-"}
            </div>
            <div className="text-xs text-gray-500">P/VP</div>
          </div>
          <div className="text-right">
            <div className="font-semibold text-gray-900">
              {fii?.vacancy ? fii.vacancy.toFixed(1) : "-"}
            </div>
            <div className="text-xs text-gray-500">Vacância</div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-600">
            <Building className="w-4 h-4 mr-1" />
            {fii.properties ? fii.properties : "-"} imóveis
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-1" />
            {fii?.dividendDate ? formatDate(fii.dividendDate) : "-"}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Último dividendo:</span>
            <span className="font-semibold text-green-600">
              {fii?.lastDividend ? formatCurrency(fii.lastDividend) : "N/A"}
            </span>
          </div>
        </div>

        {canSelect && (
          <Button
            onClick={onSelect}
            variant={isSelected ? "default" : "outline"}
            className="w-full"
            size="sm"
          >
            {isSelected ? "Selecionado" : "Selecionar para comparar"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
