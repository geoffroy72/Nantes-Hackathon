launchCanvas = () => {
  let game = new Phaser.Game(1024, 768, Phaser.AUTO, 'canvas', { preload: preload, create: create, update: update, render: render });
  let upKey;
  let downKey;
  let leftKey;
  let rightKey;
  let chubby;
  let map;
  let layer;
  let emitterParticle;
  let lifeBar = 100;
  let candies = [];
  let bonbondex = [];
  let streets = [];
  let candiesSound;
  let chubbyScream;

  let houses = [
    {address: '', x: 96, y:640},
    {address: '', x: 160, y:96},
    {address: '', x: 128, y:416},
    {address: '', x: 224, y:448},
    {address: '', x: 384, y:160},
    {address: '', x: 416, y:672},
    {address: '', x: 448, y:96},
    {address: '', x: 512, y:512},
    {address: '', x: 544, y:416},
    {address: '', x: 576, y:96},
    {address: '', x: 608, y:608},
    {address: '', x: 672, y:256},
    {address: '', x: 768, y:352},
    {address: '', x: 768, y:544},
    {address: '', x: 832, y:96},
    {address: '', x: 960, y:576},]

    window.onload = () => {
      let dataCandy = [];
      let dataStreet = [];

      fetch(`https://fr-en.openfoodfacts.org/category/candies/${getRandomArbitrary(1,50)}.json`)
      
      .then(response=> response.json())
      console.log(response.json)
      .then( json => {dataCandy = json.products})
      .then( () =>{ dataCandy.map(candy => {
        return(
          candies.push(candy.product_name)
        )})
        console.log(candies)
      })
      
      fetch("https://api-adresse.data.gouv.fr/search/?q=rue&type=street&limit=14&citycode=44109")
      .then(response => response.json())
      .then( json => {
        dataStreet = json.features
      })
      .then(() => {dataStreet.map(street => {
        return(
          streets.push(street.properties.name)
        )})
        console.log(streets)
      })
    }

    getRandomInt = (max) => {
      return Math.floor(Math.random() * Math.floor(max)); 
    }
    
    getRandomArbitrary = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    }

  function preload() {
    game.load.tilemap('map-csv', './assets/image/map.csv', null, Phaser.Tilemap.CSV);
    game.load.image('map', './assets/image/map.jpg');
    game.load.spritesheet('chubby', './assets/image/chubbyboy-run.png', 26, 26, 4);
    game.load.spritesheet('candies', './assets/image/candies.png', 16, 16);
    game.load.image('house', './assets/image/home-1.png');
    game.load.spritesheet('zombi1', 'assets/image/zombi2-sprite.png', 26, 26, 4);
    game.load.spritesheet('zombi3', 'assets/image/zombi3-sprite.png', 26, 26, 4);

    candiesSound = new Audio('./assets/sound/candiesBlowup.mp3');
    chubbyScream = new Audio('./assets/sound/scream-sound.mp3')
  }

  function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    map = game.add.tilemap('map-csv', 32, 32);

    map.addTilesetImage('map');
    
    layer = map.createLayer(0);
    layer.resizeWorld();
    map.setCollisionBetween(0,32);
    map.setCollisionBetween(63,64);
    map.setCollisionBetween(66,73);
    map.setCollisionBetween(75,75);
    map.setCollisionBetween(84,84);
    map.setCollisionBetween(86,93);
    map.setCollisionBetween(95,96);
    map.setCollisionBetween(102,102);
    map.setCollisionBetween(107,107);
    map.setCollisionBetween(116,116);
    map.setCollisionBetween(121,121);
    map.setCollisionBetween(127,128);
    map.setCollisionBetween(134,134);
    map.setCollisionBetween(136,137);
    map.setCollisionBetween(139,139);
    map.setCollisionBetween(148,148);
    map.setCollisionBetween(150,151);
    map.setCollisionBetween(153,153);
    map.setCollisionBetween(159,160);
    map.setCollisionBetween(164,164);
    map.setCollisionBetween(168,168);
    map.setCollisionBetween(171,171);
    map.setCollisionBetween(180,180);
    map.setCollisionBetween(183,183);
    map.setCollisionBetween(187,187);
    map.setCollisionBetween(191,194);
    map.setCollisionBetween(196,196);
    map.setCollisionBetween(200,200);
    map.setCollisionBetween(203,203);
    map.setCollisionBetween(212,212);
    map.setCollisionBetween(215,215);
    map.setCollisionBetween(219,219);
    map.setCollisionBetween(221,224);
    map.setCollisionBetween(228,228);
    map.setCollisionBetween(231,232);
    map.setCollisionBetween(235,235);
    map.setCollisionBetween(244,244);
    map.setCollisionBetween(247,248);
    map.setCollisionBetween(251,251);
    map.setCollisionBetween(255,256);
    map.setCollisionBetween(258,260);
    map.setCollisionBetween(267,267);
    map.setCollisionBetween(276,276);
    map.setCollisionBetween(283,285);
    map.setCollisionBetween(287,288);
    map.setCollisionBetween(296,302);
    map.setCollisionBetween(305,311);
    map.setCollisionBetween(319,323);
    map.setCollisionBetween(326,326);
    map.setCollisionBetween(331,331);
    map.setCollisionBetween(340,340);
    map.setCollisionBetween(345,345);
    map.setCollisionBetween(348,352);
    map.setCollisionBetween(357,358);
    map.setCollisionBetween(377,378);
    map.setCollisionBetween(383,384);
    map.setCollisionBetween(387,392);
    map.setCollisionBetween(407,412);
    map.setCollisionBetween(415,416);
    map.setCollisionBetween(427,427);
    map.setCollisionBetween(436,436);
    map.setCollisionBetween(447,448);
    map.setCollisionBetween(456,462);
    map.setCollisionBetween(465,471);
    map.setCollisionBetween(479,480);
    map.setCollisionBetween(482,484);
    map.setCollisionBetween(491,491);
    map.setCollisionBetween(500,500);
    map.setCollisionBetween(507,509);
    map.setCollisionBetween(511,512);
    map.setCollisionBetween(516,516);
    map.setCollisionBetween(519,520);
    map.setCollisionBetween(523,523);
    map.setCollisionBetween(532,532);
    map.setCollisionBetween(535,536);
    map.setCollisionBetween(539,539);
    map.setCollisionBetween(543,546);
    map.setCollisionBetween(548,548);
    map.setCollisionBetween(552,552);
    map.setCollisionBetween(555,555);
    map.setCollisionBetween(564,564);
    map.setCollisionBetween(567,567);
    map.setCollisionBetween(571,571);
    map.setCollisionBetween(573,576);
    map.setCollisionBetween(580,580);
    map.setCollisionBetween(584,584);
    map.setCollisionBetween(587,587);
    map.setCollisionBetween(596,596);
    map.setCollisionBetween(599,599);
    map.setCollisionBetween(603,603);
    map.setCollisionBetween(607,608);
    map.setCollisionBetween(614,614);
    map.setCollisionBetween(616,617);
    map.setCollisionBetween(619,619);
    map.setCollisionBetween(628,628);
    map.setCollisionBetween(630,631);
    map.setCollisionBetween(633,633);
    map.setCollisionBetween(639,640);
    map.setCollisionBetween(646,646);
    map.setCollisionBetween(651,651);
    map.setCollisionBetween(660,660);
    map.setCollisionBetween(665,665);
    map.setCollisionBetween(671,672);
    map.setCollisionBetween(674,681);
    map.setCollisionBetween(683,683);
    map.setCollisionBetween(692,692);
    map.setCollisionBetween(694,701);
    map.setCollisionBetween(703,704);
    map.setCollisionBetween(735,736);
    map.setCollisionBetween(737,767);

    // GENERATE HOUSES
    housesGroupe = game.add.group();
    houses.map(house => {
      let houseTemp = game.add.sprite(house.x, house.y, 'house');
      game.physics.enable(houseTemp, Phaser.Physics.ARCADE);
      houseTemp.body.setSize(23, 30, 5, 1);
      houseTemp.body.immovable = true;
      housesGroupe.add(houseTemp);
    })

    // GENERATE ZOMBIE 
    game.physics.arcade.skipQuadTree = false;

    zombi1 = game.add.group();
    zombi1.enableBody = true;

    for (let i = 0; i < 20; i++) {
      let s = zombi1.create(game.world.randomX, game.world.randomY, 'zombi1');
      let walk = s.animations.add('walk');
      s.body.collideWorldBounds = true;
      s.body.bounce.set(1);
      s.body.setSize(15, 18, 6, 5);
      s.body.velocity.setTo(10 + Math.random() * 20, 10 + Math.random() * 20);
      s.animations.play('walk', 10, true);
    }

    layer.debug = false;

    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

    chubby = game.add.sprite(game.width/2, game.height/2, 'chubby', 0);
    game.physics.enable(chubby, Phaser.Physics.ARCADE);
    chubby.body.setSize(18, 23, 4, 1);
    chubby.life = 100;
    chubby.recovery = 0;
    chubby.lastHouseDelay = [];
    chubby.candy = 0;

    chubby.smoothed = true;
    anim = chubby.animations.add('walk');

    anim.play(10, true);
  }
    function collisionChubbyHandler() {
      if(chubby.recovery < Date.now()){
        lifeBar -= 33;
        chubby.recovery = Date.now() + 1000
        document.getElementById("healthBar").style.width = `${lifeBar}%`;
        chubbyScream.play();
      }
      if (lifeBar < 1) {
      }
    }

    function collisionHouseHandler (ob1, obj2) {
      if(!chubby.lastHouseDelay[obj2.renderOrderID]) {
        emitterParticle = game.add.emitter(obj2.position.x, obj2.position.y, 400);
        emitterParticle.makeParticles('candies', [0,1,2,3,4,5], 20);
        emitterParticle.minParticleSpeed.setTo(-100, -100);
        emitterParticle.maxParticleSpeed.setTo(300, -300);
        emitterParticle.gravity = 200;
        emitterParticle.bounce.setTo(0.5, 0.5);
        emitterParticle.angularDrag = 90;
        emitterParticle.start(true, 4000, null, 10);
        game.time.events.add(2000, destroyEmitter, this);
        chubby.lastHouseDelay[obj2.renderOrderID] = {
          date: Date.now(),
          id: obj2.z
        };
        obj2.tint = 5784342.707693503;
        candiesSound.play();
        getCandyFromApi();
        zombiePop();
      }
    }

    function getCandyFromApi() {
      chubby.candy += Math.floor((getRandomArbitrary(1,25))/2); 
      document.getElementById("candiesBar").style.width=`${chubby.candy}%`
      for(let i =0; i< candies.length ; i += 2) {
        bonbondex.push(candies[i]);
      }
    }
    
    function zombiePop() {
      let s = zombi1.create(game.world.randomX, game.world.randomY, 'zombi3');
      let walk = s.animations.add('walk');
      s.body.collideWorldBounds = true;
      s.body.bounce.set(1);
      s.body.setSize(18, 23, 4, 1);
      s.body.velocity.setTo(20 + Math.random() * 100, 20 + Math.random() * 100);
      s.animations.play('walk', 10, true);
    }

    function destroyEmitter() {
      if(emitterParticle.exists){
      emitterParticle.destroy();
      }
    }

  function update() {
    game.physics.arcade.collide(chubby, layer);
    game.physics.arcade.collide(layer, zombi1);
    game.physics.arcade.collide(housesGroupe, zombi1);

    game.physics.arcade.collide(housesGroupe, chubby, collisionHouseHandler, null, this);
    game.physics.arcade.collide(chubby, zombi1, collisionChubbyHandler, null, this);

    chubby.body.velocity.set(0);

    // CHECK HOUSE REOPEN
    if(chubby.lastHouseDelay.length > 0) {
      for(let i = 0; i <  chubby.lastHouseDelay.length; i++) {
        if(chubby.lastHouseDelay[i]) {
          if(chubby.lastHouseDelay[i].date + 15000 < Date.now()) {
            housesGroupe.children[chubby.lastHouseDelay[i].id].tint = 0xFFFFFF;
            delete chubby.lastHouseDelay[i];
            console.log(chubby.lastHouseDelay[i])
          }
        }
      }
    }

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
    // game.debug.body(chubby);
    // zombi1.forEachAlive(zombi => {
    //   game.debug.body(zombi);
    // });
  }
}