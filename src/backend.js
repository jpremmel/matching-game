
export function Game() {
  this.clickCounter = 0;
  console.log("WE MADE A GAME");
}

Game.prototype.increaseClickCount = function() {
  return this.clickCounter++;
};

Game.prototype.resetClickCount = function() {
  return this.clickCounter = 0;
}
