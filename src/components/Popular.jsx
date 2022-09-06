import React from "react";
import { useEffect, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Grid, Typography} from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import {Card} from './styles/generic'

function Popular() {

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
      };

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {

        const check = localStorage.getItem('popular');

        if (check) {
            setPopular(JSON.parse(check));

        }
        else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
            const data = await api.json();

            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
        }
    };

    return (
        <Grid mb={2} style={{ marginTop: '15px' }}>          
                <h2 style={{ marginBottom: "15px", color:"#6bd425" }}>Popular Choices</h2>
                <Splide options={{
                    perPage: 3,
                    arrows: true,
                    pagination: false,
                    drag: "free",
                    gap: "5rem",
                }}>
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>                          
                                <Card key={recipe.id}>
                                <Link style={linkStyle} to={"/recipe/" + recipe.id} >
                                <img src={recipe.image} alt=''   />
                            
                                    <Typography gutterBottom variant="h6" component="h6">
                                        {recipe.title}
                                    </Typography>                                  
                             
                                </Link>                                                     
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>            
        </Grid>
    )
}


export default Popular;
