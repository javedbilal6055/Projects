import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import DragBall from "./components/DragBall";
import Header from "./components/Header";
import Home from "./components/Home";
import ToDoList from "./components/ToDoList";
import WeatherForecast from "./components/WeatherForecast";

const UserName = createContext();

function App() {
  return (
    <>
      <UserName.Provider value={'Javed Akhtar'}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WeatherReport" element={<WeatherForecast />} />
          <Route path="/DragBall" element={<DragBall />} />
          <Route path="/ToDoList" element={<ToDoList />} />
          <Route path='/FormSubmit' element={<Details/>}/>
        </Routes>
      </UserName.Provider>
    </>
  );
}

export default App;
export {UserName};
