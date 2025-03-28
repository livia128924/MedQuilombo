export const isValidEmail = (value: string) => {
  // Expressão regular modificada para validar endereço de e-mail
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+(?:\.[a-zA-Z0-9._%+-]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
  return emailRegex.test(value);
};

export function noSpecialCharacter(value: string) {
  if (!value) return value;
  const trimmedValue = value;
  return trimmedValue?.replace(/\s{2,}/g, " ").replace(/[^A-Za-z0-9\s]/gi, "");
}

export function onlyLetters(value: string) {
  if (!value) return value;
  return value.replace(/\s{2,}/g, " ").replace(/[^\p{L}\s]/gu, "");
}
