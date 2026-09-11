/**
 * Axios Instance — Envistream EduSkill Frontend
 *
 * Pre-configured Axios instance for all API calls.
 *
 * Features:
 *   - Base URL from NEXT_PUBLIC_API_URL env variable
 *   - Automatic JWT Bearer token injection from localStorage
 *   - Global response interceptor for 401 redirect to login
 *   - 15-second timeout to prevent UI hanging
 *
 * Usage:
 *   import api from "@/lib/axios";
 *   const data = await api.get("/courses");
 *   const result = await api.post("/auth/login", { email, password });
 */

import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ─── Request Interceptor: Inject JWT Token ─────────────────────────────────────

api.interceptors.request.use(
  (config) => {
    // Only runs on client side (Next.js can SSR)
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("envistream_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ─── Response Interceptor: Handle Auth Errors ──────────────────────────────────

api.interceptors.response.use(
  (response) => response.data, // Unwrap to { success, message, data }
  (error) => {
    const status = error?.response?.status;
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong. Please try again.";

    // Token expired or invalid — clear auth and redirect to login
    if (status === 401 && typeof window !== "undefined") {
      localStorage.removeItem("envistream_token");
      localStorage.removeItem("envistream_user");
      // Only redirect if not already on auth pages
      if (!window.location.pathname.startsWith("/auth")) {
        window.location.href = "/auth/login";
      }
    }

    return Promise.reject({ status, message, errors: error?.response?.data?.errors });
  }
);

export default api;
