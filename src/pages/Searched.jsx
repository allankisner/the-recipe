import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Grid, Card } from './styles/cuisine'

function Searched() {

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black'
  };

  const [searchedItem, setSearchedItem] = useState([]);

  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
    const recipes = await data.json();

    setSearchedItem(recipes.results);

  };

  useEffect(() => {
    getSearched(params.search);
  
  }, [params.search])

  return (
    <Grid style={{marginTop: '25px'}}>
      {searchedItem.map((recipe) => {
        return (         
          <Card key={recipe.id}>
             <Link  style={linkStyle} to={"/recipe/" + recipe.id}>
            <img src={recipe.image} alt='img' />
            <h1>{recipe.title}</h1>
            </Link>
          </Card>
        )
      })}
    </Grid>

  )
}

export default Searched;
