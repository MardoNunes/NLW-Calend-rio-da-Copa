function createGame(player1, hour, player2){
  return `
    <li>
       <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
       <strong>16:00</strong>
       <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
      </li>
  `
}



function createCard(date, day, games){
  return `
    <div class="card">
      <h2>${date}<span>${day}</span></h2>    
      <ul>
         ${games}
      </ul>
    </div>
  `
}





document.querySelector('#app').innerHTML = `
  <header>
     <img src="./assets/logo.svg" alt="Logo da NLW">
  </header>

  <main id="cards">
    ${createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) /** se eu concatenar a mesma funcao aqui com outros parametros, eu crio uma segunda linha com mais jogos no mesmo dia*/}  
    ${createCard("28/12", "segunda", createGame("brazil", "13:00", "switzerland"))}
    ${createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))}  
   </main> `