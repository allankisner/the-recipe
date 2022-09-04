import React from "react";
import { useEffect, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Card, Grid, Button, CardActions, Typography, CardMedia, CardContent } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";


function Veggie() {

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
        <Grid mb={2} style={{ marginTop: '5rem' }}>    
            <h2 style={{ marginBottom: "15px" }}>Best Vegan Choices</h2>
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
                            <Card key={recipe.id}
                                sx={{ height:'90%', position:'relative'}}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                    }}
                                    image={recipe.image}
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 , position:'relative' }}>
                                    <Typography gutterBottom variant="h6" component="h4">
                                        {recipe.title}
                                    </Typography>
                                    <Typography>
                                        This is a media card. You can use this section to describe the
                                        content.
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{position: 'relative'}}>
                                    <Button size="small">View</Button>
                                    <Button size="small">Edit</Button>
                                </CardActions>
                            </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Grid >
    )
}


export default Veggie;
