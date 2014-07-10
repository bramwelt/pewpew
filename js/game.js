/**
 * PewPew - Game
 *
 * Main game class. May later become 'level1' or a parameterized class
 * that initializes the level with 'difficulties'.
 */
PewPew.Game = function(game) {
    this.player;
    this.enemies;
    this.cursors;
};


PewPew.Game.prototype = {
  preload: function() {
    this.load.spritesheet('player', 'assets/player.png', 13, 7, 2);
    this.load.image('laser', 'assets/bullet.png');
    this.load.spritesheet('explosion', 'assets/explosion.png', 13, 7, 2);
    this.load.spritesheet('enemy1', 'assets/enemy1.png', 8, 8, 2);
    this.load.spritesheet('enemy2', 'assets/enemy2.png', 11, 8, 2);
    this.load.spritesheet('enemy3', 'assets/enemy3.png', 12, 8, 2);
    this.load.spritesheet('mothership', 'assets/mothership.png', 16, 7, 3);
  },

  create: function() {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.stage.smoothed = false;

    this.player = new PewPew.Player(this.game);

    this.enemies = new PewPew.Enemies(this.game);
    this.enemies.initialize();

    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
    this.cursors.J = this.input.keyboard.addKey(Phaser.Keyboard.J);
    this.cursors.A = this.input.keyboard.addKey(Phaser.Keyboard.A);
    this.cursors.D = this.input.keyboard.addKey(Phaser.Keyboard.D);

    this.game.add.existing(this.player);
    this.game.add.existing(this.enemies);
  },

  update: function() {
    this.game.physics.arcade.overlap(this.player.laser, this.enemies, this.enemies.collisionHandler, null, this.enemies);

    this.player.body.velocity.x = 0;
 
    if (this.cursors.left.isDown || this.cursors.A.isDown) {
        this.player.body.velocity.x = -150;
    } else if (this.cursors.right.isDown || this.cursors.D.isDown) {
        this.player.body.velocity.x = 150;
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) || this.cursors.J.isDown) {
        this.player.fireLaser();
    }
  },

};
