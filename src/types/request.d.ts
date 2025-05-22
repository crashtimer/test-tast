import { ENDPOINTS } from "@/config/api";

declare global {
  type URLs = keyof typeof ENDPOINTS;

  type RequestOptions = {
    method?: "GET" | "POST" | "PUT";
    body?: any;
    params?: {
      [key: string]: string;
    };
  };
}
