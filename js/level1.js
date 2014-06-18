/**
 * My first game!
 */
 
Level1 = function(game) {
    this.game = game;
    this.enemies = new Enemies(game);
}

Level1.prototype = {
    preload: function() {
      Player.prototype.preload(this.game);
      this.enemies.preload();
    },

    /**
     * Create the game
     */
    create: function() {
      player = new Player(this.game, this.game.world.centerX, this.game.world.height-16);
      player.create();

      enemies = new Enemies(this.game);
      enemies.initialize()

      this.game.add.existing(enemies);
      this.game.add.existing(player);
    },

    //render: function() {
    //  this.player.render();
    //}
}; 
