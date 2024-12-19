export const wrapTextInTag = (
  text: string,
  tagName: string = "div"
): string => {
  const hsTgs = /<\/?[a-z][\s\S]*>/i.test(text);
  if (!hsTgs) return text;
  const el = document.createElement(tagName);
  el.textContent = text;
  return el.outerHTML;
};

export const generateId = () => {
  const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  return str.split("").sort(() => 0.5 - Math.random()).join("").substring(0, 10);
};
