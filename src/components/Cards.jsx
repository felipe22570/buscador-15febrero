import React from "react";
import styled from "styled-components";

const Contenedor = styled.div`
   width: 180px;
   margin: 20px;
   padding: 20px;
   border-radius: 5px;

   img {
      width: 100%;
   }

   border: 2px solid teal;
`;

const Cards = ({ elemento }) => {
   return (
      <Contenedor>
         <img src={elemento.image} alt="" />
         <hr />
         <span>{elemento.name}</span>
      </Contenedor>
   );
};

export default Cards;
