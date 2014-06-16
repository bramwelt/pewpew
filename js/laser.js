
Laser = function(game) {
  Phaser.Sprite.call(this, game, 0, 0, 'laser');
  this.lastFireTime = null;
};

Laser.prototype = Object.create(Phaser.Sprite.prototype);
Laser.prototype.constructor = Laser;

Laser.prototype.preload = function(game) {
  game.load.image('laser', 'img/bullet.png');
};

Laser.prototype.create = function() {
  this.laserPool = this.game.add.group();

  var laser = this.game.add.sprite(this.game.world.height, this.game.world.width/2, 'laser');
  this.game.physics.enable(laser, Phaser.Physics.ARCADE);
  laser.anchor.setTo(0.5, 0.5);
  laser.kill();

  this.laserPool.add(laser);
};

Laser.prototype.fire = function() {
  if (this.game.time.now > this.lastFireTime) {
    var laser = this.laserPool.getFirstDead();
    if (laser == null) return;

    laser.revive();

    laser.checkWorldBounds = true;
    laser.outOfBoundsKill = true;

    laser.reset(player.x, player.y);

    laser.body.velocity.y = -300;
    laser.body.velocity.x = 0;

    laserFireTime = (this.game.time.now + 150);
  }
};

Laser.prototype.update = function() {};
