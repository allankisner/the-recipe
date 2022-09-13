import React from 'react'
import { Toolbar, Typography, AppBar } from '@mui/material'
import { Link } from 'react-router-dom'
import {FaHotjar} from 'react-icons/fa'

function Header() {
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };
  
  return (
    <AppBar  position="relative">
        <Toolbar style={{background:'#333232'}}> 
          <Link style={linkStyle} to="/" >         
          <Typography variant="h6" color="inherit" wrap="true">
          <FaHotjar />   
            The Recipe
          </Typography>
          </Link>      
        </Toolbar>
      </AppBar>
  )
}

export default Header