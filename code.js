   //variables de puntaje
   let playerscore = 0;
   let compscore = 0;

   //Elección aleatoria para la computadora
   function GetComputerChoice(){
       let a;
       let randomizer = Math.floor(Math.random() * 3); // 0 , 1 , 2 aleatoriamente

       if (randomizer === 0) {
           a="tijeras";
           return a;
       }
       else if (randomizer === 1){
           a="papel";
           return a;
       }
       else{
           a="piedra";
           return a;
       }
   }

   //Eleccion del jugador
   function GetPlayersChoice(){
       let pchoice = prompt("¡¡Piedra, papel o tijeras!!");
       return pchoice.toLowerCase();   //transforma a lower para permitir cosas como PAPEL o PieDrA
   }


   function playRound(humanChoice , computerChoice){

       if (humanChoice === "tijeras"){
           if (humanChoice === computerChoice){
               console.log("Ambos eligieron tijeras, es un empate")
           }
           else if(computerChoice === "piedra"){
               console.log("Piedra vence a tijeras, tu pierdes")
               compscore += 1;
           }
           else{
               console.log("Tijeras vence a papel, tu ganas.")
               playerscore += 1;
           }
       }
       if (humanChoice === "papel"){
           if (humanChoice === computerChoice){
               console.log("Ambos eligieron papel, es un empate")
           }
           else if(computerChoice === "tijeras"){
               console.log("Tijeras vence a papel, tu pierdes")
               compscore += 1;
           }
           else{
               console.log("Papel vence a piedra, tu ganas.")
               playerscore += 1;
           }
       }
       if (humanChoice === "piedra"){
           if (humanChoice === computerChoice){
               console.log("Ambos eligieron piedra, es un empate")
           }
           else if(computerChoice === "papel"){
               console.log("Papel vence a piedra, tu pierdes")
               compscore += 1;
           }
           else{
               console.log("Piedra vence a tijeras, tu ganas.")
               playerscore += 1;

           }
       }
   }

   function playGame(){

       let i = 0;
       while (i === 0){
           playRound(GetPlayersChoice(), GetComputerChoice());
           console.log("Tu puntaje es: " + playerscore);
           console.log("El puntaje de la computadora es: " + compscore);
           
           keep = prompt("Quieres seguir jugando? Si / No");
           keep = keep.toLowerCase();

           if (keep === "si"){
               console.log("Preparate para la siguiente ronda");
           }
           else if (keep === "no"){
               console.log("Gracias por jugar");
               i = 1;
           }
           else{
               console.log("No ingresaste algo valido, se considerara como un si")
           }
       }
       
   }

  playGame();