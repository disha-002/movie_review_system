"use client"
import React from 'react';
import { useState } from 'react';

export default function Review() {
  const [movieTitle, setMovieTitle] = useState({Title:''});
  const [review, setReview] = useState({review:''});
  
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const movie = formData.get("movie");
    const response = await fetch('/api/movie', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({movie})
    })
    const data = await response.json();
    if(data.Title) {
      setMovieTitle({Title: data.Title});
    } else {
      setMovieTitle({Title: 'Movie not found'});
    }
  }

  const handleReviewSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const review = formData.get("review");
    const response = await fetch('/api/review', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({Title: movieTitle.Title, review})
    })
    const data = await response.json();
    if(data.review){
      setReview({review: data.review});
    }
    console.log(data);
  }

  return (
    <>
      <h1>Search for a movie</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="movie"
          placeholder="movie name"
        />
        <button type="submit">submit</button>
      </form>
      {movieTitle.Title && (
        <>
          <h2>{movieTitle.Title}</h2>
          <form onSubmit={handleReviewSubmit}>
            <input type="text" name="review" placeholder="write your review here"/>
            <button type="submit">submit review</button>
          </form>
        </>
      )}
      {review.review&& (
        <>
          <h3>Review:</h3>
          <p>{review.review}</p>
        </>
      )}
    </>
  );
}