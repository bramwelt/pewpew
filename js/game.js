/**
 * My first game!
 */
 
GameState = function(game) {
    this.game = game;
    this.enemies = new Enemies(game);
}

GameState.prototype = {
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

var game = new Phaser.Game(400, 300, Phaser.AUTO, 'game');
game.state.add('game', GameState, true);
