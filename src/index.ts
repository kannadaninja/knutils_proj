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

export const generateId = (): string => {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let id = "";
  for (let i = 0; i < 10; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
};
