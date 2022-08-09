const View = require('./ttt-view.js')// require appropriate file
const Game = require('../ttt_node/game.js')// require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  let el = document.querySelector(".ttt")
  let game = new Game()
  let view = new View(game, el)
  
});
