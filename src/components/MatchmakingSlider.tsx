import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

interface MatchmakingSliderProps {
  title: string;
  valueTextFunction: (text: number) => string;
  updateFunction: (event: Event, newDistance: number | number[]) => void;
}

function MatchmakingSlider(props: MatchmakingSliderProps) {
  const { title, valueTextFunction, updateFunction } = props;

  return (
    <div>
      <Typography id="input-slider" gutterBottom>
        {title}
      </Typography>
      <Slider
        defaultValue={5}
        getAriaValueText={valueTextFunction}
        valueLabelDisplay="auto"
        onChange={updateFunction}
        step={1}
        marks
        min={0}
        max={10}
      />
    </div>
  );
}

export default MatchmakingSlider;
