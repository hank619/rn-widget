/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-04 15:24:42
 * @Description: 
 */
export function thousandPrice(price: string): string {
  return price.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function primePrice(price: string): string {
  return price.replace(/,/g, '');
}