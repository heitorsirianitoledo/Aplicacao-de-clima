const URL = "https://api.football-data.org/v4/matches"
let jogos = [];

async function returnApi(){
   const resp = await fetch(URL, {
      headers: {
        'X-Auth-Token': '2a7aa73086dc418c8c9b8cdbe0537fc6',
      }
    });

  


if(resp.status == 200){
   const obj = await resp.json();
   jogos = obj.matches;
   adicionarJogos();
}
}

const filterInput = document.querySelector('#filter'); 

// Listener para filtro automático
filterInput.addEventListener("input", adicionarJogos);

// Listener para Enter
filterInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    adicionarJogos();
  }
});

function adicionarJogos(){
   const filterInput = document.querySelector('#filter');
   const timeStamp = Date.now();

   ul.innerHTML = "";

   const jogosFiltrados = jogos.filter(jogo => {
   const timeCasa = jogo.homeTeam.name.toLowerCase();
   const timeVisitante = jogo.awayTeam.name.toLowerCase();
   const filtro = filterInput.value.toLowerCase();
   return timeCasa.includes(filtro) || timeVisitante.includes(filtro);


   });

   jogosFiltrados.forEach(jogo =>{
      const li = document.createElement("li");

      const horarioJogo = new Date (jogo.utcDate).getTime();

      let status = "";
      if(horarioJogo > timeStamp) status = "A iniciar";
      else if(horarioJogo <= timeStamp && jogo.status == 'IN_PLAY') status = "Em andamento";
      else if (jogo.status == "FINISHED") status = "Finalizado";

      li.textContent = `${jogo.homeTeam.name} ${jogo.score.fullTime.home ?? "-"} x ${jogo.score.fullTime.away ?? "-"} ${jogo.awayTeam.name} - ${status}`;

      ul.appendChild(li);

   });
}

returnApi();
