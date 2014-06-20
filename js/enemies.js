/**
 * Enemies
 */

Enemies = function(game) {
  Phaser.Group.call(this, game);
}

Enemies.prototype = Object.create(Phaser.Group.prototype);
Enemies.prototype.constructor = Enemies;

Enemies.prototype.initialize = function() {
  //this.enemy_group = this.game.add.group();
  for (var x = 0; x < 11; x++) {
      var enemy = this.create(2+(x*18), 0, 'enemy1');
      enemy.animations.add('fly');
      enemy.animations.play('fly', 1, true);
  }
  for (var x = 0; x < 11; x++) {
      for (var y = 1; y < 3; y++) {
          var enemy2 = this.create(x*18, y*16, 'enemy2');
          enemy2.animations.add('fly');
          enemy2.animations.play('fly', 1, true);
      }
  }
  for (var x = 0; x < 11; x++) {
      for (var y = 1; y < 3; y++) {
          var enemy3 = this.create(x*18, 32+(y*16), 'enemy3');
          enemy3.animations.add('fly');
          enemy3.animations.play('fly', 1, true);
      }
  }
  this.position.x = this.game.world.centerX/2;
  this.position.y = (this.game.world.centerX/2)-64;

  this.game.physics.arcade.enable(this);

  mothership = this.create(this.midx+64, 0, 'mothership');
  mothership.animations.add('fly');
  mothership.animations.play('fly', 1, true);
  mothership.kill();
};
