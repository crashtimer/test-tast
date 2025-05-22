// config
import { API_BASE } from "@/config";
import { ENDPOINTS } from "@/config/api";
// utils
import { replaceUrlParams } from "@/utils/url.util";

const request = async <T>(url: URLs, options?: RequestOptions): Promise<T> => {
  const { method = "GET", body, params } = options || {};

  const response = await fetch(
    `${API_BASE}${replaceUrlParams(ENDPOINTS[url], params)}`,
    {
      method,
      body: JSON.stringify(body),
    }
  );

  return response.json() as Promise<T>;
};

export default request;
