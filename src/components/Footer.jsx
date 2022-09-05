import React from 'react'
import {Box, Typography, Link } from '@mui/material'

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Allan Kisner
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );}

function Footer() {

  return (

    <Box style={{background: '#618B25', padding: '5px'}} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
         The Recipe
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Find your recipe for today anyday :)
        </Typography>
        <Copyright />
      </Box>
  )
}

export default Footer