
Laser = function(game) {
  Phaser.Group.call(this, game);
  this.lastFireTime = null;
};

Laser.prototype = Object.create(Phaser.Group.prototype);
Laser.prototype.constructor = Laser;

Laser.prototype.preload = function(game) {
  game.load.image('laser', 'img/bullet.png');
};

Laser.prototype.initialize = function(player) {
  this.laserPool = this.game.add.group();

  var laser = this.create(player.x, player.y, 'laser');
  this.game.physics.arcade.enable(laser);
  laser.anchor.setTo(0.5, 0.5);
  laser.kill();

  this.laserPool.add(laser);
};

Laser.prototype.fire = function() {
  if (this.game.time.now > this.lastFireTime) {
    var laser = this.laserPool.getFirstDead();
    if (laser == null) return;

    laser.revive();

    laser.outOfBoundsKill = true;
    laser.checkWorldBounds = true;

    laser.reset(player.x, player.y);

    laser.body.velocity.y = -300;
    laser.body.velocity.x = 0;

    laserFireTime = (this.game.time.now + 150);
  }
};

Laser.prototype.update = function() {};
