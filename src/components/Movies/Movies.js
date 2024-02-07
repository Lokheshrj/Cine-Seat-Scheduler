import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { getAllMovies } from '../../api connector/connector.js';
import MovieItem from './MovieItem.js';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    getAllMovies()
    .then((data)=>setMovies(data.movie))
    .catch((err)=>console.log(err));
  },[]);
  return (
    <Box
    margin={"auto"}
    marginTop={4}
    >
    <Typography
    margin={"auto"}
    variant='h4'
    padding={2}
    width={"50%"}
    bgcolor='red'
    color="white"
    textAlign={"center"}
    >
      Currently Streaming..
    </Typography>
    <Box 
      width={"100%"} 
      margin={"auto"} 
      marginTop={5}
      display={"flex"} 
      justifyContent="center"
      flexWrap={"wrap"}
      >
        {movies && movies.map((movie,index) => (
      <MovieItem 
      id={movie._id} 
      title={movie.title} 
      posterUrl={movie.posterUrl} 
      releaseDate={movie.releaseDate} 
      key={index}/>
      ))} 
    </Box>
    </Box>
  )
}

export default Movies