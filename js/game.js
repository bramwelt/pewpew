/**
 * My first game!
 */
 
GameState = function(game) {
    this.board = new GameWorld(game);
    this.player = new Player(game);
    this.enemies = new Enemies(game);
}

GameState.prototype = {
    preload: function() {
      this.board.preload()
      this.player.preload()
      this.enemies.preload()
    },

    /**
     * Create the game
     */
    create: function() {
      this.board.create()
      this.player.create()
      this.enemies.create()
    },

    update: function() {
      this.board.update();
      this.player.update();
    },
}; 

var game = new Phaser.Game(400, 300, Phaser.AUTO, 'game');
game.state.add('game', GameState, true);
