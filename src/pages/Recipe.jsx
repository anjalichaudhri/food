import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

/**
 * next step is to render html data from api in react?? use attr of react dangerouslySetInnerHtml()
 * @returns 
 */
export const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeButton, setActiveButton] = useState('instructions');
  let params = useParams();

  useEffect(() => {
    getRecipeDetails(params.name);
  }, [params.name]);

  const getRecipeDetails = async () => {
    // going to append id for that append params.
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recipeDetails = await response.json();
    console.log(recipeDetails);
    setDetails(recipeDetails);
  };
  return <DetailsWrapper>
      <div>
          <h2>{details.id}</h2>
          <img src={details.image} alt=""/>
      </div>
      <Info>
          {/* to add functionality to these buttons maintain state activeButton */}
          <Button className={activeButton==='instructions'? 'active':''} onClick={()=>{ setActiveButton("instructions")}}>Instructions</Button>
          <Button className={activeButton==='ingredients'? 'active':''} onClick={()=>{ setActiveButton("ingredients")}}>Ingredients</Button>
          {/*  to render code parts conditionally - short circuit condition*/}
          {activeButton==='instructions'&&(
              <div>
              <h3 dangerouslySetInnerHTML={{__html: details.summary }}></h3>
              <h3 dangerouslySetInnerHTML={{__html: details.instructions }}></h3>
          </div>
          )}
          {activeButton === 'ingredients'&& (
            <ul>
            {details.extendedIngredients.map((ingredient)=>{
                <li key={ingredient.id}>{ingredient.original}</li>
            })} 
         </ul>
          )}
            
      </Info>
  </DetailsWrapper>

};

const DetailsWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  h2 {
    margin-bottom: 2rem;
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;