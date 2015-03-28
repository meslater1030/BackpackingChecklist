$(document).ready(function(){

$('.interactiveList').hide()

//When you click on the photo of a park, that park appears
//in the figure which slides down if it isn't already down.
//that danger also now becomes the park danger.
    $('#yellowstone').click(function(){
      $('.destination').replaceWith('<p class="destination">Yellowstone National Park</p>');
      $('.interactiveList').slideDown();
    });
    $('#glacier').click(function(){
      $('.destination').replaceWith('<p class="destination">Glacier National Park</p>');
      $('.interactiveList').slideDown();
    });
    $('#olympic').click(function(){
      $('.destination').replaceWith('<p class="destination">Olympic National Forest</p>');
      $('.interactiveList').slideDown();
    });
    $('#yosemite').click(function(){
      $('.destination').replaceWith('<p class="destination">Yosemite National Park</p>');
      $('.interactiveList').slideDown();
    });
    $('#grandCanyon').click(function(){
      $('.destination').replaceWith('<p class="destination">The Grand Canyon</p>');
      $('.interactiveList').slideDown();
    });
    $('#zion').click(function(){
      $('.destination').replaceWith('<p class="destination">Zion National Park</p>');
      $('.interactiveList').slideDown();
    });

//This takes user input from our form and uses it to update the budget and subtotal
$('#userToDo').submit(function(event) {
  event.preventDefault();
  todo = $(':input').val()
  $('#list').append('<tr class="row"><td>'+todo+'</td><td> <img src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.row').off();
      $('.row').on('click', function(){
        (this).remove();
      });
  });

    });