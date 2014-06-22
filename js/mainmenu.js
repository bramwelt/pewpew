/**
 * PewPew - Main Menu
 *
 * Creates and show the main menu screen when the game starts.
 *  - Displays point values for invaders.
 */
PewPew = {};

PewPew.MainMenu = function(game) {};


PewPew.MainMenu.prototype = {

  preload: function() {

  },

  create: function() {
    var style = {
        font:'16px Lucida Console, Monaco, monospace',
        fill: '#ffffff',
        align: 'center',
    };
    var title = this.game.add.text(this.game.world.centerX, 8, 'PewPew: Now with more lasers!', style);
    title.anchor.setTo(0.5, 0);
    this.input.onDown.addOnce(this.begin, this);
  },

  begin: function(pointer) {
    /* Later on we will render text and sprites here, along with a click
     * handler for starting the game state.*/
    this.state.start('game');
  },

  update: function() {

  },
};
