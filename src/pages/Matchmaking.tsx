import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MatchmakingSlider from "../components/MatchmakingSlider";
import getRankings from "../engine/matchmaking";

function Matchmaking() {
  const [temp, setTemp] = useState(5);
  const [crowdedness, setCrowdedness] = useState(5);
  const [starVisiblity, setStarVisiblity] = useState(5);
  const [distance, setDistance] = useState(25);

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

  const generateParkList = () => {
    let rankings = getRankings({
      temp: temp,
      population: crowdedness,
      stars: starVisiblity,
    });

    navigate("/results", { state: { rankings: rankings } });
  };

  return (
    <div>
      <Typography variant="h3" component="h3">
        Let's Find You a Park!
      </Typography>

      <MatchmakingSlider
        title="Temperature"
        valueTextFunction={valuetext}
        updateFunction={updateTemp}
      />
      <MatchmakingSlider
        title="Crowdedness"
        valueTextFunction={valuetext}
        updateFunction={updateCrowdedness}
      />
      <MatchmakingSlider
        title="Star Visibility"
        valueTextFunction={valuetext}
        updateFunction={updateStarVisibility}
      />
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

      <Button onClick={generateParkList}>Let's Find You a Park!</Button>
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
