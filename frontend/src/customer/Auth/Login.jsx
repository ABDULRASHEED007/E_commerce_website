import { Button, Grid, TextField } from '@mui/material'
// import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../State/Auth/Action';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

   


    

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const data = new FormData(event.currentTarget);

        const userData = {
            email : data.get("email"),
            password : data.get("password")
        }

        dispatch(login(userData));
        console.log(userData)

    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                

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
               color="secondary"
               sx={{padding: ".8rem 0"}}
               >
                Login
               </Button>
                </Grid>
            </Grid>
        </form>

        <div className='flex justify-center flex-col items-center'>
            <div className='pt-4 pb-0 flex justify-center items-center'>
                <p>Create account ?</p>
                <button className='ml-5 text-[#9155FD]  bg-transparent hover:underline'  onClick={() => navigate("/register")}>
                Register
                </button>
            </div>
        </div>

    </div>
  )
}

export default Login