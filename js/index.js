let game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
let upKey;
let downKey;
let leftKey;
let rightKey;
let chubby;
let map;
let layer;

function preload() {
  game.load.tilemap('map-csv', './assets/image/map.csv', null, Phaser.Tilemap.CSV);
  game.load.image('map', './assets/image/map.jpg');
  game.load.spritesheet('chubby', 'assets/image/chubbyboy-run.png', 26, 26, 4);
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  map = game.add.tilemap('map-csv', 32, 32);

  map.addTilesetImage('map');
  
  layer = map.createLayer(0);
  layer.resizeWorld();
  map.setCollisionBetween(54, 83);

  layer.debug = true;

  upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

  chubby = game.add.sprite(200, 360, 'chubby', 0);
  game.physics.enable(chubby, Phaser.Physics.ARCADE);

  chubby.smoothed = false;
  anim = chubby.animations.add('walk');

  anim.play(10, true);
}

function update() {
  game.physics.arcade.collide(chubby, layer);

  chubby.body.velocity.set(0);

  if (leftKey.isDown) {
    chubby.body.velocity.x = -100;
    chubby.play('walk');
  }
  else if (rightKey.isDown) {
    chubby.body.velocity.x = 100;
    chubby.play('walk');
  }

  if (upKey.isDown) {
    chubby.body.velocity.y = -100;
    chubby.play('walk');
  }
  else if (downKey.isDown) {
    chubby.body.velocity.y = 100;
    chubby.play('walk');
  }
 
}

function render() {
  game.debug.body(chubby);
}