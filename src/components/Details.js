import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

function Details() {
  const [formValues,setFormValues]=useState({
    name:'',
    trips:0,
    airline:0,
  });
  const [msg,setMsg]=useState('no values');
const changeValues=(event)=>{
  console.log([event.target.name], event.target.value);
  setFormValues({ ...formValues, [event.target.name] : event.target.value});
}
const apiUrl='https://api.instantwebtools.net/v1/passenger';
const handleSubmit=async()=>{
  console.log("working",formValues);
    try {
      await axios.post(
        apiUrl,
        formValues
      )
      .then((response) => {
        setMsg(response);
      });

    } catch (error) {
      setMsg(error);
      console.log(error);
    }
}
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "60%",
        margin: "auto",
        marginTop: "100px",
        padding: "0",
      }}
    >
      <div>
        <Typography sx={{ m: 1 }}>Complete Your Details</Typography>
        <FormControl sx={{ m: 1, width: "47%" }}>
          <TextField
            label="Enter Full Name"
            id="outlined-start-adornment"
            name='name'
            onChange={(event)=>{changeValues(event)}}
            value={formValues.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {/* {formValues.name} */}
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "47%" }}>
          <TextField
            label="Number Of Trips"
            id="outlined-start-adornment"
            name='trips'
            type='number'
            value={formValues.trips}
            onChange={(event)=>{changeValues(event)}}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "96%" }}>
          <InputLabel htmlFor="outlined-adornment-address">Adress</InputLabel>
          <OutlinedInput
            id="outlined-adornment-airline"
            type='number'
            name='airline'
            onChange={(event)=>{changeValues(event)}}
            startAdornment={<InputAdornment position="start">
              
            </InputAdornment>}
            value={formValues.airline}
            label="airline"
          />
        </FormControl>
        {/* <FormControl sx={{ m: 1, width: "47%" }}>
          <TextField
            label="Mobile No:"
            id="outlined-start-adornment"
            name='mobile'
            value={ formValues.mobile}
            onChange={(event)=>{changeValues(event)}}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  
                </InputAdornment>
              ),
            }}
          />
        </FormControl> */}
        {/* <FormControl sx={{ m: 1, width: "47%" }}>
          <TextField
            label="Email Id:"
            id="outlined-start-adornment"
            name='email'
            value= {formValues.email}
            onChange={(event)=>{changeValues(event)}}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  
                </InputAdornment>
              ),
            }}
          />
        </FormControl> */}
        <FormControl sx={{ m: 1, width: "96%" }}>
         <Button variant='contained' color='success' onClick={handleSubmit}>SUBMIT</Button>
        </FormControl>
        <Typography variant="h5" color='red' >
          {msg}
        </Typography>
      </div>
    </Box>
  );
}

export default Details;
