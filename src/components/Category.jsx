import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Category = () => {
  /**
   * Uncaught Error: useLocation() may be used only in the context of a <Router> component.
   * it means we cannot use this navlink because the browser router does not surround category page
   * take a look at app.jsx
   * so move browser router in app.jsx from pages.jsx so it can be available to all the components.
   */

  return (
    <List>
      {/* list with a bunch of links - so imported navlink from recat router dom
       * essentially want to have these as links for that import link tag from react router
       * ESSENTIALLY DONT want to use a tags for making these categories as links because
       * React is a client side rendered app so when use a tag it basically refreshes the page
       * navigate over to somewhere else and thats not we want so use navlink.
       * navlink is not going to work without routes so first define routes
       * you can use link also but navlink is preferred because it provides  us the class active
       * then you caqn add specific styling to it.*/}
      {/* <NavLink to = { '/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>italian</h4>
        </NavLink>
        <NavLink to = {'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </NavLink>
        <NavLink to = {'/cuisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </NavLink>
        <NavLink to = {'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </NavLink> */}

      <Slink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>italian</h4>
      </Slink>
      <Slink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>

      {/* <div>
            <FaPizzaSlice/>
            <h4>italian</h4>
        </div>
        <div>
            <FaHamburger/>
            <h4>American</h4>
        </div>
        <div>
            <GiNoodles/>
            <h4>Thai</h4>
        </div>
        <div>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </div> */}
    </List>
  );
};

// styling specific for these categories - replace the div tag with list tag
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #111111);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
    h4 {
        color:white;
        font-size: 0.8rem;
    }
    svg {
        color:white;
        font-size: 1.5rem;
    }
`;
