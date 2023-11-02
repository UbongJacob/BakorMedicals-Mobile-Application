export const emptyString = '';

export const passwordRules = Object.freeze({
  hasAtLeast8Characters: /^.{8,}$/,
  hasAtLeast1UpperCaseLetter: /^(?=.*[A-Z]).+$/,
  hasAtLeast1LowerCaseLetter: /^(?=.*[a-z]).+$/,
  hasAtLeast1Number: /^(?=.*\d).+$/,
  hasAtLeast1Symbol: /^(?=.*[^\da-zA-Z]).+$/,
});
