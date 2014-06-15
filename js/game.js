/**
 * My first game!
 */
 
GameState = function(game) {
    this.game = game;
    this.board = new GameWorld(game);
    this.enemies = new Enemies(game);
}

GameState.prototype = {
    preload: function() {
      Player.prototype.preload(this.game)
      this.board.preload()
      this.enemies.preload()
    },

    /**
     * Create the game
     */
    create: function() {
      this.board.create()
      this.enemies.create()

      player = new Player(this.game, this.game.world.centerX, this.game.world.height);
      player.anchor.setTo(0.5, 0.5);
      player.position.y -= player.height/2;
      this.game.add.existing(player);
    },

    //render: function() {
    //  this.player.render();
    //}
}; 

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
game.state.add('game', GameState, true);
