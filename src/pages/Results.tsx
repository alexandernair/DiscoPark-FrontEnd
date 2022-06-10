import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MatchmakingSlider from "../components/MatchmakingSlider";
import ParkCard from "../components/ParkCard";
import getRankings from "../engine/matchmaking";

interface Preferences {
  temp: number;
  population: number;
  stars: number;
}
interface Park {
  name: string;
  code: string;
}
interface RankedPark {
  park: Park;
  score: number;
}

function Results() {
  const location = useLocation();

  const state = location.state as { rankings: RankedPark[] };
  const rankings: RankedPark[] = state.rankings;

  return (
    <div>
      <ol>
        <Grid spacing={3} columns={12} container justifyContent="center">
          <Grid item xs={12} >
            <h1>Your Top Park
            </h1>
          </Grid>
          <Grid item xs={12}>
            {<ParkCard code={rankings[0].park.code} />}
          </Grid>
        </Grid>
        {rankings.map((rankedPark: RankedPark) => (
          <ParkCard code={rankedPark.park.code} />
        ))}
      </ol>
    </div>
  );
}

export default Results;
