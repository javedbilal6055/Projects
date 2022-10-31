import React from "react";
import DragBall from "./DragBall";
import ToDoList from "./ToDoList";
import WeatherForecast from "./WeatherForecast";

function Home() {
  return (
    <>
      <WeatherForecast />
      <DragBall />
      <ToDoList/>
    </>
  );
}

export default Home;
