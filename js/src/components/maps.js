
/*********************
*
* Credit: Sonny Prince - co-developer of maps.js
* https://github.com/sonnyprince
*
***********************/

var maps = (function ($) {

	var gmap = {
		markers: [
			{
				singlemap: {
					"markers": [{
						"lat": "51.4465228",
						"long": "-2.5990964000000076"
					}]
				}
			},
			{
				custommarkermap: {
					"markers": [{
						"lat": "51.4465228",
						"long": "-2.5990964000000076",
						"markerConfig": "custom-marker"
					}]
				}
			},
			{
				multimap: {
					"markers": [{
						"lat": "-34.397",
						"long": "150.644"
					},
					{
						"lat":"-33.923036",
						"long":"151.259052"
					},
					{
						"lat":"-34.028249",
						"long":"151.157507"
					}]
				}
			},
			{
				popupmap: {
					"markers": [{
						"lat": "-34.397",
						"long": "150.644",
						"popUpConfig":[{
							"content": "Lorem ipsum marker 1 info"
						}]
					},
					{
						"lat":"-33.923036",
						"long":"151.259052",
						"popUpConfig":[{
							"content": "Lorem ipsum marker 2 info"
						}]
					},
					{
						"lat":"-34.028249",
						"long":"151.157507",
						"popUpConfig":[{
							"content": "Lorem ipsum marker 3 info"
						}]
					}]
				}
			}
		],
		options: {
			scrollwheel: false,
			mapTypeId: "roadmap",
			styles: [{
			        "featureType": "water",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#5b5c5e"
			            },
			            {
			                "lightness": 1
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#f2f2f2"
			            },
			            {
			                "lightness": 1
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#e9e9e9"
			            },
			            {
			                "lightness": 1
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#e9e9e9"
			            },
			            {
			                "lightness": 10
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 1
			            }
			        ]
			    },
			    {
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "color": "#ffffff"
			            },
			            {
			                "lightness": 16
			            }
			        ]
			    },
			    {
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "saturation": 36
			            },
			            {
			                "color": "#000000"
			            },
			            {
			                "lightness": 60
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#f5f5f5"
			            },
			            {
			                "lightness": 21
			            }
			        ]
			    },
			    {
			        "featureType": "poi.park",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#dedede"
			            },
			            {
			                "lightness": 21
			            }
			        ]
			    },
			    {
			        "featureType": "poi.park",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#fefefe"
			            },
			            {
			                "lightness": 20
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#fefefe"
			            },
			            {
			                "lightness": 17
			            },
			            {
			                "weight": 1.2
			            }
			        ]
			    }
			]
		},
		iconBase: '../img/markers/'
	};

	function setUpMap(selector) {

		gmap.bounds = new google.maps.LatLngBounds();
		var center = new google.maps.LatLng(50.833, 25.000);
		gmap.map = new google.maps.Map(document.getElementById(selector), gmap.options);

		gmap.map.setCenter(center)
	};

	function setupMarkers(markerData) {

		var infoWindow = new google.maps.InfoWindow(),
			h,
			marker,
			markerCount = markerData.markers.length;

		for(h = 0; h < markerCount; h++) {
			var gMarker = markerData.markers[h],
				position = new google.maps.LatLng(gMarker.lat, gMarker.long);

			gmap.bounds.extend(position);

			gmap.customIcon = {
				url: gmap.iconBase + 'custom-marker.png',
				scaledSize: new google.maps.Size(30, 30)
			};

			marker = new google.maps.Marker({
				position: position,
				map: gmap.map,
				animation: google.maps.Animation.DROP,
				title: gMarker.hasOwnProperty('popUpConfig') ? gMarker.popUpConfig[0].content : null,
				icon: gMarker.hasOwnProperty('markerConfig') ? gmap.customIcon : ''
			});

			google.maps.event.addListener(marker, 'click', (function(gMarker, marker, i) {

				return function() {
					var popupContent = this.title;
					if (popupContent) {
						infoWindow.setContent(popupContent);
						infoWindow.open(gmap.map, marker);
					};
				}

			})(gMarker, marker, h));

			if(markerCount > 1) {
				gmap.map.fitBounds(gmap.bounds);
				var boundsListener = google.maps.event.addListener((gmap.map), 'bounds_changed', function(event) {
					google.maps.event.removeListener(boundsListener);
				});
			} else {
				gmap.map.setZoom(17);
				gmap.map.setCenter(position);
				break;
			}
			
		}

	};

    function init() {

    	var mapSelectors = document.getElementsByClassName('google-map');

    	for(var i = 0; i < mapSelectors.length; i++) {
    		var selector = mapSelectors[i].id;
     		setUpMap(selector);

    		for(var j = 0; j < gmap.markers.length; j++) {
				var markerData = gmap.markers[i][mapSelectors[i].id];
				setupMarkers(markerData);
				break;
			};

    	}
	};

    return {
        init: init
    };

})(jQuery); 
