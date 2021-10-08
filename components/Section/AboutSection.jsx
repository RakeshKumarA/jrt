import { Grid, Typography, Button, Box } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  paddingres: {
    paddingTop: "2rem",
  },
});

const AboutSection = () => {
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
        spacing={4}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={6}
          container
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Image src="/Aboutus.png" width="640" height="423" />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          container
          direction="column"
          spacing={4}
          justify="center"
        >
          <Grid item>
            <Typography
              variant="h3"
              color="primary"
              style={{ fontWeight: 600 }}
            >
              About us
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="secondary">
              Jyothi Reddy Trust is a leading Social Service Organization
              established in 2013 with the objective to serve the old age and
              orphan kids in the most backward regions irrespective caste, creed
              and religion. Our Vision is to build a society where all human
              beings can live with dignity. Our mission is to secure the life of
              old age people and build a bright future for orphan kids so that
              they can bring a change in the society.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        component={Grid}
        item
        display={{ sm: "flex", md: "none" }}
        container
        style={{ padding: 20 }}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          spacing={4}
          direction="column"
        >
          <Grid item>
            <Typography
              variant="h4"
              color="primary"
              style={{ fontWeight: 600 }}
              align="center"
            >
              About us
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="secondary" align="center">
              Jyothi Reddy Trust is a leading Social Service Organization
              established in 2001 with the objective to serve the old age and
              orphan kids in the most backward regions irrespective caste, creed
              and religion. Our Vision is to build a society where all human
              beings can live with dignity. Our mission is to secure the life of
              old age people and build a bright future for orphan kids so that
              they can bring a change in the society.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          className={classes.paddingres}
        >
          <Image src="/Aboutus.png" width="640" height="423" />
        </Grid>
      </Box>
    </Grid>
  );
};
export default AboutSection;
