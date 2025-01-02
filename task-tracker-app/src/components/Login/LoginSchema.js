import * as yup from "yup";

export const LoginSchema = yup.object().shape(
    {
        email: yup.string().email("Please enter valid email").required("Required"),
        password:yup.string().min(3).required("Required")
    }
)