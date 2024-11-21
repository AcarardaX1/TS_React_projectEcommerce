import React from 'react';
import "../css/RegisterPage.css"
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import {Button} from "@mui/material";


function RegisterPage() {
    return (
        <div className = 'register'>
            <div className="main" >
                <form>
                    <div  className='form-div'>
                        <TextField
                            sx = {{marginBottom: '12px'}}
                            id="username"
                            type = 'email'
                            placeholder="E-mail Address"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            < IoPersonCircleSharp />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            variant="outlined"
                        />

                        <TextField
                            sx = {{marginBottom: '8px'}}
                            id="password"
                            type="password"
                            placeholder="Please indicate password"
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            < FaLock />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            variant="standard"
                        />

                        <div>
                            <Button size='medium' sx = {{textTransform: 'none'}} variant = 'contained' color = 'info'> Register</Button>
                            <Button sx = {{marginLeft: '2px'}}>Clear</Button>

                        </div>

                    </div>
                </form>
            </div>

        </div>
    );
}

export default RegisterPage;