
import axios from 'axios'

const BRAPI_TOKEN = import.meta.env.VITE_BRAPI_TOKEN

export const api = axios.create({
  baseURL: 'https://brapi.dev/api',
  timeout: 10_000,
})

api.interceptors.request.use((config) => {
  if (BRAPI_TOKEN) {
    config.headers.Authorization = `Bearer ${BRAPI_TOKEN}` 
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const msg =
      error.response?.data?.message ||
      `Erro ${error.response?.status || ''} na API Brapi`
    return Promise.reject(new Error(msg))
  }
)

export async function fetchFiisFromBrapi(tickers: string[]) {
  const requests = tickers.map((ticker) =>
    api.get(`/quote/${ticker}`, {
      params: { range: '1d', fundamental: true },
    })
  )

  const responses = await Promise.all(requests)

  return responses.map((r) => {
    const raw = r.data.results?.[0]
    if (!raw) throw new Error(`Ticker não encontrado na Brapi`)
    return mapBrapiToFii(raw)
  })
}

function mapBrapiToFii(d: any) {
  return {
    ticker: d.symbol,
    name: d.longName,
    sector: d.sector || '—',
    price: d.regularMarketPrice,
    dividendYield: (d.dividendYield ?? 0) * 100,
    pvp: d.priceToBook,
    marketCap: d.marketCap,
    lastDividend: d.lastDividendValue,
    dividendDate: d.lastDividendDate,
    vacancy: d.vacancy ?? 0,
    netWorth: d.netWorth ?? 0,
    properties: d.properties ?? 0,
  }
}
