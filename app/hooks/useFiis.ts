
import { useQuery } from '@tanstack/react-query'
import { fetchFiisFromBrapi } from '~/lib/brapi'

export function useFiis(tickers: string[]) {
  return useQuery({
    queryKey: ['fiis', ...tickers.sort()],
    queryFn: () => fetchFiisFromBrapi(tickers),
    staleTime: 1000 * 60 * 60 * 6, 
  })
}
