export const wrapTextInTag = (
  text: string,
  tagName: string = "div"
): string => {
  const hsTgs = /<\/?[a-z][\s\S]*>/i.test(text); // Check if the text already has HTML tags
  if (!hsTgs) return text; // Return text as-is if no tags
  const el = document.createElement(tagName); // Create element with specified tag name
  el.textContent = text; // Set the text content
  return el.outerHTML; // Return the HTML
};
