import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const User = () => {

  const dispatch = useDispatch()

  const nome = useSelector((state:any) => state.user.name)
  const username = useSelector((state:any) => state.user.username)
  const email = useSelector((state:any) => state.user.email)

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => dispatch({type: "GET_USER", payload:response.data}))
  },[dispatch])
 

  return (
    <div>
      <h1>{nome}</h1>
      <strong>{username}</strong>
      <p>{email}</p>
    </div>
  )
}

export default User;