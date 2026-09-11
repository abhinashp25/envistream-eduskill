"use client";

/**
 * useAuth Hook
 *
 * Convenience wrapper around AuthContext.
 * Provides the current user state and auth actions.
 *
 * Usage:
 *   const { user, login, logout, isAuthenticated, isAdmin } = useAuth();
 */

export { useAuthContext as useAuth } from "@/context/AuthContext";
