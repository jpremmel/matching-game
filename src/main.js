import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Game } from './backend.js';

function detectSameColors(clickCounter) {
  if (clickCounter === 2) {
    if ($("#a1").hasClass("yellow") && $("#c4").hasClass("yellow")) {
      //Need to keep these two cards face-up for the rest of the Game
      //Need to reset clickCounter to zero (but scope issue)
    } else {
      //Need to remove color classes from these two cards
      //Need to reset clickCounter to zero (but scope issue)
    }
  }
}

$(document).ready(function() {
  var matchingGame = new Game();

  $("#a1").click(function() {
    $("#a1").addClass("yellow");
    matchingGame.increaseClickCount();
    detectSameColors(matchingGame.clickCounter);
  });
  $("#a2").click(function() {
    $("#a2").addClass("blue");
    matchingGame.increaseClickCount();
    detectSameColors(matchingGame.clickCounter);
  });
  $("#c4").click(function() {
    $("#c4").addClass("yellow");
    matchingGame.increaseClickCount();
    detectSameColors(matchingGame.clickCounter);
  });

});
