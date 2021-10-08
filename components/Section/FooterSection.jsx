import {
  Card,
  Divider,
  Grid,
  makeStyles,
  Typography,
  Button,
  IconButton,
  Box,
} from "@material-ui/core";
import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    background: "#212121",
  },
  cardStyle: {
    height: "35vh",
    background: "#212121",
    color: "#fff",
  },
  cardStyleres: {
    height: "55vh",
    background: "#212121",
    color: "#fff",
  },
  cardContainer: {
    height: "35vh",
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 700,
  },
  cardInsideContainer: {
    padding: "2rem",
  },
  solidLine: {
    borderTop: "3px solid #4CAF50",
    width: "15%",
  },
  contEmailTitle: {
    fontSize: 16,
    fontWeight: 700,
  },
  contEmailContent: {
    fontSize: 14,
    fontWeight: 400,
  },
});

const FooterSection = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Box
        component={Grid}
        item
        container
        lg={10}
        display={{ xs: "none", lg: "flex", xl: "flex" }}
        className={classes.cardContainer}
      >
        <Grid item sm={6}>
          <Card className={classes.cardStyle} elevation={4}>
            <Grid
              container
              direction="column"
              className={classes.cardInsideContainer}
              spacing={2}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.titleStyle}
                >
                  About us
                </Typography>
                <Divider className={classes.solidLine} />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="initial">
                  Jyothi Reddy Trust is family initiated, with Ashok and Jyothi
                  karakampalle being the founders running the organization
                  successfully since 2013
                </Typography>
              </Grid>

              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  href="tel:+919900600661"
                >
                  Contact us
                </Button>
              </Grid>
              <Grid item container>
                <IconButton
                  size="small"
                  size="small"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon color="primary" fontSize="large" />
                </IconButton>
                <IconButton
                  size="small"
                  size="small"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon color="primary" fontSize="large" />
                </IconButton>
                <IconButton
                  size="small"
                  size="small"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon color="primary" fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Card className={classes.cardStyle} elevation={4}>
            <Grid
              container
              direction="column"
              className={classes.cardInsideContainer}
              spacing={2}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.titleStyle}
                >
                  Contact
                </Typography>
                <Divider className={classes.solidLine} />
              </Grid>
              <Grid item container alignItems="center" spacing={2}>
                <Grid item lg={1}>
                  <a
                    href="mailto:info@insureleague.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MailIcon color="primary" />
                  </a>
                </Grid>
                <Grid item container lg={11} direction="column">
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      className={classes.contEmailTitle}
                    >
                      Email
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      color="initial"
                      className={classes.contEmailContent}
                    >
                      ajmomos03@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container alignItems="center" spacing={2}>
                <Grid item lg={1}>
                  {/* <a
                      href="https://goo.gl/maps/rkkakpSuUThum3ve6"
                      target="_blank"
                      rel="noopener noreferrer"
                    > */}
                  <LocationOnIcon color="primary" />
                  {/* </a> */}
                </Grid>
                <Grid item container lg={11} direction="column">
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      className={classes.contEmailTitle}
                    >
                      Registered Address
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      color="initial"
                      className={classes.contEmailContent}
                    >
                      Jyothireddy nagar, CK Palli post, Chittoor
                      Andrapradesh-517001
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      color="initial"
                      className={classes.contEmailContent}
                    >
                      Mobile: +91 98455 21000
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Box>
      <Box
        component={Grid}
        item
        container
        md={12}
        display={{ xs: "flex", lg: "none", xl: "none" }}
        // className={classes.cardContainer}
        direction="column"
      >
        <Grid item>
          <Card className={classes.cardStyleres} elevation={4}>
            <Grid
              container
              direction="column"
              className={classes.cardInsideContainer}
              spacing={2}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.titleStyle}
                >
                  About us
                </Typography>
                <Divider className={classes.solidLine} />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="initial">
                  Jyothi Reddy Trust is family initiated, with Ashok and Jyothi
                  karakampalle being the founders running the organization
                  successfully since 2013
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  href="tel:+919845521000"
                >
                  Contact Us
                </Button>
              </Grid>
              <Grid item container>
                <IconButton
                  size="small"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon color="primary" fontSize="large" />
                </IconButton>
                <IconButton
                  size="small"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon color="primary" fontSize="large" />
                </IconButton>
                <IconButton
                  size="small"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon color="primary" fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.cardStyleres} elevation={4}>
            <Grid
              container
              direction="column"
              className={classes.cardInsideContainer}
              spacing={2}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  color="initial"
                  className={classes.titleStyle}
                >
                  Contact
                </Typography>
                <Divider className={classes.solidLine} />
              </Grid>
              <Grid item container alignItems="center" spacing={2}>
                <Grid item lg={1}>
                  <a href="mailto:info@insureleague.com">
                    <MailIcon color="primary" />
                  </a>
                </Grid>
                <Grid item container lg={11} direction="column">
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      className={classes.contEmailTitle}
                    >
                      Email
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      color="initial"
                      className={classes.contEmailContent}
                    >
                      ajmomos03@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container alignItems="center" spacing={2}>
                <Grid item lg={1}>
                  <LocationOnIcon color="primary" />
                </Grid>
                <Grid item container lg={11} direction="column">
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      className={classes.contEmailTitle}
                    >
                      Registered Address
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      color="initial"
                      className={classes.contEmailContent}
                    >
                      Jyothireddy nagar, CK Palli post, Chittoor
                      Andrapradesh-517001
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      color="initial"
                      className={classes.contEmailContent}
                    >
                      Mobile: +91 98455 21000
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Box>
    </Grid>
  );
};

export default FooterSection;
