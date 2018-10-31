let game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update });
let upKey;
let downKey;
let leftKey;
let rightKey;
let chubby;
let map;

function preload() {
  game.load.image('map', './assets/image/map.jpg');
  game.load.spritesheet('chubby', 'assets/image/chubbyboy-run.png', 26, 26, 4);
}

function create() {
  map = game.add.sprite(0, 0, 'map');

  upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
  downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
  leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

  chubby = game.add.sprite(200, 360, 'chubby', 0);
  chubby.smoothed = false;
  anim = chubby.animations.add('walk');

  anim.play(10, true);
}

function update() {
    if (upKey.isDown)
    {
        chubby.y--;
    }
    else if (downKey.isDown)
    {
        chubby.y++;
    }

    if (leftKey.isDown)
    {
        chubby.x--;
    }
    else if (rightKey.isDown)
    {
        chubby.x++;
    }
}