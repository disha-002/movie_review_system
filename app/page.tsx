"use client"
import React from 'react';
import { useState, useEffect } from 'react';

interface Movie {
  id: number;
  movie_name: string;
  review: string;
}

export default function Home() {
  const [movieDetails, setMovieDetails] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch('/api/movies');
        const data = await res.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) return <p>Loading movies...</p>;

  return (
    <>
      <h1>Movie Reviews</h1>
      {movieDetails && movieDetails.length > 0 ? (
        <ul>
          {movieDetails.map((movie) => (
            <li key={movie.id}>
              <h2>{movie.movie_name}</h2>
              <p>{movie.review}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available. Start by writing a review!</p>
      )}
    </>
  );
}
