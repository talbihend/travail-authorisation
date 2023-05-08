import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {registerUser} from '../redux/actions';
import { Link, Navigate } from 'react-router-dom';

const SignUp = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {loading, users}=useSelector( state => state.reducer );//fi lcas hethi ne5dem bel root reducer mch bel reducer l3adi , wheka 3leh lazemni na3mel specification lel reducer li n7eb njiba men rootreducer , na3tih state.reducer bch ya5eth state li fi const init li f lcomponent reducer
    
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
      e.preventDefault()
        const newUser = { fullName, email, password }
        dispatch(registerUser(newUser)) //dispatchina l'action, w 3malna register te3 user , t3abet state
    };

  return (
    <div>
<form action="" class="form">
      
      {
        loading ? <h1>loading...</h1>  // yloadi , itha loading 5thet false, yet3adda leli mba3dha 
        
        : users ?  <Navigate  to="/signin"/>//lehne tlinkini l'etape li 9balha lelpage hethi te3 signin, 
        
        : // si non itha ma thamech lpage te3 sign in y3adini lel page te3 sign up
      
      <>

      <h1 class="title-sign-up">Sign up</h1>

      <div class="inputContainer">
      <label for="" class="label">Full Name</label>
      <br/>
      <input  type="text" class="input" placeholder="full Name" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
      </div>

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

      <input onClick={handleSubmit} type="submit" class="Btn-sign-up" value="Sign up"/>
     </>
     }
    </form>

    <Link to="/signin">
    <p>go to sign in </p>
    </Link> 

    </div>
  )
};

export default SignUp