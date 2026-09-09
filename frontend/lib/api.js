// Centralized fetch layer for talking to the Express backend.
// Currently unused by the homepage (which reads from data/homeContent.js).
// Wire this up once course/internship/enquiry endpoints exist on the backend.

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// 10-second timeout — prevents the UI from hanging if the backend is down.
const REQUEST_TIMEOUT_MS = 10_000;

async function request(path, options = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch(`${API_URL}${path}`, {
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      ...options,
    });

    if (!res.ok) {
      throw new Error(`API request failed: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error(`API request timed out after ${REQUEST_TIMEOUT_MS / 1000}s`);
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }
}

// Example future usage:
// export const getCourses = () => request("/courses");
// export const getCourseBySlug = (slug) => request(`/courses/${slug}`);
// export const submitEnquiry = (data) =>
//   request("/enquiries", { method: "POST", body: JSON.stringify(data) });

export default request;
