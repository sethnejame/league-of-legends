import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" gutterBottom>
        League of Legends
      </Typography>
    </Container>
  );
};

export default HomePage;
