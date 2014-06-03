/**
 * My first game!
 */
 
GameState = function(game) {
    this.game = game;
    this.midx = (game.width/2)-16;
    this.player = new Player(game);
    this.cursor = null;
}

GameState.prototype = {
    preload: function() {
      game.load.image('background', 'img/background.jpg');
      this.player.preload()
      game.load.image('enemy', 'img/enemy.png');
    },

    /**
     * Create the game
     */
    create: function() {
      var game = this.game

      game.physics.startSystem(Phaser.Physics.ARCADE);
      game.add.sprite(0, 0, 'background');

      this.player.create()

      var enemies = game.add.group();
      enemies.create(this.midx-32, 0, 'enemy');
      enemies.create(this.midx, 0, 'enemy');
      enemies.create(this.midx+32, 0, 'enemy');

      this.game.time.advancedTiming = true;
      this.fps_text = this.game.add.text(
        2, this.game.height-17, '', { font: '16px Arial', fill: '#ffff00' }
      );
    },

    update: function() {
      this.player.update();

      if (this.game.time.fps !== 0) {
        this.fps_text.setText(this.game.time.fps + ' FPS');
      }
    },
}; 

var game = new Phaser.Game(400, 300, Phaser.AUTO, 'game');
game.state.add('game', GameState, true);
