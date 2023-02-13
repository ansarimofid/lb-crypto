import { Coins } from "./type";

//Calculates price from given percent and total price
export function getPricefromPercent(price: string, change: string): number {

  let rs = (parseFloat(price) * parseFloat(change)) / 100;
  return getFormattedNumber(rs.toString())
}

//Formates number and fixes decimal to 2 or 4
export function getFormattedNumber(price: string): number {
  let p = parseFloat(price);
  let d = parseFloat(p.toFixed(2))

  if (d === 0) {
    return parseFloat(p.toFixed(4))
  }
  return d
}

// Filters coin based on symbol name
export const getFilteredCoins = (coins: Coins, filter: string): Coins => {
  return coins.filter(d => d.symbol === filter);
}

// Filters coin startin with 'filter' string
export const getSearchedCoins = (coins: Coins, filter: string): Coins => {
  return coins.filter(d => d.name.toLowerCase().startsWith(filter.toLowerCase()) || d.symbol.toLowerCase().startsWith(filter.toLowerCase()))
}