import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MatchmakingSlider from "../components/MatchmakingSlider";
import ParkCard from "../components/ParkCard";
import getRankings from "../engine/matchmaking";
import SliderParks from "../components/SliderParks";
import { List, ThemeProvider } from "@mui/material";
import { backgroundColor } from "../components/theme";
import { CssBaseline } from "@mui/material";

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
      <ThemeProvider theme={backgroundColor}>
        <CssBaseline />
        <Grid container>
          {rankings.slice(1).map((rankedPark: RankedPark) => (
            <Grid item xs={3}>
              <ParkCard code={rankedPark.park.code} />
            </Grid>
          ))}
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Results;
