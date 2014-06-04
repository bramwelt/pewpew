/**
 * World
 */

GameWorld = function(game) {
  this.game = game;
  this.background = null;
  this.fps_text = null;
  this.D = null;
};

GameWorld.prototype = {

  preload: function() {
    this.game.load.image('background', 'img/background.jpg');
  },

  create: function() {
    this.background = this.game.add.sprite(0, 0, 'background');
    this.D = this.game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.time.advancedTiming = true;

    this.fps_text = this.game.add.text(
      2, this.game.height-17, '', { font: '16px Arial', fill: '#ffff00' }
    );
    this.fps_text.visible = false;
  },

  update: function() {
    if (this.game.time.fps !== 0) {
      this.fps_text.setText(this.game.time.fps + ' FPS');
    }

    if (this.D.isDown && this.fps_text.visible) {
      this.fps_text.visible = false; 
    } else if (this.D.isDown && !this.fps_text.visible) {
      this.fps_text.visible = true;
    }
  }
};
