import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "./Cards";

const Contenedor = styled.div`
   width: 70%;
   margin: auto;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
`;

const Listar = () => {
   const [datos, setDatos] = useState([]);
   const url =
      "https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/starwars.json";

   const getData = async () => {
      axios
         .get(url)
         .then((response) => {
            setDatos(response.data.results);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   useEffect(() => {
      getData();
   }, []);

   return (
      <Contenedor>
         {datos.map((u) => (
            <div key={u.id}>
               <Cards elemento={u} />
            </div>
         ))}
      </Contenedor>
   );
};

export default Listar;
