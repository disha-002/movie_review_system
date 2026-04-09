"use client"
import React from 'react';
import { useState } from 'react';

export default function Home() {
  const [movieDetails,setmovieDetails]=useState({Title:'',Year:'',Runtime:''});
  const handleSubmit=async(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    
    const formData=new FormData(event.currentTarget);
    const movie=formData.get("movie");
    console.log(movie);
    const response=await fetch('api/movie',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({movie})
    })
    console.log(response);
    const data=await response.json();
    if(data.Title && data.Year && data.Runtime){
      setmovieDetails({Title:data.Title,Year:data.Year,Runtime:data.Runtime});
    }
    else{
      setmovieDetails({Title:'Movie not found',Year:'',Runtime:''});
    }
  }
  return (
    <>
    <h1>Search for a movie</h1>
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      name ="movie"
      placeholder="movie name"/>
      <button type="submit">submit</button>
    </form>
    {(movieDetails.Title && (
      <div>
        <h2>{movieDetails.Title}</h2>
        <p>Year: {movieDetails.Year}</p>
        <p>Runtime: {movieDetails.Runtime}</p>
      </div>
    ))}
    </>
  );
}
