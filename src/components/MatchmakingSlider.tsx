import { ComponentNameToClassKey, SvgIconTypeMap } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Component } from "react";

interface MatchmakingSliderProps {
  title: string;
  leftPicture: string,
  rightPicture: string,
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
        valueLabelDisplay="off"
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
