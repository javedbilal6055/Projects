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
    gender:'',
    email:'',
    status:'active',
  });
  const [msg,setMsg]=useState('');
const changeValues=(event)=>{
  console.log([event.target.name], event.target.value);
  setFormValues({ ...formValues, [event.target.name] : event.target.value});
}
const apiUrl='https://gorest.co.in/public/v2/users';
const token='d02a82a03445b221b77e651bafa953885e2c0a701b467fbef97ad32dc4602f40';
const handleSubmit=async()=>{
  console.log("working",formValues);
    try {
      await axios.post(
        apiUrl,
        formValues,
        {
          headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
          
        }
      )
      .then((response) => {
        console.log(response);
        if(response.status===201)
        {
          setMsg(response.status+' user created');
        }
        if(response.status===202)
        {
          setMsg(response.status+' email id is already taken');
        }
      });

    } catch (error) {
      console.log('error is coming! unable to perform  ',error.message);
      setMsg(error.message);
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
            label="Gender"
            id="outlined-start-adornment"
            name='gender'
            
            value={formValues.gender}
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
          <InputLabel htmlFor="outlined-adornment-address">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
           type="email"
            name='email'
            onChange={(event)=>{changeValues(event)}}
            startAdornment={<InputAdornment position="start">
              
            </InputAdornment>}
            value={formValues.email}
            label="airline"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "47%" }}>
          <TextField
            label="Status"
            id="outlined-start-adornment"
            name='status'
           
            value={ formValues.status}
            onChange={(event)=>{changeValues(event)}}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
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
