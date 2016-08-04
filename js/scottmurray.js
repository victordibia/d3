
var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
							11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];


//d3.select("body").append("p").text("New paragraph!");
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

  d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", function(d) {
        var barHeight = d * 5;  //Scale up by factor of 5
       return barHeight + "px";
});

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
                 [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
                       ];
 plotsvg = d3.select("body")
   .append("div")
   .append("svg")
   .attr("height", h)
   .attr("width", w);

plotsvg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function(d){
      return d[0] ;
    })
    .attr("cy", function(d){
      return d[1] ;
    })
    .attr("r", 5)

plotsvg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text(function(d){
         return (d[0] + "," + d[1])
       })
       .attr("x", function(d,i){
         return d[0];
       }).attr("y", function(d){
         return d[1];
       }).attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "green")
      .attr("text-anchor", "middle")
