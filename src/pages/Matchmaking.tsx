import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MatchmakingSlider from "../components/MatchmakingSlider";
import getRankings from "../engine/matchmaking";
import Geolocation from "@react-native-community/geolocation";

function Matchmaking() {
  const [temp, setTemp] = useState(5);
  const [crowdedness, setCrowdedness] = useState(5);
  const [starVisiblity, setStarVisiblity] = useState(5);
  const [distance, setDistance] = useState(25);
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
      longitude: newPosition.longitude,
      latitude: newPosition.latitude,
    });

    navigate("/results", { state: { rankings: rankings } });
  };
  function callTwoFunctions() {
    generateLocation();
    generateParkList();
  }
  return (
    <div>
      <Box
        component="span"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          bgcolor: "background.paper",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: 1,
          fontWeight: "bold",
          m: 4,
        }}
      >
        <Typography variant="h3" component="h3">
          Let's Find You a Park!
        </Typography>
      </Box>
      <Grid container spacing={4} columns={12}>
        <Grid item xs={6}>
          <MatchmakingSlider
            title="Temperature"
            valueTextFunction={valuetext}
            updateFunction={updateTemp}
          />
        </Grid>
        <Grid item xs={6}>
          <MatchmakingSlider
            title="Crowdedness"
            valueTextFunction={valuetext}
            updateFunction={updateCrowdedness}
          />
        </Grid>
        <Grid item xs={6}>
          <MatchmakingSlider
            title="Star Visibility"
            valueTextFunction={valuetext}
            updateFunction={updateStarVisibility}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography id="distance-input-slider" gutterBottom>
            Distance
          </Typography>
          <Slider
            aria-label="distance"
            defaultValue={100}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            onChange={updateDistance}
            step={20}
            marks
            min={0}
            max={200}
          />
        </Grid>
      </Grid>
      <p>{newPosition.latitude}</p>
      <p>{newPosition.longitude}</p>
      <Button onClick={callTwoFunctions}>Let's Find You a Park!</Button>
      <div>
        <p>{temp}</p>
        <p>{crowdedness}</p>
        <p>{starVisiblity}</p>
        <p>{distance}</p>
      </div>
    </div>
  );
}

export default Matchmaking;
