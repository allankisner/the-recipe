import React from "react";
import { useEffect, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Grid, Typography, CardContent } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import {Card} from './styles/generic'


function Veggie() {

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
      };

    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie()
    }, []);

    const getVeggie = async () => {

        const check = localStorage.getItem('veggie');

        if (check) {
            setVeggie(JSON.parse(check));
        }
        else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=vegetarian`);
            const data = await api.json();

            localStorage.setItem('veggie', JSON.stringify(data.recipes));
            setVeggie(data.recipes);
            console.log(data.recipes);
        }
    };

    return (
        <Grid mb={2} style={{ marginTop: '15px' }}>    
            <h2 style={{ marginBottom: "15px", color:"#6bd425" }}>Best Vegan Choices</h2>
            <Splide options={{
                perPage: 3,
                arrows: true,
                pagination: false,
                drag: "free",
                gap: "5rem",
            }}>
                {veggie.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card key={recipe.id}>
                                <Link  style={linkStyle} to={"/recipe/" + recipe.id} >
                                <img src={recipe.image} alt='' />
                                <CardContent sx={{ color:'white', flexGrow: 1 , position:'relative' }}>
                                    <Typography gutterBottom variant="h6" component="h4">
                                        {recipe.title}
                                    </Typography>                                  
                                </CardContent>
                                </Link>                             
                            </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Grid >
    )
}


export default Veggie;
