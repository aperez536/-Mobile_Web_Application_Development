/**
 * @Date:   2019-07-09T11:07:51-03:00
 * @Last modified time: 2019-07-09T11:31:34-03:00
 */

 $(document).ready(function() {
$('#about').hide();
$('#rules').hide();
$('#stadistic').hide();
$('#home').show();
$('#info').show();
$("#boton1").click(function() {
  $('#home').show();
  $('#about').hide();
  $('#rules').hide();
  $('#stadistic').hide();
  $('#info').show();
});

$("#boton2").click(function() {
  $('#home').hide();
  $('#about').show();
  $('#rules').hide();
  $('#stadistic').hide();
  $('#info').hide();
});

$("#boton3").click(function() {
  $('#home').hide();
  $('#about').hide();
  $('#rules').hide();
  $('#stadistic').show();
  $('#info').hide();
});
$("#boton4").click(function() {
  $('#home').hide();
  $('#about').hide();
  $('#rules').show();
  $('#stadistic').hide();
    $('#info').hide();
});
});
