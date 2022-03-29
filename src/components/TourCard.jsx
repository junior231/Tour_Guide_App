import React, {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {AccessTime} from '@mui/icons-material';
import {createTheme, ThemeProvider} from '@mui/material';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {getImage, getDescription} from '../features/tourslice'

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2'
          },
          style: {
            fontSize: 11
          }
        },
        {
          props: {
            variant: 'body3'
          },
          style: {
            fontSize: 9
          }
        }
      ]
    }
  }
})

export default function TourCard({tour}) {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(getImage(item.image))
    localStorage.setItem("tourImg", JSON.stringify(item.image))
    dispatch(getDescription(item.name))
    localStorage.setItem("tourName", JSON.stringify(item.name))

  };


  return (
    <Grid item xs={3}>
        <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <Link  to={{
            pathname: `/${tour.name.split(' ').join('')}`
          }}>
          <img onClick={() => handleClick(tour)} src={tour.image}  
          alt={tour.name} 
          className='img'
          />
          </Link>
          <Box paddingX={1}>
              <Typography component='h2' variant='subtitle1'>
                 {tour.name}
              </Typography>
              <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <AccessTime sx={{width: 12.5}} />
              <Typography variant='body2' component='p' ml={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box 
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 3
              }}
              >
                <Rating readOnly name='read-only' value={tour.rating} size='small' precision={0.5}/>
                <Typography variant='body2' component='p' ml={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant='body3' component='p' ml={1.5}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
            <Typography variant='h6' component='h3' mt={0}>
                From C {tour.price}
              </Typography>
            </Box>
          </Box>
         
        </Paper>
        </ThemeProvider>
    </Grid>
  )
}
