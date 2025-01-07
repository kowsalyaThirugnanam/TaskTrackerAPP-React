import React from 'react'
import "./AddCategory.css"
import { Button, Typography } from '@mui/material'
import { useFormik } from "formik";
import { } from "yup";
import { AddCategorySchema } from './AddCategorySchema';
const AddCategory = (props) => {
    console.log("props",props);
    

    const onSubmit = (value, action) => {
        // action.resetForm();
        console.log("form submitted");
        props.dialogClose();
        
    }


    const { values, touched, errors, handleChange, handleBlur,handleSubmit } = useFormik({
        initialValues: {
            title: "",
            description: ""
        },
        validationSchema: AddCategorySchema,
        onSubmit

    })

    // console.log("form", values, touched, errors);
    // console.log("handleChange",handleChange.title);


    return (
        <div className='add-category-container'>
            <Typography variant='h6' component="div" sx={
                { color: 'rgb(101 46 199)', fontWeight: 'Bold' }
            }>
                Add New Category
            </Typography>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <label className='form-label'>Title</label>
                    <br />
                    <input type="text" name="title" id="title" className='form-input'
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {(touched.title && errors.title) && <p className='error-display'>{errors.title}</p>} 
                    <br />
                    <label className='form-label'>Description</label>
                    <br />
                    <textarea name="description" id="description" rows="5" className='text-description'
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                     {(touched.description && errors.description) && <p className='error-display'>{errors.description}</p>} 
                    <br />
                    <div className='button-stack'>
                        <Button variant='contained' color='secondary' className='btn' >Clear</Button>
                        <Button variant='contained' color='success' className='btn' type='submit'>Add</Button>
                    </div>


                </form>
            </div>

        </div>
    )
}

export default AddCategory
