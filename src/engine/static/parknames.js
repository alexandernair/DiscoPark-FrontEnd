var axios = require("axios");
const fs = require("fs");
const url =
  "https://developer.nps.gov/api/v1/parks?&api_key=jCOofjT3M5YjRc9sjGOhJaCq7JysvfPfaKTLEeAk&start=";

var config = {
  method: "get",
  url: url,
  headers: {},
};

async function getAllParks() {
  var parks = [];

  for (let i = 0; i < 465; i += 50) {
    config.url = url + i.toString();

    await axios(config).then(function (response) {
      let currParks = response.data.data;

      currParks.map((park) => {
        parks.push({
          name: park.fullName,
          code: park.parkCode,
        });
      });
    });
  }

  // convert JSON object to a string
  //   const data = JSON.stringify(parks);

  // write file to disk
  //   fs.writeFile("./parkNameToCode.json", data, "utf8", (err) => {
  //     if (err) {
  //       console.log(`Error writing file: ${err}`);
  //     } else {
  //       console.log(`File is written successfully!`);
  //     }
  //   });
}

getAllParks();
