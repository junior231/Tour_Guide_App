import React, { useEffect, useState, useMemo } from "react";
import { Container, Box, Typography, Paper, Grid } from "@mui/material";
import CustomizedAccordions from "../components/Accordion";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../components/Modal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Tour = () => {
  const { image, text } = useSelector((state) => {
    return {
      image: state.tourState.image,
      text: state.tourState.description,
    };
  });

  const [tourImg, setTourImg] = useState("");
  const [tourDesc, setTourDesc] = useState("");

  useEffect(() => {
    const savedImg = localStorage.getItem("tourImg");
    const savedDesc = localStorage.getItem("tourName");
    const initialImg = JSON.parse(savedImg);
    const initialText = JSON.parse(savedDesc);
    setTourImg(initialImg);
    setTourDesc(initialText);
  }, []);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} xl={8}>
        <Box p={2}>
          <Link style={{ color: "black" }} to="/">
            <ArrowBackIcon />
          </Link>
        </Box>
        <Box
          p={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" textAlign="center" my={2}>
            {text !== "" ? text : tourDesc}
          </Typography>
          <img
            src={image !== "" ? image : tourImg}
            alt={image}
            style={{ objectFit: "contain", width: "100%" }}
          />
        </Box>
        <Box p={2}>
          <Typography variant="h6" component="h6">
            What to expect at this location
          </Typography>
          <Typography variant="paragraph" component="p" mt={2}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quis, eos id non iusto similique aspernatur animi, unde quam dolor
            officiis eaque sequi! Praesentium sed, saepe iure ratione nesciunt
            perspiciatis voluptas architecto in molestiae delectus ipsa itaque
            qui tempore nostrum!
          </Typography>
          <Box mb={10}>
            <Typography variant="h6" component="h6" mt={3} gutterBottom>
              Frequently Asked Questions
            </Typography>
            <CustomizedAccordions />
          </Box>
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNavigation>
              <BasicModal />
            </BottomNavigation>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Tour;
