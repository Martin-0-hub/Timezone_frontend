// src/api/timezoneApi.ts
export const getTimezones = async () => {
  const token = localStorage.getItem("accessToken");
  if (!token) throw new Error("No token found");

  const res = await fetch("http://localhost:8000/api/timezones/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.detail || "Failed to fetch timezones");
  }

  return res.json(); // returns list of timezones
};
