import { Box, Container, IconButton, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { UserName } from "../App";

function DragBall() {
  const [posTop, setPosTop] = useState(0);
  const [posLeft, setPosLeft] = useState(0);
  const [flag, setFlag] = useState(1);
  function handlePosition() {
    switch (flag) {
      case 1:
        // code block
        setPosLeft(90);
        setPosTop(0);
        // flag=flag+1;
        console.log(flag);
        break;
      case 2:
        // code block
        setPosLeft(90);
        setPosTop(85);
        // flag=flag+1;
        console.log(flag);
        break;
      case 3:
        setPosLeft(0);
        setPosTop(85);

        console.log(flag);
        break;
      case 4:
        setPosLeft(90);
        setPosTop(0);
        console.log(flag);
        break;
      case 5:
        setPosLeft(0);
        setPosTop(85);

        console.log(flag);
        break;
      default:
        // code block
        setPosLeft(0);
        setPosTop(0);

        console.log(flag);
    }
    // if ((flag = 3)) {
    // } else if ((flag = 1)) {
    // }
    // if ((flag = 2)) {
    // }
  }

  return (
    <>
      <UserName.Consumer>
        {(user) => {
          return (
            <Container
              maxWidth="lg"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "100px",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "black",
                  color: "white",
                  textAlign: "end",
                  padding: "3px",
                  paddingRight: "15px",
                }}
              >
                <Tooltip title="use of context api" placement="bottom-end">
                  <Typography sx={{color:'gold'}}>{"User : " + user}</Typography>
                </Tooltip>
              </Box>
              <Typography
                variant="h6"
                mt="2"
                value="center"
                aria-label="centered"
              >
                Drag The Ball
              </Typography>
              <Box
                sx={{
                  height: "400px",
                  width: "50%",
                  border: "1px solid",
                  margin: "auto",
                  marginTop: "10px",
                  position: "relative",
                }}
              >
                <IconButton
                  sx={{
                    position: "absolute",
                    top: `${posTop}%`,
                    left: `${posLeft}%`,
                    transition: "2s",
                  }}
                  onClick={() => {
                    if (flag === 6) {
                      setFlag(1);
                    } else {
                      setFlag(flag + 1);
                    }
                    handlePosition();
                  }}
                >
                  <SportsSoccerIcon
                    sx={{
                      fontSize: "50px",
                      color: "red",
                    }}
                  ></SportsSoccerIcon>
                </IconButton>
                <Typography
                  sx={{
                    width: "50px",
                    height: "30px",
                    margin: "auto",
                    textAlign: "center",
                    marginTop: "180px",
                    backgroundColor: "black",
                    color: "white",
                    padding: "5px",
                  }}
                >
                  {'pos:'+(flag - 1)}
                </Typography>
              </Box>

              {/* <Button
          variant="contained"
          color="success"
          sx={{
            margin: "auto",
            marginTop:"10px"
          }}
          >
          Drag
        </Button> */}
            </Container>
          );
        }}
      </UserName.Consumer>
    </>
  );
}

export default DragBall;
