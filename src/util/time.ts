/*
 * @Author: Hong.Zhang
 * @Date: 2021-11-24 11:43:30
 * @Description: 
 */
export function getTimeBasedUUID(): string {
  return new Date().getTime().toString(); 
}