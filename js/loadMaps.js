/**
 * Created by gramp_000 on 12/22/14.
 */
function init_map() {
    var myOptions = {zoom: 14, center: new google.maps.LatLng(40.875843, -74.12205289999997), mapTypeId: google.maps.MapTypeId.ROADMAP};
    map = new google.maps.Map(document.getElementById("map1"), myOptions);
    marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(40.875843, -74.12205289999997)});
    infowindow = new google.maps.InfoWindow({content: "<b>Modern Dental Vision / Magic Smile</b><br/>6 Village Square East<br/>07011 Clifton, NJ " });
    google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);

     var myOptions = {zoom: 14, center: new google.maps.LatLng(40.237028, -74.74830399999996), mapTypeId: google.maps.MapTypeId.ROADMAP};
    map = new google.maps.Map(document.getElementById("map2"), myOptions);
    marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(40.237028, -74.74830399999996)});
    infowindow = new google.maps.InfoWindow({content: "<b>Modern Dental Vision / Magic Smile</b><br/>901 North Olden Avenue<br/>08638 Trenton,NJ " });
    google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', init_map);



