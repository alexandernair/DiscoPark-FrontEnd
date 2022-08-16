import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import MatchmakingSlider from "../components/MatchmakingSlider";
import ParkCard from "../components/ParkCard";
import getRankings from "../engine/matchmaking";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { backgroundColor, whiteButton } from "../components/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sparkles from "react-sparkle";

interface Park {
  name: string;
  code: string;
}
interface RankedPark {
  park: Park;
  score: number;
}

function TopMatch() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as { rankings: RankedPark[] };
  const rankings: RankedPark[] = state.rankings;

  const generateParkList = () => {
    navigate("/results", { state: { rankings: rankings } });
  };
  return (
    <div>
      <ThemeProvider theme={backgroundColor}>
        <CssBaseline />
        <Grid sx={{}} columns={16}>
          <Grid container justifyContent="center" item xs={16}>
            <Typography
              sx={{ marginY: 5 }}
              variant="h3"
              component="h3"
              color="white"
            >
              Your Top Park
            </Typography>
          </Grid>

          <Grid container justifyContent="center" item xs={16}>
            {<ParkCard code={rankings[0].park.code} />}
            <Sparkles
              color="yellow"
              count={15}
              minSize={7}
              maxSize={12}
              overflowPx={80}
              fadeOutSpeed={15}
              flicker={false}
            />
            <Grid
              sx={{
                marginY: 4,
              }}
              container
              justifyContent="center"
            >
              <Typography
                sx={{
                  marginY: 2,
                }}
                variant="h6"
                color="white"
              >
                View your other top picks!
              </Typography>
              <ThemeProvider theme={whiteButton}>
                <IconButton onClick={generateParkList} size="large">
                  <ArrowCircleRightIcon fontSize="large" color="secondary" />
                </IconButton>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default TopMatch;
