export function toRna(adn: string): string {
  const table: { [key: string]: string } = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  const arr: string[] = adn.split("");

  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    const result = table[char];
    if (!result) throw new Error("Invalid input DNA.");
    arr[i] = result;
  }

  return arr.join("");
}
