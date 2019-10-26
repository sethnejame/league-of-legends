import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const HomePage = () => (
  <Container maxWidth="sm">
    <Typography variant="h3" gutterBottom>
      League of Legends
    </Typography>
    <Link to="about">About</Link>
  </Container>
);

export default HomePage;
