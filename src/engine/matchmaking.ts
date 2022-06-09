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
  distance: number;
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




function getRatings(prefs: Preferences): RankedPark[] {
  let distanceMap = new Map<string, number>();


  function GetDistance(latitude: number, longitude: number,  distance: number) :string[]{
    Array.from(parks_to_id.keys()).map((code) => {

      const { location} = data.filter((park) => park.code === code)[0];
      let totalDistance = 0;
      
      totalDistance = (Math.abs(parseFloat(location[0]) - latitude )
      + Math.abs(parseFloat(location[1])- longitude));
      
      distanceMap.set(code, totalDistance);


    })
    const mapSort2 = new Map([...distanceMap.entries()].sort((a, b) => a[1] - b[1]));

    let distanceSortedString: string[] = [];
    distanceSortedString = turnToArray(mapSort2);
      return distanceSortedString;
    }
    
  function turnToArray(map: Map<string,number>): string[] {
    let arrayDistance:string[] = []
    for (let key of map.keys()) {
      arrayDistance.push(key);          
  }
    return arrayDistance;
  }
  

  let rankings: RankedPark[] = [];
  let distanceSortedString2 = GetDistance(prefs.latitude, prefs.longitude, prefs.distance);;

  

  Array.from(parks_to_id.keys()).map((code) => {

    console.log("Park: " + code + " | temperature: " + Math.abs(temp_of_parks.indexOf(code) - prefs.temp)* 2.5 );
    console.log("Park: " + code + " | population: " + Math.abs(pop_of_parks.indexOf(code) - prefs.population)* 2.5 )
    console.log("Park: " + code + " | stars: " +Math.abs(stars_of_parks.indexOf(code) - prefs.stars)* 2.5 );
    console.log("Park: " + code + " | distance: " +Math.abs(distanceSortedString2.indexOf(code) - prefs.distance) * 2.5);


    
    let score =
      Math.abs(temp_of_parks.indexOf(code) - prefs.temp) * 2.5 +
      Math.abs(pop_of_parks.indexOf(code) - prefs.population) * 2.5 +
      Math.abs(stars_of_parks.indexOf(code) - prefs.stars) * 2.5 + 
      Math.abs(distanceSortedString2.indexOf(code) - prefs.distance) * 2.5;


      
    console.log("Park total score: " + score);
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
