/**
 * Player
 */
PewPew.Player = function(game) {
    this.lastFireTime = null;
};


PewPew.Player.prototype {

  create: function () {
    this.player = this.add.sprite(this.world.centerX, (this.world.height-16), 'player');
    this.player.anchor.setTo(0.5, 0.5);
    this.player.position.y -= player.height/2;

    this.laser = this.add.group()
    var l = this.laser.create(this.player.x, this.player.y, 'laser');
    l.anchor.setTo(0.5, 0.5);
    l.kill();

    this.physics.arcade.enable([this.player, this.laser]);

    this.player.body.collideWorldBounds = true;

    this.cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
  },

  update: function() {
    this.body.velocity.x = 0;
 
    if (this.cursors.left.isDown) {
        this.body.velocity.x = -150;
    } else if (this.cursors.right.isDown) {
        this.body.velocity.x = 150;
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
        this.laser.fire();
    }
  },

  fireLaser: function() {
    if (this.time.now > this.lastFireTime) {
      var l = this.laser.getFirstDead();
      if (l == null) return;

      l.revive();

      l.outOfBoundsKill = true;
      l.checkWorldBounds = true;

      l.reset(this.player.x, this.player.y);

      l.body.velocity.y = -300;
      l.body.velocity.x = 0;

      laserFireTime = (this.time.now + 150);
    }
  },
};
