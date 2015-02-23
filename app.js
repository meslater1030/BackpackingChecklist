$(document).ready(function(){
//I'm declaring the park and supply objects
    var Park = function(danger) {
      this.danger=danger;
    },
    Supply = function(usefulness, cost, name) {
      this.usefulness = usefulness;
      this.cost = cost;
      this.name = name;
      this.addSupply = function(){
        totalCost += cost;
        totalUsefulness += usefulness;
      };
      this.deleteSupply = function(){
        totalCost -= cost;
        totalUsefulness -= usefulness;
      }; 
    },
//Here are all the parks and all the supplies
    yellowstone = new Park(40),
    glacier = new Park(35),
    olympic = new Park(25),
    yosemite = new Park(20),
    grandCanyon = new Park(45),
    zion = new Park(45),
    map = new Supply(2,20.95,'Trail Map'),
    compass = new Supply(4,35, 'Compass'),
    gps = new Supply(6,600, 'GPS Watch'),
    sunscreen = new Supply(3,12, 'Sunscreen'),
    lipBalm = new Supply(1,3.50, 'Lip Balm'),
    sunglasses = new Supply(1,150, 'Sunglasses'),
    jacket = new Supply(4,148.83, 'Jacket'),
    pants = new Supply(3,148.93, 'Pants'),
    gloves = new Supply(2,36.83, 'Gloves'),
    hat = new Supply(4,36, 'Hat'),
    flashlight = new Supply(3,70.93,'Flashlight'),
    battery = new Supply(1,21,'Extra Batteries'),
    firstAid = new Supply(10,54.50, "First Aid Kit"),
    matches = new Supply(5,6.95,'Matches'),
    firestarter = new Supply(3,32.95, 'Firestarter'),
    multitool = new Supply(5,89.95, 'Leatherman'),
    tape = new Supply(2,10,'Duct Tape'),
    food = new Supply(10,90, 'Extra Food'),
    waterBottle = new Supply(3, 10.5,'Water Bottle'),
    filter = new Supply(6,84.95, 'Water Filter'),
    tent = new Supply(7,199.93, 'Tent'),
    tarp = new Supply(5,69.95, 'Tarp'),
    blanket = new Supply(4,16.95, 'Space Blanket'),
//We will need these values as global variables for later calculations
    totalUsefulness = 0,
    totalCost = 0,
    parkDanger = 1,
    budget = 0;

//These hide all of the descriptions of supplies when the page loads
    $('#maps').hide();
    $('#compass').hide();
    $('#gps').hide();
    $('#sunscreen').hide();
    $('#lipBalm').hide();
    $('#sunglasses').hide();
    $('#jacket').hide();
    $('#pants').hide();
    $('#gloves').hide();
    $('#hat').hide();
    $('#flashlight').hide();
    $('#battery').hide();
    $('#firstAid').hide();
    $('#matches').hide();
    $('#firestarter').hide();
    $('#multitool').hide();
    $('#tape').hide();
    $('#food').hide();
    $('#waterBottle').hide();
    $('#filter').hide();
    $('#tent').hide();
    $('#tarp').hide();
    $('#blanket').hide();
    $('.itemsChosen').hide();
//These hide all the list items under each main item when the page loads
    $('.navigation').hide();
    $('.sunProtection').hide();
    $('.insulation').hide();
    $('.illumination').hide();
    $('.firstAidSupplies').hide();
    $('.fire').hide();
    $('.tools').hide();
    $('.nutrition').hide();
    $('.hydration').hide();
    $('.shelter').hide();

//When you click on the photo of a park, that park appears
//in the figure which slides down if it isn't already down.
//that danger also now becomes the park danger.
    $('#yellowstone').click(function(){
      $('.destination').replaceWith('<p class="destination">Yellowstone National Park</p>');
      $('.itemsChosen').slideDown();
      parkDanger = yellowstone.danger;
    });
    $('#glacier').click(function(){
      $('.destination').replaceWith('<p class="destination">Glacier National Park</p>');
      $('.itemsChosen').slideDown();
      parkDanger = glacier.danger;
    });
    $('#olympic').click(function(){
      $('.destination').replaceWith('<p class="destination">Olympic National Forest</p>');
      $('.itemsChosen').slideDown();
      parkDanger = olympic.danger;
    });
    $('#yosemite').click(function(){
      $('.destination').replaceWith('<p class="destination">Yosemite National Park</p>');
      $('.itemsChosen').slideDown();
      parkDanger = yosemite.danger;
    });
    $('#grandCanyon').click(function(){
      $('.destination').replaceWith('<p class="destination">The Grand Canyon</p>');
      $('.itemsChosen').slideDown();
      parkDanger = grandCanyon.danger;   
    });
    $('#zion').click(function(){
      $('.destination').replaceWith('<p class="destination">Zion National Park</p>');
      $('.itemsChosen').slideDown();
      parkDanger = zion.danger;
    });
//This takes user input from our form and uses it to update the budget and subtotal
$('#userMoney').submit(function(event) {
  event.preventDefault();
  budget = $(':input').val();
  updateSubtotal();
});
//This updates the subtotal to the current subtotal
var updateSubtotal = function(){
  $('#subtotal').replaceWith('<td id="subtotal">$'+(budget-totalCost).toFixed(2)+'</td>');
};

/*When you click on a supply that supply and its cost will appear in 
the aside.  Its cost will be added to the total cost.  Its usefullness
will be subtracted from the danger of the park.  We also add a click event handler
to the newly added supply so that it can be deleted if necessary.  That event handler
has to be removed and then added so that it's not added multiple times if the user adds 
multiples of one supply. */
    $('#mapsPhoto').click(function(){
      $('#supplies').append('<tr class="mapRow"><td>'+map.name+'</td><td>$'+(map.cost).toFixed(2)+'</td><td><img src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.mapRow').off();
      $('.mapRow').on('click', function(){
        (this).remove();
        map.deleteSupply();
        updateSubtotal();
      }); 
      map.addSupply();
      updateSubtotal();
    });
    $('#compassPhoto').click(function(){
      $('#supplies').append('<tr class="compassRow"><td>'+compass.name+'</td><td>$'+(compass.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.compassRow').off();
      $('.compassRow').on('click', function(){
        (this).remove();
        compass.deleteSupply();
        updateSubtotal();
      }); 
      compass.addSupply();
      updateSubtotal();
    });
    $('#gpsPhoto').click(function(){
      $('#supplies').append('<tr class="gpsRow"><td>'+gps.name+'</td><td>$'+(gps.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.gpsRow').off();
      $('.gpsRow').on('click', function(){
        (this).remove();
        gps.deleteSupply();
        updateSubtotal();
      }); 
      gps.addSupply();
      updateSubtotal();
    });
    $('#sunscreenPhoto').click(function(){
      $('#supplies').append('<tr class="sunscreenRow"><td>'+sunscreen.name+'</td><td>$'+(sunscreen.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.sunscreenRow').off();
      $('.sunscreenRow').on('click', function(){
        (this).remove();
        sunscreen.deleteSupply();
        updateSubtotal();
      }); 
      sunscreen.addSupply();
      updateSubtotal();
    });
    $('#lipBalmPhoto').click(function(){
      $('#supplies').append('<tr class="lipBalmRow"><td>'+lipBalm.name+'</td><td>$'+(lipBalm.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.lipBalmRow').off();
      $('.lipBalmRow').on('click', function(){
        (this).remove();
        lipBalm.deleteSupply();
        updateSubtotal();
      }); 
      lipBalm.addSupply();
      updateSubtotal();
    });
    $('#sunglassesPhoto').click(function(){
      $('#supplies').append('<tr class="sunglassesRow"><td>'+sunglasses.name+'</td><td>$'+(sunglasses.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.sunglassesRow').off();
      $('.sunglassesRow').on('click', function(){
        (this).remove();
        sunglasses.deleteSupply();
        updateSubtotal();
      }); 
      sunglasses.addSupply();
      updateSubtotal();
    });
    $('#jacketPhoto').click(function(){
      $('#supplies').append('<tr class="jacketRow"><td>'+jacket.name+'</td><td>$'+(jacket.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.jacketRow').off();
      $('.jacketRow').on('click', function(){
        (this).remove();
        jacket.deleteSupply();
        updateSubtotal();
      }); 
      jacket.addSupply();
      updateSubtotal();
    });
    $('#pantsPhoto').click(function(){
      $('#supplies').append('<tr class="pantsRow"><td>'+pants.name+'</td><td>$'+(pants.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.pantsRow').off();
      $('.pantsRow').on('click', function(){
        (this).remove();
        pants.deleteSupply();
        updateSubtotal();
      }); 
      pants.addSupply();
      updateSubtotal();
    });
    $('#glovesPhoto').click(function(){
      $('#supplies').append('<tr class="glovesRow"><td>'+gloves.name+'</td><td>$'+(gloves.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.glovesRow').off();
      $('.glovesRow').on('click', function(){
        (this).remove();
        gloves.deleteSupply();
        updateSubtotal();
      }); 
      gloves.addSupply();
      updateSubtotal();
    });
    $('#hatPhoto').click(function(){
      $('#supplies').append('<tr class="hatRow"><td>'+hat.name+'</td><td>$'+(hat.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.hatRow').off();
      $('.hatRow').on('click', function(){
        (this).remove();
        hat.deleteSupply();
        updateSubtotal();
        }); 
      hat.addSupply();
      updateSubtotal();
    });
    $('#flashlightPhoto').click(function(){
      $('#supplies').append('<tr class="flashlightRow"><td>'+flashlight.name+'</td><td>$'+(flashlight.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.flashlightRow').off();
      $('.flashlightRow').on('click', function(){
        (this).remove();
        flashlight.deleteSupply();
        updateSubtotal();
      }); 
      flashlight.addSupply();
      updateSubtotal();
    });
    $('#batteryPhoto').click(function(){
      $('#supplies').append('<tr class="batteryRow"><td>'+battery.name+'</td><td>$'+(battery.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.batteryRow').off();
      $('.batteryRow').on('click', function(){
        (this).remove();
        battery.deleteSupply();
        updateSubtotal();
      }); 
      battery.addSupply();
      updateSubtotal();
    });
    $('#firstAidPhoto').click(function(){
      $('#supplies').append('<tr class="firstAidRow"><td>'+firstAid.name+'</td><td>$'+(firstAid.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.firstAidRow').off();
      $('.firstAidRow').on('click', function(){
        (this).remove();
        firstAid.deleteSupply();
        updateSubtotal();
        }); 
      firstAid.addSupply();
      updateSubtotal();
    });
    $('#matchesPhoto').click(function(){
      $('#supplies').append('<tr class="matchesRow"><td>'+matches.name+'</td><td>$'+(matches.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.matchesRow').off();
      $('.matchesRow').on('click', function(){
        (this).remove();
        matches.deleteSupply();
        updateSubtotal();
        }); 
      matches.addSupply();
      updateSubtotal();
    });
    $('#firestarterPhoto').click(function(){
      $('#supplies').append('<tr class="firestarterRow"><td>'+firestarter.name+'</td><td>$'+(firestarter.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.firestarterRow').off();
      $('.firestarterRow').on('click', function(){
        (this).remove();
        firestarter.deleteSuply();
        updateSubtotal();
      }); 
      firestarter.addSupply();
      updateSubtotal();
    });
    $('#multitoolPhoto').click(function(){
      $('#supplies').append('<tr class="multitoolRow"><td>'+multitool.name+'</td><td>$'+(multitool.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.multitoolRow').off();
      $('.multitoolRow').on('click', function(){
        (this).remove();
        multitool.deleteSupply();
        updateSubtotal();
      }); 
      multitool.addSupply();
      updateSubtotal();
    });
    $('#tapePhoto').click(function(){
      $('#supplies').append('<tr class="tapeRow"><td>'+tape.name+'</td><td>$'+(tape.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.tapeRow').off();
      $('.tapeRow').on('click', function(){
        (this).remove();
        tape.deleteSupply();
        updateSubtotal();
      }); 
      tape.addSupply();
      updateSubtotal();
    });
    $('#foodPhoto').click(function(){
      $('#supplies').append('<tr class="foodRow"><td>'+food.name+'</td><td>$'+(food.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.foodRow').off();
      $('.foodRow').on('click', function(){
        (this).remove();
        food.deleteSupply();
        updateSubtotal();
      }); 
      food.addSupply();
      updateSubtotal();
    });
    $('#waterBottlePhoto').click(function(){
      $('#supplies').append('<tr class="waterBottleRow"><td>'+waterBottle.name+'</td><td>$'+(waterBottle.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.waterBottleRow').off();
      $('.waterBottleRow').on('click', function(){
        (this).remove();
        waterBottle.deleteSupply();
        updateSubtotal();
      }); 
      waterBottle.addSupply();
      updateSubtotal();
    });
    $('#filterPhoto').click(function(){
      $('#supplies').append('<tr class="filterRow"><td>'+filter.name+'</td><td>$'+(filter.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.filterRow').off();
      $('.filterRow').on('click', function(){
        (this).remove();
        filter.deleteSupply();
        updateSubtotal();
      }); 
      filter.addSupply();
      updateSubtotal();
    });
    $('#tentPhoto').click(function(){
      $('#supplies').append('<tr class="tentRow"><td>'+tent.name+'</td><td>$'+(tent.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.tentRow').off();
      $('.tentRow').on('click', function(){
        (this).remove();
        tent.deleteSupply();
        updateSubtotal();
      }); 
      tent.addSupply();
      updateSubtotal();
    });    
    $('#tarpPhoto').click(function(){
      $('#supplies').append('<tr class="tarpRow"><td>'+tarp.name+'</td><td>$'+(tarp.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.tarpRow').off();
      $('.tarpRow').on('click', function(){
        (this).remove();
        tarp.deleteSupply();
        updateSubtotal();
      }); 
      tarp.addSupply();
      updateSubtotal();
    });
    $('#blanketPhoto').click(function(){
      $('#supplies').append('<tr class="blanketRow"><td>'+blanket.name+'</td><td>$'+(blanket.cost).toFixed(2)+'</td><td><img class="deleteSupply" src="http://icons.iconarchive.com/icons/hopstarter/button/24/Button-Delete-icon.png"/></td></tr>');
      $('.blanketRow').off();
      $('.blanketRow').on('click', function(){
        (this).remove();
        blanket.deleteSupply();
        updateSubtotal();
      }); 
      blanket.addSupply();
      updateSubtotal();
    });

//This opens each menu item when you click on it to see the supplies in that category
    $('.navigationHead').click(function(){
      $('.navigation').toggle('slide');
    });
    $('.sunProtectionHead').click(function(){
      $('.sunProtection').toggle('slide');
    });
    $('.insulationHead').click(function(){
      $('.insulation').toggle('slide');
    });
    $('.illuminationHead').click(function(){
      $('.illumination').toggle('slide');
    });
    $('.firstAidSuppliesHead').click(function(){
      $('.firstAidSupplies').toggle('slide');
    });
    $('.fireHead').click(function(){
      $('.fire').toggle('slide');
    });
    $('.toolsHead').click(function(){
      $('.tools').toggle('slide');
    });
    $('.nutritionHead').click(function(){
      $('.nutrition').toggle('slide');
    });
    $('.hydrationHead').click(function(){
      $('.hydration').toggle('slide');
    });
    $('.shelterHead').click(function(){
      $('.shelter').toggle('slide');
    });
//These show the description and hide the photo of each supply when you put the mouse over it
//and remove that description and show the photo when you remove the mouse
    $('#mapsPhoto').mouseenter(function(){
      $('#mapsPhoto').fadeTo('fast',0);
      $('#maps').fadeTo('fast',1);
    });
    $('#mapsPhoto').mouseout(function(){
      $('#mapsPhoto').fadeTo('fast',1);
      $('#maps').fadeTo('fast',0);
    });
    $('#compassPhoto').mouseenter(function(){
      $('#compassPhoto').fadeTo('fast',0);
      $('#compass').fadeTo('fast',1);
    });
    $('#compassPhoto').mouseout(function(){
      $('#compassPhoto').fadeTo('fast',1);
      $('#compass').fadeTo('fast',0);
    });
    $('#gpsPhoto').mouseenter(function(){
      $('#gpsPhoto').fadeTo('fast',0);
      $('#gps').fadeTo('fast',1);
    });
    $('#gpsPhoto').mouseout(function(){
      $('#gpsPhoto').fadeTo('fast',1);
      $('#gps').fadeTo('fast',0);
    });
    $('#sunscreenPhoto').mouseenter(function(){
      $('#sunscreenPhoto').fadeTo('fast',0);
      $('#sunscreen').fadeTo('fast',1);
    });
    $('#sunscreenPhoto').mouseout(function(){
      $('#sunscreenPhoto').fadeTo('fast',1);
      $('#sunscreen').fadeTo('fast',0)
    });
    $('#lipBalmPhoto').mouseenter(function(){
      $('#lipBalmPhoto').fadeTo('fast',0);
      $('#lipBalm').fadeTo('fast',1);
    });
    $('#lipBalmPhoto').mouseout(function(){
      $('#lipBalmPhoto').fadeTo('fast',1);
      $('#lipBalm').fadeTo('fast',0);
    });  
    $('#sunglassesPhoto').mouseenter(function(){
      $('#sunglassesPhoto').fadeTo('fast',0);
      $('#sunglasses').fadeTo('fast',1);
    });
    $('#sunglassesPhoto').mouseout(function(){
      $('#sunglassesPhoto').fadeTo('fast',1);
      $('#sunglasses').fadeTo('fast',0);
    });
    $('#jacketPhoto').mouseenter(function(){
      $('#jacketPhoto').fadeTo('fast',0);
      $('#jacket').fadeTo('fast',1);
    });
    $('#jacketPhoto').mouseout(function(){
      $('#jacketPhoto').fadeTo('fast',1);
      $('#jacket').fadeTo('fast',0);
    });
    $('#pantsPhoto').mouseenter(function(){
      $('#pantsPhoto').fadeTo('fast',0);
      $('#pants').fadeTo('fast',1);
    });
    $('#pantsPhoto').mouseout(function(){
      $('#pantsPhoto').fadeTo('fast',1);
      $('#pants').fadeTo('fast',0);
    });
    $('#glovesPhoto').mouseenter(function(){
      $('#glovesPhoto').fadeTo('fast',0);
      $('#gloves').fadeTo('fast',1);
    });
    $('#glovesPhoto').mouseout(function(){
      $('#glovesPhoto').fadeTo('fast',1);
      $('#gloves').fadeTo('fast',0);
    });
    $('#hatPhoto').mouseenter(function(){
      $('#hatPhoto').fadeTo('fast',0);
      $('#hat').fadeTo('fast',1);
    });
    $('#hatPhoto').mouseout(function(){
      $('#hatPhoto').fadeTo('fast',1);
      $('#hat').fadeTo('fast',0);
    });
    $('#flashlightPhoto').mouseenter(function(){
      $('#flashlightPhoto').fadeTo('fast',0);
      $('#flashlight').fadeTo('fast',1);
    });
    $('#flashlightPhoto').mouseout(function(){
      $('#flashlightPhoto').fadeTo('fast',1);
      $('#flashlight').fadeTo('fast',0);
    });
    $('#batteryPhoto').mouseenter(function(){
      $('#batteryPhoto').fadeTo('fast',0);
      $('#battery').fadeTo('fast',1);
    });
    $('#batteryPhoto').mouseout(function(){
      $('#batteryPhoto').fadeTo('fast',1);
      $('#battery').fadeTo('fast',0);
    });
    $('#firstAidPhoto').mouseenter(function(){
      $('#firstAidPhoto').fadeTo('fast',0);
      $('#firstAid').fadeTo('fast',1);
    });
    $('#firstAidPhoto').mouseout(function(){
      $('#firstAidPhoto').fadeTo('fast',1);
      $('#firstAid').fadeTo('fast',0);
    });
    $('#matchesPhoto').mouseenter(function(){
      $('#matchesPhoto').fadeTo('fast',0);
      $('#matches').fadeTo('fast',1);
    });
    $('#matchesPhoto').mouseout(function(){
      $('#matchesPhoto').fadeTo('fast',1);
      $('#matches').fadeTo('fast',0);
    });
    $('#firestarterPhoto').mouseenter(function(){
      $('#firestarterPhoto').fadeTo('fast',0);
      $('#firestarter').fadeTo('fast',1);
    });
    $('#firestarterPhoto').mouseout(function(){
      $('#firestarterPhoto').fadeTo('fast',1);
      $('#firestarter').fadeTo('fast',0);
    });
    $('#multitoolPhoto').mouseenter(function(){
      $('#multitoolPhoto').fadeTo('fast',0);
      $('#multitool').fadeTo('fast',1);
    });
    $('#multitoolPhoto').mouseout(function(){
      $('#multitoolPhoto').fadeTo('fast',1);
      $('#multitool').fadeTo('fast',0);
    });
    $('#tapePhoto').mouseenter(function(){
      $('#tapePhoto').fadeTo('fast',0);
      $('#tape').fadeTo('fast',1);
    });
    $('#tapePhoto').mouseout(function(){
      $('#tapePhoto').fadeTo('fast',1);
      $('#tape').fadeTo('fast',0);
    });
    $('#foodPhoto').mouseenter(function(){
      $('#foodPhoto').fadeTo('fast',0);
      $('#food').fadeTo('fast',1);
    });
    $('#foodPhoto').mouseout(function(){
      $('#foodPhoto').fadeTo('fast',1);
      $('#food').fadeTo('fast',0);
    });
    $('#waterBottlePhoto').mouseenter(function(){
      $('#waterBottlePhoto').fadeTo('fast',0);
      $('#waterBottle').fadeTo('fast',1);
    });
    $('#waterBottlePhoto').mouseout(function(){
      $('#waterBottlePhoto').fadeTo('fast',1);
      $('#waterBottle').fadeTo('fast',0);
    });
    $('#filterPhoto').mouseenter(function(){
      $('#filterPhoto').fadeTo('fast',0);
      $('#filter').fadeTo('fast',1);
    });
    $('#filterPhoto').mouseout(function(){
      $('#filterPhoto').fadeTo('fast',1);
      $('#filter').fadeTo('fast',0);
    });
    $('#tentPhoto').mouseenter(function(){
      $('#tentPhoto').fadeTo('fast',0);
      $('#tent').fadeTo('fast',1);
    });
    $('#tentPhoto').mouseout(function(){
      $('#tentPhoto').fadeTo('fast',1);
      $('#tent').fadeTo('fast',0);
    });
    $('#tarpPhoto').mouseenter(function(){
      $('#tarpPhoto').fadeTo('fast',0);
      $('#tarp').fadeTo('fast',1);
    });
    $('#tarpPhoto').mouseout(function(){
      $('#tarpPhoto').fadeTo('fast',1);
      $('#tarp').fadeTo('fast',0);
    });
    $('#blanketPhoto').mouseenter(function(){
      $('#blanketPhoto').fadeTo('fast',0);
      $('#blanket').fadeTo('fast',1);
    });
    $('#blanketPhoto').mouseout(function(){
      $('#blanketPhoto').fadeTo('fast',1);
      $('#blanket').fadeTo('fast',0);
    });
//This lets you know whether the combined usefulness of the supplies is greater than
//the danger of the park and tells you the outcome when you push the button.
    $('.findOut').click(function(){
      console.log(totalUsefulness);
      if(parkDanger>=totalUsefulness) {
        $('.result').replaceWith('<p class="result">No, you will not survive.  Please buy more supplies.</p>')
      } else if((parkDanger<totalUsefulness) && ((budget-totalCost)>0)) {
        $('.result').replaceWith('<p class="result">Yes!  Have fun on your trip. You spent $' + totalCost.toFixed(2) + ' dollars.</p>')
      } else if ((parkDanger<totalUsefulness) && ((budget-totalCost)<0)) {
        $('.result').replaceWith('<p class="result">Yes, but you don\'t have enough money for all these supplies.  You need at least\ $' + totalCost.toFixed(2) + ' total.</p>')
      };
    });

    });