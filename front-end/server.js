'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const CMS_URL = process.env.CMS_BACKEND_URL;
console.log("CMS_URL:" + CMS_URL);
// App
const app = express();
app.get('/', (req, res) => {
    const http = require('http');
    // get data from the backend
    http.get(CMS_URL + "/restaurants", (resp) => {
          let data = '';
          // A chunk of data has been recieved.
          resp.on('data', (chunk) => {
            data += chunk;
          });

          // The whole response has been received. Print out the result.
          resp.on('end', () => {
            console.log("YOOO:" + data);
            let restaurants = JSON.parse(data);
            for (let index in restaurants) {
                res.write("<br>" + restaurants[index].name + "</br>");
                res.write("<br>" + restaurants[index].description + "</br>");

            }

            res.end();
          });

        }).on("error", (err) => {
          console.log("Error: " + err.message);
     });

});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);