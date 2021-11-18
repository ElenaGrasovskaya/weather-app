import "../App.css";
import { Input } from "../Input/App";
import React from "react";
import { CardList } from "../CardList/App";
import { withErrorBounary } from "../hoks/withErrorBoundary";

export const Home = () => {
  return (
    <div className="Main">
      <Input />
      <withErrorBounary>
        <CardList />
      </withErrorBounary>
    </div>
  );
}


