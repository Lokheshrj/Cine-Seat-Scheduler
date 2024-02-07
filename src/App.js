import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Homepage from "./components/homepage.js";
import Movies from "./components/Movies/Movies.js";
import Admin from "./components/Auth/Admin.js";
import Auth from "./components/Auth/auth.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adminActions, userActions } from "./store";
import Booking from "./components/Bookings/Booking";
import Userprofile from "./components/profile/user_profile";
import Addmovie from "./components/Movies/Addmovie";
import Adminprofile from "./components/profile/admin_profile";
function App() {
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state)=> state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state)=> state.user.isLoggedIn);
  console.log("isAdminLoggedIn",isAdminLoggedIn);
  console.log("isUserLoggedIn",isUserLoggedIn);
  useEffect(()=>{
    if(localStorage.getItem("userId"))
    {
      dispatch(userActions.login());
    }
    else if(localStorage.getItem("adminId"))
    {
      dispatch(adminActions.login());
    }
  },[dispatch]);
  return (
    <div >
      <Header/>
      <section>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/movies" element={<Movies/>}/>
          {!isUserLoggedIn && !isAdminLoggedIn && ( 
          <>
            {" "}
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/auth" element={<Auth/>}/> 
          </>
          )}
          {isUserLoggedIn && !isAdminLoggedIn && (
          <>
          {" "} 
          <Route path="/user" element={<Userprofile/>}/>
          <Route path="/booking/:id" element={<Booking/>}/>
          </>
          )}

          {isAdminLoggedIn && !isUserLoggedIn && (
          <>
          {" "}
          <Route path="/add" element={<Addmovie/>}/>
          <Route path="/user-admin" element={<Adminprofile/>}/>
          </>
          )}
        </Routes>
      </section>
    </div>
  );
}
export default App;