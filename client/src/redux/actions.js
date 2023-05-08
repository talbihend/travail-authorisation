import { GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "./actionTypes"
import axios from 'axios'

export const registerUser = (newUser) => async(dispatch)=> { //newUser heka l' user jdid li bch nda5louh (fih mail w mdp w fullName)
         dispatch({
            type:REGISTER
         })
         try {
            const {data} = await axios.post('/user/register',newUser);   // destruction lel object te3 reponse
            dispatch ({
                type:REGISTER_SUCCESS,
                payload:data
            });
        } 
         catch (error) {
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data,
            });
         }
};

export const loginUser = (user) => async(dispatch)=> {
    dispatch ({
        type:LOGIN
    })
    try {
        const {data} = await axios.post("/user/login", user);
        localStorage.setItem('token', data.token) //token lazma dima yemchi lel local storage mte3 ay application //user.token : nemchi lel user.controller.js w nchouf login wnthabet ch3endi fih : 3endi token w 3endi user{fullName,email,id}, haka mnin jebna token
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data, //ou bien payload: data.user,
        })
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data,
        });
    }
}

export const getProfile = () => async(dispatch) => {
    const token = localStorage.getItem("token"); //heka li 3amartou fi localStorage (elli howa token) bch na5tha lhne
    const config = {
        headers:{
            Authorization:token
        }
    }
    dispatch({
        type:GET_PROFILE
    })
    try {
    const {data} = await axios.get("/user/auth", config);
    dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: GET_PROFILE_FAIL,
            payload: error.response.data,
        });
    }
};
