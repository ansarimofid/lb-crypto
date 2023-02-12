export interface Coin {
  name: string, 
  uuid: string, 
  symbol: string, 
  iconUrl: string,
  price: String,
  change: String
}

export type Coins = Array<Coin>

export interface ApiResponse {
  status: string,
  data: { stats: string, coins: Array<Coin> }
}