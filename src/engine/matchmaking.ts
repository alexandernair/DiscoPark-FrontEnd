import {
  parks_to_id,
  temp_of_parks,
  pop_of_parks,
  stars_of_parks,
} from "./static/parkDataRankings";

import React, { useState, useEffect } from "react";
import data from "../engine/static/parkData.json";


interface Preferences {
  temp: number;
  population: number;
  stars: number;
  longitude: number;
  latitude: number;
}
interface Park {
  name: string;
  code: string;
}
interface RankedPark {
  park: Park;
  score: number;
}
function GetDistance(latitude: number, longitude: number, code: string){
  const [totalDistance, setTotalDistance] = useState(0);
  const { location} = data.filter((park) => park.code === code)[0];
  
  setTotalDistance(Math.abs(parseFloat(location[0]) - latitude )
  + Math.abs(parseFloat(location[1])- longitude));

  return totalDistance;
}


function getRatings(prefs: Preferences): RankedPark[] {
  let rankings: RankedPark[] = [];

  Array.from(parks_to_id.keys()).map((code) => {
    let score =
      Math.abs(temp_of_parks.indexOf(code) - prefs.temp) +
      pop_of_parks.indexOf(code) * prefs.population +
      stars_of_parks.indexOf(code) * prefs.stars -
      GetDistance(prefs.latitude, prefs.longitude, code);

    return rankings.push({
      park: {
        name: parks_to_id.get(code)!,
        code: code,
      },
      score: score,
    });
  });

  return rankings.sort((a, b) => a.score - b.score);
}

export default getRatings;
