import React from 'react'
import Stack from '@mui/material/Stack';
// import logo2 from "../../assets/logo2.png";
import "./Header.css";
const Header = () => {
    return (
        <div className='container'>
            {/* <div>
                <img src={logo2} alt="" className='logo' />
            </div> */}
            <Stack direction="row" spacing={2} sx={{
                justifyContent: "flex-end",
                alignItems: "center",
            }} className='stack-container'>

                <p>UserName</p>
                {/* <p>Item1</p> */}
            </Stack>
        </div>
    )
}

export default Header
