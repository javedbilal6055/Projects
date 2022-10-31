import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CloudIcon from '@mui/icons-material/Cloud';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { Link, Outlet } from 'react-router-dom';
import { Container } from '@mui/system';
import FeedIcon from '@mui/icons-material/Feed';

function Header() {
  return (
    <>
      <AppBar sx={{
       
      }}
      
      >
    
        <Toolbar
        sx={{
            display:'flex',
            justifyContent:'space-evenly',
            backgroundColor:'info.dark',
           
          }}
        >
          <Typography sx={{
            textColor:'info',
          }}>
            <Link to='/' style={{color:"white"}}>
            <ListAltIcon/>
            </Link>
          </Typography>
          <Button variant="">
            <Link to='/WeatherReport'  style={{color:"white"}}>
            <CloudIcon/>
            </Link>
          </Button>
          <Button variant="">
            <Link to='/DragBall'  style={{color:"white"}}>

            <SportsVolleyballIcon/>
            </Link>
          </Button>
          <Button variant="">
            <Link to='/ToDoList'  style={{color:"white"}}>
            <PlaylistAddIcon/>
            </Link>
          </Button>
          <Button variant="">
            <Link to='/FormSubmit'  style={{color:"white"}}>
            <FeedIcon/>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet/>
      </Container>
    </>
  )
}

export default Header
