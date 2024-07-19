// first time apply generic
function randomInArr<Type>(arr: Type[]): Type {
  return arr[Math.floor(Math.random() * arr.length)];
}

// TODO: create a global set to store all possible name for last test case

function generateName(): string {
  const alphabet: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  // we could make the array contain number strings but practice using generic
  const nums: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const one = randomInArr<string>(alphabet);
  const two = randomInArr<string>(alphabet);
  const three = randomInArr<number>(nums).toString();
  const four = randomInArr<number>(nums).toString();
  const five = randomInArr<number>(nums).toString();
  return "".concat(one, two, three, four, five);
}

export class Robot {
  private _name: string;
  private _set;
  constructor() {
    this._set = new Set();
    const name = generateName();
    this._set.add(name);
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    let newName: string = generateName();
    while (this._set.has(newName)) {
      newName = generateName();
    }
    this._name = newName;
    this._set.add(newName);
  }

  public static releaseNames(): void {}
}
