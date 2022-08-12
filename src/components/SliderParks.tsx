import React, { useState } from "react";
import data from "../engine/static/parkData.json";
import ParkCard from "./ParkCard";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import IconButton from "@mui/material/IconButton";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Home from "@mui/icons-material/Home";

interface Park {
  name: string;
  code: string;
}
interface RankedPark {
  park: Park;
  score: number;
}

const SliderParks = (props: { rankings: RankedPark[] }) => {
  const rankings = props.rankings;

  return (
    <div>
      <section className="slider">
        <Carousel
          sx={{
            alignContent: "center",
          }}
          className="carouselStyling"
          NextIcon={<ArrowForwardIosIcon />}
          PrevIcon={<ArrowBackIosIcon />}
        >
          {rankings.slice(1).map((rankedPark: RankedPark) => (
            <ParkCard code={rankedPark.park.code} />
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default SliderParks;
