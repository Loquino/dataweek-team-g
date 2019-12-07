// mapid is the id of the div where the map will appear
var map = L
  .map('mapid')
  .setView([52.36, 4.90], 13);   // center position + zoom

// Add a tile to the map = a background. Comes from OpenStreetmap
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 20,
    }).addTo(map);

// Add a svg layer to the map
L.svg().addTo(map);

// Create data for circles:
var toilets = [
  {long: 4.890, lat: 52.3672, group: "A", size: 15}, 
  {long: 4.889, lat: 52.3674, group: "A", size: 15}, 
  {long: 4.892, lat: 52.3662, group: "A", size: 15}, 
  {long: 4.904, lat: 52.337, group: "A", size: 15}, 
  {long: 4.860, lat: 52.357, group: "A", size: 15},
  {long: 4.865, lat: 52.356, group: "A", size: 15},
  {long: 4.873, lat: 52.359, group: "A", size: 15},
  {long: 4.822, lat: 52.371, group: "A", size: 15},
  {long: 4.8155, lat: 52.335, group: "A", size: 15},
  {long: 4.8150, lat: 52.3352, group: "A", size: 15},
  {long: 4.7711, lat: 52.380, group: "A", size: 15},
  {long: 4.77112, lat: 52.379, group: "A", size: 15},
  {long: 4.8943, lat: 52.32908, group: "A", size: 15},
  {long: 4.8932, lat: 52.33131, group: "A", size: 15},
  {long: 4.8718, lat: 52.3582, group: "A", size: 15},
  {long: 4.87099, lat: 52.3595, group: "A", size: 15},
  {long: 4.86228, lat: 52.3561, group: "A", size: 15},
  {long: 4.8982, lat: 52.3778, group: "A", size: 15},
];

var sportVelden =[
  {long: 4.8503, lat: 52.3888938, group: "B", size: 15},
  {long: 4.8586, lat: 52.393994, group: "B", size: 15},
  {long: 4.8558, lat: 52.3986935, group: "B", size: 15},
  {long: 4.8559, lat: 52.39719, group: "B", size: 15},
  {long: 4.8523, lat: 52.395295, group: "B", size: 15},
  {long: 4.8504, lat: 52.397194, group: "B", size: 15},
  {long: 4.8462, lat: 52.40071, group: "B", size: 15},
  {long: 4.8466, lat: 52.402792, group: "B", size: 15},
  {long: 4.8559, lat: 52.397195, group: "B", size: 15},
  {long: 4.8363, lat: 52.397194, group: "B", size: 15},
  {long: 4.8143, lat: 52.38439, group: "B", size: 15},
  {long: 4.8103, lat: 52.397194, group: "B", size: 15},
  {long: 4.8867, lat: 52.4183, group: "B", size: 15},
  {long: 4.8898, lat: 52.41919, group: "B", size: 15},
  {long: 4.8504, lat: 52.38889, group: "B", size: 15},
  {long: 4.8144, lat: 52.3841, group: "B", size: 15},
  {long: 4.8178, lat: 52.38389, group: "B", size: 15},
  {long: 4.8224, lat: 52.38839, group: "B", size: 15},
  {long: 4.8260, lat: 52.392792, group: "B", size: 15},
];

var zones =[
{long: 4.8975, lat: 52.378, group: "C", size: 30},
  {long: 4.861, lat: 52.356, group: "C", size: 150},
  {long: 4.872, lat: 52.359, group: "C", size: 100},
  {long: 4.890, lat: 52.367, group: "C", size: 100},
  {long: 4.822, lat: 52.371, group: "C", size: 50},
  {long: 4.772, lat: 52.380, group: "C", size: 80},
  {long: 4.8150, lat: 52.3352, group: "C", size: 50},
  {long: 4.894, lat: 52.330, group: "C", size: 50},
  {long: 4.9035, lat: 52.337, group: "C", size: 30}, 

];

var zitten =[
  {long: 4.8150, lat: 52.3352, group: "D", size: 20},
  {long: 4.7711, lat: 52.380, group: "D", size: 20},
  {long: 4.77112, lat: 52.379, group: "D", size: 20},
  {long: 4.8943, lat: 52.32908, group: "D", size: 20},
  {long: 4.8932, lat: 52.33131, group: "D", size: 20},
  {long: 4.8718, lat: 52.3582, group: "D", size: 20},
  {long: 4.87099, lat: 52.3595, group: "D", size: 20},
  {long: 4.86228, lat: 52.3561, group: "D", size: 20},
  {long: 4.85584, lat: 52.3558, group: "D", size: 20},
  {long: 4.8982, lat: 52.3778, group: "D", size: 20},
];

