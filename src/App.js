import React, { useState } from "react";
import "./style.css";
import data from "./data.json";
import SelectedRestaurant from "./SelectedRestaurant.js";

const App = () => {
  const [rest, setRest] = useState("");

  const changeRest = (data) => {
    setRest(data);
  };
  
const displayRest = () => {
  return rest ? (
  <div>
    <p onClick={() => setRest(0)}>Back</p>
    <SelectedRestaurant data={rest} />
  </div>
  ) : ''
}

const displayList = () => {
  return rest ? '' : (
    <div className="restaurantList">
    {data.map((x) => {
      return (
        <div onClick={() => changeRest(x)} className="restaurant">
          <img alt="Restaurant Interior" src={`/images/${x.image}`} />
          <div className="resData">
            <p>{x.name}</p>
            <p>{x.rating}</p>
            <p>{x.genre}</p>
          </div>


        </div>
      );
    })}
  </div>
  )
}

  return (
    <div className="App">
        { displayList() }
        { displayRest() }
    </div>
  );
};

export default App;
