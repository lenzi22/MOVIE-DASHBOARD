
import type { Movie } from "../types/Movie";

const API_URL = "http://localhost:3001/movies";

export async function getMovies(): Promise<Movie[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return response.json();
}

export async function addMovie(movie: Omit<Movie, "id">): Promise<Movie> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  });

  if (!response.ok) throw new Error("Failed to add movie");
  return response.json();
}

export async function updateMovie(id: string, updates: Partial<Movie>): Promise<Movie> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });

  if (!response.ok) throw new Error("Failed to update movie");
  return response.json();
}

export async function deleteMovie(id: string): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error("Failed to delete movie");
}
