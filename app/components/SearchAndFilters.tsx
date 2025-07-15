import { Loader2, Search } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

interface SearchAndFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedFiis: string[];
  onCompare: () => void;
  isPending: boolean;
}

export const SearchAndFilters = ({
  searchTerm,
  onSearchChange,
  selectedFiis,
  onCompare,
  isPending,
}: SearchAndFiltersProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        {isPending && (
          <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 animate-spin" />
        )}
        <Input
          placeholder="Buscar por ticker, nome ou setor..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-10 w-80"
        />
      </div>

      {selectedFiis.length === 2 && (
        <Button onClick={onCompare} className="bg-blue-600 hover:bg-blue-700">
          Comparar FIIs
        </Button>
      )}
    </div>
  );
};
