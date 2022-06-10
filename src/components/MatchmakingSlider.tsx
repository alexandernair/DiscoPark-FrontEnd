import { Box, ComponentNameToClassKey, SvgIconTypeMap } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

type Component = React.FC<any> | React.LazyExoticComponent<React.FC<any>>

interface MatchmakingSliderProps {
  title: string;
  leftPicture: Component,
  rightPicture: Component,
  valueTextFunction: (text: number) => string;
  updateFunction: (event: Event, newDistance: number | number[]) => void;
}

function MatchmakingSlider(props: MatchmakingSliderProps) {
  const { title, valueTextFunction, updateFunction } = props;

  return (
    <div>  
      <Grid sx= {{
        
      }}container spacing={3} columns={12}>      
      <Grid  
      container justifyContent = "flex-start"item xs={4}>
        <props.leftPicture/>
     </Grid>
     <Grid  
      container justifyContent = "center"item xs={4}>
        <Typography id="input-slider" gutterBottom>
        {title}
      </Typography>     </Grid>
      <Grid  
     container justifyContent = "flex-end" item xs={4}>
        <props.rightPicture />
      </Grid>
    </Grid>

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
