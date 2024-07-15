export function score(x: number, y: number): number {
  // calculate using pytago
  const distanceToCenter = Math.sqrt(x ** 2 + y ** 2);
  if (distanceToCenter <= 1) return 10;
  if (distanceToCenter <= 5) return 5;
  if (distanceToCenter <= 10) return 1;
  return 0;
}
