export function decodedValue(arr: string[]): number {
  const table: { [key: string]: number } = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  return table[arr[0]] * 10 + table[arr[1]];
}
