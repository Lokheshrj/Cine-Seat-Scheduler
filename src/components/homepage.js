import React, { useEffect, useState } from 'react';
import {Box, Button, Typography} from '@mui/material';
import MovieItem from './Movies/MovieItem';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../api connector/connector';
const Homepage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    getAllMovies()
    .then((data)=>setMovies(data.movie))
    .catch((err)=>console.log(err));
  },[]);
  return (
    <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
      <Box margin={"auto"} width="80%" height={"60vh"} padding={2}>
        <img 
          src="https://img.nowrunning.com/content/movie/2023/chith-28580/bg_chithha.jpg" 
          alt="Chithha"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      <Box padding={5} margin="auto">
        <Typography variant='h4' textAlign={'center'}>
          Latest Arrivals
          </Typography>
      </Box>
      <Box 
      margin={"auto"}
      display="flex"
      width="80%" 
      height={"100%"}
      justifyContent={"center"} 
      flexWrap={"wrap"} 
      alignItems={"center"} 
      >
      {movies && movies.slice(0,4).map((movie,index) => (
      <MovieItem 
      id={movie._id} 
      title={movie.title} 
      posterUrl={movie.posterUrl} 
      releaseDate={movie.releaseDate} 
      key={index}/>
      ))} 
      </Box>
      <Box 
      display={"flex"}
      padding={5}
      margin="auto">
        <Button 
          LinkComponent={Link} to="/movies" 
          variant="outlined" 
          sx={{margin: "auto", color:"#2b2d42"}} >
          View All
        </Button>
      </Box>
    </Box>
  )
}

export default Homepage