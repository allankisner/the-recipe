import React from "react";
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Candie from "../components/Candie";


function Home() {
  return (
    <>
      <Popular />
      <Veggie />
      <Candie />
    </>
  )
}

export default Home