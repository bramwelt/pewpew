/**
 * Enemies
 */

Enemies = function(game) {
  this.game = game;
  this.enemy_group = null;
}

Enemies.prototype = {

  preload: function() {
    this.game.load.spritesheet('enemy1', 'img/enemy1.png', 8, 8, 2);
    this.game.load.spritesheet('enemy2', 'img/enemy2.png', 11, 8, 2);
    this.game.load.spritesheet('enemy3', 'img/enemy3.png', 12, 8, 2);
    this.game.load.spritesheet('mothership', 'img/mothership.png', 16, 7, 3);
  },

  create: function() {
    this.enemy_group = this.game.add.group();
    for (var x = 0; x < 11; x++) {
        var enemy = this.enemy_group.create(2+(x*18), 0, 'enemy1');
        enemy.animations.add('fly');
        enemy.animations.play('fly', 1, true);
    }
    for (var x = 0; x < 11; x++) {
        for (var y = 1; y < 3; y++) {
            var enemy2 = this.enemy_group.create(x*18, y*16, 'enemy2');
            enemy2.animations.add('fly');
            enemy2.animations.play('fly', 1, true);
        }
    }
    for (var x = 0; x < 11; x++) {
        for (var y = 1; y < 3; y++) {
            var enemy3 = this.enemy_group.create(x*18, 32+(y*16), 'enemy3');
            enemy3.animations.add('fly');
            enemy3.animations.play('fly', 1, true);
        }
    }
    this.enemy_group.position.x = this.game.world.centerX/2;
    this.enemy_group.position.y = (this.game.world.centerX/2)-64;

    mothership = this.enemy_group.create(this.midx+64, 0, 'mothership');
    mothership.animations.add('fly');
    mothership.animations.play('fly', 1, true);
    mothership.kill();
  },

  update: function() {}
};
