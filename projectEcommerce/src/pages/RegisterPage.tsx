import React from 'react';
import "../css/RegisterPage.css"
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import {Button, colors} from "@mui/material";
import {useFormik} from "formik";
import {registerPageSchema} from "../schemas/RegisterPageSchema.tsx";
import RegisterPageService from "../services/RegisterPageService.tsx";
import registerPageService from "../services/RegisterPageService.tsx";
import {UserType} from "../types/Types.tsx";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
//import {Simulate} from "react-dom/test-utils";
//import submit = Simulate.submit;



function RegisterPage() {

    const navigate = useNavigate();

    const submit  = async(values:any, actions:any) => {
        try {
            const payload :UserType = {
                username:values.username,
                password:values.password
            }
           const response= await registerPageService.register(payload);
            if(response){
                clear();
                toast.success("User registration successfully completed.");
                navigate("/login");
            }
        } catch (error){
                toast.error("Failed to register.");
        }
    }

    const { values, handleSubmit, handleChange, errors, resetForm } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: submit,
        validationSchema: registerPageSchema, // Moved inside the configuration object
    });


    const clear = () => {
        resetForm(); // Reset the form fields to their initial values
    };

    return (
        <div className = 'register'>
            <div className="main" >
                <form onSubmit={handleSubmit} >
                    <div  className='form-div'>
                        <TextField
                            sx = {{marginBottom: '25px'}}
                            name="username"
                            id = "username"
                            placeholder="E-mail Address"
                            value={values.username}
                            onChange={handleChange}
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
                            helperText={errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
                        />

                        <TextField
                            sx = {{marginBottom: '25px'}}
                            name="password"
                            id="password"
                            placeholder="Please indicate password"
                            value={values.password}
                            onChange={handleChange}
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
                            helperText={errors.password && <span style={{color : 'red'}}>{errors.password}</span>}

                        />

                        <div>
                            <Button type='submit' size='medium' sx = {{textTransform: 'none'}}
                                    variant = 'contained' color = 'info'> Register</Button>
                            <Button onClick={clear} sx = {{marginLeft: '12px'}}>Clear</Button>

                        </div>

                    </div>
                </form>
            </div>

        </div>
    );
}

export default RegisterPage;