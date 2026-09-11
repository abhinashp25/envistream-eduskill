"use client";

/**
 * AuthContext — Global Authentication State
 *
 * Provides the current user, login, logout, and loading state
 * to all components via React Context.
 *
 * Usage:
 *   import { useAuthContext } from "@/context/AuthContext";
 *   const { user, login, logout, isLoading } = useAuthContext();
 *
 * Wrap your layout with <AuthProvider> to enable this context.
 */

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import api from "@/lib/axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // ─── Rehydrate from localStorage on mount ──────────────────────────────────

  useEffect(() => {
    const stored = localStorage.getItem("envistream_user");
    const token  = localStorage.getItem("envistream_token");

    if (stored && token) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("envistream_user");
        localStorage.removeItem("envistream_token");
      }
    }
    setIsLoading(false);
  }, []);

  // ─── Login ─────────────────────────────────────────────────────────────────

  const login = useCallback(async (email, password) => {
    const response = await api.post("/auth/login", { email, password });
    const { user: userData, token } = response.data;

    localStorage.setItem("envistream_token", token);
    localStorage.setItem("envistream_user", JSON.stringify(userData));
    setUser(userData);

    return userData;
  }, []);

  // ─── Register ───────────────────────────────────────────────────────────────

  const register = useCallback(async (name, email, password, role = "STUDENT") => {
    const response = await api.post("/auth/register", { name, email, password, role });
    const { user: userData, token } = response.data;

    localStorage.setItem("envistream_token", token);
    localStorage.setItem("envistream_user", JSON.stringify(userData));
    setUser(userData);

    return userData;
  }, []);

  // ─── Logout ─────────────────────────────────────────────────────────────────

  const logout = useCallback(() => {
    localStorage.removeItem("envistream_token");
    localStorage.removeItem("envistream_user");
    setUser(null);
  }, []);

  // ─── Refresh User From API ──────────────────────────────────────────────────

  const refreshUser = useCallback(async () => {
    try {
      const response = await api.get("/auth/me");
      const freshUser = response.data;
      localStorage.setItem("envistream_user", JSON.stringify(freshUser));
      setUser(freshUser);
      return freshUser;
    } catch {
      logout();
    }
  }, [logout]);

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    isStudent:    user?.role === "STUDENT",
    isInstructor: user?.role === "INSTRUCTOR",
    isAdmin:      user?.role === "ADMIN",
    login,
    register,
    logout,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuthContext must be used within an <AuthProvider>");
  }
  return ctx;
}
