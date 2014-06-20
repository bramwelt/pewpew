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
    /* Later on we will render text and sprites here, along with a click
     * handler for starting the game state.*/
    this.state.start('game');
  },

  update: function() {

  },
};
