    var map;
    
    function initMap(lat, lng, fixedCenter) {
      var latlng = new google.maps.LatLng(lat, lng);
      var opts = {
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latlng
      };
      map = new google.maps.Map(document.getElementById("gmap"), opts);
			setMarker(lat, lng, map, fixedCenter);
    }

		function setLatLng(id) {
				document.getElementById(id).value= map.getCenter();
		}

		function clearLatLng(id) {
				document.getElementById(id).value= "";
		}

		function setMarker(lat,lng,map,fixedCenter){
        var centermarkImage = '/redmine/plugin_assets/redmine_tkgmap/images/red-dot.png';
        var image = new google.maps.MarkerImage(centermarkImage,
					new google.maps.Size(32,32), new google.maps.Point(0,0), new google.maps.Point(16,16));
				var latLng = new google.maps.LatLng(lat, lng);
        var marker = new google.maps.Marker({
            position: latLng,  map: map,
            icon: image,  zIndex: 1000
        });

				if(fixedCenter){
      	  cm_flag = true;
					google.maps.event.addListener(map, 'center_changed', function(none) {
   	         if (cm_flag) {
   	             marker.setMap(null);
   	             marker.setPosition(map.getCenter());
   	             marker.setMap(map);
   	         }
   	      });
				}
		}

    function returnValue() {
			var latLng = map.getCenter();
      window.opener.$("#" + window.name).val(latLng.lat() + "," + latLng.lng());
    }
