const Game = require("../ttt_node/game");

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    this.handleClick = this.handleClick.bind(this);
    this.bindEvents();
  }

  setupBoard() {

    let ul = document.createElement('ul')
    for(let i =0;i<3;i++){
      for(let j=0; j<3; j++){
        let li = document.createElement('li');
        li.dataset.pos = JSON.stringify([i,j]);
        // li.innerText= "ha"
        ul.append(li)
      }
    }
    this.el.append(ul)
  }
  
  bindEvents() {
    this.el.addEventListener("click", this.handleClick)
  }

  handleClick(e) {
   let el = e.target
   if(el.tagName.toLowerCase() === 'li'){
     this.makeMove(el)
   }
  }

  makeMove(square) {
    let pos = JSON.parse(square.dataset.pos);
    this.game.playMove(pos);
    square.classList.add(this.game.currentPlayer);
    if(this.game.isOver()){
      if(this.game.winner() !== null){
        this.handleGameOver()
      }else{
        alert("DRAW!!")
      }
      location.reload()

    }
  }
  
  handleGameOver(){

    alert(`player ${this.game.currentPlayer} won! but you're a 🤡`)
  }
}


module.exports = View;
