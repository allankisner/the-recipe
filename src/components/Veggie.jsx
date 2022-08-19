import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";


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
        <Wrapper>
            <h2>Veggie Choices</h2>
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
                            <Card>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                                
                            </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Wrapper>
    )
}

const Wrapper = styled.div`
   margin: 4rem 0rem;
`

const Card = styled.div`
 min-height: 25rem;
 border-radius: 2rem;
 overflow: hidden;
 position: relative;

 img {
   border-radius: 2rem;
   position: absolute;
   left: 0;
   width: 800px;
   height: 550px;
   object-fit: cover;
 }

 p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
 }
`;

export default Veggie;