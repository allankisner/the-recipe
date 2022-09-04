import React from "react";
import { useEffect, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Card, Grid, Button, CardActions, Typography, CardMedia, CardContent } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";


function Veggie() {

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
        <Grid  mb={2} style={{ marginTop: '5rem' }}>
            <h2 style={{marginBottom:"15px"}}>Candies</h2>
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
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                      

                                    }}
                                    image={recipe.image}
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h6" component="h4">
                                        {recipe.title}
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the
                                        content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">View</Button>
                                    <Button size="small">Edit</Button>
                                </CardActions>
                            </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Grid>
    )
}


export default Veggie;
