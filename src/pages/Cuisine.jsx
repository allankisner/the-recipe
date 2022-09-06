import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Grid, Card } from './styles/cuisine'



function Cuisine() {

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black'
  };

  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
    const recipes = await data.json();

    setCuisine(recipes.results);

  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);

  }, [params.type])

  return (
    <Grid>
      {cuisine.map((recipe) => {
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

export default Cuisine;

