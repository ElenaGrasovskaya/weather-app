import React, { useEffect } from "react";
import {Card} from "../Card/App";
import "../App.css";

export const CardList = ({ citiesList }) => {
  useEffect(()=> {
 console.log('citiesList', citiesList);
  },[citiesList]);

  return (
    <div className="CardList">
      {
        citiesList.map((city) => (
          <Card city={city} key={city} />
        ))        
      }
    </div>
  );
};



        