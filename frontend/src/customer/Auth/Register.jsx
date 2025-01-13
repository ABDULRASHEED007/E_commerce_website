import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { getUser, register } from '../../State/Auth/Action';

const Register = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const jwt = localStorage.getItem("jwt")
const {auth} = useSelector(store => store)

    useEffect(() => {
        if(jwt) {
            dispatch(getUser(jwt))

        }
    },[jwt,auth.jwt])


    // useEffect(() => {

    // }, [])



    const handleSubmit = (event) => {
        event.preventDefault();
        
        const data = new FormData(event.currentTarget);

        const userData = {
            firstName : data.get("firstName"),
            lastName : data.get("lastName"),
            email : data.get("email"),
            password : data.get("password")
        }
        dispatch(register(userData))

    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <TextField
                required
                id='firstName'
                name='firstName'
                label="First Name"
                fullWidth
                autoComplete='given-name'
                />
                </Grid>

                <Grid item xs={12} sm={6}>
                <TextField 
                required
                id='lastName'
                name='lastName'
                label="Last Name"
                fullWidth
                autoComplete='given-name'
                />
                </Grid>

                <Grid item xs={12}>
                <TextField 
                required
                id='email'
                name='email'
                label="Email"
                fullWidth
                autoComplete='email'
                />
                </Grid>

                <Grid item xs={12}>
                <TextField 
                required
                id='password'
                name='password'
                label="Password"
                fullWidth
                autoComplete='password'
                />
                </Grid>

                <Grid item xs={12}>
               <Button 
               className=' w-full' 
               type='submit'
               variant='contained'
               size='large'
               color='secondary'
               sx={{padding: ".8rem 0"}}
               >
                Register
               </Button>
                </Grid>

            </Grid>

        </form>
        <div className='flex justify-center flex-col items-center'>
            <div className='pt-2 pb-0 flex justify-center items-center'>
                <p>if you have already account ?</p>
                <button className='ml-5 text-[#9155FD] bg-transparent  hover:underline'  onClick={() => navigate("/login")}>
                Login
                </button>
            </div>
        </div>

    </div>
  )
}

export default Register



