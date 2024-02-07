import axios from 'axios';
export const getAllMovies = async()=>{
   const res = await axios
   .get("http://localhost:5000/movie/")
   .catch((err)=>console.log(err));
   if(res.status!==200)
        {return console.log("No Data");}
    const data = await res.data;
    return data;
};

export const sendUserAuthReq= async(data,signup) => {
    const res = await axios
    .post(`http://localhost:5000/user/${signup?"signup":"login"}`,{
        name : signup?data.name : "",
        email : data.email,
        password : data.password
    }).catch((err)=> console.log(err));
    if(res.status!==200 && res.status!==201)
    {
        console.log("Error Occured");
    }
    const resdata = await res.data;
    return resdata;
};

export const sendAdminAuthReq= async(data)=>{
    const res = await axios.post("http://localhost:5000/admin/login",{
        email:data.email,
        password:data.password
    }).catch((err)=>console.log(err));
    if(res.status!==200)
    {
        console.log("Error Occured");
    }
    const resdata = await res.data;
    return resdata;
};

export const getMovieDetails = async(id)=>{
    const res = await axios.get(`http://localhost:5000/movie/${id}`).catch((err)=>console.log(err));
    if(res.status!==200)
    return console.log("Unexpected Error..");
    const resdata = await res.data;
    return resdata;
};

export const newBooking = async(data)=>{
    const res = await axios.post("http://localhost:5000/booking",{
        movie:data.movie,
        seatnumber:data.seatnumber,
        date:data.date,
        user:localStorage.getItem("userId")
    }).catch((err)=>console.log(err));
    if(res.status!==201)
    return console.log("Error Occured at NewBooking API");
    return await res.data;
};

export const getUserBooking = async ()=>{
    const id=localStorage.getItem("userId");
    console.log(id);
    const res = await axios.get(`http://localhost:5000/user/booking/${id}`).catch((err)=>console.log(err));
    if(res.status!==200)
    return console.log("Error occured at API getUserBooking");
    console.log(res.data);
    return await res.data;
};

export const deleteBooking = async(id)=>{
    const res = await axios.delete(`http://localhost:5000/booking/${id}`).catch((err)=>console.log(err));
    if(res.status!==200)
    return console.log("Error occured at API getUserBooking");
    return await res.data;
};

export const getUserDetails = async() =>{
    const id = localStorage.getItem("userId");
    const res = await axios.get(`http://localhost:5000/user/${id}`).catch((err)=>console.log(err));
    if (res.status !== 200)
    return  console.log('API error at getUserDetails');
    const data = await res.data;
    return data;
};

export const addMovie = async(data)=>{
    const res = await axios.post("http://localhost:5000/movie",{
        title:data.title,
        description:data.description,
        cast:data.cast,
        releaseDate:data.releaseDate,
        posterUrl:data.posterUrl,
        genre:data.genre,
        featured:data.featured,
        admin:localStorage.getItem("adminId"),
    },{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    }).catch((err)=>console.log(err));
    if (res.status !== 201)
    return  console.log('API error at addMovie');
    return await res.data; 
};

export const getAdminById =  async()=>
{
    const id=localStorage.getItem("adminId");
    const res = await axios.get(`http://localhost:5000/admin/${id}`)
    .catch((err)=>console.log(err));
    if (res.status !== 200)
    return  console.log('API error at getAdminById');
    return await res.data; 
};