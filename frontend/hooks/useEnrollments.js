"use client";

/**
 * useEnrollments Hook
 *
 * Manages course enrollment operations and enrollment state.
 *
 * Usage:
 *   const { enrollments, isLoading, error, loadEnrollments, enroll } = useEnrollments();
 */

import { useState, useCallback } from "react";
import api from "@/lib/axios";

export function useEnrollments() {
  const [enrollments, setEnrollments] = useState([]);
  const [isLoading,   setIsLoading]   = useState(false);
  const [error,       setError]       = useState(null);

  const loadEnrollments = useCallback(async (filters = {}) => {
    setIsLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams(
        Object.fromEntries(Object.entries(filters).filter(([, v]) => v != null))
      ).toString();
      const response = await api.get(`/enrollments/me${params ? `?${params}` : ""}`);
      setEnrollments(response.data);
    } catch (err) {
      setError(err.message || "Failed to load enrollments.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const enroll = useCallback(async (courseId) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.post("/enrollments", { courseId });
      await loadEnrollments();
      return response.data;
    } catch (err) {
      setError(err.message || "Enrollment failed.");
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [loadEnrollments]);

  const isEnrolled = useCallback(
    (courseId) => enrollments.some((e) => e.courseId === courseId && e.status !== "DROPPED"),
    [enrollments]
  );

  return { enrollments, isLoading, error, loadEnrollments, enroll, isEnrolled };
}
