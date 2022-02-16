import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Head = styled.div`
   width: 100%;
   height: 80px;
   background-color: black;
   top: 0;
   display: flex;
   justify-content: center;
   gap: 20px;
   align-items: center;

   .nav-link {
      color: white;
      font-size: 18px;
      text-decoration: none;
      font-weight: bold;

      &:hover {
         color: #00a7a7;
      }
   }
`;

const Navbar = () => {
   return (
      <Head>
         <Link to="/" className="nav-link">
            Home
         </Link>
         <Link to="/buscar" className="nav-link">
            Buscar
         </Link>
      </Head>
   );
};

export default Navbar;
