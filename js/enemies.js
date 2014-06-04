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
    this.game.load.image('enemy', 'img/enemy.png');
  },

  create: function() {
    this.enemy_group = this.game.add.group();
    this.enemy_group.create(this.midx-32, 0, 'enemy');
    this.enemy_group.create(this.midx, 0, 'enemy');
    this.enemy_group.create(this.midx+32, 0, 'enemy');
  },

  update: function() {}
};
