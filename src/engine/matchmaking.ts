import {
  parks_to_id,
  temp_of_parks,
  pop_of_parks,
  stars_of_parks,
} from "./static/parkDataRankings";

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
function getDistance(longitude: number, latitude: number) {}

function getRatings(prefs: Preferences): RankedPark[] {
  let rankings: RankedPark[] = [];

  Array.from(parks_to_id.keys()).map((code) => {
    let score =
      Math.abs(temp_of_parks.indexOf(code) - prefs.temp) +
      pop_of_parks.indexOf(code) * prefs.population +
      stars_of_parks.indexOf(code) * prefs.stars;

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
