import { Route, Routes } from "react-router-dom";
import DragBall from "./components/DragBall";
import Header from "./components/Header";
import Home from "./components/Home";
import ToDoList from "./components/ToDoList";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/WeatherReport' element={<WeatherForecast/>}/>
      <Route path='/DragBall' element={<DragBall/>} />
      <Route path='/ToDoList' element={<ToDoList/>}/>
      <Route/>
    </Routes>
    </>
  );
}

export default App;
