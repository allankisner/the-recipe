import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import { Route, Routes, } from 'react-router-dom'
import Searched from './Searched';
import Recipe from './Recipe';
import { Box } from '@mui/material'

function Pages() {
  return (
    <Box
    style={{maxWidth: '1000px', margin:'auto', textAlign:'center', marginTop:'4rem'}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/searched/:search' element={<Searched />} />
        <Route path='/recipe/:name' element={<Recipe />} />
      </Routes>
    </Box>
  );
}

export default Pages