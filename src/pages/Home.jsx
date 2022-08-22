import React from "react";
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { Box, Grid } from "@mui/material";
import Header from "../components/Header";
import Candie from "../components/Candie";
import Footer from "../components/Footer";

function Home() {
  return (
    <main>
      <Header/>
    <Grid container >
      <Box style={{
        maxWidth: '800px',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto'

      }} >
        <Box>
        <Popular />
        </Box>
        <Veggie />
        <Candie />
      </Box>
    </Grid>
    <Footer />
    </main>
  )
}

export default Home