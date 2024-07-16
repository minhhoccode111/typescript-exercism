export function hey(message: string): string {
  message = message.trim();

  const isYelling = message.toUpperCase() === message && /[A-Z]+/gim.test(message)
  const isAsking = /\?$/.test(message);
  const isNothing = message === ''

  if (isYelling && isAsking) return "Calm down, I know what I'm doing!"
  if (isYelling) return "Whoa, chill out!";
  if (isAsking) return "Sure.";
  if (isNothing) return "Fine. Be that way!";

  return "Whatever.";
}
