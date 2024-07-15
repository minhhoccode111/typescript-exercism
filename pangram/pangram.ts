export function isPangram(str: string): boolean {
  // each group 
  const regex = /(?=.*q)(?=.*w)(?=.*e)(?=.*r)(?=.*t)(?=.*y)(?=.*u)(?=.*i)(?=.*o)(?=.*p)(?=.*a)(?=.*s)(?=.*d)(?=.*f)(?=.*g)(?=.*h)(?=.*j)(?=.*k)(?=.*l)(?=.*z)(?=.*x)(?=.*c)(?=.*v)(?=.*b)(?=.*n)(?=.*m)/gi;
  return regex.test(str);
}
