/**
 * PewPew - Game
 *
 * Main game class. May later become 'level1' or a parameterized class
 * that initializes the level with 'difficulties'.
 */
PewPew.Game = function(game) {};


PewPew.Game.prototype = {
  preload: function() {
    this.load.spritesheet('player', 'img/player.png', 13, 7, 2);
    this.load.image('laser', 'img/bullet.png');
    this.load.spritesheet('enemy1', 'img/enemy1.png', 8, 8, 2);
    this.load.spritesheet('enemy2', 'img/enemy2.png', 11, 8, 2);
    this.load.spritesheet('enemy3', 'img/enemy3.png', 12, 8, 2);
    this.load.spritesheet('mothership', 'img/mothership.png', 16, 7, 3);
  },

  create: function() {
    this.physics.startSystem(Phaser.Physics.ARCADE);

    var player = new PewPew.Player(this.game);
    //console.log(player);
    //player.create();
    //console.log(player);

    var enemies = new Enemies(this.game);
    enemies.initialize()

    this.game.add.existing(player);
    this.game.add.existing(enemies);
  },

  update: function() {

  },
};
