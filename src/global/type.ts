export interface Coin {
  name: string,
  uuid: string,
  symbol: string,
  iconUrl: string,
  price: string,
  change: string,
  color: string
}

export type Coins = Array<Coin>

export interface ApiResponse {
  status: string,
  data: { stats: string, coins: Coins }
}

export interface TsCoinAvatar {
  color: string, iconUrl: string
}