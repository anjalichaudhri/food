import { useState, useEffect } from "react";
// make a couple of components that are specific for styling
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";


export const Vegetable = () => {
  //first -variable , second - function that allows you to modify it. third - initial state ie kind of date '' or {} or [].
  const [veggie, setVeggie] = useState([]);
  //when page reloads and this component renders, we want this popular function to run immediately.
  useEffect(() => {
    getVeggie();
  }, []);

  //when make process.env file - need to restart the server. each env variable prefixed with REACT_APP_
  // reason for function to be async because we have to wait for data. First we have to wait for the data
  // to renser anything.
  const getVeggie = async () => {
    // const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    //store fetched value in local storage : in local storage can only store strings so to convert json data into object- parse it
    const isExist = localStorage.getItem("veggie");
    if (isExist) {
      setVeggie(JSON.parse(isExist));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );

      const data = await api.json();
      // we are just loggingthe data here- to save it use state. Essentially it is just a variable that holds
      // the inforamtion but the advantage is that when data chages in the varaible ui reacts to it.
      // import use state
      console.log(data);
      // can only store strings in local storage so stringify the objects.
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };

  return (
    //looping through each object of array and return jsx

    <Wrapper>
      <h3>Vegetarian Picks</h3>
      {/* to add more than element per page in carousel */}
      <Splide
        options={{
          perPage: 3,
          height: "25rem",
          arrows: false,
          pagination: false,
          drag: true,
          gap: "5rem",
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={`/recipe/${recipe.id}`}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
    // each child in list should have unique key prop - warning!
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
// the image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit.
const Card = styled.div`
  height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position:relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left:50%
    bottom: 0%
    transform: translate(-50%,0%);
    color: white;
    width: 100%;
    text-align:center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  postion: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
