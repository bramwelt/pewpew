/**
 * World
 */

GameWorld = function(game) {
  Phaser.Sprite.call(this, game, 0, 0, 'background');
};

GameWorld.prototype = Object.create(Phaser.Sprite.prototype);
GameWorld.prototype.contructor = GameWorld;

GameWorld.prototype.preload = function(game) {
  game.load.image('background', 'img/background.jpg');
};

GameWorld.prototype.create = function() {
  this.game.physics.startSystem(Phaser.Physics.ARCADE);
};
