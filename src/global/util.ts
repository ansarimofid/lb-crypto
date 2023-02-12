import { Coins } from "./type";

export function getPricefromPercent(price: string, change: string): number {

  let rs = (parseFloat(price) * parseFloat(change)) / 100;
  return getFormattedNumber(rs.toString())
}

export function getFormattedNumber(price: string): number {
  let p = parseFloat(price);
  let d = parseFloat(p.toFixed(2))

  if (d === 0) {
    return parseFloat(p.toFixed(4))
  }
  return d
}

export const getFilteredCoins = (coins: Coins, filter: string): Coins => {
  return coins.filter(d => d.symbol === filter);
}

export const getSearchedCoins = (coins: Coins, filter: string): Coins => {
  return coins.filter(d => d.name.toLowerCase().startsWith(filter.toLowerCase()) || d.symbol.toLowerCase().startsWith(filter.toLowerCase()))
}