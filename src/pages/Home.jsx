import React from 'react'
import TourCard from '../components/TourCard';
import {Typography, Grid, Container,  }from '@mui/material';
import { useSelector } from 'react-redux'



const Home = () => {
  const cities = useSelector(state => state.tourState.cities)
  return (
<Grid container justifyContent='center'>
<Grid item xs={10} sm={10} p={2}>
        {cities.map((city, index) => (
         <>
            <Typography textAlign='center' variant='h5' key={index} fontWeight={500} p={3}>
              Top {city.name} Tours
            </Typography>
            <Grid justifyContent='flex-start' container spacing={3}>
             {city.tours.map((tour, index) => <TourCard tour={tour} key={index}/>)}
            </Grid>
         </>
        ))}
      </Grid>
</Grid>
   
  )
}

export default Home