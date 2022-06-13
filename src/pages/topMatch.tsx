import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import MatchmakingSlider from "../components/MatchmakingSlider";
import ParkCard from "../components/ParkCard";
import getRankings from "../engine/matchmaking";
import IconButton from '@mui/material/IconButton';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

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

function TopMatch() {
    const location = useLocation();
    const navigate = useNavigate();

    const state = location.state as { rankings: RankedPark[] };
    const rankings: RankedPark[] = state.rankings;

    const generateParkList = () => {
        navigate("/results", { state: { rankings: rankings } });
    }
    return (
        <div>
                <Grid sx={{
                }} columns={16} >
                    <Grid container justifyContent="center" item xs={16} >
                        <h1>Your Top Park
                        </h1>
                    </Grid>
                    <Grid container justifyContent="center" item xs={16}>
                        {<ParkCard code={rankings[0].park.code} />}
                        <Grid sx={{
                            marginY: 4
                        }} container justifyContent="center">
                            <Typography sx={{
                                marginY: 2
                            }} variant="h6">View your other top picks!</Typography>
                            <IconButton onClick={generateParkList} size="large" >
                                <ArrowCircleRightIcon fontSize="large" />
                            </IconButton>
                        </Grid>
                    </Grid>

                </Grid>

        </div >
    );
}

export default TopMatch;
