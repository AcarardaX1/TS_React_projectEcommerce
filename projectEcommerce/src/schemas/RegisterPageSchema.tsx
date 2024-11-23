import * as yup from "yup";


export const registerPageSchema = yup.object().shape({

    username : yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),



})