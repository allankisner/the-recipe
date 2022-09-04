import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import styled from "styled-components";
import{Grid, Card } from './styles/cuisine'


function Cuisine() {

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
            <img src={recipe.image} alt='img' />
            <h1>{recipe.title}</h1>
          </Card>
        )
      })}
    </Grid>

  )
}

export default Cuisine;

