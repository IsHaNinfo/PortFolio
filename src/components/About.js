import React from "react";
import { Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link } from "react-scroll";
import ArrowCircleDownTwoToneIcon from "@mui/icons-material/ArrowCircleDownTwoTone";
import { styled } from "@mui/system";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const MyCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="images/SPMS1.png" alt="Slide 1" />
      </div>
      <div>
        <img src="images/SPMS2.png" alt="Slide 2" />
      </div>
      <div>
        <img src="images/SPMS3.png" alt="Slide 3" />
      </div>
    </Carousel>
  );
};
const AnimatedArrowIcon = styled(ArrowCircleDownTwoToneIcon)`
  font-size: 3rem;
  cursor: pointer;
  animation: bounce 1s infinite;
  color: red;

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
const RentCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="images/RHOP1.png" alt="Slide 1" />
      </div>
      <div>
        <img src="images/RHOP2.png" alt="Slide 2" />
      </div>
      <div>
        <img src="images/RHOP3.png" alt="Slide 3" />
      </div>
    </Carousel>
  );
};
const AutoCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="images/AUPS1.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="images/AUPS.jpg" alt="Slide 2" />
      </div>
    </Carousel>
  );
};
const About = () => {
  const iconStyle = {
    fontSize: "3rem",
    color: "black",
    margin: "0 10px",
    cursor: "pointer",
    transition: "color 0.3s ease-in-out",
    marginTop: "15px",
  };

  const hoverStyle = {
    color: "red",
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sx={{ ml: "auto", mt: 30, justifyContent: "flex-end" }}>
        <Grid sx={{ ml: 15 }}>
          <Typography variant="h4">--Hello</Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: "4.4rem", fontFamily: "Raleway" }}
          >
            I'm <b style={{ color: "red" }}>Ishan </b>
            Nethmina
          </Typography>
          <Typography variant="h5">
            IT undergraduate student and full stack developer
          </Typography>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <a
                href="https://twitter.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon
                  sx={{ ...iconStyle, ":hover": hoverStyle }}
                  href="https://github.com/IsHaNinfo"
                />
              </a>
              <a
                href="https://twitter.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  sx={{ ...iconStyle, ":hover": hoverStyle }}
                  href="http://linkedin.com/in/ishan-nethmina"
                />{" "}
              </a>

              <a
                href="https://twitter.com/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon sx={{ ...iconStyle, ":hover": hoverStyle }} />
              </a>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <img
          src="images/profile.png"
          alt="profile"
          style={{ width: 450, marginTop: 120, marginLeft: 150 }}
        />
      </Grid>
      <Grid container justifyContent="center" alignItems="center" mt={4} mb={2}>
        <Link to="projects" smooth={true} duration={500}>
          <AnimatedArrowIcon />
        </Link>
      </Grid>
      <Grid id="projects" item xs={12}>
        <Typography variant="h3" sx={{ ml: "135px", mt: "65px" }}>
          Projects
        </Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginLeft: "180px",
            marginTop: "35px",
            marginBottom: "95px",
          }}
        >
          {" "}
          <Card sx={{ maxWidth: 345, marginRight: "80px" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Software Project Management System
              </Typography>
            </CardContent>
            <CardMedia>
              <MyCarousel />
            </CardMedia>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/UserSampath/Lenzz-SPMS.git"
              >
                Read More
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, marginRight: "80px" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Rent House Online Platform (Ongoing)
              </Typography>
            </CardContent>
            <CardMedia>
              <RentCarousel />
            </CardMedia>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/IsHaNinfo/RentHouseOnlinePlatform.git"
              >
                Read More
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, marginRight: "80px" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Automated Shoe Polish Mashine
              </Typography>
            </CardContent>
            <CardMedia>
              <AutoCarousel />
            </CardMedia>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/IsHaNinfo/AutomatedShoePolishMashine.git"
              >
                Read More
              </Button>
            </CardActions>
          </Card>
        </div>
      </Grid>

      <Grid id="contacts">
        <Grid sx={{ mt: 7, textAlign: "center", ml: 50 }}>
          <Typography variant="h2">Contact me</Typography>
        </Grid>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "4rem",
            marginLeft: "455px",
          }}
        >
          <Card sx={{ maxWidth: 345, margin: "0 1rem" }}>
            <CardMedia
              component={PhoneIcon}
              sx={{
                fontSize: 68,
                margin: "auto",
                color: "#f44336",
                ml: 9,
                mt: 5,
              }}
            />
            <CardContent sx={{ mt: 6 }}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Contact Number
              </Typography>
              <Typography variant="body1">(+94) 71 3246556</Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345, margin: "0 1rem" }}>
            <CardMedia
              component={EmailIcon}
              sx={{ fontSize: 68, color: "#ff9800", ml: 9, mt: 5 }}
            />
            <CardContent sx={{ mt: 6 }}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Email
              </Typography>
              <Typography variant="body1">ishaninfo56@gmail.com</Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345, margin: "0 1rem", width: 200 }}>
            <CardMedia
              component={LocationOnIcon}
              sx={{
                fontSize: 68,
                color: "#4caf50",
                mt: 5,
                ml: 9,
              }}
            />
            <CardContent sx={{ mt: 6 }}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Address
              </Typography>
              <Typography variant="body1">Mathugama,Colombo</Typography>
            </CardContent>
          </Card>
        </div>
        <Grid sx={{ textAlign: "center", mt: 7 }}>
          <Button
            style={{
              marginLeft: "450px",
              background: "#F72F20",
              height: "50px",
              width: "270px",
              color: "white",
              fontWeight: 700,
              marginBottom: "100px",
              letterSpacing: ".3rem",
              mr: 2,
            }}
          >
            Thank You
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
