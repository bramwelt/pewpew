/**
 * My first game!
 */
 
GameState = function(game) {
    this.game = game;
    this.midx = (game.width/2)-16;
    this.player = new Player(game);
    this.board = new GameWorld(game);
}

GameState.prototype = {
    preload: function() {
      console.log(this.world)
      this.board.preload()
      this.player.preload()
      this.game.load.image('enemy', 'img/enemy.png');
    },

    /**
     * Create the game
     */
    create: function() {
      this.board.create()
      this.player.create()

      var enemies = this.game.add.group();
      enemies.create(this.midx-32, 0, 'enemy');
      enemies.create(this.midx, 0, 'enemy');
      enemies.create(this.midx+32, 0, 'enemy');
    },

    update: function() {
      this.board.update();
      this.player.update();
    },
}; 

var game = new Phaser.Game(400, 300, Phaser.AUTO, 'game');
game.state.add('game', GameState, true);
