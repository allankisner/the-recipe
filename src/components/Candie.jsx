import React from "react";
import { useEffect, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Grid, Typography, CardMedia, CardContent } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import {Card} from './styles/generic'


function Candie() {

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
    };

    const [candie, setCandie] = useState([]);

    useEffect(() => {
        getCandie()
    }, []);

    const getCandie = async () => {

        const check = localStorage.getItem('candies');

        if (check) {
            setCandie(JSON.parse(check));
        }
        else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12&tags=candies`);
            const data = await api.json();

            localStorage.setItem('candies', JSON.stringify(data.recipes));
            setCandie(data.recipes);
            console.log(data.recipes);
        }
    };

    return (
        <Grid mb={2} style={{ marginTop: '15px', marginBottom:'45px' }}>
            <h2 style={{ marginBottom: "15px", color:"#6bd425" }}>Candies</h2>
            <Splide options={{
                perPage: 3,
                arrows: true,
                pagination: false,
                drag: "free",
                gap: "5rem",
            }}>
                {candie.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card key={recipe.id}
                                 sx={{ height:'300px', width:'250px', margin:'5px', background: 'black', display: 'flex', flexDirection: 'column' }}
                            >
                                <Link style={linkStyle} to={"/recipe/" + recipe.id}>
                                    <CardMedia
                                        component="img"    
                                        sx={{
                                            marginTop:'-20px'
                                        }}                          
                                        image={recipe.image}
                                        alt="random"
                                    />
                                    <CardContent sx={{ color:'white', flexGrow: 1 }}>
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
        </Grid>
    )
}


export default Candie;
