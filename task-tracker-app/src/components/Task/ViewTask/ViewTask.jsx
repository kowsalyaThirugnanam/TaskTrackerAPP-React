import React, { useState } from 'react'
import Card from '@mui/material/Card';
import { Button, CardContent, Paper, Stack, TableContainer, TableHead, Typography, Table, TableRow, TableCell, TableBody, IconButton, Dialog } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import "./ViewTask.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddTask from '../AddTask/AddTask';


const ViewTask = () => {
    const tableHeader = ['Title', 'Description', 'Assigned to', 'Priority', 'Due date', 'Status', 'Edit', 'Delete'];
    const [open, setOpen] = useState(false);

    const handleAddTaskOpen = () => {
        console.log("Open Task");
        setOpen(true)
    }

    const handleAddTaskClose = () => {
        console.log("Close Task");
        setOpen(false)
    }

    const tableData = [
        createData('Frozen yoghurt', 'Task1', 'user1', 'High', '2025-1-6', 'In Progress'),
        createData('Frozen yoghurt', 'Task1', 'user1', 'High', '2025-1-6', 'In Progress'),
        createData('Frozen yoghurt', 'Task1', 'user1', 'High', '2025-1-6', 'In Progress'),
    ];

    function createData(title, description, assignedTo, priority, dueDate, status) {
        return { title, description, assignedTo, priority, dueDate, status };
    }

    return (
        <div>
            <div className='view-task-container'>
                <Card>
                    <CardContent>
                        <Stack direction="row" spacing={10} sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <div>
                                <Typography variant='h6' component="div" fontWeight="Bold">
                                    Category
                                </Typography>
                                <Typography variant='h6' component="div" fontWeight="500" fontSize="16px">
                                    Title:
                                </Typography>
                                <Typography variant='h8' component="div" fontWeight="300" fontSize="14px">
                                    Description:
                                </Typography>
                            </div>
                            <div>
                                <Button variant="outlined" startIcon={<AddIcon />} onClick={handleAddTaskOpen}>
                                    Add Task
                                </Button>
                            </div>
                        </Stack>
                    </CardContent>
                </Card>
                <div className='table-container'>
                    <TableContainer component={Paper} elevation={10}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {tableHeader.map((list, index) => {
                                        return (<TableCell key={index}>{list} </TableCell>)
                                    })}

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData.map((li, index) => {
                                    return <TableRow key={index}>
                                        <TableCell>
                                            {li.title}
                                        </TableCell>
                                        <TableCell>
                                            {li.description}
                                        </TableCell>
                                        <TableCell>
                                            {li.assignedTo}
                                        </TableCell>
                                        <TableCell>
                                            {li.priority}
                                        </TableCell>
                                        <TableCell>
                                            {li.dueDate}
                                        </TableCell>
                                        <TableCell>
                                            {li.status}
                                        </TableCell>
                                        <TableCell>
                                            <IconButton aria-label="delete" color='secondary'>
                                                <EditIcon />
                                            </IconButton> </TableCell>
                                        <TableCell>
                                            <IconButton aria-label="delete" color='error'>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>



                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <Dialog open={open} onClose={handleAddTaskClose}>
                <AddTask dialogClose={handleAddTaskClose} />
            </Dialog>
        </div>

    )
}

export default ViewTask
