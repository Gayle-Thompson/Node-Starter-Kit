const express = require("express");
const app = express ();
const port = 3000;

app.get("/", function (request, response) {
  response.send("Yay Node!");
});

const class9FavoriteFoods = ["Pitta bread", " Sushi", " Rice", " Chicken", " fish pie"];
app.get("/node", function (request, response) {
  response.send(`This is London9's fave foods: ${class9FavoriteFoods}`);
});

app.get("/codeyourfuture", function (request, response) {
  response.send("london9: This is class 9 in London!");
});

app.get("/continents", function (request, response) {
  const worldMap = request.query.countries;
  response.send(`These are world maps ${worldMap}`);
});

app.get("/chocolate", function (request, response){
    response.send("chocolate: yuuum!!")
})

const classFaveSongs = {
  one: "'Dance' by Jason Durulo",
  two: "'Move n Shake' by Michael Sharpe",
  three: "'My Friend' by Julia Stiles",
  four: "'Clap Clap Clap' by Mama Joyce"
};

app.get("/songs", function (request, response) {
  response.send(
    `My fave songs to dance to are ${classFaveSongs.one} and ${classFaveSongs.four}`
  );
});

// function ourSongs(allsongs) {
//   return allsongs.map((song) => {
//     console.log(song);
//   });
// }
//  ourSongs(classFaveSongs);

app.get("/song", function (request, response) {
  response.json(`These are my class fave songs to dance to ${classFaveSongs}`);
});

app.get("/water", function (req, res) {
  let doWeHaveWater = req.query.search;
  res.send("Hello, we are sorry, but " + doWeHaveWater);
});

//localhost:3000/water?search=no water available

http: app.listen(port, () => {
  console.log(`Server is listening on port ${port}. Ready to accept requests!`);
});