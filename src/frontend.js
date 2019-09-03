import $ from 'jquery';

export function attachClickListeners() {
  $("#a1").click(function() {
    $("#a1").addClass("yellow");
  });
  $("#a2").click(function() {
    $("#a2").addClass("blue");
  });
}
