import React from 'react'
import { Toolbar, Typography, AppBar } from '@mui/material'

function Header() {
  return (
    <AppBar  position="relative">
        <Toolbar>          
          <Typography variant="h6" color="inherit" wrap="true">
            The Recipe
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header