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

const WhyUsSection = () => {
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
              Why Us?
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="secondary" align="center">
              We demonstrate passion for the charity's aims and strategic
              direction. We are transparent in showcasing the impact of
              campaigns of social transformation. This gives a much-needed
              credibility and informs the world that donating to us would be a
              good investment for a sustainable future.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="secondary" align="center">
              We have changed the life of thousands in and around Bangalore
              providing required health care for old age and education for
              orphan kids.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          container
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Image src="/whyus.jpg" width="640" height="423" />
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
              Why Us?
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="secondary" align="center">
              We demonstrate passion for the charity's aims and strategic
              direction. We are transparent in showcasing the impact of
              campaigns of social transformation. This gives a much-needed
              credibility and informs the world that donating to us would be a
              good investment for a sustainable future.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="secondary" align="center">
              We have changed the life of thousands in and around Bangalore
              providing required health care for old age and education for
              orphan kids.
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
          <Image src="/whyus.jpg" width="640" height="423" />
        </Grid>
      </Box>
    </Grid>
  );
};
export default WhyUsSection;
