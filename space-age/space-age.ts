type Table = {
  mercury: number;
  venus: number;
  earth: number;
  mars: number;
  jupiter: number;
  saturn: number;
  uranus: number;
  neptune: number;
};

export function age(planet: keyof Table, seconds: number): number {
  const base = 31557600;

  const table: Table = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  return Math.round((seconds / base / table[planet]) * 100) / 100;
}
