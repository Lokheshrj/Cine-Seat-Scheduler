import React from 'react'
import Authform from './authform'
import { sendUserAuthReq } from '../../api connector/connector';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const onResReceived = (data)=>{
    console.log(data);
    dispatch(userActions.login());
    localStorage.setItem("userId",data.id);
    navigate("/");
  }
  const getData=(data)=>{
  sendUserAuthReq(data.input,data.signup)
  .then(onResReceived)
  .catch((err)=>console.log(err));
  };
  return (
    <div>
      <Authform onSubmit={getData} isAdmin={false} />
    </div>
  );
};

export default Auth;