/**
 * World
 */

GameWorld = function(game) {
  this.game = game;
  this.background = null;
};

GameWorld.prototype = {

  preload: function() {
    this.game.load.image('background', 'img/background.jpg');
  },

  create: function() {
    this.background = this.game.add.sprite(0, 0, 'background');
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
  },
};
