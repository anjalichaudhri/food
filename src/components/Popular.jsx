import { useState, useEffect } from "react";
// make a couple of components that are specific for styling
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
export const Popular = () => {
  //first -variable , second - function that allows you to modify it. third - initial state ie kind of date '' or {} or [].
  const [popular, setPopular] = useState([]);
  //when page reloads and this component renders, we want this popular function to run immediately.
  useEffect(() => {
    getPopular();
  }, []);

  //when make process.env file - need to restart the server. each env variable prefixed with REACT_APP_
  // reason for function to be async because we have to wait for data. First we have to wait for the data
  // to renser anything.
  const getPopular = async () => {
    // const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );

    const data = await api.json();
    // we are just loggingthe data here- to save it use state. Essentially it is just a variable that holds
    // the inforamtion but the advantage is that when data chages in the varaible ui reacts to it.
    // import use state
    console.log(data);
    setPopular(data.recipes);
  };

  return (
    <div>
      {
        //looping through each object of array and return jsx
        popular.map((recipe) => {
          return (
            <Wrapper>
              <h3>Popular Picks</h3>
              {popular.map((recipe) => {
                return (
                  <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                  </Card>
                );
              })}
            </Wrapper>
          );
        })
      }
    </div>
    // each child in list should have unique key prop - warning!
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
  }
`;
