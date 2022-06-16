import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
export const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) =>{
        // when i click in search bar it is going to refresh to stop that behaviour use preventdefault
        e.preventDefault();
        // now to navigate to new page searched - create page and add in routes
        console.log("hey");
        //navigate to particular page
        navigate(`/searched/${input}`);
    }
    // to navigate over to earched part, dont necessarily need to use anchor tag or links
    // can use usenavigate.
  return (
    <FormStyle onSubmit={submitHandler}>
        <FaSearch/>
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
        {/* <h4>{input}</h4> */}
    </FormStyle>
  )
}
// position relative because to position the icon on the top of the input.
const FormStyle = styled.form`
    margin: 0rem 20rem;
    position: relative;
    width: 100%;
    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color:white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;  