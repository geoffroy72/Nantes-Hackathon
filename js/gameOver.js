
let gameOverScreen = `
  <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <p text-center gameover >GAME OVER</p>
          <img class="resize" src="https://image.ibb.co/dRNRXf/pacman.jpg" alt="game over"/>
            <button type="button" class="btn btn-warning">TRY AGAIN</button>
        </div>
      </div>
  </div>`;

let gameOverHandler = document.getElementById('button')

gameOverHandler.addEventListener('click', function(){
  if(gameOverHandler.value === "off"){
      document.getElementById("screen").innerHTML = gameOverScreen;
      gameOverHandler.value = "on";
  }
  else {
      document.getElementById("screen").innerHTML = "";
      gameOverHandler.value = "off";
  }
})