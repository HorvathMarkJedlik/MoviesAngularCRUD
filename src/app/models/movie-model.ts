export interface MovieModel {
  id: string | undefined;
  title: string;
  director: string;
  release_year: number;
  rating: number;
  created_at: string;
  updated_at: string;
  genre_id: number;
}
