const URL = "https://api.football-data.org/v4/matches"

const filter= document.querySelector("#filter")

async function getGames() {

   const response = await fetch(url)

   console.log(response);
}

getGames();

