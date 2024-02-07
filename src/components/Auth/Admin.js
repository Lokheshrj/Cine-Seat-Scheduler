import React from 'react'
import Authform from './authform';
import { sendAdminAuthReq } from '../../api connector/connector';
import { useDispatch } from 'react-redux';
import { adminActions } from '../../store';
import { useNavigate } from 'react-router-dom';
const Admin = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const onResReceived= (data)=>{
    console.log(data);
    dispatch(adminActions.login());
    localStorage.setItem("adminId",data.id);
    localStorage.setItem("token",data.token);
    navigate("/");
  };
  const getData = (data)=>{
    console.log("Admin",data);
    sendAdminAuthReq(data.input)
    .then(onResReceived)
    .catch((err)=>console.log(err));
  };
  return (
    <div><Authform onSubmit={getData} isAdmin={true}/></div>
  );
};

export default Admin;