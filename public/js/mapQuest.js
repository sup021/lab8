function initMap() {
	L.mapquest.key = 'yIa5T6ZpDy2l1sc5HDaycpKRvRhAVtWy';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}