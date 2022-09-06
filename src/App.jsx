import React from "react";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      <div style={{alignItems:'center', justifyContent: 'center'}}>
          <Category />
          <Search />
          <Pages />
       </div>  
          <Footer />       
      </BrowserRouter>
    </div>
  );
}

export default App;
