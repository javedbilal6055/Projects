import {
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  popoverClasses,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function ToDoList() {
  // const task = [];
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [taskBody, setTaskBody] = useState("");
  const handleTitle = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };
  const handleBody = (event) => {
    console.log(event.target.value);
    setTaskBody(event.target.value);
  };
  const handleSubmit = () => {
    // console.log(title, taskBody);
    let data = {
      taskHeading: `${title}`,
      todolist: ` ${taskBody}`,
    };
    //  console.log(task);
    //  console.log(data);
    setTask([...task, data]);
    //  console.log(task);
  };
  const deleteTask = (e) => {
    // console.log(e);
    // const arr = task;
    // if (e > -1) { // only splice array when item is found
    //   arr.splice(e, 1); // 2nd parameter means remove one item only
    // }
    // console.log(arr)

    // setTask(arr);
    console.log(e);
    const changedArray = task.filter((value, index) => index !== e);
    setTask(changedArray);
  };
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
          required
          name="title"
          id="outlined-basic"
          label="Enter Title Of Task"
          variant="outlined"
          value={title}
          size="small"
          sx={{
            width: "90%",

            marginTop: "10px",
          }}
          onChange={handleTitle}
        />
        <TextField
          name="body"
          required
          id="outlined-basic"
          label="TYPE BODY OF TASK"
          variant="outlined"
          value={taskBody}
          multiline
          maxRows={4}
          sx={{
            width: "90%",
            marginTop: "50px",
          }}
          onChange={handleBody}
        />
        <Button
          size="large"
          sx={{
            width: "30%",

            marginTop: "50px",
          }}
          variant="contained"
          color="success"
          onClick={handleSubmit}
        >
          <AddCircleOutlineIcon /> ADD
        </Button>
      </CardContent>
      <CardActions>
        <Typography>You Have Task To complete</Typography>
      </CardActions>
    </React.Fragment>
  );

  useEffect(() => {}, [task]);
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

        <Card variant="elevation">{card}</Card>
        <Paper
          variant="elevation"
          sx={{
            width: "100%",
            margin: "auto",
            marginTop: "10px",
          }}
        >
          {task.map((element, i) => {
            // console.log(element);
            // console.log(i);

            return (
              <div key={i}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.success"
                      gutterBottom
                    >
                      <b>{element.taskHeading}</b>
                    </Typography>
                    <Typography variant="">{element.todolist}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => {
                        deleteTask(i);
                      }}
                    >
                      <DeleteForeverIcon />
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </Paper>
      </Box>
    </Container>
  );
}

export default ToDoList;
