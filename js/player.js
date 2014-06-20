/**
 * Player
 *
 * Extends the Phaser.Sprite class.
 */
PewPew.Player = function(game) {
  Phaser.Sprite.call(this, game, game.world.centerX, (game.world.height-16), 'player');

  this.lastFireTime = null;

  this.laser = this.game.add.group()
  var l = this.laser.create(this.x, this.y, 'laser');
  l.anchor.setTo(0.5, 0.5);
  l.kill();

  this.game.physics.arcade.enable([this, this.laser]);
  this.body.collideWorldBounds = true;

  return this;
};

PewPew.Player.prototype = Object.create(Phaser.Sprite.prototype);
PewPew.Player.prototype.constructor = PewPew.Player;

PewPew.Player.prototype.fireLaser = function() {
  if (this.game.time.now <= this.lastFireTime) return;

  var l = this.laser.getFirstDead();
  if (l == null) return;

  l.revive();

  l.outOfBoundsKill = true;
  l.checkWorldBounds = true;

  l.reset(this.x, this.y);

  l.body.velocity.y = -300;
  l.body.velocity.x = 0;

  this.lastFireTime = (this.game.time.now + 150);
};
