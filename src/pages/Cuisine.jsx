import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

/**
 * use params allows us to do is to pull out(extract) keyword and url from routes
 * @returns
 */
export const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  useEffect(() => {
    getCuisine(params.type);
    // fun - unfairmario, miniclip
    // this only runs when component mounts so params value is not going to be logged when changed to other cuisines. beacaue page is same so
    // to render it on the basis of change in params put condition in array.
    console.log(params.type);
  }, [params.type]);

  const getCuisine = async (name) => {
    const isExist = localStorage.getItem("cuisine");

    if (isExist) {
      setCuisine(JSON.parse(isExist));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
      );
      const recipes = await data.json();
      localStorage.setItem("cuisine", JSON.stringify(recipes.results));
      console.log(recipes.results);
      setCuisine(recipes.results);
    }
  };
  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} alt=""></img>
            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
};
// Use display: grid; to make a block-level grid container
// cool responsivwe grid
// grid-template-columns if want to create as many grid as they can fit then use repeat that defines size of one frame
// The grid-gap property defines the size of the gap between the rows and columns in a grid layout, and
// is a shorthand property for the following properties: grid-row-gap grid-column-gap.

const Grid = styled.div`
    display: inline-grid,
    grid-template-columns: repeat(16px, minmax(10rem, 1fr));
    grid-auto-rows: 300px;
    grid-gap: 1rem;  
`;

const Card = styled.div`
  img {
    border-radius: 2rem;
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
