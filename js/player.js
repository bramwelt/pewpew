/**
 * Player
 */

/**
 * Player Constructor
 *
 * Initialize with the game object, so that we can add sprites and
 * interact with scenes.
 */
Player = function(game) {
    this.game = game;
}

Player.prototype = {

    preload: function() {
      this.game.load.image('player', 'img/player.png');
    },

    create: function() {
      this.sprite = this.game.add.sprite(this.game.midx, this.game.height-32,'player');
      this.cursors = this.game.input.keyboard.createCursorKeys();
      this.game.physics.arcade.enable(this.sprite);
    },

    update: function() {
      this.sprite.body.velocity.x = 0;
 
      if (this.cursors.left.isDown) {
          this.sprite.body.velocity.x = -150;
      } else if (this.cursors.right.isDown) {
          this.sprite.body.velocity.x = 150;
      } else {
          this.sprite.animations.stop();
      }
      
      if (this.cursors.up.isDown && this.sprite.body.touching.down) {
          this.sprite.body.velocity.y = -350;
      }

    }
};
