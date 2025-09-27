const URL = "https://api.football-data.org/v4/matches"

async function returnApi(){
   const resp = await fetch(URL, {
      headers: {
        'X-Auth-Token': '2a7aa73086dc418c8c9b8cdbe0537fc6',
      }
    });

  


if(resp.status == 200){
   const obj = await resp.json();
   console.log(obj);
}
}

function adicionarJogos(){
   const ul = document.querySelector('[data-js = "jogos"]');
   const filterImput = document.querySelector('#filter');
   const timeStamp = Date.now().toString();

}

returnApi();