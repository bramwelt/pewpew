/**
 * My first game!
 */
 
var GameState = {
    GameState: function(game) {
        this.game = game;
    },

    preload: function() {
      game.load.image('background', 'img/background.jpg');
      game.load.image('player', 'img/player.png');
      game.load.image('enemy', 'img/enemy.png');
    },

    /**
     * Create the game & world
     */
    create: function() {
      var game = this.game
      var midx = (game.world.width/2)-16;

      game.physics.startSystem(Phaser.Physics.ARCADE);
      game.add.sprite(0, 0, 'background');

      this.cursors = game.input.keyboard.createCursorKeys();

      this.player = game.add.sprite(midx, game.world.height-32,'player');
      game.physics.arcade.enable(this.player);

      var enemies = game.add.group();
      enemies.create(midx-32, 0, 'enemy');
      enemies.create(midx, 0, 'enemy');
      enemies.create(midx+32, 0, 'enemy');

      this.game.time.advancedTiming = true;
      this.fps_text = this.game.add.text(
        20, 20, '', { font: '16px Arial', fill: '#ffffff' }
      );
    },

    update: function() {
      var player = this.player
      var cursors = this.cursors
      player.body.velocity.x = 0;
 
      if (cursors.left.isDown) {
          player.body.velocity.x = -150;
      } else if (cursors.right.isDown) {
          player.body.velocity.x = 150;
      } else {
          player.animations.stop();
      }
      
      if (cursors.up.isDown && player.body.touching.down) {
          player.body.velocity.y = -350;
      }

      if (this.game.time.fps !== 0) {
        this.fps_text.setText(this.game.time.fps + ' FPS');
      }
    },
}; 

var game = new Phaser.Game(400, 300, Phaser.AUTO, 'game');
game.state.add('game', GameState, true);
