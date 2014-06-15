/**
 * Player
 */

/**
 * Player Constructor
 *
 * Initialize with the game object, so that we can add sprites and
 * interact with scenes.
 */
Player = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'player', 0);
    game.physics.arcade.enable(this);
    this.cursors = this.game.input.keyboard.createCursorKeys();
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.contructor = Player;

Player.prototype.preload = function(game) {
    game.load.image('player', 'img/player.png');
};

Player.prototype.update = function() {
    this.body.velocity.x = 0;
 
    if (this.cursors.left.isDown) {
        this.body.velocity.x = -150;
    } else if (this.cursors.right.isDown) {
        this.body.velocity.x = 150;
    }
};

Player.prototype.render = function() {
    this.game.debug.spriteInfo(this, 32, 32);
};
