h = 150 ;
w = 600 ; var barPadding = 1;
var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,	11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

// Chapter 5 Data binding
databind = d3.select("body")
.append("div").attr("class","tutorialdiv")
.append("div");
databind.selectAll("p")
.data(dataset)
.enter()
.append("span")
.text(function(d) { return d; })
.style("color", function(d) {
	if (d > 15) { return "red";}
	else { return "black";}
});
// add title
databind.select(function() { return this.parentNode; })
.append("div").attr("class","turorialtitle")
.attr("style", "padding: 10px")
.append("text")
.text("Chapter 5 Data binding")


// Simple bar chart
drawbars = d3.select("body")
.append("div").attr("class","tutorialdiv")
.append("div");
drawbars.selectAll("div")
.data(dataset)
.enter()
.append("div")
.attr("class", "bar")
.style("height", function(d) {
	var barHeight = d * 5;  //Scale up by factor of 5
	return barHeight + "px";
});
drawbars.select(function() { return this.parentNode; })
.append("div").attr("class","turorialtitle")
.attr("style", "padding: 10px")
.append("text")
.text("Chapter 6 Drawing with Data")

// Simple Circle Chart
simplecircle = d3.select("body")
.append("div").attr("class","tutorialdiv")
.append("svg")
.attr("height", 60)
.attr("width", 500);
simplecircle.selectAll("circle")
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

simplecircle.select(function() { return this.parentNode; })
.append("div").attr("class","turorialtitle")
.attr("style", "padding: 10px")
.append("text")
.text("Chapter 6 Making a Scatterplot")

// Bar Chart with label

barsvg = d3.select("body")
.append("div").attr("class","tutorialdiv")
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
	[410, 12], [475, 44], [25, 67], [85, 21], [220, 88], [600, 150]];

	// Simple scatter plot
	barsvg.select(function() { return this.parentNode; })
	.append("div").attr("class","turorialtitle")
	.attr("style", "padding: 10px")
	.append("text")
	.text("Chapter 7 : Scales")

	h = 300 ;
	plotsvg = d3.select("body")
	.append("div").attr("class","tutorialdiv")
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
	}).attr("fill", "green");;


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
	.attr("fill", "blue")
	.attr("text-anchor", "middle")
	plotsvg.append("g")
	.attr("class","x axis")
	.attr("transform", "translate(10," + (h - padding ) + ")")
	.call(xaxis)
	plotsvg.append("g")
	.attr("class","y axis")
	.attr("transform", "translate(" + (padding + 10) + ",0 )")
	.call(yaxis)
	plotsvg.select(function() { return this.parentNode; })
.append("div").attr("class","")
.append("button", "padding: 10px") // Add a button for animation
.attr("class","plotanimatebutton")
.text(" Animate ")
	plotsvg.select(function() { return this.parentNode; })
	.append("div").attr("class","turorialtitle")
	.attr("style", "padding: 10px")
	.append("text")
	.text("Chapter 8 : Axes")

	d3.select("button.plotanimatebutton")
	.on("click", function() {

		var numValues = plotsvg.selectAll("circle").size();               //Count original length of dataset
		dataset = [];                                       //Initialize empty array
		for (var i = 0; i < numValues; i++) {               //Loop numValues times
			var newNumber = Math.floor(Math.random() * 25); //New random integer (0-24)
			dataset.push([ Math.floor(Math.random() * 100 + 10), Math.floor(Math.random() * 100 + 20)]);                        //Add new number to array
		}
		xscale = d3.scaleLinear().domain([0, d3.max(dataset, function(d) { return d[0]; })]).range([padding, w - padding*2]);
		yscale = d3.scaleLinear().domain([0, d3.max(dataset, function(d) { return d[1]; })]).range([h-padding, padding]);
		xaxis = d3.axisTop(xscale).ticks(5);
		yaxis = d3.axisLeft(yscale).ticks(5);

		//Update all rects
		plotsvg.selectAll("circle")
		.data(dataset)
		.transition()
		.ease(d3.easeLinear)
		.style("fill", "red")
		.attr("cx", function(d){
			return xscale(d[0]) ;
		})
		.attr("cy", function(d){
			return yscale(d[1]) ;
		})
		.attr("r", function(d) {
			return rscale(d[1]);
		}).transition() // Then red.
		.duration(1000).style("fill", "green")

		plotsvg.selectAll("text")
		.data(dataset)
		.transition()
		.ease(d3.easeLinear)
		.attr("x", function(d,i){
			return xscale(d[0]);
		}).attr("y", function(d){
			return yscale(d[1]);
		})

		//Update x-axis
		plotsvg.select(".x.axis")
		    .transition()
		    .duration(1000)
		    .call(xaxis);

		//Update y-axis
		plotsvg.select(".y.axis")
		    .transition()
		    .duration(1000)
		    .call(yaxis);

	});


	// Chapter 8 Motions and Transitions
	//ordinal scale
	var dataset  = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,	11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
	console.log(d3.range(dataset.length))
	var xscale = d3.scaleBand().domain(d3.range(dataset.length)).rangeRound([0, w]).paddingInner(0.05);
  var yscale = d3.scaleLinear().domain([0, d3.max(dataset)]).range([0, h]);
	barsvg8 = d3.select("body")
	.append("div").attr("class","tutorialdiv")
	.append("svg");
	barsvg8.attr("height", h)
	.attr("width", w)
	.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr("x", function(d,i){
		//console.log(xscale(i))
		return xscale(i) ;
	})
	.attr("y", function(d) {
		return h - yscale(d);  ; //Height minus data value
	})
	.attr("width",  xscale.bandwidth())
	.attr("height", function(d){
		return yscale(d);
	}).attr("fill", function(d) {
		return "rgb(0, 0, " + (d * 10) + ")";
	});
		barsvg8.select(function() { return this.parentNode; })
	.append("div").attr("class","")
	.append("button", "padding: 10px") // Add a button for animation
	.attr("class","animatebutton")
	.text(" Animate ")


	d3.select("button.animatebutton")
	.on("click", function() {

		var numValues = barsvg8.selectAll("rect").size();  ;               //Count original length of dataset
		dataset = [];                                       //Initialize empty array
		for (var i = 0; i < numValues; i++) {               //Loop numValues times
			var newNumber = Math.floor(Math.random() * 25); //New random integer (0-24)
			dataset.push(newNumber);                        //Add new number to array
		}
		var xscale = d3.scaleBand().domain(d3.range(dataset.length)).rangeRound([0, w]).paddingInner(0.05);
	  var yscale = d3.scaleLinear().domain([0, d3.max(dataset)]).range([0, h]);

		//Update all rects
		barsvg8.selectAll("rect")
		.data(dataset)
		.transition()
		.ease(d3.easeLinear)
		.attr("y", function(d) {
			return h - yscale(d);  ; //Height minus data value
		}).attr("width",  xscale.bandwidth())
		.attr("height", function(d) {
			return yscale(d);
		}).attr("fill", function(d) {   // <-- Down here!
			return "rgb(0, 0, " + (d * 10) + ")";
		});;

	});

	barsvg8.select(function() { return this.parentNode; })
	.append("div").attr("class","turorialtitle")
	.attr("style", "padding: 10px")
	.append("text")
	.text("Chapter 9 : Updats Transitions, Motion ")
