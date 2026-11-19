const API_URL = "http://localhost:3000";

export async function getBookings() {
  const response = await fetch(`${API_URL}/bookings`);

  if (!response.ok) {
    throw new Error("Failed to fetch bookings");
  }

  return response.json();
}