import React from 'react'
import { Link, Outlet } from "react-router-dom";
import Header from '../Header/Header';
import './NavBar.css';
import logo2 from "../../assets/logo2.png";
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import {
    Box, CssBaseline, Divider, Drawer, IconButton, ListItem, ListItemButton, ListItemText,
    Toolbar, List, MenuItem, Badge
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;
// below Main ,AppBar, DrawerHeader - will provide the styles , Get it from MUI(Material UI Persistent Drawer functionality)
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    transition: theme.transitions.create('margin', {
                        easing: theme.transitions.easing.easeOut,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                    marginLeft: 0,
                },
            },
        ],
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


const NavBar = () => {
    const navigate = useNavigate();
    const navList = ['Dashboard'];
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const appColor = {
        background: "#291847"
    }
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const logout = () => {
        console.log("Logout");

    }

    const navigationTo = (params)=>{
        console.log("navigationTo",params);
        switch (params) {
            case "Dashboard":
                navigate("/navbar/dashboard");
                break;
        
            default:
                break;
        }
        
    }
    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} style={appColor}>
                <Toolbar>
                    <IconButton color='inherit'
                        onClick={handleDrawerOpen}
                        sx={[
                            {
                                mr: 2,
                            },
                            open && { display: 'none' },
                        ]} >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' noWrap component="div">
                        TaskTracker app
                    </Typography>
                    <AccountCircleIcon className='user-account' />

                    <p className='user-name'>UserName</p>
                    <IconButton color="inherit" onClick={logout}>
                        <LogoutIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}>
                <DrawerHeader>
                    <div>
                        <img src={logo2} alt="" className='logo' />
                    </div>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {navList.map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={()=>navigationTo(text)}>
                                <ListItemIcon>
                                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open} style={{top: "64px"}}>
                <DrawerHeader/>
                <Outlet />
            </Main>
        </Box>
    )
}

export default NavBar
