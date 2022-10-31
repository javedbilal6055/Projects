import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const card = (
  <React.Fragment>
    <CardContent
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Enter Title Of Task"
        variant="outlined"
        size="small"
        sx={{
          width: "90%",

          marginTop: "10px",
        }}
      />
      <TextField
        id="outlined-basic"
        label="TYPE BODY OF TASK"
        variant="outlined"
        multiline
        maxRows={4}
        sx={{
          width: "90%",
          marginTop: "50px",
        }}
      />
      <Button
        size="large"
        sx={{
          width: "30%",

          marginTop: "50px",
        }}
        variant="contained"
        color="success"
      >
        <AddCircleOutlineIcon /> ADD
      </Button>
    </CardContent>
    <CardActions>
      <Typography>You Have Task To complete</Typography>
    </CardActions>
  </React.Fragment>
);
function ToDoList() {
  return (
    <Container maxWidth="sm" mt="6">
      <Box
        sx={{
          minHeight: "80vh",
          marginTop: "100px",
          padding: "10px",
          border: "1px solid",
        }}
      >
        <Button variant="text" color="info">
          <Typography variant="h5">Add Task To be Done......</Typography>
        </Button>

        <Card variant="outlined">{card}</Card>
        <Card variant="elevation">
            TASKS
        </Card>
      </Box>
    </Container>
  );
}

export default ToDoList;
