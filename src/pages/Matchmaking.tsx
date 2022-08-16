import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MatchmakingSlider from "../components/MatchmakingSlider";
import getRankings from "../engine/matchmaking";
import Geolocation from "@react-native-community/geolocation";
import { wait } from "@testing-library/user-event/dist/utils";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { backgroundColor } from "../components/theme";
import discoPark from "../components/Images/DiscoPark-1.png";

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu" />;

function Matchmaking() {
  const [temp, setTemp] = useState(5);
  const [crowdedness, setCrowdedness] = useState(5);
  const [starVisiblity, setStarVisiblity] = useState(5);
  const [distance, setDistance] = useState(5);
  const [error, setError] = useState("");
  const [newPosition, setnewPostion] = useState({
    latitude: 0,
    longitude: 0,
  });
  const navigate = useNavigate();

  const updateTemp = (event: Event, newTemp: number | number[]) => {
    if (typeof newTemp == "number") setTemp(newTemp);
  };

  const updateCrowdedness = (
    event: Event,
    newCrowdedness: number | number[]
  ) => {
    if (typeof newCrowdedness == "number") setCrowdedness(newCrowdedness);
  };
  const updateStarVisibility = (
    event: Event,
    newStarVisibility: number | number[]
  ) => {
    if (typeof newStarVisibility == "number")
      setStarVisiblity(newStarVisibility);
  };
  const updateDistance = (event: Event, newDistance: number | number[]) => {
    if (typeof newDistance == "number") setDistance(newDistance);
  };

  const valuetext = (text: number) => `${text}`;

  const generateLocation = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        setError("");
        setnewPostion({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (e) => setError(e.message)
    );
  };

  const generateParkList = () => {
    let rankings = getRankings({
      temp: temp,
      population: crowdedness,
      stars: starVisiblity,
      distance: distance,
      longitude: newPosition.longitude,
      latitude: newPosition.latitude,
    });

    navigate("/matched", { state: { rankings: rankings } });
  };

  return (
    <div>
      <ThemeProvider theme={backgroundColor}>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid xs={4}></Grid>
          <Grid
            item
            container
            xs={4}
            justifyContent="center"
            alignItems="flex-end"
          >
            <Typography variant="h3" component="h3" color="white">
              Welcome to Disco Park!
            </Typography>
          </Grid>
          <Grid item xs={4} alignItems="flex-end">
            <img width={250} height={250} alt="racoon disco" src={discoPark} />
          </Grid>
          <Grid xs={4}></Grid>
          <Grid item container xs={4} justifyContent="center">
            <Typography color="white">
              Finding your top National Park made easy.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={8} columns={12}>
          <Grid
            sx={{
              marginY: 4,
            }}
            item
            xs={6}
          >
            <MatchmakingSlider
              title="Temperature"
              leftPicture={AcUnitIcon}
              rightPicture={LocalFireDepartmentIcon}
              valueTextFunction={valuetext}
              updateFunction={updateTemp}
            />
          </Grid>
          <Grid
            sx={{
              marginY: 4,
            }}
            item
            xs={6}
          >
            <MatchmakingSlider
              title="Social Activites"
              leftPicture={PersonIcon}
              rightPicture={PeopleIcon}
              valueTextFunction={valuetext}
              updateFunction={updateCrowdedness}
            />
          </Grid>
          <Grid
            sx={{
              marginY: 4,
            }}
            item
            xs={6}
          >
            <MatchmakingSlider
              leftPicture={NightsStayIcon}
              rightPicture={AutoAwesomeIcon}
              title="Star Visibility"
              valueTextFunction={valuetext}
              updateFunction={updateStarVisibility}
            />
          </Grid>
          <Grid
            sx={{
              marginY: 4,
            }}
            item
            xs={6}
          >
            <MatchmakingSlider
              leftPicture={DirectionsCarFilledIcon}
              rightPicture={AirplanemodeActiveIcon}
              title="Distance"
              valueTextFunction={valuetext}
              updateFunction={updateDistance}
            />
            <Grid container justifyContent="center">
              <Button onClick={generateLocation} aria-label="add">
                {" "}
                Get Current Location <LocationOnIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          sx={{
            paddingTop: 6,
          }}
          container
          justifyContent="center"
        >
          <Button size="large" variant="contained" onClick={generateParkList}>
            Let's Go!
          </Button>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Matchmaking;
