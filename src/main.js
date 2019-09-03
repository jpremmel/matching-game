import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Game } from './backend.js';

$(document).ready(function() {
  var matchingGame = new Game();

  $("#a1").click(function() {
    $("#a1").addClass("yellow");
    matchingGame.increaseClickCount();
    console.log("CLICK COUNTER: " + matchingGame.clickCounter);
  });
  $("#a2").click(function() {
    $("#a2").addClass("blue");
    matchingGame.increaseClickCount();
    console.log("CLICK COUNTER: " + matchingGame.clickCounter);
  });

});
