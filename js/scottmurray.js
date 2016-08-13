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

var dataset = [[5, 20], [480, 90], [250, 50], [100, 33], [330, 95],[410, 12], [475, 44], [25, 67], [85, 21], [220, 88], [600, 150]];

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


	// Chapter 10 - Interactivity
	var sortOrder = false;
	barsvg10 = d3.select("body")
	.append("div").attr("class","tutorialdiv")
	.append("svg");
	barsvg10.attr("height", h)
	.attr("width", w)
	.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.on("click", function(d) {
		var dataset  = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,	11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
		sortOrder = !sortOrder;
		var xscale = d3.scaleBand().domain(d3.range(dataset.length)).rangeRound([0, w]).paddingInner(0.05);
		var yscale = d3.scaleLinear().domain([0, d3.max(dataset)]).range([0, h]);

		barsvg10.selectAll("rect")
		.sort(function(a, b) {
			if (sortOrder) {
				return d3.ascending(a, b);
			} else {
				return d3.descending(a, b);
			}
		})
		.transition()
		.duration(1000)
		.attr("x", function(d, i) {
			return xscale(i);
		});

	}).on("mouseover", function(d) {
		var xscale = d3.scaleBand().domain(d3.range(dataset.length)).rangeRound([0, w]).paddingInner(0.05);

		//Get this bar's x/y values, then augment for the tooltip
		var xPosition = parseFloat(d3.select(this).attr("x")) + xscale.bandwidth() / 2 ;
		var yPosition = parseFloat(d3.select(this).attr("y")) / 2 + h / 2 + window.pageYOffset + 150;




		d3.select("#tooltip")
		.style("left", xPosition + "px")
		.style("top", yPosition + "px")
		.select("#value")
		.text(d);

		//Show the tooltip
		d3.select("#tooltip").classed("hidden", false);

	})
	.on("mouseout", function() {

		//Hide the tooltip
		d3.select("#tooltip").classed("hidden", true);

	})
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
	})
	.append("title")
	.text(function(d) {
		return "This value is " + d;
	});;
	barsvg10.select(function() { return this.parentNode; })
	.append("div").attr("class","turorialtitle")
	.attr("style", "padding: 10px")
	.append("text")
	.text("Chapter 10 : Interactivity (hint .. click bars) ")


	// chapter 11 - Layouts .. pie, stacks, force
	dataset = [ 5, 10, 20, 45, 6, 25 ];
	//h=500 ;
	var pie = d3.pie();
	var piesvg = d3.select("body")
	.append("div").attr("class","tutorialdiv")
	.append("svg").attr("height", h)
	.attr("width", w);

	var outerRadius = h / 2;
	var innerRadius = h/4;
	var arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
	var color = d3.scaleOrdinal(d3.schemeCategory10);
	var arcs = piesvg.selectAll("g.arc")
	.data(pie(dataset))
	.enter()
	.append("g")
	.attr("class", "arc")
	.attr("transform", "translate(" + outerRadius + ", " + outerRadius + ")");
	//Draw arc paths
	arcs.append("path")
	.attr("fill", function(d, i) {
		return color(i);
	})
	.attr("d", arc);
	arcs.append("text")
	.attr("transform", function(d) {
		return "translate(" + arc.centroid(d) + ")";
	})
	.attr("text-anchor", "middle").attr("class","pietext")
	.text(function(d) {
		return d.value;
	});

	// stack dataset
	var stacksvg = d3.select("body")
	.append("div").attr("class","tutorialdiv")
	.append("svg").attr("height", h)
	.attr("width", w);
	var stackdata = [
		[
			{ x: 0, y: 5 },
			{ x: 1, y: 4 },
			{ x: 2, y: 2 },
			{ x: 3, y: 7 },
			{ x: 4, y: 23 }
		],
		[
			{ x: 0, y: 10 },
			{ x: 1, y: 12 },
			{ x: 2, y: 19 },
			{ x: 3, y: 23 },
			{ x: 4, y: 17 }
		],
		[
			{ x: 0, y: 22 },
			{ x: 1, y: 28 },
			{ x: 2, y: 32 },
			{ x: 3, y: 35 },
			{ x: 4, y: 43 }
		]
	];

	var stack = d3.stack();
	stack(stackdata);
	var stackxscale = d3.scaleBand().domain(d3.range(stackdata[0].length)).range([0, w]).paddingInner(0.05);
	var stackyscale = d3.scaleLinear().domain([0,83])
	.range([0, h]);
	// Add a group for each row of data
	var groups = stacksvg.selectAll("g")
	.data(stackdata)
	.enter()
	.append("g")
	.style("fill", function(d, i) {
		return color(i);
	});
	var rects = groups.selectAll("rect")
	.data(function(d) { return d; })
	.enter()
	.append("rect")
	.attr("x", function(d, i) {
		return stackxscale(i);
	})
	.attr("y", function(d) {
		return stackyscale(d.y);
	})
	.attr("height", function(d) {
		return stackyscale(d.y);
	})
	.attr("width", stackxscale.bandwidth());
	stacksvg.select(function() { return this.parentNode; })
	.append("div").attr("class","turorialtitle")
	.attr("style", "padding: 10px")
	.append("text")
	.text("Chapter 11 : Layouts .. not so well done stackedbars ")

	// Force graph
	var forcesvg = d3.select("body")
	.append("div").attr("class","tutorialdiv")
	.append("svg").attr("height", h)
	.attr("width", w);

	var dataset = {
		nodes: [
			{ name: "Adam" },
			{ name: "Bob" },
			{ name: "Carrie" },
			{ name: "Donovan" },
			{ name: "Edward" },
			{ name: "Felicity" },
			{ name: "George" },
			{ name: "Hannah" },
			{ name: "Iris" },
			{ name: "Jerry" }
		],
		edges: [
			{ source: 0, target: 1 },
			{ source: 0, target: 2 },
			{ source: 0, target: 3 },
			{ source: 0, target: 4 },
			{ source: 1, target: 5 },
			{ source: 2, target: 5 },
			{ source: 2, target: 5 },
			{ source: 3, target: 4 },
			{ source: 5, target: 8 },
			{ source: 5, target: 9 },
			{ source: 6, target: 7 },
			{ source: 7, target: 8 },
			{ source: 8, target: 9 }
		]
	};


	 
	forcesvg.select(function() { return this.parentNode; })
	.append("div").attr("class","turorialtitle")
	.attr("style", "padding: 10px")
	.append("text")
	.text("Chapter 11 : Layouts .. Force Graph")
