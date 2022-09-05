import React from "react";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Box style={{
          maxWidth: '1000px',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto'
        }} >
          <Category />
          <Search />
          <Pages />
          </Box>
          <Footer />       
      </BrowserRouter>
    </div>
  );
}

export default App;
