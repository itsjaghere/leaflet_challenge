console.log("hello_test")
console.log(d3)
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson').then(function (data) {
    console.log(data)
    var map = L.map('map').setView(
        [33.099740, -117.068944],13
    )
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
})
