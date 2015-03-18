var bittersMap = (function () {
  var myLatlng = new google.maps.LatLng(59.342457, 18.057340),
      mapCenter1 = new google.maps.LatLng(59.340458, 18.057340),
      mapCenter2 = new google.maps.LatLng(59.340458, 18.057340),
      mapCanvas1 = document.getElementById(`map1`),
      mapCanvas2 = document.getElementById(`map2`),
      mapOptions1 = {
        center: mapCenter1,
        zoom: 13,
        scrollwheel: false,
        draggable: true,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      },
      mapOptions2 = {
        center: mapCenter2,
        zoom: 13,
        scrollwheel: false,
        draggable: true,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      },
      map1 = new google.maps.Map(mapCanvas1, mapOptions1),
      map2 = new google.maps.Map(mapCanvas2, mapOptions2),
      contentString =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">thoughtbot</h1>'+
        '<div id="bodyContent"'+
        '<p>Sveavägen 98</p>'+
        '</div>'+
        '</div>',
      infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300
      }),
      marker1 = new google.maps.Marker({
        position: myLatlng,
        map: map1,
        title: 'thoughtbot (Sweden)'
      });
      marker2 = new google.maps.Marker({
        position: myLatlng,
        map: map2,
        title: 'thoughtbot (Sweden)'
      });

  return {
    init: function () {
      map1.set('styles', [{
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          { hue: '#ffff00' },
          { saturation: 30 },
          { lightness: 10}
        ]}
      ]);
      map2.set('styles', [{
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          { hue: '#ffff00' },
          { saturation: 30 },
          { lightness: 10}
        ]}
      ]);
      google.maps.event.addListener(marker1, 'click', function () {
        infowindow.open(map1,marker1);
      });
      google.maps.event.addListener(marker2, 'click', function () {
        infowindow.open(map2,marker2);
      });
    }
  };
}());

bittersMap.init();
