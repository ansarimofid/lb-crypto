import { Coins } from "./type";

export function getPricefromPercent( price: string,change: string): number {

  let rs = (parseFloat(price)*parseFloat(change))/100;
  // return parseFloat(rs.toFixed(2))
  // let d = parseFloat(rs.toFixed(2));

  // if(d===0){
  //   return parseFloat(rs.toFixed(4))
  // }
  // return d
  return getFormattedNumber(rs.toString())
}

export function getFormattedNumber(price: string): number {
  let p = parseFloat(price);
  let d = parseFloat(p.toFixed(2))

  if(d===0){
    return parseFloat(p.toFixed(4))
  }
  return d
}

export const getFilteredCoins = (coins: Coins, filter:string): Coins => {

  return coins.filter(d=>d.symbol===filter);
}