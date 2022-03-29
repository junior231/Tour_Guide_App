import React from 'react'
import TourCard from '../components/TourCard';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux'



const Home = () => {
  const cities = useSelector(state => state.tourState.cities)
  return (
    <div className="App">
      <Container sx={{
        marginY: 5
      }}>
        {cities.map((city, index) => (
         <>
            <Typography key={index} variant='h4' component='h2' mt={5} mb={3}>
              Top {city.name} Tours
            </Typography>
            <Grid  container spacing={5}>
             {city.tours.map((tour, index) => <TourCard tour={tour} key={index}/>)}
            </Grid>
         </>
        ))}
      </Container>
    </div>
  )
}

export default Home