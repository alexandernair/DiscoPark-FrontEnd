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
        {rankings.slice(1)
          .map((rankedPark: RankedPark) => ( 
            <ParkCard code={rankedPark.park.code} />

          ))}
      </ol>

    </div>
  );
}

export default Results;
