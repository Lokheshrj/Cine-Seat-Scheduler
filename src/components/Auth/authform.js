import React, { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {Dialog, Typography, Box, FormLabel, TextField, Button, IconButton} from '@mui/material';
import { Link } from 'react-router-dom';
const Authform = ({onSubmit,isAdmin}) => 
{
    const [input, setInput] = useState({name:"",email:"",password:""});
    const [isSignup, setIsSignup] = useState(false);
    const handleChange = (e) =>{
        setInput((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,

        }));
    };
    const handleSubmit=(e)=>{
        e.preventDefault(); 
        onSubmit({input,signup:isAdmin?false:isSignup});
    }
  return (
    <Dialog PaperProps={{style:{borderRadius:20}}} open={true}>
        <Box sx={{ml: 'auto',padding:1}}>
            <IconButton LinkComponent={Link} to="/">
                <CloseRoundedIcon/>
            </IconButton>
        </Box>
        <Typography variant='h4' textAlign={"center"} padding={2}>
        {!isSignup?"Login":"Sign Up"}
        </Typography>
        <form onSubmit={handleSubmit}>
            <Box 
            padding={6}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            width={400}
            margin={"auto"}
            alignContent={"center"} 
            >
                {!isAdmin && isSignup &&(<> {" "} <FormLabel sx={{mt:1,mb:1}}>Name</FormLabel>
                <TextField value={input.name} onChange={handleChange} margin='normal' variant='standard' type='text' name='name' /> </>)}
                <FormLabel sx={{mt:1,mb:1}}>Email</FormLabel>
                <TextField value={input.email} onChange={handleChange} margin='normal' variant='standard' type='email' name='email' />
                <FormLabel sx={{mt:1,mb:1}}>Password</FormLabel>
                <TextField value={input.password} onChange={handleChange} margin='normal' variant='standard' type='password' name='password' />
            <Button  sx={{mt:2,borderRadius:10,bgcolor:"#2b2d42"}} type='submit' fullWidth variant='contained'>{!isSignup?"Login":"Sign Up"}</Button>
            {!isAdmin && <Button onClick={()=>setIsSignup(!isSignup)}  sx={{mt:2,borderRadius:10}} fullWidth >Switch To {isSignup?"Login":"Sign Up"}</Button>}
            </Box>
        </form>  
    </Dialog>    
  );
};

export default Authform;