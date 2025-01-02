import React from 'react'
import './Dashboard.css';
import { Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import {
  Box, CssBaseline, Divider, Drawer, IconButton, ListItem, ListItemButton, ListItemText,
  Toolbar, List, MenuItem, Badge
} from '@mui/material'
const Dashboard = () => {
  return (
    <div>
      <Stack direction="row" spacing={10} padding={2}>
        <Typography variant='h5' noWrap component="div">
          Category
        </Typography>
        <Button variant="outlined" startIcon={<AddIcon />}>
          Add Category
        </Button>
      </Stack>
      <Divider />
      <div  >
        {['1', '2', '3'].map((index) => {
          {
            return (
              <div>
                <Card sx={{ margin: "10px" }}>
                  <CardContent>
                    <Typography variant='h6' component="div" fontWeight="Bold">
                      Category A
                    </Typography>
                    <Typography component="div" fontSize="14px" >
                      Category A
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant='outlined' color="secondary" startIcon={<SendIcon />}>View Task</Button>
                    <Button size="small" variant='outlined' startIcon={<DeleteIcon />} color="error">Delete Task</Button>
                  </CardActions>
                </Card>
                <Divider />
              </div>
            )
          }
        })}

      </div>
    </div>
  )
}

export default Dashboard
