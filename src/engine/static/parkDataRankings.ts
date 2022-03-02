const parks_to_id: Map<string, string> = new Map<string, string>([
  ["acad", "acadia"],
  ["cave", "carlsebad cavern"],
  ["dena", "denali"],
  ["ever", "everglades"],
  ["glac", "glacier"],
  ["grca", "grand canyon"],
  ["jotr", "joshua tree"],
  ["meve", "mesa verde"],
  ["olym", "olympic"],
  ["yell", "yellowstone"],
]);

// 0 is coldest 9 is warmest
var temp_of_parks = [
  "dena", // 30
  "acad", // 47.3
  "glac", // 55
  "cave", // 60
  "olym", // 65
  "yell", // 67
  "meve", // 85
  "grca", // 85
  "ever", // 88
  "jotr", // 90
];

// 0 least 9 is most populated
var pop_of_parks = [
  "dena", // 54,850
  "cave", // 185,835
  "meve", // 287,477
  "ever", // 792,319
  "glac", // 1,698,864
  "jotr", // 2,399,542
  "olym", // 2,499,177
  "acad", // 2,669,00
  "grca", // 2,897,098
  "yell", // 3,806,306
];

// 0 is a lot of stars 9 is little stars
var stars_of_parks = [
  "dena",
  "acad",
  "ever",
  "grca",
  "jotr",
  "yell",
  "glac",
  "meve",
  "olym",
  "cave",
];

export { parks_to_id, temp_of_parks, pop_of_parks, stars_of_parks };
