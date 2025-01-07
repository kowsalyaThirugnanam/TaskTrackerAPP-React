import { Stack, Typography } from '@mui/material'
import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './AddTask.css'

const AddTask = () => {
    const [value, setValue] = React.useState(dayjs());
    const [priority, setPriority] = React.useState('');
    const [status, setStatus] = React.useState('')

    const handleChange = (event) => {
        // setAge(event.target.value as string);
    };
    return (
        <div className='add-category-container'>
            <Typography variant='h6' component="div" sx={
                { color: 'rgb(101 46 199)', fontWeight: 'Bold' }
            }>Add Task</Typography>
            <div className='form-container'>
                <form>
                    <label className='form-label'>Title </label>
                    <br />
                    <input type="text" name="text" id="text" className='form-input' />
                    <br />
                    <label className='form-label'>Description</label>
                    <br />
                    <textarea name="description" id="description" rows="3" className='text-description'></textarea>
                    <br />
                    <label className='form-label'>Assign to </label>
                    <br />
                    <input type="text" name="assignTo" id="assignTo" className='form-input' />
                    <br />
                    <label className='form-label'>Due Date</label>
                    <br />
                    <div className='form-date-picker'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker', 'DatePicker']}>

                                <DatePicker
                                    label="Choose Date"
                                    value={value}
                                    onChange={(newValue) => setValue(newValue)}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>

                    <br />
                    <Stack direction="row" spacing={10} sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <div>
                            <label className='form-label'>Priority</label>
                            <br />
                            <div className='form-date-picker'>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={priority}
                                label="Priority"
                                onChange={handleChange}
                                sx={{ width: "150px" }}
                            >
                                <MenuItem value="Low">Low</MenuItem>
                                <MenuItem value="Medium">Medium</MenuItem>
                                <MenuItem value="High">High</MenuItem>
                            </Select>
                            </div>
                        </div>
                        <div>
                            <label className='form-label'>Status</label>
                            <br />
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={priority}
                                label="Priority"
                                onChange={handleChange}
                                sx={{ width: "150px" }}
                            >
                                <MenuItem value="ToDO">To DO</MenuItem>
                                <MenuItem value="InProgress">In Progress</MenuItem>
                                <MenuItem value="Done">Done</MenuItem>
                            </Select>
                        </div>
                    </Stack>



                </form>

            </div>

        </div>
    )
}

export default AddTask

