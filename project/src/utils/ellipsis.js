export const ellipsis = (text, max = 50) => {
  if (text.length <= max) return text;

  return text.substring(0, max) + "...";
};
