'use strict';

(function($){
	$(document).ready(function() {
		// Code

    //ISOTOPE
$('.blocks').isotope({
          itemSelector: '.blocks__img',
          //layoutMode: 'fitRows',
          //layoutMode: 'cellsByRow',
          percentPosition: true,
          masonry: {
            //columnWidth: '.sizer',
            gutter: 7
          }
        });

        $('.filters').on('click', 'li', function() {
          var val = $(this).data('filter');
          $('.blocks').isotope({filter: val})
        });
	});

  //ISOTOPE END

  $('.single-item').slick({
    dots:true,
    arrows:false
  });

  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots:true,
      arrows:false
});
  
})(jQuery);

function initMap() {
  var coords, map, marker;
  coords = {lat: 49.584055,   lng: 34.556989
  };
  map = new google.maps.Map(document.getElementById('map'), {
    mapTypeControl: false,
    center: coords,
    zoom: 13
  });
  marker = new google.maps.Marker({
    position: coords,
    map: map,
    icon: 'images/marker.png',
    draggable: true
  });

  //new AutocompleteDirectionsHandler(map);
}
initMap();
