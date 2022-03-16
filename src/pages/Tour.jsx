import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Collage from '../components/Collage';
import CustomizedAccordions from '../components/Accordion'
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from '../components/Modal'


const Tour = () => {
  return (
    <Container sx={{width: 900, marginBottom: 20}}>
        <Typography variant='h3' component='h1' mt={3}>
            Explore Ontario Like Never Before
        </Typography>   
        <Box mt={3} sx={{
            display: 'flex'
        }}>
            <img src="/images/springbank.jpg" alt="Spring Bank View London Ontario"
             height={325}
            />
            <Collage />
        </Box> 
        <Box>
            <Typography variant='h6' component='h6' mt={3}>
                What to expect at this location
            </Typography> 
            <Typography variant='paragraph' component='p' mt={3}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, eos id non iusto similique aspernatur animi, unde quam dolor officiis eaque sequi! Praesentium sed, saepe iure ratione nesciunt perspiciatis voluptas architecto in molestiae delectus ipsa itaque qui tempore nostrum!
            </Typography> 
        </Box>
        <Box mb={10}>
            <Typography variant='h6' component='h6' mt={3} gutterBottom={6}>
                Frequently Asked Questions
            </Typography> 
            <CustomizedAccordions />
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
            <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  )
}

export default Tour