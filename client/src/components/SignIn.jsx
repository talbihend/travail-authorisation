import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions';
import { Link, Navigate } from 'react-router-dom';



const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {loading}=useSelector( state => state.reducer );

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
      e.preventDefault()
        const newUser = {  email, password }
        dispatch(loginUser(newUser))
    }; 

  return (
    <div>
    <form action="">

    {
        loading ? <h1>loading...</h1> 
        
        : localStorage.getItem('token') ?<Navigate  to="/profile"/>
      
        : 
      
      <>

        <h1 class="title-sign-up">Sign In  </h1>

      <div class="inputContainer">
      <label for="" class="label">Email</label>
      <br/>
      <input  type="text" class="input" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>

      <div class="inputContainer">
      <label for="" class="label">Password</label>
      <br/>
      <input  type="text" class="input" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>

      <button onClick={handleSubmit} class="Btn-sign-up"  >Sign In</button>


      {/* <Link to="/profile"> 
      <button onClick={handleSubmit} class="Btn-sign-up"  >Sign In</button>
      </Link> */}
      </>
     }
    </form>

      <Link to="/">
    <p>back to sign up </p>
    </Link>
    </div>
  )
}

export default SignIn