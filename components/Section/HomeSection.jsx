import { Grid, Typography, Button, Box } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  container: {
    paddingTop: "8rem",
    paddingRight: 20,
    paddingLeft: 20,
  },
});

const HomeSection = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Box
        component={Grid}
        item
        display={{ xs: "none", md: "flex" }}
        md={8}
        container
        spacing={2}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          md={6}
          container
          direction="column"
          spacing={4}
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Typography
              variant="h3"
              color="primary"
              style={{ fontWeight: 600 }}
              align="center"
            >
              Jyothi Reddy Trust
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              color="secondary"
              align="center"
              // style={{ fontFamily: "'Pacifico', cursive" }}
            >
              A New perspective on life, which is a perfect home away from home.
              We believe care for life begins at home and we follow this with
              complete sincerity and commitment.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={6} container justify="center" alignItems="center">
          <Grid item>
            <Image src="/homesection-min.jpg" width="500" height="350" />
          </Grid>
        </Grid>
      </Box>
      <Box
        component={Grid}
        item
        display={{ xs: "flex", md: "none" }}
        sm={10}
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid
          item
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <Typography
              variant="h4"
              color="primary"
              style={{ fontWeight: 600 }}
              align="center"
            >
              Jyothi Reddy Trust
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              color="secondary"
              align="center"
              // style={{ fontFamily: "'Pacifico', cursive" }}
            >
              A New perspective on life, which is a perfect home away from home.
              We believe care for life begins at home and we follow this with
              complete sincerity and commitment.
            </Typography>
          </Grid>
        </Grid>
        <Grid item sm={6} container justify="center" alignItems="center">
          <Grid item>
            <Image src="/homesection-min.jpg" width="400" height="275" />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default HomeSection;