var staan =[
  {long: 4.890, lat: 52.3672, group: "E", size: 15}, 
  {long: 4.889, lat: 52.3674, group: "E", size: 15}, 
  {long: 4.892, lat: 52.3662, group: "E", size: 15}, 
  {long: 4.850, lat: 52.154, group: "E", size: 15}, 
  {long: 4.904, lat: 52.337, group: "E", size: 15}, 
  {long: 4.860, lat: 52.357, group: "E", size: 15},
  {long: 4.865, lat: 52.356, group: "E", size: 15},
  {long: 4.873, lat: 52.359, group: "E", size: 15},
  {long: 4.822, lat: 52.371, group: "E", size: 15},
  {long: 4.8155, lat: 52.335, group: "E", size: 15},
];

// Create a color scale ======>
var color = d3.scaleOrdinal()
  .domain(["A", "B", "C", "D" ])
  .range([ "#402D54", "#D18975", "#8FD175", "#2196F3"])
    
// Add a scale for bubble size
var size = d3.scaleLinear()
  .domain([1,100])  // What's in the data
  .range([ 4, 50])  // Size in pixel



// Select the svg area and add circles:
  d3.select("#mapid")
    .select("svg")
    .selectAll("myCircles")
    .data(toilets)
    .enter()
    .append("circle")
    .attr("class" , function(d){ return d.group })
      .attr("cx", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).x })
      .attr("cy", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).y })
      .attr("r", function(d){ return size(d.size) })
      .attr("r", 14)
      .style("fill", "orange")
      .attr("stroke", "orange")
      .attr("stroke-width", 3)
      .attr("fill-opacity", .4)


  d3.select("#mapid")
    .select("svg")
    .selectAll("myCircles")
    .data(sportVelden)
    .enter()
    .append("circle")
    .attr("class" , function(d){ return d.group })
      .attr("cx", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).x })
      .attr("cy", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).y })
      .attr("r", function(d){ return size(d.size) })
      .attr("r", 14)
      .style("fill", "blue")
      .attr("stroke", "blue")
      .attr("stroke-width", 3)
      .attr("fill-opacity", .4)
  
  d3.select("#mapid")
    .select("svg")
    .selectAll("myCircles")
    .data(zones)
    .enter()
    .append("circle")
    .attr("class" , function(d){ return d.group })
      .attr("cx", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).x })
      .attr("cy", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).y })
      .attr("r", function(d){ return size(d.size) })
      .attr("r", 0)
      .style("fill", "green")
      .attr("stroke", "green")
      .attr("stroke-width", 3)
      .attr("fill-opacity", .4)

d3.select("#mapid")
    .select("svg")
    .selectAll("myCircles")
    .data(zitten)
    .enter()
    .append("circle")
    .attr("class" , function(d){ return d.group })
      .attr("cx", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).x })
      .attr("cy", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).y })
      .attr("r", function(d){ return size(d.size) })
      .attr("r", 0)
      .style("fill", "purple")
      .attr("stroke", "purple")
      .attr("stroke-width", 3)
      .attr("fill-opacity", .4)

d3.select("#mapid")
    .select("svg")
    .selectAll("myCircles")
    .data(staan)
    .enter()
    .append("circle")
    .attr("class" , function(d){ return d.group })
      .attr("cx", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).x })
      .attr("cy", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).y })
      .attr("r", function(d){ return size(d.size) })
      .attr("r", 0)
      .style("fill", "red")
      .attr("stroke", "red")
      .attr("stroke-width", 3)
      .attr("fill-opacity", .4)

// Function that update circle position if something change
  function update() {
    d3.selectAll("circle")
      .attr("cx", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).x })
      .attr("cy", function(d){ return map.latLngToLayerPoint([d.lat, d.long]).y })


      d3.selectAll(".checkbox").each(function(d){
        cb = d3.select(this);
        grp = cb.property("value")

// If the box is check, I show the group
        if(cb.property("checked")){
        d3.selectAll("."+grp).transition().duration(500).style("opacity", 1).attr("r", function(d){ return size(d.size) })

// Otherwise I hide it
        }else{
        d3.selectAll("."+grp).transition().duration(500).style("opacity", 0).attr("r", 0)
        }
      })

  }
          // When a button change, I run the update function
          d3.selectAll(".checkbox").on("change",update);


// If the user change the map (zoom or drag), I update circle position:
map.on("moveend", update)