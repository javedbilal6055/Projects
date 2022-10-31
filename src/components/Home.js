import React from "react";
import Details from "./Details";
import DragBall from "./DragBall";
import ToDoList from "./ToDoList";
import WeatherForecast from "./WeatherForecast";

function Home() {
  return (
    <>
      <WeatherForecast />
      <DragBall />
      <ToDoList/>
      <Details/>
    </>
  );
}

export default Home;
