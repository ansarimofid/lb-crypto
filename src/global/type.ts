//Coin Interface
export interface Coin {
  name: string,
  uuid: string,
  symbol: string,
  iconUrl: string,
  price: string,
  change: string,
  color: string
}

//Coins Type (Array of coin)
export type Coins = Array<Coin>

//API response Interface
export interface ApiResponse {
  status: string,
  data: { stats: string, coins: Coins }
}

// Coin Avatar Interface
export interface TsCoinAvatar {
  color: string, iconUrl: string
}