import React, { useState } from 'react';
import {Box, Button, Checkbox, FormLabel, TextField, Typography} from '@mui/material';
import { addMovie } from '../../api connector/connector';
const labelProps = {
  mt:1,
  mb:1
}
const Addmovie = () => {
  const [input, setInput] = useState({title:"",description:"",posterUrl:"",genre:"",releaseDate:"",featured:false});
  const [cast, setCast] = useState([]);
  const [cas, setCas] = useState("");
  const handleChange=(e)=>
  {
    setInput((prevstate)=>({...prevstate,[e.target.name]:e.target.value}))
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(input,cast);
    addMovie({...input,cast})
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box width={'50%'} padding={10} margin={'auto'} display={'flex'} flexDirection={'column'} boxShadow={'10px 10px 20px #ccc'}>
          <Typography textAlign={'center'} variant='h5' fontFamily={'verdana'}>
          Add New Movie
          </Typography>
          <FormLabel sx={{labelProps}} >Title</FormLabel>
          <TextField value={input.title} onChange={handleChange} name="title" variant='standard' margin='normal' />

          <FormLabel sx={{labelProps}} >Description</FormLabel>
          <TextField value={input.description} onChange={handleChange} name="description" variant='standard' margin='normal' />

          <FormLabel sx={{labelProps}} >Poster URL</FormLabel>
          <TextField value={input.posterUrl} onChange={handleChange} name="posterUrl" variant='standard' margin='normal' />

          <FormLabel sx={{labelProps}} >Genre</FormLabel>
          <TextField value={input.genre} onChange={handleChange} name="genre" variant='standard' margin='normal' />

          <FormLabel sx={{labelProps}} >Release Date</FormLabel>
          <TextField type='date' value={input.releaseDate} onChange={handleChange} name="releaseDate" variant='standard' margin='normal' />

          <FormLabel sx={{labelProps}} >Cast</FormLabel>
          <Box display={'flex'}>
          <TextField value={cas} name="cast" onChange={(e)=>setCas(e.target.value)} variant='standard' margin='normal' /> 
          <Button onClick={()=>{setCast([...cast,cas]);setCas("");}}>Add</Button>
          </Box>
          <FormLabel sx={{labelProps}} >Featured</FormLabel>
          <Checkbox name='featured' checked={input.featured} onClick={(e)=>setInput((prevstate)=>({...prevstate,featured:e.target.checked}))} sx={{marginRight:"auto"}}/>
          <Button type='submit' variant='contained' sx={{width:"30%",margin:'auto',bgcolor:"#2b2d42",":hover":{bgcolor:"#121217"} }}>Add Movie</Button>
        </Box> 
      </form>
    </div>
  )
};

export default Addmovie;