import { IconButton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

function WeatherForecast() {
  const [data, setData] = useState();
  const [cityData, setCityData] = useState("Lucknow");
  function handleChange(event) {
    console.log(event.target.value);
    setCityData(event.target.value);
  }
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=4842565025bd4ccf842111312222810&q=${cityData}&aqi=no`;
  async function getData() {
    try {
      const dataapi = await axios.get(apiUrl);
      console.log(dataapi.data.location.name);
      setData(dataapi.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  },[]);

  return (
    <>
      <div
        style={{
          width: "60%",
          margin: "auto",
          marginTop: "100px",
          display: "flex",
          justifycontentCenter: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "red" }}>Weather Report</h1>
        <input type="text" value={cityData} onChange={handleChange} />
        <button
          onClick={() => {
            getData();
          }}
        >
          Search
        </button>
        <div
          style={{
            margin: "auto",
            marginTop: "50px",
            width:"40vw",
            height: "30vh",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton>
            <CloudOutlinedIcon />
          </IconButton>
          <label>
            {data ? (
              <span>
                {data.location.name} {data.current.temp_c}
                <sup style={{ fontSize: "8px" }}>o</sup> C
              </span>
            ) : (
              <></>
            )}
          </label>
        </div>
      </div>
      
    </>
  );
}

export default WeatherForecast;
