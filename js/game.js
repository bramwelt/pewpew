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
    this.load.spritesheet('player', 'img/player.png', 13, 7, 2);
    this.load.image('laser', 'img/bullet.png');
    this.load.spritesheet('explosion', 'img/explosion.png', 13, 7, 2);
    this.load.spritesheet('enemy1', 'img/enemy1.png', 8, 8, 2);
    this.load.spritesheet('enemy2', 'img/enemy2.png', 11, 8, 2);
    this.load.spritesheet('enemy3', 'img/enemy3.png', 12, 8, 2);
    this.load.spritesheet('mothership', 'img/mothership.png', 16, 7, 3);
  },

  create: function() {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.stage.smoothed = false;

    this.player = new PewPew.Player(this.game);

    this.enemies = new PewPew.Enemies(this.game);
    this.enemies.initialize();

    this.explosions = this.game.add.group();
    this.explosions.createMultiple(55, 'explosion');
    this.explosions.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
    this.explosions.callAll('animations.add', 'animations', 'explode');

    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

    this.game.add.existing(this.player);
    this.game.add.existing(this.enemies);
  },

  update: function() {
    this.game.physics.arcade.overlap(this.player.laser, this.enemies, this.collisionHandler, null, this);

    this.player.body.velocity.x = 0;
 
    if (this.cursors.left.isDown) {
        this.player.body.velocity.x = -150;
    } else if (this.cursors.right.isDown) {
        this.player.body.velocity.x = 150;
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
        this.player.fireLaser();
    }
  },

  collisionHandler: function(laser, enemy) {
    laser.kill();
    enemy.kill();
    var explosion = this.explosions.getFirstDead();
    explosion.reset(enemy.x, enemy.y);
    explosion.revive();
    explosion.animations.play('explode', 2, false);
  },
};
