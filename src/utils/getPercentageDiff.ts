/** Returns the percentage difference of a value in an array from the maximum value in the array
 * @param numbers The array of numbers
 * @param num The number for calculating the percentage difference
 */
export function getPercentageDiff(numbers: number[], num: number): number {
  const maxValue = Math.max(...numbers);
  const avg = (maxValue + num) / 2;
  const diff = maxValue - num;
  return (diff / avg) * 100;
}
