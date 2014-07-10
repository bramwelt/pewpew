/**
 * Enemies
 */

PewPew.Enemies = function(game) {
  Phaser.Group.call(this, game);
  this.OFFSETX = (this.game.width/4);
  this.OFFSETY = 64;
}

PewPew.Enemies.prototype = Object.create(Phaser.Group.prototype);
PewPew.Enemies.prototype.constructor = PewPew.Enemies;

PewPew.Enemies.prototype.initialize = function() {
  for (var x = 0; x < 11; x++) {
      var enemy = this.create(this.OFFSETX+(x*18), this.OFFSETY, 'enemy1');
      enemy.anchor.setTo(0.5, 0.5);
      enemy.animations.add('fly');
      enemy.animations.play('fly', 1, true);
  }
  for (var x = 0; x < 11; x++) {
      for (var y = 1; y < 3; y++) {
          var enemy2 = this.create(this.OFFSETX+(x*18), this.OFFSETY+(y*16), 'enemy2');
          enemy2.anchor.setTo(0.5, 0.5);
          enemy2.animations.add('fly');
          enemy2.animations.play('fly', 1, true);
      }
  }
  for (var x = 0; x < 11; x++) {
      for (var y = 1; y < 3; y++) {
          var enemy3 = this.create(this.OFFSETX+(x*18), this.OFFSETY+32+(y*16), 'enemy3');
          enemy3.anchor.setTo(0.5, 0.5);
          enemy3.animations.add('fly');
          enemy3.animations.play('fly', 1, true);
      }
  }

  this.game.physics.arcade.enable(this);

  this.explosions = this.game.add.group();
  this.explosions.createMultiple(55, 'explosion');
  this.explosions.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
  this.explosions.callAll('animations.add', 'animations', 'explode');

  //mothership = this.create(this.midx+64, 0, 'mothership');
  //mothership.animations.add('fly');
  //mothership.animations.play('fly', 1, true);
  //mothership.kill();
};  

PewPew.Enemies.prototype.collisionHandler = function(laser, enemy) {
  laser.kill();
  enemy.kill();
  var explosion = this.explosions.getFirstDead();
  explosion.reset(enemy.x, enemy.y);
  explosion.revive();
  explosion.animations.play('explode', 2, false);
};
