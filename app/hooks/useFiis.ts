
import { useQuery } from '@tanstack/react-query'
import type { Fii } from '~/data/mockFiis'
import { fetchFiisFromBrapi } from '~/lib/brapi'

export function useFiis(tickers: string[]) {
  return useQuery<Fii[]>({
    queryKey: ['fiis', ...tickers.sort()],
    queryFn: () => fetchFiisFromBrapi(tickers),
    staleTime: 1000 * 60 * 60 * 6, 
  })
}
