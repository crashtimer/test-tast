export const replaceUrlParams = (
  url: string,
  params?: Record<string, string>
) => {
  if (!params) return url;

  return url.replace(/\{(\w+)\}/g, (match, param) => params[param] || match);
};
