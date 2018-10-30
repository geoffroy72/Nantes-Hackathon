window.onload = () => {

  

// code for press enter to have fullscreen

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

let zombie2 = new Image();
  zombie2.src = './assets/image/zombie2.png';
  zombie2.onload = function() {
    context.drawImage(zombie2, 0, 0);
  }

    setInterval (function () {
    if (map) {
      context.drawImage(map, 0, 0);
    }
  
    if (zombie2) {
      context.drawImage(zombie2, 0, 0);
    }
  }, 1000/30)

//end of display map



// end of the game code

}

