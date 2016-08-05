
var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
							11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

// Use data .. print in loop
d3.select("body")
    .append("div")
    .selectAll("p")
    .data(dataset)
    .enter()
    .append("span")
    .text(function(d) { return d; })
    .style("color", function(d) {
    if (d > 15) {   //Threshold of 15
        return "red";
    } else {
        return "black";
    }
  });

// Simple bar chart
d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", function(d) {
        var barHeight = d * 5;  //Scale up by factor of 5
       return barHeight + "px";
});

// Simple Circle Chart
d3.select("body")
  .append("div")
  .append("svg")
  .attr("height", 60)
  .attr("width", 500)
  .selectAll("circle")
    .data(dataset)
    .enter()
  .append("circle")
  .attr("class","circlepumpkin")
  .attr("cx",function(d, i) {
            return (i * 50) + 25;
        })
  .attr("r", function(d) {
            return d;
       })
  .attr("cy",30);

// Bar Chart with label
h = 100 ;
w = 500 ; var barPadding = 1;
  barsvg = d3.select("body")
    .append("div")
    .append("svg");
    barsvg.attr("height", h)
    .attr("width", w)
    .selectAll("rect")
      .data(dataset)
      .enter()
    .append("rect")
    .attr("x", function(d,i){
      return i * (w / dataset.length);
    })
   .attr("y", function(d) {
    return h - (d * 4)  ; //Height minus data value
    })
   .attr("width",  w / dataset.length - barPadding)
   .attr("height", function(d,i){
     return ( d*4);
   }).attr("fill", function(d) {
					return "rgb(0, 0, " + (d * 10) + ")";
			   });
  // draw text label on bar chart
  barsvg.selectAll("text")
          .data(dataset)
          .enter()
          .append("text")
          .text(function(d){
            return d;
          })
          .attr("x", function(d,i){
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
          }).attr("y", function(d){
            return h - (d*4) + 14;
          }).attr("font-family", "sans-serif")
         .attr("font-size", "11px")
         .attr("fill", "white")
         .attr("text-anchor", "middle")

 var dataset = [
                 [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
                 [410, 12], [475, 44], [25, 67], [85, 21], [220, 88], [600, 150]
                       ];
// Simple scatter plot
d3.select("body")
  .append("div")
  .attr("style", "padding: 10px")
  .append("text")
  .text(" Scale : using latest d3 syntax .. d3.scaleLinear() , d3.axisLeft(scale), d3.axistRight(scale)")

h = 300 ;
 plotsvg = d3.select("body")
   .append("div")
   .append("svg")
   .attr("height", h)
   .attr("width", w);
   // Working with Scales http://alignedleft.com/tutorials/d3/scales
var padding = 20;
var xscale = d3.scaleLinear().domain([0, d3.max(dataset, function(d) { return d[0]; })]).range([padding, w - padding*2]);
var yscale = d3.scaleLinear().domain([0, d3.max(dataset, function(d) { return d[1]; })]).range([h-padding, padding]);
var rscale = d3.scaleLinear().domain([0, d3.max(dataset, function(d) { return d[1]; })]).range([2, 10]);
var xaxis = d3.axisTop(xscale).ticks(5);
var yaxis = d3.axisLeft(yscale).ticks(5);

plotsvg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function(d){
      return xscale(d[0]) ;
    })
    .attr("cy", function(d){
      return yscale(d[1]) ;
    })
    .attr("r", function(d) {
			   		return rscale(d[1]);
		})


plotsvg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text(function(d){
         return (d[0] + "," + d[1])
       })
       .attr("x", function(d,i){
         return xscale(d[0]);
       }).attr("y", function(d){
         return yscale(d[1]);
       }).attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "green")
      .attr("text-anchor", "middle")
plotsvg.append("g")
      .attr("class","axis")
      .attr("transform", "translate(0," + (h - padding) + ")")
      .call(xaxis)
  plotsvg.append("g")
        .attr("class","axis")
        .attr("transform", "translate(" + (padding) + ",0 )")
        .call(yaxis)
