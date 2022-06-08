import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MatchmakingSlider from "../components/MatchmakingSlider";
import ParkCard from "../components/ParkCard";
import getRankings from "../engine/matchmaking";

import data from "../engine/static/parkData.json";


interface ParkInfo {
  code: string;
}

function ResultsPark() {
  const location = useLocation();

  const statea = location.state as ParkInfo;
  const {code} = statea;
  const { name, description, state, parkWebsite, weatherInfo} = data.filter((park) => park.code === code)[0];


  return (
    <div>
    <h1>{code}</h1>
    <h1>{name}</h1>
    <h1>{description}</h1>
    <h1>{state}</h1>
    <h1>{parkWebsite}</h1>
    <h1>{weatherInfo}</h1>
    </div>
  );    
}

export default ResultsPark;
