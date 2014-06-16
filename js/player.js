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
    Phaser.Sprite.call(this, game, x, y, 'player');
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.contructor = Player;

Player.prototype.create = function() {
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;

    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

    this.anchor.setTo(0.5, 0.5);
    this.position.y -= player.height/2;

    this.laser = new Laser(this.game);
    this.laser.create();
};

Player.prototype.preload = function(game) {
    game.load.spritesheet('player', 'img/player.png', 13, 7, 2);
    Laser.prototype.preload(game);
};

Player.prototype.update = function() {
    this.body.velocity.x = 0;
 
    if (this.cursors.left.isDown) {
        this.body.velocity.x = -150;
    } else if (this.cursors.right.isDown) {
        this.body.velocity.x = 150;
    }

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
        this.laser.fire();
    }
};

Player.prototype.render = function() {
    this.game.debug.spriteInfo(this, 32, 32);
};
