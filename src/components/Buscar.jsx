import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useForm from "./useForm";
import querystring from "query-string";
import Filtro from "./Filtro";
import styled from "styled-components";

const ContenedorBuscar = styled.div`
   display: flex;
   flex: auto;
   width: 80%;
   margin: auto;
   justify-content: space-around;
   margin-top: 20px;
`;

const Busqueda = styled.div`
   display: flex;
   flex-basis: 30%;
   flex-direction: column;
   gap: 10px;

   input {
      width: 100%;
      height: 30px;
   }
`;

const Buscar = () => {
   const navigate = useNavigate();
   const location = useLocation();

   const { q = "" } = querystring.parse(location.search);

   console.log(q);

   const [values, handleInputChange, resetForm] = useForm({
      searchText: q,
   });

   const { searchText } = values;

   const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`?q=${searchText}`);
   };
   return (
      <ContenedorBuscar>
         <Busqueda>
            <h3>Busqueda</h3>
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  name="searchText"
                  value={searchText}
                  onChange={handleInputChange}
               />
            </form>
         </Busqueda>
         <div>
            <div>
               <Filtro nombre={searchText} />
            </div>
         </div>
      </ContenedorBuscar>
   );
};

export default Buscar;
