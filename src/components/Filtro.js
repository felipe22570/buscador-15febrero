import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Filtro = ({ nombre }) => {
   const [busqueda, setBusqueda] = useState([]);

   nombre = nombre.toLocaleLowerCase();

   const url =
      "https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/starwars.json";

   const getData = async () => {
      axios
         .get(url)
         .then((response) => {
            setBusqueda(response.data.results);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   useEffect(() => {
      getData();
      console.log(nombre);
   }, []);

   let filtrado = busqueda.filter((u) => u.name.toLocaleLowerCase().includes(nombre));

   return (
      <div>
         {filtrado.map((u) => (
            <div key={u.id}>
               <Cards elemento={u} />
            </div>
         ))}
      </div>
   );
};

export default Filtro;
