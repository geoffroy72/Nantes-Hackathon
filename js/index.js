function launchCanvas() {



  document.addEventListener("keydown", function(e) {
      if (e.keyCode == 13) {
        toggleFullScreen();
      }
  }, false);
  
  function toggleFullScreen() {
    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
  
  // end of full screen
  
  // display map
  
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  
  let map = new Image();
    map.src = './assets/image/map.jpg';
    map.onload = function() {
      context.drawImage(map, 0, 0);
    }

  let houses = [
    {address: '', x: 96, y:544},
    {address: '', x: 128, y:32},
    {address: '', x: 128, y:320},
    {address: '', x: 224, y:448},
    {address: '', x: 384, y:160},
    {address: '', x: 416, y:672},
    {address: '', x: 448, y:96},
    {address: '', x: 512, y:512},
    {address: '', x: 544, y:416},
    {address: '', x: 576, y:96},
    {address: '', x: 608, y:608},
    {address: '', x: 672, y:224},
    {address: '', x: 768, y:352},
    {address: '', x: 800, y:512},
    {address: '', x: 896, y:128},
    {address: '', x: 960, y:672},]

      let housesReady = false;
      let houseImage = new Image();
      houseImage.src = './assets/image/home-1.png';
      houseImage.onload = function() {
        housesReady = true
      }
    
  
  let zombie1 = new Image();
    zombie1.src = './assets/image/zombie1.png';
    zombie1.onload = function() {
      context.drawImage(zombie1, 0, 0);
    }
      
  let zombie2 = new Image();
    zombie2.src = './assets/image/zombie2.png';
    zombie2.onload = function(x, y) {
      context.drawImage(zombie2, 0, 0, 32,32, x-26, y-17,25, 32, 32);
    }
  
  // Hero image
  let heroReady = false;
  let heroImage = new Image();
  heroImage.onload = function () {
    heroReady = true;
  };
  heroImage.src = "./assets/image/chubby-alone.png";
  
  // Game objects
  let hero = {
    speed: 3, // movement in pixels per second
    x: 32,
    y: 32
  };
  
  
  
  // Handle keyboard controls
  var keysDown = {};
  
  addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
  }, false);
  
  addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
  }, false);
  
  // render!
      setInterval (function (){
  
        if (38 in keysDown) { // Player holding up
          hero.y -= hero.speed ;
        }
        if (40 in keysDown) { // Player holding down
          hero.y += hero.speed ;
        }
        if (37 in keysDown) { // Player holding left
          hero.x -= hero.speed ;
        }
        if (39 in keysDown) { // Player holding right
          hero.x += hero.speed ;
        }
        
        if (map) {
          context.drawImage(map, 0, 0);
        }

        if (heroReady){
          context.drawImage(heroImage, hero.x, hero.y);
        }

        if(housesReady){
          houses.map( house => {
            context.drawImage(houseImage, house.x, house.y)
            })
        }
        
        // if (zombie1) {
        //   context.drawImage(zombie1, 250, 250);
        // }
        
        // if (zombie2) {
        //   context.drawImage(zombie2, 300, 300);
        // }
          }, 1000/30)
  
  }