import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { getProfile } from '../redux/actions';

const Profile = () => {
    const { users, isAuth}=useSelector( state => state.reducer );
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getProfile())
    }, []);

  return (
    <div>
      {
        !isAuth ? <Navigate to="/profile"/> :
        
        <div>
             <h3> hello {users.fullName}</h3>
        </div>
      }
    </div>
  )
}

export default Profile