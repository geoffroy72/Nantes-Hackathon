// window.onload = () => {
//   let candies = [];
//   let streets = [];
//   let dataCandy = [];
//   let dataStreet = [];

//   fetch(`https://fr-en.openfoodfacts.org/category/candies/${getRandomArbitrary(1,10)}.json`)
//     .then(response=> response.json())
//     .then( json => {dataCandy = json.products})
//     .then( () =>{ dataCandy.map(candy => {
//       return(
//         candies.push(candy.product_name)
//       )
//       })
//       console.log(candies)
//     })

//   fetch("https://api-adresse.data.gouv.fr/search/?q=rue&type=street&limit=14&citycode=44109")
//     .then(response => response.json())
//     .then( json => {
//       dataStreet = json.features
//     })
//     .then( () => https://techraptor.net/wp-content/uploads/2015/05/pac-man-kill-screen-1-1.png{dataStreet.map(street => {
//       return(
//         streets.push(street.properties.name)
//       )
//     })
//       console.log(streets)
//     }
//     )
    
// }

// getRandomInt = (max) => {
//   return Math.floor(Math.random() * Math.floor(max)); 
// }

// getRandomArbitrary = (min, max) => {
//   return Math.floor(Math.random() * (max - min) + min);
// }

window.onload = () => {

  //   function startTimer(duration, display) {
  //     var timer = duration, minutes, seconds;
  //     setInterval(function () {
  //         minutes = parseInt(timer / 60, 10)
  //         seconds = parseInt(timer % 60, 10);
  
  //         minutes = minutes < 10 ? "0" + minutes : minutes;
  //         seconds = seconds < 10 ? "0" + seconds : seconds;
  
  //         display.textContent = minutes + ":" + seconds;
  
  //         if (--timer < 0) {
  //             timer = duration;
  //         }
  //     }, 1000);
  // }
  
  //     var minutes = 60 * 5,
  //         display = document.querySelector('#time');
  //     startTimer(minutes, display);
  
    let toggleMusic ="OFF"
    let startScreen =`
      <div class="row mt-5">
        <div class="col-md-12 text-center logo">
          <h1 class="main-title">NANTES HORROR STORY</h1>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-12 text-center">
          <button id="startGame" onClick="launchCanvas()" class="themeBtn">START GAME</button>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-12 text-center">
          <button type="button" class="themeBtn" data-toggle="modal" data-target="#exampleModal">
          HIGH SCORE
          </button>

          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header d-flex justify-content-center">
                  <h1 class="modal-title text-orange" id="exampleModalLabel">HIGH SCORE</h1>

                </div>
                <div class="modal-body">
                  <h2><span class="adress-score mr-5">Adress</span> <span class="score text-green">Score</span></h2>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                  <button type="button" class="themeBtn" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-12 text-center">
          <button value=${toggleMusic} id="musicLaunch" class="themeBtn">MUSIC OFF</button>
        </div>
      </div>`;
  
    
    document.getElementById("screen").innerHTML = startScreen;
    let audio = new Audio('./assets/sound/Undead.mp3');
    let audioGame = new Audio('./assets/sound/GameMusic.mp3')
    
    let startMusicHandler = document.getElementById("musicLaunch")

    startMusicHandler.addEventListener('click', function(){
      if(startMusicHandler.value === "OFF"){
        audio.play();
        startMusicHandler.value = "ON";
        startMusicHandler.innerHTML = "MUSIC ON";
      }
      else if(startMusicHandler.value === "ON") {
        audio.pause();
        startMusicHandler.value = "OFF";
        startMusicHandler.innerHTML = "MUSIC OFF";
      }
    });

    let startGameHandler = document.getElementById("startGame")

    startGameHandler.addEventListener('click', function(){
      document.getElementById("screenSwitch").className = "d-none"
      audioGame.play();
      audioGame.volume = 0.08;
      if (audio.play()) {
        audio.pause()
      }
      document.getElementById("canvas").style = "display: block; touch-action: none; -moz-user-select: none; width: 1024px; height: 768px;"
    });
  }  