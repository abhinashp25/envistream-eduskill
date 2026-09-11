"use client";

/**
 * useCourses Hook
 *
 * Fetches paginated, filterable course listings from the backend.
 *
 * Usage:
 *   const { courses, isLoading, error, fetchCourses, meta } = useCourses();
 *   fetchCourses({ category: "AI", level: "BEGINNER", page: 1 });
 */

import { useState, useCallback } from "react";
import api from "@/lib/axios";

export function useCourses() {
  const [courses,   setCourses]   = useState([]);
  const [meta,      setMeta]      = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error,     setError]     = useState(null);

  const fetchCourses = useCallback(async (filters = {}) => {
    setIsLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams(
        Object.fromEntries(Object.entries(filters).filter(([, v]) => v != null && v !== ""))
      ).toString();

      const response = await api.get(`/courses${params ? `?${params}` : ""}`);
      setCourses(response.data);
      setMeta(response.meta);
    } catch (err) {
      setError(err.message || "Failed to load courses.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getCourseBySlug = useCallback(async (slug) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.get(`/courses/${slug}`);
      return response.data;
    } catch (err) {
      setError(err.message || "Course not found.");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { courses, meta, isLoading, error, fetchCourses, getCourseBySlug };
}
