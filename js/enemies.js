/**
 * Enemies
 */

Enemies = function(game) {
  this.game = game;
  this.midx = (game.width/2)-16;
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
    enemy1 = this.game.add.sprite(this.midx-32, 0, 'enemy1');
    console.log(enemy1);
    this.enemy_group.add(enemy1);
    enemy1.animations.add('fly');
    enemy1.animations.play('fly', 1, true);
    enemy2 = this.enemy_group.create(this.midx, 0, 'enemy2');
    enemy2.animations.add('fly2');
    enemy2.animations.play('fly2', 1, true);
    enemy3 = this.enemy_group.create(this.midx+32, 0, 'enemy3');
    enemy3.animations.add('fly');
    enemy3.animations.play('fly', 1, true);
    mothership = this.enemy_group.create(this.midx+64, 0, 'mothership');
    mothership.animations.add('fly');
    mothership.animations.play('fly', 1, true);
  },

  update: function() {}
};
