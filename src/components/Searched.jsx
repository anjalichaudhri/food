import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
/**
 * next step when click on any recipe get details
 * @returns searched recipes
 */
export const Searched = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    useEffect(() => {
        //need to take query from url ie done by params
        // we have put name in routes :search so params.search
      getSearchedRecipes(params.search);
    }, [params.search])

    const getSearchedRecipes = async (name) => {
        // const isExist = localStorage.getItem("searchedRecipes")
        // if (isExist) {
        //   setSearchedRecipes(JSON.parse(isExist));
        // } else {
          const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
          );
          const recipes = await data.json();
          localStorage.setItem("searchedRecipes", JSON.stringify(recipes.results));
          console.log(recipes.results);
          setSearchedRecipes(recipes.results);
        // }
      };
  return (
    <Grid>
        {searchedRecipes.map((item) => {
            return(
                <Card key={item.id}>
                    <img src={item.image} alt=""/>
                    <h4>{item.title}</h4> 
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid,
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;  
`;

const Card = styled.div`
  img { 
    width: 100%;
    height: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
