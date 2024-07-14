interface Table {
  black: number;
  brown: number;
  red: number;
  orange: number;
  yellow: number;
  green: number;
  blue: number;
  violet: number;
  grey: number;
  white: number;
}

export function decodedResistorValue(arr: (keyof Table)[]): string {
  const table: Table = {
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

  const first = table[arr[0]];
  const second = table[arr[1]];
  const third = table[arr[2]];

  const firstTwoValue = first * 10 + second;

  const prefixString = "ohms";

  const string = firstTwoValue + "".padStart(third, "0");

  const regexes: { reg: RegExp; str: string }[] = [
    { reg: /0{9}$/, str: "giga" },
    { reg: /0{6}$/, str: "mega" },
    { reg: /0{3}$/, str: "kilo" },
  ];

  for (let i = 0, len = regexes.length; i < len; i++) {
    const reg = regexes[i].reg;
    const str = regexes[i].str;
    if (reg.test(string)) return string.replace(reg, " " + str) + prefixString;
  }

  return string + " " + prefixString;
}
