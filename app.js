$(document).ready(function(){

    var Park = function(danger) {
      this.danger=danger;
    };

    var Supply = function(usefulness, cost) {
      this.usefulness = usefulness;
      this.cost = cost;
    };

    var yellowstonePark = new Park(40),
    glacierPark = new Park(35),
    olympicPark = new Park(25);
    yosemitePark = new Park(20),
    grandCanyonPark = new Park(45),
    zionPark = new Park(45),
    mapSupply = new Supply(2,20.95),
    compassSupply = new Supply(4,35),
    gpsSupply = new Supply(6,600),
    sunscreenSupply = new Supply(3,12),
    lipBalmSupply = new Supply(1,3.50),
    sunglassesSupply = new Supply(1,150),
    jacketSupply = new Supply(4,148.83),
    pantsSupply = new Supply(3,148.93),
    glovesSupply = new Supply(2,36.83),
    hatSupply = new Supply(4,36),
    flashlightSupply = new Supply(3,70.93),
    batteriesSupply = new Supply(1,21),
    firstAidSupply = new Supply(10,54.50),
    matchesSupply = new Supply(5,6.95),
    firestarterSupply = new Supply(3,32.95),
    leathermanSupply = new Supply(5,89.95),
    tapeSupply = new Supply(2,10),
    foodSupply = new Supply(10,90),
    waterBottleSupply = new Supply(3, 10.5),
    filterSupply = new Supply(6,84.95),
    tentSupply = new Supply(7,199.93),
    tarpSupply = new Supply(5,69.95),
    blanketSupply = new Supply(4,16.95),
    parkDanger = 1,
    totalCost = 0;

    var $hideParks = function(){
      $('#yellowstone').hide();
      $("#glacier").hide();
      $('#olympic').hide();
      $('#yosemite').hide();
      $('#grandCanyon').hide();
      $('#zion').hide();
      $('.wordOverlay').hide();
    };

    $('#yellowstone').click(function(){
      $('.destination').append('<p>Yellowstone National Park</p>');
      $hideParks();
      parkDanger = yellowstonePark.danger;
    });
    $('#glacier').click(function(){
      $('.destination').append('<p>Glacier National Park</p>');
      $hideParks();
      parkDanger = glacierPark.danger;
    });
    $('#olympic').click(function(){
      $('.destination').append('<p>Olympic National Forest</p>');
      $hideParks();
      parkDanger = olympicPark.danger;
    });
    $('#yosemite').click(function(){
      $('.destination').append('<p>Yosemite National Park</p>');
      $hideParks();
      parkDanger = yosemitePark.danger;
    });
    $('#grandCanyon').click(function(){
      $('.destination').append('<p>The Grand Canyon</p>');
      $hideParks();
      parkDanger = grandCanyonPark.danger;   
    });
    $('#zion').click(function(){
      $('.destination').append('<p>Zion National Park</p>');
      $hideParks();
      parkDanger = zionPark.danger;
    });

    $('#mapsPhoto').click(function(){
      $('#supplies').append('<tr><td>Trail Map</td><td>$20.95</td></tr>');
      parkDanger -= mapSupply.usefulness;
      totalCost += mappSupply.cost;
    });
    $('#compassPhoto').click(function(){
      $('#supplies').append('<tr><td>Compass</td><td>$35.00</td></tr>');
      parkDanger -= compassSupply.usefulness;
      totalCost += compassSupply.cost;
    });
    $('#gpsPhoto').click(function(){
      $('#supplies').append('<tr><td>GPS Watch</td><td>$600.00</td></tr>');
      parkDanger -= gpsSupply.usefulness;
      totalCost += gpsSupply.cost;
    });
    $('#sunscreenPhoto').click(function(){
      $('#supplies').append('<tr><td>Sunscreen</td><td>$12.00</td></tr>');
      parkDanger -= sunscreenSupply.usefulness;
      totalCost += sunscreenSupply.cost;
    });
    $('#lipBalmPhoto').click(function(){
      $('#supplies').append('<tr><td>SPF 30 Lip Balm</td><td>$3.50</td></tr>');
      parkDanger -= lipBalmSupply.usefulness;
      totalCost += lipBalmSupply.cost;
    });
    $('#sunglassesPhoto').click(function(){
      $('#supplies').append('<tr><td>Sunglasses</td><td>$150.00</td></tr>');
      parkDanger -= sunglassesSupply.usefulness;
      totalCost += sunglassesSupply.cost;
    });
    $('#jacketPhoto').click(function(){
      $('#supplies').append('<tr><td>Jacket</td><td>$148.83</td></tr>');
      parkDanger -= jacketSupply.usefulness;
      totalCost += jacketSupply.cost;
    });
    $('#pantsPhoto').click(function(){
      $('#supplies').append('<tr><td>Snow Pants</td><td>$148.93</td></tr>');
      parkDanger -= pantsSupply.usefulness;
      totalCost += pantsSupply.cost;
    });
    $('#glovesPhoto').click(function(){
      $('#supplies').append('<tr><td>Gloves</td><td>$36.83</td></tr>');
      parkDanger -= glovesSupply.usefulness;
      totalCost += glovesSupply.cost;
    });
    $('#hatPhoto').click(function(){
      $('#supplies').append('<tr><td>Hat</td><td>$36.00</td></tr>');
      parkDanger -= hatSupply.usefulness;
      totalCost += hatSupply.cost;
    });
    $('#flashlightPhoto').click(function(){
      $('#supplies').append('<tr><td>Flashlight</td><td>$70.93</td></tr>');
      parkDanger -= flashlightSupply.usefulness;
      totalCost += flashlightSupply.cost;
    });
    $('#batteryPhoto').click(function(){
      $('#supplies').append('<tr><td>Extra Batteries</td><td>$21.00</td></tr>');
      parkDanger -= batterySupply.usefulness;
      totalCost += batterySupply.cost;
    });
    $('#firstAidPhoto').click(function(){
      $('#supplies').append('<tr><td>First Aid Kit</td><td>$54.50</td></tr>');
      parkDanger -= firstAidSupply.usefulness;
      totalCost += firstAidSupply.cost;
    });
    $('#matchesPhoto').click(function(){
      $('#supplies').append('<tr><td>Matches</td><td>$6.95</td></tr>');
      parkDanger -= matchesSupply.usefulness;
      totalCost += matchesSupply.cost;
    });
    $('#firestarterPhoto').click(function(){
      $('#supplies').append('<tr><td>Firestarter</td><td>$32.95</td></tr>');
      parkDanger -= firestarterSupply.usefulness;
      totalCost += firestarterSupply.cost;
    });
    $('#multitoolPhoto').click(function(){
      $('#supplies').append('<tr><td>Leatherman</td><td>$89.95</td></tr>');
      parkDanger -= multitoolSupply.usefulness;
      totalCost += multitoolSupply.cost;
    });
    $('#tapePhoto').click(function(){
      $('#supplies').append('<tr><td>Duct Tape</td><td>$10.00</td></tr>');
      parkDanger -= tapeSupply.usefulness;
      totalCost += tapeSupply.cost;
    });
    $('#foodPhoto').click(function(){
      $('#supplies').append('<tr><td>Food</td><td>$90.00</td></tr>');
      parkDanger -= foodSupply.usefulness;
      totalCost += foodSupply.cost;
    });
    $('#waterBottlePhoto').click(function(){
      $('#supplies').append('<tr><td>Water Bottle</td><td>$10.50</td></tr>');
      parkDanger -= waterBottleSupply.usefulness;
      totalCost += waterBottleSupply.usefulness;
    });
    $('#filterPhoto').click(function(){
      $('#supplies').append('<tr><td>Water Filter</td><td>$84.95</td></tr>');
      parkDanger -= filterSupply.usefulness;
      totalCost += filterSupply.usefulness;
    });
    $('#tentPhoto').click(function(){
      $('#supplies').append('<tr><td>Tent</td><td>$199.93</td></tr>');
      parkDanger -= tentSupply.usefulness;
      totalCost += tentSupply.usefulness;
    });    
    $('#tarpPhoto').click(function(){
      $('#supplies').append('<tr><td>Tarp</td><td>$69.95</td>');
      parkDanger -= tarpSupply.usefulness;
      totalCost +=  tarpSupply.usefulness;
    });
    $('#blanketPhoto').click(function(){
      $('#supplies').append('<tr><td>Space Blanket</td><td>$16.95</td></tr>');
      parkDanger -= blanketSupply.usefulness;
      totalCost += blanketSupply.usefulness;
    });

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

    $('.navigationHead').click(function(){
      $('.navigation').toggle();
    });
    $('.sunProtectionHead').click(function(){
      $('.sunProtection').toggle();
    });
    $('.insulationHead').click(function(){
      $('.insulation').toggle();
    });
    $('.illuminationHead').click(function(){
      $('.illumination').toggle();
    });
    $('.firstAidSuppliesHead').click(function(){
      $('.firstAidSupplies').toggle();
    });
    $('.fireHead').click(function(){
      $('.fire').toggle();
    });
    $('.toolsHead').click(function(){
      $('.tools').toggle();
    });
    $('.nutritionHead').click(function(){
      $('.nutrition').toggle();
    });
    $('.hydrationHead').click(function(){
      $('.hydration').toggle();
    });
    $('.shelterHead').click(function(){
      $('.shelter').toggle();
    });

    $('#mapsPhoto').mouseenter(function(){
      $('#mapsPhoto').fadeTo('fast',0);
      $('#maps').show();
    });
    $('#mapsPhoto').mouseout(function(){
      $('#mapsPhoto').fadeTo('fast',1);
      $('#maps').hide();
    });

    $('#compassPhoto').mouseenter(function(){
      $('#compassPhoto').fadeTo('fast',0);
      $('#compass').show();
    });
    $('#compassPhoto').mouseout(function(){
      $('#compassPhoto').fadeTo('fast',1);
      $('#compass').hide();
    });

    $('#gpsPhoto').mouseenter(function(){
      $('#gpsPhoto').fadeTo('fast',0);
      $('#gps').show();
    });
    $('#gpsPhoto').mouseout(function(){
      $('#gpsPhoto').fadeTo('fast',1);
      $('#gps').hide();
    });

    $('#sunscreenPhoto').mouseenter(function(){
      $('#sunscreenPhoto').fadeTo('fast',0);
      $('#sunscreen').show();
    });
    $('#sunscreenPhoto').mouseout(function(){
      $('#sunscreenPhoto').fadeTo('fast',1);
      $('#sunscreen').hide();
    });

    $('#lipBalmPhoto').mouseenter(function(){
      $('#lipBalmPhoto').fadeTo('fast',0);
      $('#lipBalm').show();
    });
    $('#lipBalmPhoto').mouseout(function(){
      $('#lipBalmPhoto').fadeTo('fast',1);
      $('#lipBalm').hide();
    });  

    $('#sunglassesPhoto').mouseenter(function(){
      $('#sunglassesPhoto').fadeTo('fast',0);
      $('#sunglasses').show();
    });
    $('#sunglassesPhoto').mouseout(function(){
      $('#sunglassesPhoto').fadeTo('fast',1);
      $('#sunglasses').hide();
    });

    $('#jacketPhoto').mouseenter(function(){
      $('#jacketPhoto').fadeTo('fast',0);
      $('#jacket').show();
    });
    $('#jacketPhoto').mouseout(function(){
      $('#jacketPhoto').fadeTo('fast',1);
      $('#jacket').hide();
    });

    $('#pantsPhoto').mouseenter(function(){
      $('#pantsPhoto').fadeTo('fast',0);
      $('#pants').show();
    });
    $('#pantsPhoto').mouseout(function(){
      $('#pantsPhoto').fadeTo('fast',1);
      $('#pants').hide();
    });

    $('#glovesPhoto').mouseenter(function(){
      $('#glovesPhoto').fadeTo('fast',0);
      $('#gloves').show();
    });
    $('#glovesPhoto').mouseout(function(){
      $('#glovesPhoto').fadeTo('fast',1);
      $('#gloves').hide();
    });

    $('#hatPhoto').mouseenter(function(){
      $('#hatPhoto').fadeTo('fast',0);
      $('#hat').show();
    });
    $('#hatPhoto').mouseout(function(){
      $('#hatPhoto').fadeTo('fast',1);
      $('#hat').hide();
    });

    $('#flashlightPhoto').mouseenter(function(){
      $('#flashlightPhoto').fadeTo('fast',0);
      $('#flashlight').show();
    });
    $('#flashlightPhoto').mouseout(function(){
      $('#flashlightPhoto').fadeTo('fast',1);
      $('#flashlight').hide();
    });

    $('#batteryPhoto').mouseenter(function(){
      $('#batteryPhoto').fadeTo('fast',0);
      $('#battery').show();
    });
    $('#batteryPhoto').mouseout(function(){
      $('#batteryPhoto').fadeTo('fast',1);
      $('#battery').hide();
    });

    $('#firstAidPhoto').mouseenter(function(){
      $('#firstAidPhoto').fadeTo('fast',0);
      $('#firstAid').show();
    });
    $('#firstAidPhoto').mouseout(function(){
      $('#firstAidPhoto').fadeTo('fast',1);
      $('#firstAid').hide();
    });

    $('#matchesPhoto').mouseenter(function(){
      $('#matchesPhoto').fadeTo('fast',0);
      $('#matches').show();
    });
    $('#matchesPhoto').mouseout(function(){
      $('#matchesPhoto').fadeTo('fast',1);
      $('#matches').hide();
    });

    $('#firestarterPhoto').mouseenter(function(){
      $('#firestarterPhoto').fadeTo('fast',0);
      $('#firestarter').show();
    });
    $('#firestarterPhoto').mouseout(function(){
      $('#firestarterPhoto').fadeTo('fast',1);
      $('#firestarter').hide();
    });

    $('#multitoolPhoto').mouseenter(function(){
      $('#multitoolPhoto').fadeTo('fast',0);
      $('#multitool').show();
    });
    $('#multitoolPhoto').mouseout(function(){
      $('#multitoolPhoto').fadeTo('fast',1);
      $('#multitool').hide();
    });

    $('#tapePhoto').mouseenter(function(){
      $('#tapePhoto').fadeTo('fast',0);
      $('#tape').show();
    });
    $('#tapePhoto').mouseout(function(){
      $('#tapePhoto').fadeTo('fast',1);
      $('#tape').hide();
    });

    $('#foodPhoto').mouseenter(function(){
      $('#foodPhoto').fadeTo('fast',0);
      $('#food').show();
    });
    $('#foodPhoto').mouseout(function(){
      $('#foodPhoto').fadeTo('fast',1);
      $('#food').hide();
    });

    $('#waterBottlePhoto').mouseenter(function(){
      $('#waterBottlePhoto').fadeTo('fast',0);
      $('#waterBottle').show();
    });
    $('#waterBottlePhoto').mouseout(function(){
      $('#waterBottlePhoto').fadeTo('fast',1);
      $('#waterBottle').hide();
    });

    $('#filterPhoto').mouseenter(function(){
      $('#filterPhoto').fadeTo('fast',0);
      $('#filter').show();
    });
    $('#filterPhoto').mouseout(function(){
      $('#filterPhoto').fadeTo('fast',1);
      $('#filter').hide();
    });

    $('#tentPhoto').mouseenter(function(){
      $('#tentPhoto').fadeTo('fast',0);
      $('#tent').show();
    });
    $('#tentPhoto').mouseout(function(){
      $('#tentPhoto').fadeTo('fast',1);
      $('#tent').hide();
    });

    $('#tarpPhoto').mouseenter(function(){
      $('#tarpPhoto').fadeTo('fast',0);
      $('#tarp').show();
    });
    $('#tarpPhoto').mouseout(function(){
      $('#tarpPhoto').fadeTo('fast',1);
      $('#tarp').hide();
    });

    $('#blanketPhoto').mouseenter(function(){
      $('#blanketPhoto').fadeTo('fast',0);
      $('#blanket').show();
    });
    $('#blanketPhoto').mouseout(function(){
      $('#blanketPhoto').fadeTo('fast',1);
      $('#blanket').hide();
    });

    $('.findOut').click(function(){
      if(parkDanger>0) {
        $('.result').append('<p>No, you will not survive.  Please buy more supplies.</p>')
      } else {
        $('.result').append('<p>Yes!  Have fun on your trip. You spent $' + totalCost + ' dollars.</p>')
      };
    });

    });