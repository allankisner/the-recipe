import React from 'react'
import { Toolbar, Typography, AppBar } from '@mui/material'
import { Link } from 'react-router-dom'

function Header() {
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white'
  };
  
  return (
    <AppBar  position="relative">
        <Toolbar style={{background:'#618B25'}}> 
          <Link style={linkStyle} to="/" >   
          <Typography variant="h6" color="inherit" wrap="true">
            The Recipe
          </Typography>
          </Link>      
        </Toolbar>
      </AppBar>
  )
}

export default Header