import { Building, Percent, TrendingUp, X } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import type { Fii } from "~/types/fiis";
interface FiiComparatorProps {
  fii1: Fii;
  fii2: Fii;
  onClose: () => void;
}

export const FiiComparator = ({ fii1, fii2, onClose }: FiiComparatorProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

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

  const ComparisonMetric = ({
    label,
    value1,
    value2,
    formatter = (v) => v.toString(),
    unit = "",
    higherIsBetter = true,
  }: {
    label: string;
    value1: number;
    value2: number;
    formatter?: (value: number) => string;
    unit?: string;
    higherIsBetter?: boolean;
  }) => {
    const isValue1Better = higherIsBetter ? value1 > value2 : value1 < value2;
    const isValue2Better = higherIsBetter ? value2 > value1 : value2 < value1;

    return (
      <div className="grid grid-cols-3 gap-4 items-center py-3 border-b border-gray-100 last:border-b-0">
        <div className="text-center">
          <div
            className={`text-lg font-semibold ${
              isValue1Better ? "text-green-600" : "text-gray-900"
            }`}
          >
            {formatter(value1)}
            {unit}
          </div>
          {isValue1Better && (
            <TrendingUp className="w-4 h-4 text-green-600 mx-auto mt-1" />
          )}
        </div>
        <div className="text-center">
          <div className="text-sm font-medium text-gray-600">{label}</div>
        </div>
        <div className="text-center">
          <div
            className={`text-lg font-semibold ${
              isValue2Better ? "text-green-600" : "text-gray-900"
            }`}
          >
            {formatter(value2)}
            {unit}
          </div>
          {isValue2Better && (
            <TrendingUp className="w-4 h-4 text-green-600 mx-auto mt-1" />
          )}
        </div>
      </div>
    );
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-full w-full max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              Comparação de FIIs
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-blue-900">
                    {fii1.ticker ?? "-"}
                  </CardTitle>
                  <Badge className={getSectorColor(fii1.sector)}>
                    {fii1.sector ?? "-"}
                  </Badge>
                </div>
                <p className="text-sm text-blue-700">{fii1.name ?? "-"}</p>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900">
                  {fii1.price ? formatCurrency(fii1.price) : "-"}
                </div>
                <div className="flex items-center mt-2">
                  <Percent className="w-4 h-4 text-green-600 mr-1" />
                  <span className="text-lg font-semibold text-green-600">
                    {fii1.dividendYield ? fii1.dividendYield?.toFixed(1) : "-"}%
                    DY
                  </span>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-400 mb-2">VS</div>
                <div className="text-sm text-gray-500">Comparação</div>
              </div>
            </div>

            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-purple-900">
                    {fii2.ticker ?? "-"}
                  </CardTitle>
                  <Badge className={getSectorColor(fii2.sector)}>
                    {fii2.sector ?? "-"}
                  </Badge>
                </div>
                <p className="text-sm text-purple-700">{fii2.name ?? "-"}</p>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-900">
                  {fii2.price ? formatCurrency(fii2.price) : "-"}
                </div>
                <div className="flex items-center mt-2">
                  <Percent className="w-4 h-4 text-green-600 mr-1" />
                  <span className="text-lg font-semibold text-green-600">
                    {fii2?.dividendYield
                      ? fii2?.dividendYield?.toFixed(1)
                      : "-"}
                    % DY
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                Métricas Comparativas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ComparisonMetric
                label="Dividend Yield"
                value1={fii1.dividendYield}
                value2={fii2.dividendYield}
                formatter={(v) => v?.toFixed(1)}
                unit="%"
                higherIsBetter={true}
              />

              <ComparisonMetric
                label="P/VP"
                value1={fii1.pvp}
                value2={fii2.pvp}
                formatter={(v) => v?.toFixed(2)}
                higherIsBetter={false}
              />

              <ComparisonMetric
                label="Vacância"
                value1={fii1.vacancy}
                value2={fii2.vacancy}
                formatter={(v) => v?.toFixed(1)}
                unit="%"
                higherIsBetter={false}
              />

              <ComparisonMetric
                label="Patrimônio Líquido"
                value1={fii1?.netWorth}
                value2={fii2?.netWorth}
                formatter={formatCurrency}
                higherIsBetter={true}
              />

              <ComparisonMetric
                label="Último Dividendo"
                value1={fii1?.lastDividend}
                value2={fii2?.lastDividend}
                formatter={formatCurrency}
                higherIsBetter={true}
              />

              <ComparisonMetric
                label="Número de Imóveis"
                value1={fii1.properties}
                value2={fii2.properties}
                formatter={(v) => v.toString()}
                higherIsBetter={true}
              />

              <ComparisonMetric
                label="Valor de Mercado"
                value1={fii1.marketCap}
                value2={fii2.marketCap}
                formatter={(v) => `R$ ${(v / 1000000000)?.toFixed(1)}B`}
                higherIsBetter={true}
              />
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};
