// Solution 1
$(document).ready(function(){
  $('.color').mouseover(function() {
    //on crée une variable qui récupére l'id de la div
    var color = $(this).attr('id');
  $('#text').css('color',color);
});
  $('.color').mouseout(function(){
    $('#text').css('color', 'black');
  });
});

// Solution 2
$('.color').hover(function(){
  var color = $(this).attr('id');
  $('#text').css('color',color);
},function(){
  $('#text').css('color','black');
});
});
