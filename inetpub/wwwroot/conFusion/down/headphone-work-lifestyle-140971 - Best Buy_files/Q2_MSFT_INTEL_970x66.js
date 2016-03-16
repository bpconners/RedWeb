(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 970,
	height: 66,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"./g_hp_base_01_64.png", id:"g_hp_base_01_64"},
		{src:"./g_hp_base_02_64.png", id:"g_hp_base_02_64"},
		{src:"./g_hp_screen_01_64.png", id:"g_hp_screen_01_64"},
		{src:"./g_hp_screen_02_64.png", id:"g_hp_screen_02_64"},
		{src:"./Week2as.png", id:"Week2as"},
		{src:"./Week2bs.png", id:"Week2bs"}
	]
};



// symbols:



(lib.g_hp_base_01_64 = function() {
	this.initialize(img.g_hp_base_01_64);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,70);


(lib.g_hp_base_02_64 = function() {
	this.initialize(img.g_hp_base_02_64);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,187,121);


(lib.g_hp_screen_01_64 = function() {
	this.initialize(img.g_hp_screen_01_64);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,157);


(lib.g_hp_screen_02_64 = function() {
	this.initialize(img.g_hp_screen_02_64);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,154);


(lib.Week2as = function() {
	this.initialize(img.Week2as);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,160);


(lib.Week2bs = function() {
	this.initialize(img.Week2bs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,184);


(lib.txt_yellow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF200").s().p("AhFA3IAAhRIASAAIAAAIIAAAAQAHgJALAAQAMAAAIAJQAHAIAAAKQAAAMgHAJQgIAJgMAAQgMAAgFgHIAAAAIAAAggAgvgIQgDAFgBADQABAHADADQAEAFAGAAQAGAAAEgFQADgDAAgHQAAgDgDgFQgEgEgGAAQgGAAgEAEgAB+AXQgJgJAAgOQAAgLAJgIQAKgIANAAQANAAAJAIQAJAIAAALQAAAOgJAJQgKAHgMAAQgNAAgKgHgACLgIQgDAFgBADQABAGADAEQADAFAHAAQAGAAAEgFQADgDAAgHQAAgDgDgFQgEgEgGAAQgHAAgDAEgAiFAXQgKgJAAgOQAAgLAKgIQAIgIANAAQAOAAAJAIQAJAIAAALQAAAOgJAJQgKAHgNAAQgNAAgIgHgAh5gIQgDAFgBADQABAHADADQAEAFAGAAQAGAAAEgFQADgEAAgGQAAgDgDgFQgEgEgHAAQgGAAgDAEgAkZATIANgMQAHAIAKAAQALAAAAgJQAAgEgEgCQgEgBgJgCQgUgHAAgQQAAgMAKgHQAIgGANAAQAPAAALAKIgMANQgGgHgJAAQgKAAgBAIQABAGAMADQALAEAFAEQAJAFgBAJQAAANgJAHQgIAHgNgBQgTABgLgMgAD0AcIgLggIgLAgIgSAAIgUg2IAUAAIAKAiIAKgiIASAAIALAiIAAAAIAKgiIATAAIgUA2gABTAcIgggyIAAAyIgSAAIAAhNIAVAAIAhAyIAAAAIAAgyIASAAIAABNgAisAcIAAgcQAAgLgIAAQgKAAAAALIAAAcIgSAAIAAhSIASAAIAAAkQAFgJALAAQAKAAAGAIQAEAFABAKIAAAgg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.2,-5.6,56.5,11.2);


(lib.logo_BestBuy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAHAxIg/gGIAIhbIA2AFQAzAEgDAaQgBANgRACIAAABQAWAIgBAQQgBAOgQAFQgJADgNAAIgLAAgAgKAZIAFAAIALAAQAHgBAAgFQABgIgSgBIgFgBgAgHgIIAEAAQANABABgHQAAgEgFgCIgIgBIgEgBg");
	this.shape.setTransform(-13,-6.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgdAuIAFg+IgagCIADgfIBiAJIgDAeIgagDIgGA+g");
	this.shape_1.setTransform(18.4,-3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgEAvQgcgDgVgKIAQgZIADABQAPAKAOACQAKAAAAgFQABgEgJgCIgJgCQgigIACgSQABgQATgIQARgHAUACQAWABATAKIgPAXQgMgIgPgBQgKgBAAAFQgBADAKACIAKADQAjAIgCAUQgCAPgSAIQgNAFgRAAIgIAAg");
	this.shape_2.setTransform(7.7,-4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgvAqIAIhbIBXAHIgCAaIgpgDIgBAJIAlACIgCAXIgkgDIgBAJIApADIgCAag");
	this.shape_3.setTransform(-2.2,-5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAHAxIg/gGIAIhbIA1AFQA0AEgDAaQAAAHgFAEQgFADgJABIAAABQAXAIgBAQQgBAOgQAFQgJADgNAAIgLAAgAgKAZIAFAAIALAAQAHgBAAgFQABgIgSgBIgFgBgAgHgIIAEAAQANABABgHQAAgEgFgCIgJgBIgDgBg");
	this.shape_4.setTransform(-12,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgEAxQg7gGAEgnIAFg1IAtAEIgEAyQgBAHACADQACAEAIABQAGABADgEQACgDABgHIAEgyIAuAEIgFA2QgBATgRAJQgNAHgSAAIgKgBg");
	this.shape_5.setTransform(0.2,5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgdAuIADgoIgpg3IA2AEIAMAaIABAAIAEgIIALgPIA1AFIgxAvIgEAog");
	this.shape_6.setTransform(12.9,6.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AABAEIgBgEIgBAAIAAAEIgBAAIABgHIABAAQABABABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIABAEgAAAAAIAAAAIACAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIAAAAg");
	this.shape_7.setTransform(20.5,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AikCNIgBgBIhahnIALh/IBrhVIGJAjIgcE7gAjvhWIgKB4IBXBlIGBAiIAbkwImBghgAjagDQgHgBgEgFQgFgFAAgGIAAgBQABgHAFgEQAFgFAGAAIACAAQAGABAFAFQAEAEAAAHIAAABQAAAHgFAFQgFAEgHAAgAjggdQgDADgBAFIAAABQAAAEADADQADADAEABIABAAQAKAAABgKIAAgBQAAgKgKgBIgBAAQgEAAgDACg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEEF35").s().p("AikCKIhYhmIALh8IBphTIGFAiIgbE1gAjigfQgEAEgBAGQAAAGAEAEQADAEAGABQAGABAEgEQAFgEAAgGQABgFgEgFQgEgEgFgBIgCAAQgFAAgEADg");

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.7,-17.6,51.4,35.2);


(lib.gradient_blocker = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#09385D","rgba(9,56,93,0)"],[0,1],-3.3,2.5,-3.3,34.9).s().p("AyHFmIAArLMAkPAAAIAALLg");
	this.shape.setTransform(0,20.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-116,-15.2,232.1,71.7);


(lib.g_plus = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjxDyQhlhlAAiNQAAiNBlhkQBlhlCMAAQCOAABkBlQBlBlAACMQAACNhlBlQhkBliOAAQiMAAhlhlgAi3i3QhMBNAABqQAABrBMBNQBNBMBqAAQBrAABNhMQBMhNAAhrQAAhqhMhNQhNhMhrAAQhqAAhNBMg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#053F69").s().p("AgdB+IAAhhIhiAAIAAg5IBiAAIAAhhIA6AAIAABhIBjAAIAAA5IhiAAIAABhg");
	this.shape_1.setTransform(0.7,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#93D7E9").s().p("Ai3C4QhMhNAAhrQAAhqBMhNQBNhMBqAAQBrAABNBMQBMBNAABqQAABrhMBNQhNBMhrAAQhqAAhNhMgAh4AUIBiAAIAABhIA7AAIAAhhIBiAAIAAg5IhjAAIAAhhIg6AAIAABhIhiAAg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.3,-34.3,68.7,68.7);


(lib.g_logo_w10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am7BTIAAhSIBtAAIAABhgAoUBHIAAhGIBUAAIAABRgAHSAtQgKgPAAgcQAAgcAKgSQAKgQAUAAQAlAAAAA8QAAAcgKARQgLAPgTABQgRgBgKgPgAHWABQAAAwAZAAQAYAAAAgxQAAgxgYAAQgZAAAAAygAE8A3IAAgOQAKAIAMAAQAQAAAAgMQAAgEgDgEQgEgDgKgFQgMgFgEgFQgFgFAAgHQAAgLAJgHQAIgHANAAQALAAAHAEIAAAOQgIgHgLAAQgHABgEADQgEADAAAGQAAADADADQAEAEAJADQAMAFAFAGQAFAFAAAJQAAALgJAHQgIAGgOABQgNAAgIgGgABzAwQgLgLAAgUQAAgUALgLQAMgMAUAAQATAAAKALQALANAAASQAAAVgMALQgLAMgTABQgTgBgLgMgAB9gGQgIAHAAAQQAAAPAIAJQAIAIANAAQANAAAHgIQAHgIAAgQQAAgRgHgGQgHgJgNAAQgNAAgIAJgAASAxQgJgMAAgTQAAgSAKgOQALgMASAAQARAAAIANIAAAAIAAgzIAOAAIAAB7IgOAAIAAgPIAAAAQgJARgUAAQgQAAgKgMgAAegGQgHAIAAAPQAAAQAHAIQAHAIALAAQALAAAHgIQAHgJAAgMIAAgMQAAgIgHgIQgHgHgKAAQgMABgHAIgAGnA7IAAhlQgFAFgHADQgHAEgIADIAAgPQAJgBAKgHQAJgEAHgHIAGAAIAAB4gAEPA7IgSg7IgBgIIgVBDIgOAAIgZhTIAOAAIASA9IABAIIAAAAIACgIIATg9IANAAIARA+IACAHIAAAAQAAgEACgDIARg+IANAAIgZBTgAgTA7IAAgxQAAgZgTAAQgKAAgHAIQgHAHAAAKIAAAxIgNAAIAAhTIANAAIAAAOQAKgQASAAQAOAAAIAJQAHAJAAAPIAAA0gAhtA7IAAhTIANAAIAABTgAiqA7IgZhVIgBgMIgBAAIgCAMIgYBVIgRAAIgih1IAPAAIAZBZIACAMIABAAQAAgEACgIIAahZIAOAAIAZBaIACALIAAAAIACgLIAZhaIAPAAIgiB1gAm7gBIAAhRIBtgQIAABhgAoUgBIAAhFIBUgMIAABRgAhtgtQgCgDAAgEQAAgEACgCQADgCADgBQAEABADACQACACAAAEQAAAFgCACQgDACgEAAQgDAAgDgCg");
	this.shape.setTransform(374.1,-39);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(320.8,-48.9,106.6,19.8);


(lib.g_logo_intel_blue = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#053F69").s().p("AorHZQjNhVgpitQgeh/AvhzQArhsBqhdIAAAsQg8BCgfBXQgiBeARBYQAgCuDZBCQCzA2EUgZQCTgOChgwQCigxBrhAIAAB8QhxA+ihAsQiSAoiKANQhWAJhPAAQjYAAiahAgACECVQgxgtAAhZQAAhNAtgvQAqgsBEAAQBCAAAmAwQAlAtAABHIAAAfIjUAAQAAAhATAUQAUAVAjAAQAaAAASgIQAQgHARgRIAzAyQgbAagbAMQggAOgrAAQhDAAgpglgADFhKQgPAJgHAQQgIAQAAAUICAAAQgBgfgNgSQgQgWgeAAQgVAAgRAKgAotCaQgSgWAAgkIAAj0IBUAAIAAFMQgsgEgWgagAI5BcQBXgzArhQQAshTgQhUQgVh8h8hHQhyhCi2gLQivgKjDArQjJAsitBZIAAgfQCshoDUgyQDLgxC/ANQDDANB/BLQCJBQAcCGQAcCMhQB5QhHBthzAqgAjlC1IAAjlQAAgggjAAIhFAAIAAEFIhTAAIAAlJICsAAQAzAAAaAgQAWAbAAAoIAADmgAANC0QguAAgbgdQgXgaAAgnIAAlEIBTAAIAABaIA+AAIAABEIg+AAIAAChQAAAeAcAAIAiAAIAABFgAGsBZIAAl2IBUAAIAAHOQhUgIAAhQgAo/jBIAAhQIBUAAIAABQgAJDjkQgKgJAAgOQAAgOAKgKQAKgKAOAAQAOAAAJAKQAKAKAAAOQAAAOgKAJQgJAKgOAAQgOAAgKgKgAJHkPQgIAIAAAMQAAALAIAJQAIAIAMAAQALAAAJgIQAIgJAAgLQAAgMgIgIQgJgIgLAAQgMAAgIAIgAJjjnIgBgBIgIgOIgCgBIgDAAIAAAOQAAABgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAIgGAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAAAgBIAAgkQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABAAIAKgBQARAAAAANIAAABQAAAIgIADIAJAPIAAABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAAAAAgAJUj+IAGAAQAIAAAAgFIAAgBQAAgFgIAAIgGAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81.4,-53.7,162.9,107.4);


(lib.g_logo_intel = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiFByQgxgVgKgqQgOg5A2gwIAAALQgOAQgIAVQgIAVAEAVQAIAqA0AQQArANBDgGQAigEAmgLQAngMAagPIAAAdQgbAPgnALQgjAKggADQgVACgUAAQgzAAglgPgAAfAjQgLgKAAgWQAAgRAKgLQAKgLARAAQAPAAAKAMQAJALAAAPIAAAIIgzAAQAAAHAEAFQAFAFAIAAQALAAAIgHIAMAMQgMAMgTAAQgQAAgKgJgAApgLIgBAJIAfAAQgBgRgOAAQgKAAgFAIgAiKAXIAAg5IAVAAIAABOQgVgCAAgTgACJAWQAVgNAKgRQAKgUgDgVQgLg7hggGQhZgFhYAtIAAgIQBXg0BjAHQBnAHAOBCQAHAhgUAcQgRAagbAKgAACArQgJAAgGgHQgGgGAAgKIAAhMIATAAIAAAWIAOAAIAAAQIgOAAIAAAlQAAAHAGAAIAIAAIAAARgAg2ArIAAg2QAAgHgJAAIgQAAIAAA9IgUAAIAAhNIApAAQAMAAAHAHQAFAHAAAJIAAA2gABmAVIAAhZIAVAAIAABuQgVgCAAgTgAiKguIAAgTIAVAAIAAATgACJg7QAAgEACgCQACgDAEAAQADAAACADQADACAAAEQAAAIgIAAQgIAAAAgIgACKg7QAAAGAHAAQAGAAAAgGQAAgHgGAAQgHAAAAAHgACSg3IgCgDIgBAAIAAADIgCAAIAAgJIABgBIACAAQAEAAAAADIAAABQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAIADAEIAAAAgACPg8IABAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgBQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIgBAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.6,-12.9,39.3,25.9);


(lib.g_legal = function() {
	this.initialize();

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAAQAAgCACAAQADAAAAACQAAADgDABQgCgBAAgDg");
	this.shape.setTransform(6.3,-177.5,0.929,0.929);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAAQAAgcAOAAQAPAAAAAcQAAAdgPAAQgOAAAAgdgAgIAAQAAAYAIAAQAJAAAAgYQAAgXgJAAQgIAAAAAXg");
	this.shape_1.setTransform(3.7,-179.8,0.929,0.929);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNASIAFgCQADAHAFAAQAJAAAAgNQAAgMgJAAQgFAAgEACIABgbIAUAAIAAAEIgQAAIAAASIAEgBQAOAAAAAPQAAAJgEAFQgEAFgGAAQgJAAgEgKg");
	this.shape_2.setTransform(0.2,-179.7,0.929,0.929);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAiIAAgGQgIgBgFgFIADgEQAEAFAGAAIAAgWQgMgCAAgLQAAgOAMgBIAAgGIABAAIAAAGQAHAAAFAFIgDAEQgDgEgGAAIAAAVQANAEAAAJQAAAPgNABIAAAGgAABAXQAHAAAAgKQAAgHgHgEgAgHgMQAAAGAHAEIAAgUQgHABAAAJg");
	this.shape_3.setTransform(-3.3,-179.8,0.929,0.929);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAPIAEgEQACAFAEAAQAFAAAAgHQAAgFgFgDQgIgBAAgIQAAgMAJAAQAGAAAEAFIgDADQgDgDgEAAQgEgBAAAIQAAAEAFADQAIABAAAJQAAAMgKgBQgGAAgEgFg");
	this.shape_4.setTransform(-7.7,-179,0.929,0.929);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBAbIAAglIADAAIAAAlgAgCgXQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABQAAAEgDAAQgCAAAAgEg");
	this.shape_5.setTransform(-9.7,-179.7,0.929,0.929);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAPIADgEQAEAFADAAQAFAAAAgHQAAgFgFgDQgIgBAAgIQAAgFADgDQADgDADgBQAGAAAEAFIgDADQgDgDgEAAQgEgBAAAIQAAAEAFADQAIABAAAJQAAAMgKgBQgGAAgEgFg");
	this.shape_6.setTransform(-13.2,-179,0.929,0.929);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAXIAEgEQADAGAFAAQAIAAAAgPIAAgHIAAAAQgCAJgGgBQgMAAAAgSQAAgWAMAAQAGABACAHIAAAAIAAgGIAFAAIAAAlQAAAUgNgBQgHAAgFgGgAgHgHQAAAOAHAAQAIAAAAgOQAAgRgIAAQgHAAAAARg");
	this.shape_7.setTransform(-16.3,-178.2,0.929,0.929);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAHAUIAAgXQAAgMgGAAQgHAAAAAOIAAAVIgFAAIAAgmIAFAAIAAAIQADgJAFAAQAKAAAAAQIAAAXg");
	this.shape_8.setTransform(-19.6,-179.1,0.929,0.929);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgBAbIAAglIADAAIAAAlgAgCgXQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABQAAAEgDAAQgCAAAAgEg");
	this.shape_9.setTransform(-22.2,-179.7,0.929,0.929);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBATIgLglIAFAAIAHAgIAIggIAFAAIgKAlg");
	this.shape_10.setTransform(-24.4,-179,0.929,0.929);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLAJQAAgMAOAAIADAAIAAgCQABgKgHAAQgEAAgCAEIgDgDQAEgGAFAAQALAAAAAQIABAXIgFAAIAAgHIgBAAQgBAIgGAAQgKAAAAgLgAgFAJQAAAHAFAAQAGAAAAgOIAAgCIgDAAQgIAAAAAJg");
	this.shape_11.setTransform(-27.4,-179,0.929,0.929);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAPIADgEQAEAFADAAQAFAAAAgHQAAgFgFgDQgIgBAAgIQAAgFADgDQADgDADgBQAGAAAEAFIgDADQgDgDgEAAQgEgBAAAIQAAAEAFADQAIABAAAJQAAAMgKgBQgGAAgEgFg");
	this.shape_12.setTransform(-30.1,-179,0.929,0.929);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQAUIAAgXQAAgMgFAAQgJAAAAAOIAAAVIgDAAIAAgXQAAgMgGAAQgIAAAAAOIAAAVIgGAAIAAgmIAFAAIABAIQABgJAJAAQAFAAACAJQADgJAHAAQAKAAAAAQIAAAXg");
	this.shape_13.setTransform(-35.4,-179.1,0.929,0.929);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLAFIAAgYIAFAAIAAAYQAAAKAGAAQAHAAAAgNIAAgVIAFAAIAAAmIgFAAIAAgIQgDAJgFAAQgKAAAAgPg");
	this.shape_14.setTransform(-39.8,-178.9,0.929,0.929);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AARAUIAAgXQAAgMgHAAQgIAAAAAOIAAAVIgDAAIAAgXQAAgMgGAAQgIAAAAAOIAAAVIgGAAIAAgmIAFAAIAAAIIABAAQACgJAIAAQAFAAABAJIABAAQACgJAIAAQAKAAAAAQIAAAXg");
	this.shape_15.setTransform(-44.2,-179.1,0.929,0.929);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgBAbIAAglIADAAIAAAlgAgCgXQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABQAAAEgDAAQgCAAAAgEg");
	this.shape_16.setTransform(-47.6,-179.7,0.929,0.929);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAHAUIAAgXQAAgMgGAAQgCABgCAEQgDADAAAGIAAAVIgFAAIAAgmIAFAAIAAAIQADgJAFAAQAKAAAAAQIAAAXg");
	this.shape_17.setTransform(-50.2,-179.1,0.929,0.929);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBAbIAAglIADAAIAAAlgAgCgXQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABQAAAEgDAAQgCAAAAgEg");
	this.shape_18.setTransform(-52.8,-179.7,0.929,0.929);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAQAcIAAgvIAAAAIgOAvIgDAAIgOgvIAAAvIgGAAIAAg3IAJAAIAMAuIAAAAIANguIAJAAIAAA3g");
	this.shape_19.setTransform(-56.3,-179.8,0.929,0.929);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgCAAQAAgCACAAQADAAAAACQAAADgDABQgCgBAAgDg");
	this.shape_20.setTransform(-60.9,-177.5,0.929,0.929);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVAvQgIgKAAgQQAAgPAIgPIAVgvIAMAAIgWAwIABABQAEgHAHABQALgBAIAJQAJAIAAARQAAARgJAKQgHAKgOAAQgMAAgJgKgAgNABQgFAIAAAMQAAAMAFAHQAGAHAHABQAJgBAEgHQAGgIgBgMQABgZgTAAQgHAAgGAGg");
	this.shape_21.setTransform(-63.8,-179.7,0.469,0.469);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAHA4IAAhiIgSAQIgGgJIAZgUIAKAAIAABvg");
	this.shape_22.setTransform(-67.7,-179.8,0.469,0.469);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQA8IAah5IAIACIgaB5g");
	this.shape_23.setTransform(-70,-179.8,0.469,0.469);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgbAlIAKgEQAFAOAMAAQAHAAAFgHQAFgIAAgMQAAgZgSAAQgLAAgIAFIABg4IArAAIAAAKIghAAIgBAjQAGgDAEAAQAOAAAHAKQAHAIAAAQQAAARgJALQgHAJgMAAQgVAAgGgUg");
	this.shape_24.setTransform(-72.8,-179.7,0.469,0.469);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRA8IAah5IAIACIgaB5g");
	this.shape_25.setTransform(-75.5,-179.8,0.469,0.469);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgcAkIAKgDQAEAPAOABQAIAAAGgJQAEgGABgJQAAgXgVAAIgDAAIAAgHIADAAQAHgBAGgGQAEgFAAgLQAAgHgDgFQgFgHgHAAQgKAAgEALIgKgDQAHgSARAAQAMAAAHAJQAIAHAAAMQAAALgFAHQgFAHgIACIAAABQAJABAFAGQAGAIAAALQAAAOgIAJQgIAKgNAAQgVAAgHgWg");
	this.shape_26.setTransform(-78.3,-179.8,0.469,0.469);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgKAEIAAgHIAVAAIAAAHg");
	this.shape_27.setTransform(-82.2,-179.1,0.469,0.469);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVAvQgIgKAAgQQAAgPAIgPIAWgvIALAAIgWAwIAAABQAFgHAIABQALgBAHAJQAJAIAAARQAAARgIAKQgJAKgNAAQgNAAgIgKgAgMABQgGAIAAAMQAAAMAGAHQAEAHAIABQAIgBAFgHQAFgIABgMQgBgZgSAAQgHAAgFAGg");
	this.shape_28.setTransform(-86.1,-179.7,0.469,0.469);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAHA4IAAhiIgSAQIgGgJIAZgUIAKAAIAABvg");
	this.shape_29.setTransform(-90,-179.8,0.469,0.469);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRA8IAah5IAIACIgaB5g");
	this.shape_30.setTransform(-92.4,-179.8,0.469,0.469);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAxQgIgJAAgPQAAgYASgDIAAgBQgPgGAAgTQAAgNAGgHQAIgJALAAQAMAAAIAJQAHAHAAANQAAAUgQAFIAAABQASAEAAAXQAAAPgIAJQgIAJgNAAQgMAAgIgJgAgMAHQgFAHAAAKQAAALAFAHQAFAHAHAAQAIAAAFgHQAFgHAAgLQAAgKgFgHQgGgGgHAAQgHAAgFAGgAgKgqQgFAGAAAIQAAAJAFAHQAEAFAGABQAHgBAEgFQAFgHAAgJQAAgIgFgGQgEgHgHABQgGgBgEAHg");
	this.shape_31.setTransform(-95.1,-179.8,0.469,0.469);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgaA5IAAgKIAdgsQAMgRAAgMQABgUgQAAQgMAAgEARIgKgBQAFgaAVAAQANAAAIAJQAGAIAAAMQAAAKgEAKIgNARIgXAlIAmAAIAAAKg");
	this.shape_32.setTransform(-98.7,-179.8,0.469,0.469);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRA8IAbh5IAIACIgbB5g");
	this.shape_33.setTransform(-101.3,-179.8,0.469,0.469);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgaA5IAAgKIAdgsQANgQAAgNQAAgUgQAAQgNAAgDARIgKgBQAFgaAVAAQANAAAHAJQAHAIAAAMQAAAKgEAKIgNARIgYAlIAoAAIAAAKg");
	this.shape_34.setTransform(-104.1,-179.8,0.469,0.469);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgTAxQgHgMAAgSQAAgTAHgKQAGgLAMAAQAOAAADAQIAAAAIAAg3IALAAIAAB2IgKAAIAAgOIgBAAQgEARgNAAQgLAAgHgMgAgPATQAAAhAPgBQAIABAFgKQAEgJAAgOQAAgOgFgIQgEgJgIAAQgPAAAAAfg");
	this.shape_35.setTransform(-109,-179.9,0.469,0.469);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDA3IAAhNIAIAAIAABNgAgGgvQABgHAFAAQAHAAAAAHQAAAJgHgBQgFABgBgJg");
	this.shape_36.setTransform(-111.4,-179.7,0.469,0.469);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEA8IAAh3IAJAAIAAB3g");
	this.shape_37.setTransform(-113.1,-180,0.469,0.469);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgQAkQgHgHAAgLQAAgZAeAAIAGAAIAAgEQAAgUgNAAQgIAAgGAIIgFgGQAHgLAMAAQAXAAAAAfIABAwIgJAAIgBgPIAAAAQgEARgOAAQgHAAgFgFgAgNARQAAAQANAAQANAAAAgdIAAgEIgGAAQgTAAgBARg");
	this.shape_38.setTransform(-115.5,-179,0.469,0.469);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFAnIgVhNIALAAIAPBCIAAAAIAQhCIALAAIgVBNg");
	this.shape_39.setTransform(-118.3,-179,0.469,0.469);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgNAoIgBhNIAKAAIABARQADgTANAAIACAAIgBALIgCgBQgIAAgEAKQgDAJAAAKIAAAog");
	this.shape_40.setTransform(-121.9,-179,0.469,0.469);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgSAfQgHgMAAgTQAAgRAIgMQAHgLALAAQAZAAAAAmIAAAEIgoAAQAAAeAPAAQAKAAAEgMIAIAEQgFARgRABQgLAAgIgLgAgLgWQgDAIAAAJIAdAAQAAgagPAAQgGAAgFAJg");
	this.shape_41.setTransform(-124.7,-179,0.469,0.469);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgHA9IAAhEIgKAAIAAgJIAKAAIAAgRQAAgbATAAIAGABIgBAIIgEAAQgLAAAAASIAAARIANAAIAAAJIgNAAIAABEg");
	this.shape_42.setTransform(-127.1,-180,0.469,0.469);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgHA9IAAhEIgKAAIAAgJIAKAAIAAgRQAAgbATAAIAGABIgBAIIgEAAQgLAAAAASIAAARIANAAIAAAJIgNAAIAABEg");
	this.shape_43.setTransform(-128.8,-180,0.469,0.469);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgaAqQgKgQAAgaQAAgZAKgQQAKgQAQAAQARAAAKAQQAKAQAAAZQAAAagKAQQgKAQgRABQgQgBgKgQgAgSghQgGANAAAUQAAAVAGANQAHAPALAAQAMAAAHgPQAGgNAAgVQAAgUgGgNQgHgOgMgBQgLABgHAOg");
	this.shape_44.setTransform(-131.9,-179.8,0.469,0.469);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgYA5IABgJIAGABQAIgBADgLIADgOIgXhQIAMAAIAPBAIAPhAIALAAIgZBeQgEAVgOAAg");
	this.shape_45.setTransform(809.8,-178.8,0.568,0.568);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgYAKIAAgxIAKAAIAAAxQAAAVANAAQAGAAAFgIQAEgIAAgLIAAgrIALAAIAABNIgKAAIgBgQIAAAAQgFASgNAAQgUAAAAgeg");
	this.shape_46.setTransform(806,-179.8,0.568,0.568);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgcA4IAAhvIAaAAQAKAAAHAGQAKAHAAAOQAAAVgQAFIAAAAQAHACAGAEQAHAJgBAMQAAAQgKAIQgHAHgLAAgAgRAvIAQAAQATAAgBgXQABgLgIgHQgFgEgGAAIgQAAgAgRgFIAOAAQAGAAAFgFQAHgGAAgKQAAgTgSgBIgOAAg");
	this.shape_47.setTransform(801.9,-180.8,0.568,0.568);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgGAeIAAgxIgKAAIAAgJIAKAAIAAgWIAIAAIAAAWIAOAAIAAAJIgOAAIAAAvQAAAOAJAAIAFgBIABAIQgEACgFAAQgOAAAAgVg");
	this.shape_48.setTransform(796.7,-180.4,0.568,0.568);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgVAeIAHgHQAGAJAIAAQALAAAAgPQAAgGgEgEQgDgDgGgCQgPgFAAgPQAAgKAGgHQAGgFAIAAQAMAAAHAJIgGAGQgEgHgJAAQgEAAgDAEQgDAEAAAFQAAAHADACQADADAFADQARAEAAARQAAALgGAHQgGAGgJABQgNAAgIgMg");
	this.shape_49.setTransform(794,-179.8,0.568,0.568);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgSAfQgHgMAAgTQAAgRAHgMQAIgLALAAQAZAAAAAmIAAAEIgoAAQAAAeAPAAQAKAAAFgMIAIAEQgHARgQABQgLAAgIgLgAgKgWQgEAIAAAJIAdAAQAAgagPAAQgGAAgEAJg");
	this.shape_50.setTransform(790.6,-179.8,0.568,0.568);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgcA4IAAhvIAaAAQAJAAAIAGQAKAHAAAOQAAAVgQAFIAAAAQAHACAGAEQAHAJAAAMQAAAQgKAIQgIAHgLAAgAgRAvIAQAAQATAAAAgXQAAgLgHgHQgGgEgGAAIgQAAgAgRgFIAOAAQAGAAAFgFQAGgGAAgKQAAgTgRgBIgOAAg");
	this.shape_51.setTransform(786.6,-180.8,0.568,0.568);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgVAvQgIgKAAgQQAAgPAIgPIAVgvIANAAIgXAwIAAABQAFgHAIABQAKgBAIAJQAJAIAAARQAAARgIAKQgJAKgNAAQgNAAgIgKgAgMABQgGAIAAAMQAAAMAGAHQAFAHAHABQAJgBAFgHQAFgIAAgMQAAgMgFgHQgFgGgJAAQgHAAgFAGg");
	this.shape_52.setTransform(780.4,-180.8,0.568,0.568);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAHA4IAAhiIgSAQIgGgJIAZgUIAKAAIAABvg");
	this.shape_53.setTransform(775.8,-180.8,0.568,0.568);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgdAAQAAg5AdAAQAeAAAAA5QAAA6geAAQgdAAAAg6gAgRAAQgBAwASAAQASAAABgwQgBgvgSAAQgSAAABAvg");
	this.shape_54.setTransform(771.9,-180.8,0.568,0.568);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgaA5IAAgKIAdgsQANgRAAgMQAAgIgFgGQgDgGgIAAQgNAAgDARIgKgBQAEgaAWAAQANAAAHAJQAHAIAAAMQAAAKgEAKIgNARIgYAlIAoAAIAAAKg");
	this.shape_55.setTransform(767.5,-180.9,0.568,0.568);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgfArQgNgQAAgbQAAgaANgQQAMgQATAAQAUAAAMAQQANAQAAAaQAAAbgNAQQgMAQgUAAQgTAAgMgQgAgagkQgKAPAAAVQAAAXAKAOQALAPAPAAQAQAAAKgPQAKgOAAgXQAAgWgKgOQgKgPgQAAQgPAAgLAPgAgPAZQgGgKAAgPQAAgPAGgKQAHgKAJAAQALAAAGAJIgHAHQgDgGgHAAQgLAAAAAZQAAAZALAAQAHAAADgGIAHAHQgGAJgLAAQgJAAgHgKg");
	this.shape_56.setTransform(762.6,-180.8,0.568,0.568);

	this.addChild(this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-133.6,-184.2,945.1,8.8);


(lib.g_hp_screen_02 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.g_hp_screen_02_64();
	this.instance.setTransform(-100,-77);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-100,-77,200,154);


(lib.g_hp_screen_01 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.g_hp_screen_01_64();
	this.instance.setTransform(-112.5,-78.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.5,-78.5,225,157);


(lib.g_hp_base_02 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.g_hp_base_02_64();
	this.instance.setTransform(-93.5,-60.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93.5,-60.5,187,121);


(lib.g_hp_base_01 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.g_hp_base_01_64();
	this.instance.setTransform(-126.5,-35);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.5,-35,253,70);


(lib.g_fade = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A385D").s().p("AuCnrIY6iGIDLOnI4wE8g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.9,-62.6,179.9,125.3);


(lib.g_2in1_end_stylus = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Week2as();
	this.instance.setTransform(-104.1,-58.7,0.511,0.511);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-104.1,-58.7,140.5,81.7);


(lib.g_2in1_end = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Week2bs();
	this.instance.setTransform(35.9,-54.6,0.488,0.488);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(35.9,-54.6,134.1,89.8);


(lib.frame_07_txt_02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAoIAOgKQAFAIAKAGQAJAFAJAAQAcAAAAgWQAAgJgJgFQgIgFgRgEQgQgEgHgDQgMgJAAgPQAAgSAOgKQAMgIAQAAQANAAAMAGQAMAGAGAKIgOAKQgIgRgWAAQgJAAgHAEQgIAFAAAKQAAAJAHAEQAHAFANADQAWAFALAGQAKAJAAAOQAAAUgPAKQgMAIgTAAQgeAAgRgYg");
	this.shape.setTransform(130.6,3.5,0.798,0.798);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghA/IAAh6IARAAIABAWIAAAAQAFgLAKgHQAJgHANAAIANACIgDAQQgGgBgHAAQgPAAgIALQgLAMABAWIAAA/g");
	this.shape_1.setTransform(123.1,3.4,0.798,0.798);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpAuQgSgSAAgcQAAgaASgTQASgSAYAAQAcAAAQASQAPAQAAAbIAAAGIhlAAQABATANANQANANAQAAQANAAAMgGQAJgGAGgJIANAKQgUAaghAAQgZAAgSgSgAgbgkQgMAMgBAQIBSAAQgBgSgLgLQgKgLgTAAQgQAAgMAMg");
	this.shape_2.setTransform(112.4,3.5,0.798,0.798);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBBJQgLgJAAgSIAAhLIgaAAIAAgPIAaAAIAAgiIAQAAIAAAiIAjAAIAAAPIgjAAIAABGQAAAXASAAQAIAAAIgEIABAQQgMADgKAAQgMAAgGgGg");
	this.shape_3.setTransform(103,2.2,0.798,0.798);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpAxQgLgNAAgYIAAhKIASAAIAABDQAAArAhAAQANAAALgMQALgNAAgXIAAg+IASAAIABB6IgRAAIgBgVIAAAAQgFAKgMAHQgMAHgLAAQgXAAgNgOg");
	this.shape_4.setTransform(93.7,3.6,0.798,0.798);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag/BeIAAi4IASAAIAAAVIABAAQAHgLANgHQAMgGAMAAQAdAAARATQASASAAAcQAAAbgSARQgRASgdAAQgMAAgMgGQgNgGgHgMIgBAAIAABUgAgihAQgNAOAAAWQAAAVANAMQAOAOAUAAQAUAAANgOQAMgMAAgVQAAgWgMgOQgNgOgUAAQgUAAgOAOg");
	this.shape_5.setTransform(81.3,5.9,0.798,0.798);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABLA/IAAhDQAAgrggAAQgSAAgJAPQgIAMAAATIAABAIgPAAIAAhGQAAgUgHgJQgGgLgRAAQgOAAgKAMQgMANAAAWIAAA/IgSAAIgBh6IARAAIABAWIABAAQAFgLALgHQALgHANAAQAcAAAIAaQANgaAeAAQAXAAANAOQALAOAAAXIAABKg");
	this.shape_6.setTransform(65,3.4,0.798,0.798);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguAuQgSgSAAgcQAAgaASgTQATgSAbAAQAcAAATASQASATAAAaQAAAcgSASQgTASgcAAQgbAAgTgSgAghgiQgMAOAAAUQAAAVAMAOQANAOAUAAQAVAAANgOQAMgOAAgVQAAgUgMgOQgNgOgVAAQgUAAgNAOg");
	this.shape_7.setTransform(49.3,3.5,0.798,0.798);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglAuQgSgSAAgcQAAgbASgSQATgSAbAAQAeAAAQAVIgOAKQgEgHgJgFQgJgEgKAAQgTAAgNAOQgNAOAAAUQAAAVANAOQANAOATAAQAVAAAMgQIAOAKQgSAVgdAAQgbAAgTgSg");
	this.shape_8.setTransform(38,3.5,0.798,0.798);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag4BdIAAi5IA0AAQAcAAAQANQARANAAAYQAAAYgRAOQgRAKgbAAIghAAIAABXgAglgIIAgAAQArAAAAgiQAAghgrAAIggAAg");
	this.shape_9.setTransform(21.5,1,0.798,0.798);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAyBdIAAhZIhjAAIAABZIgTAAIAAi5IATAAIAABRIBjAAIAAhRIATAAIAAC5g");
	this.shape_10.setTransform(7.4,1,0.798,0.798);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgBBJQgLgJAAgSIAAhLIgaAAIAAgPIAaAAIAAgiIAQAAIAAAiIAjAAIAAAPIgjAAIAABGQAAANAFAFQAEAFAJAAQAIAAAIgEIABAQQgLADgKAAQgNAAgGgGg");
	this.shape_11.setTransform(-8.9,2.2,0.798,0.798);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglAuQgSgSAAgcQAAgbASgSQASgSAcAAQAeAAAQAVIgOAKQgLgQgVAAQgTAAgNAOQgNAOAAAUQAAAVAMAOQAOAOATAAQAVAAANgQIANAKQgSAVgdAAQgcAAgSgSg");
	this.shape_12.setTransform(-16.9,3.5,0.798,0.798);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgpAuQgSgSAAgcQAAgaASgTQARgSAZAAQAcAAAQASQAPAQAAAbIAAAGIhlAAQACATAMANQANANAQAAQANAAAMgGQAJgGAGgJIANAKQgUAaghAAQgZAAgSgSgAgbgkQgMAMgBAQIBSAAQgBgSgKgLQgMgLgSAAQgQAAgMAMg");
	this.shape_13.setTransform(-28.6,3.5,0.798,0.798);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHBjIAAjFIAQAAIAADFg");
	this.shape_14.setTransform(-37.2,0.5,0.798,0.798);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgpAuQgSgSAAgcQAAgaASgTQASgSAYAAQAcAAAQASQAPAQAAAbIAAAGIhkAAQAAATANANQANANARAAQAaAAAOgVIAMAKQgTAaghAAQgaAAgSgSgAgagkQgNAMgBAQIBSAAQgBgSgKgLQgLgLgTAAQgPAAgMAMg");
	this.shape_15.setTransform(-45.9,3.5,0.798,0.798);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguAoIAOgKQAFAIAJAGQAKAFAJAAQAMAAAIgFQAJgGAAgLQAAgJgKgFQgIgFgRgEQgQgEgHgDQgMgJAAgPQAAgSANgKQAMgIARAAQANAAAMAGQAMAGAGAKIgOAKQgIgRgWAAQgJAAgHAEQgIAFAAAKQAAAJAHAEQAHAFANADQArAIAAAaQAAAUgPAKQgMAIgTAAQgfAAgQgYg");
	this.shape_16.setTransform(-56.6,3.5,0.798,0.798);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAjA/IAAhDQAAgrghAAQgNAAgLAMQgLANAAAWIAAA/IgSAAIgBh6IARAAIABAWIAAAAQAFgLANgHQALgHALAAQAXAAANAOQALAOAAAXIAABKg");
	this.shape_17.setTransform(-72.5,3.4,0.798,0.798);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhEBGQgbgcAAgqQAAgpAbgcQAcgbAoAAQAqAAAbAbQAcAcgBApQABAqgcAcQgbAbgqAAQgpAAgbgbgAg3g3QgVAXABAgQgBAhAVAXQAVAZAiAAQAjAAAVgZQAVgXAAghQAAgggVgXQgVgZgjAAQgiAAgVAZg");
	this.shape_18.setTransform(-87.6,1,0.798,0.798);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.3,-7.4,229.7,20.9);


(lib.frame_07_txt_01 = function() {
	this.initialize();

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CD7E8").s().p("AhVBqQgagoAAhCQAAhCAagnQAdgtA4AAQA5AAAeAtQAZAnAABCQAABCgZAoQgeAtg5AAQg4AAgdgtgAghg7QgIAXAAAkQAAAkAIAYQALAgAWAAQAYAAALggQAHgYAAgkQAAgkgHgXQgLghgYAAQgWAAgLAhg");
	this.shape.setTransform(154,-2.5,0.83,0.83);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CD7E8").s().p("AhWBqQgZgoAAhCQAAhCAZgnQAegtA4AAQA5AAAeAtQAZAnAABCQAABCgZAoQgeAtg5AAQg4AAgegtgAghg7QgJAXAAAkQAAAkAJAYQALAgAWAAQAYAAALggQAHgYAAgkQAAgkgHgXQgLghgYAAQgWAAgLAhg");
	this.shape_1.setTransform(132.2,-2.5,0.83,0.83);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8CD7E8").s().p("AhkCTIAAg5IBvhjQAXgXAAgVQAAgQgKgJQgJgKgPAAQgQAAgMAMQgKAMgCATIhBgIQAEgrAggaQAegYApAAQArAAAdAVQAgAZAAAqQAAAcgPAXQgKAOgZAWIhBA7IBzAAIAAA7g");
	this.shape_2.setTransform(110.2,-2.8,0.83,0.83);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8CD7E8").s().p("AgFBnIAAgSQgkgBgXgUIAZgbQAGAHAKAFQAKAFAIgBIAAgpQgZgGgLgIQgQgMAAgWQAAgVARgPQAPgMAVgBIAAgRIAPAAIAAARQAfABAWARIgXAaQgLgNgTgBIAAAmQAZAIALAIQASALAAAXQAAAYgRAPQgPAMgXABIAAASgAAKA2QAIgBAFgEQAEgFAAgJQAAgNgRgGgAgVgmQAAANARAEIAAgiQgRACAAAPg");
	this.shape_3.setTransform(93,-7.6,0.83,0.83);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8CD7E8").s().p("AhvBtQgsgrAAhCQAAhEAsgpQArgpBEAAQBEAAArApQAtApAABEQAABCgtArQgrAqhEAAQhDAAgsgqgAg6g+QgXAZAAAlQAAAmAXAZQAXAZAjAAQAkAAAWgZQAYgZAAgmQAAglgYgZQgWgagkABQgjgBgXAag");
	this.shape_4.setTransform(64.1,-2.5,0.83,0.83);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8CD7E8").s().p("AghCPIAAjiIhRAAIAAg7IDmAAIAAA7IhRAAIAADig");
	this.shape_5.setTransform(40.9,-2.4,0.83,0.83);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8CD7E8").s().p("AhrCPIAAkdIBpAAQAyAAAcATQAgAXAAAuQAAAvgiAVQgeAVgwAAIgiAAIAABsgAgmgTIAeAAQAvAAAAgiQAAgTgPgIQgLgGgUAAIgfAAg");
	this.shape_6.setTransform(13.4,-2.4,0.83,0.83);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8CD7E8").s().p("AhZBzQghggAAg0IAAixIBFAAIAACrQAAAaANAQQAOARAaABQAbgBAOgRQAMgQAAgaIAAirIBGAAIAACxQAAA0giAgQgiAgg3AAQg3AAgiggg");
	this.shape_7.setTransform(-10.5,-2.1,0.83,0.83);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8CD7E8").s().p("AhjCPIAAkdIDAAAIAAA7Ih9AAIAAA2IB1AAIAAA1Ih1AAIAAA8ICEAAIAAA7g");
	this.shape_8.setTransform(-41.1,-2.4,0.83,0.83);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8CD7E8").s().p("AgiCPIhtkdIBOAAIBBDKIABAAIBDjKIBMAAIhvEdg");
	this.shape_9.setTransform(-63.4,-2.4,0.83,0.83);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8CD7E8").s().p("ABMCPIgWg4IhuAAIgVA4IhLAAIB4kdIBCAAIB3EdgAgkAfIBHAAIgjhhg");
	this.shape_10.setTransform(-86.2,-2.4,0.83,0.83);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8CD7E8").s().p("Ag8CMQgegLgSgUIAtguQALANARAJQASAIAQAAQAmAAAAgfQAAgPgQgJQgJgGghgLQghgLgRgNQgXgVAAgkQAAgsAjgZQAfgVArAAQAZAAAZAJQAaAKASARIgsAuQgJgLgOgHQgOgGgOAAQgOAAgLAGQgOAHABAPQgBAOAMAHQAJAGAWAHQAqAOASANQAeAUAAAmQAAAugjAbQgdAXgtAAQgfAAgcgLg");
	this.shape_11.setTransform(-108.8,-2.4,0.83,0.83);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.9,-16.2,281.4,26.4);


(lib.frame_06_txt_02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#93D7E9").s().p("AKBBDQgSgSAAgdIAAhkIAnAAIAABgQAAAPAHAJQAIAKAPAAQAQAAAIgKQAHgJAAgPIAAhgIAnAAIAABkQAAAdgTASQgTASggAAQggAAgTgSgACXA+IAagaQAFAHAKAFQAKAFAKAAQAWAAAAgSQAAgIgJgGQgFgDgUgGQgTgGgJgHQgNgMAAgUQAAgZAUgOQARgMAaAAQAfAAAWAUIgZAbQgLgOgSAAQgXAAAAAQQAAAHAHAFQAFADANAEQAYAIAKAHQARALAAAVQAAAagTAPQgRANgaAAQgnAAgWgXgAlMA9QgZgYAAglQAAgjAagYQAagZAkAAQAjAAAXATQAZAUAAAkQAAAYgNAPQgNAOgVAAQgJAAgGgEQgGgEgBgGIgBAAQgIAOgTAAQgPAAgJgLQgJgKAAgSQAAgSAMgPQANgQATAAQASAAAEAMIACgIIAYAAIgHAkIgDARQAAAJAHAAQAHAAAFgIQAGgJAAgNQAAgbgRgOQgQgOgbAAQgcAAgRATQgSASAAAaQAAAdATASQASARAdAAQAfAAAWgUIAOAQQgZAZgsAAQgoAAgYgYgAkcgMQgFAIAAAJQAAARANAAQAJAAAGgKQAEgIAAgIQAAgSgNAAQgIAAgGAKgAvfA+QgZgYAAgmQAAgmAZgXQAZgXAnAAQAnAAAYAXQAZAXAAAmQAAAmgZAYQgZAXgmAAQgnAAgZgXgAvBgjQgNAOAAAVQAAAVANAOQANAPAVAAQAUAAANgPQANgOAAgVQAAgVgNgOQgNgOgUAAQgVAAgNAOgAM/BRIAAhFIg9hcIAwAAIAiA9IAjg9IAuAAIg+BcIAABFgAHeBRIAAihIBAAAQAXAAAPAJQASALAAAWQAAAbgbAIIAAABQAPACAJAIQAJAKAAAQQAAAYgTANQgQAKgbAAgAIDAxIAXAAQAbAAAAgTQAAgSgcAAIgWAAgAIDgPIAWAAQAXAAAAgSQAAgPgZAAIgUAAgAFIBRIAAh/IguAAIAAgiICEAAIAAAiIguAAIAAB/gAAcBRIAAihIBuAAIAAAiIhIAAIAAAeIBEAAIAAAeIhEAAIAAAiIBMAAIAAAhgAh1BRIAAihIBBAAQAXAAAOAJQAQALAAAWQAAAbgZAIIAAABQAPACAJAIQAIAKAAAQQAAAYgSANQgQAKgaAAgAhPAxIAWAAQAbAAAAgTQAAgSgbAAIgWAAgAhPgPIAVAAQAXAAAAgSQAAgPgZAAIgTAAgAn7BRIAAhFIg9hcIAvAAIAjA9IAjg9IAuAAIg/BcIAABFgAqCBRIAAihIAoAAIAAB/IA/AAIAAAigArLBRIhChoIAAAAIABBoIgnAAIAAihIAtAAIBCBpIAAAAIgBhpIAnAAIAAChgAOrgEQgOgNAAgTQAAgSAOgOQANgNATAAQATAAANANQAOAOAAASQAAATgOANQgNALgTAAQgTAAgNgLgAOwg/QgLAMAAAPQAAAQALALQALAKAQAAQAQAAALgKQALgLAAgQQAAgQgLgLQgLgLgQAAQgQAAgLALgAPVgKIgMgWIgHAAIAAAWIgJAAIAAgzIASAAQATAAAAAPQAAALgMACIAOAXgAPCgnIAIAAQALAAAAgIQAAgHgKAAIgJAAg");
	this.shape.setTransform(33.2,0.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.5,-7.7,203.5,17.2);


(lib.frame_06_txt_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AINA9QgYgYAAglQAAgXALgTQAFgKAIgIQAZgYAkAAQAlAAAYAYQAIAIAFAKQALATAAAXQAAAlgYAYQgYAYglAAQgkAAgZgYgAIYgwIgEAGQgOASAAAYQAAAdASAVQAUAUAeABQAfgBASgUQATgVgBgdQABgYgOgSIgFgGQgSgWgfAAQgeAAgUAWgAEBA9IAOgKQANATAYABQAOAAALgJQAMgJgBgOQABgPgMgIQgIgGgUgFQgVgFgJgIQgOgLAAgVIAAgCQABgUAQgLQAOgLAVAAQAfAAAPAUIgNALQgLgRgXAAQgNAAgKAIQgKAHgBANIAAACQAAAOALAIQAGAFASAGQAYAHAJAFQAQALAAAWQgBAXgRAMQgOAMgWAAQghAAgSgYgABRA9IAOgKQANATAYABQAOAAALgJQAMgJAAgOQAAgPgNgIQgHgGgUgFQgVgFgJgIQgOgLAAgVIAAgCQABgUAQgLQAPgLAUAAQAfAAAPAUIgNALQgKgRgXAAQgOAAgKAIQgKAHgBANIAAACQAAAOALAIQAGAFASAGQAYAHAJAFQAPALAAAWQABAXgSAMQgOAMgWAAQghAAgSgYgAklA9QgYgYAAglQAAgXALgTQAFgKAIgIQAZgYAkAAQAlAAAXAYQAJAIAFAKQALATAAAXQAAAlgZAYQgXAYglAAQgkAAgZgYgAkZgwIgFAGQgNASAAAYQAAAdASAVQATAUAeABQAegBATgUQATgVgBgdQAAgYgNgSIgFgGQgTgWgeAAQgeAAgTAWgAM+BRIAAihIBlAAIAAAPIhUAAIAAA4IBPAAIAAAMIhPAAIAAA/IBXAAIAAAPgAMUBRIgthMIgcAAIAABMIgRAAIAAihIAxAAQAzAAAEAmIAAAGQAAARgLAMQgMAJgTABIAwBOgALLgHIAdAAQApAAAAgdIAAgGQgEgXglAAIgdAAgAGtBRIAAiSIg3AAIAAgPIB+AAIAAAPIg3AAIAACSgAAGBRIgmiKIgBAAIgpCKIgTAAIgwihIARAAIAoCKIABAAIApiKIATAAIAnCKIABAAIAniKIASAAIgwChgAnbBRIAAihIA2AAQAiAAAYAUQAKAIAGAKQALASAAAYQABAmgcAXQgYAUgiAAgAnKBCIAgAAQAiAAAVgVQASgSAAgbQAAgYgQgSIgCgCQgVgVgiAAIggAAgAoVBRIheiKIgBAAIAACKIgQAAIAAihIAUAAIBfCIIABAAIAAiIIAQAAIAAChgAq6BRIAAihIARAAIAAChgAsQBRIgoiKIgBAAIgpCKIgTAAIgwihIASAAIAnCKIABAAIApiKIATAAIApCKIABAAIAniKIASAAIgwChg");
	this.shape.setTransform(212.3,-13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADzA9IAOgLQAMAVAZAAQAOgBAKgHQAMgJAAgPQAAgPgMgJQgIgEgUgHQgUgEgKgIQgNgLAAgVQAAgWARgMQAOgKAVAAQAfAAAPATIgNAMQgMgRgWAAQgOAAgJAIQgMAIAAAOQAAAOALAIQAHAEASAHQAYAHAIAFQAQAMAAAVQAAAXgRANQgPALgVAAQgiAAgRgYgAgVA/QgMgRAAgaIAAhkIARAAIAABjQAAAVAJAPQAKAQAXAAQAXAAAMgQQAJgPAAgVIAAhjIARAAIAABkQAAAagMARQgQAWghAAQgfAAgQgWgAjNA9QgYgZAAgkQAAgkAYgYQAYgYAlAAQAkAAAYAYQAZAYAAAkQAAAkgZAZQgYAYgkAAQglAAgYgYgAjCgwQgSAUAAAcQAAAdASAUQATAWAfAAQAeAAATgWQASgUAAgdQAAgcgSgUQgTgWgeABQgfgBgTAWgAs9A9QgYgZAAgkQAAgkAYgYQAYgYAlAAQAkAAAYAYQAYAYAAAkQAAAkgYAZQgYAYgkAAQglAAgYgYgAsygwQgSAUAAAcQAAAdASAUQATAWAfAAQAeAAATgWQASgUAAgdQAAgcgSgUQgTgWgeABQgfgBgTAWgAvXA9QgYgZAAgkQAAgkAYgYQAYgYAlAAQASAAAQAHQAQAHAIALIgOALQgFgJgMgGQgMgGgPAAQgegBgTAWQgSAUAAAcQAAAdASAUQATAWAeAAQAgAAAQgYIANAIQgUAegpAAQglAAgYgYgAxpA9IAPgLQAMAVAZAAQAOgBAKgHQAMgJAAgPQAAgPgMgJQgIgEgUgHQgUgEgKgIQgOgLAAgVQAAgWARgMQAPgKAUAAQAgAAAOATIgNAMQgLgRgWAAQgOAAgJAIQgMAIAAAOQAAAOALAIQAGAEASAHQAYAHAJAFQAQAMAAAVQAAAXgRANQgPALgVAAQgiAAgSgYgAQCBRIAAihIBlAAIAAAPIhVAAIAAA4IBPAAIAAAMIhPAAIAAA/IBYAAIAAAPgAPNBRIAAhNIhZAAIAABNIgRAAIAAihIARAAIAABGIBZAAIAAhGIAQAAIAAChgAMKBRIAAiSIg3AAIAAgPIB+AAIAAAPIg2AAIAACSgAJZBRIAAiSIg3AAIAAgPIB+AAIAAAPIg3AAIAACSgAIjBRIgSgrIhUAAIgSArIgSAAIBGihIARAAIBFChgAHDAXIBIAAIgkhUgADUBRIgthNIgcAAIAABNIgQAAIAAihIAwAAQA3AAAAArQAAASgMAMQgLAIgSACIAvBOgACLgHIAdAAQAqAAAAgeQAAgdgpAAIgeAAgAkvBRIAAhGIg9hbIAVAAIAxBPIAyhPIATAAIg9BbIAABGgAoMBRIAAihIBlAAIAAAPIhVAAIAAA4IBPAAIAAAMIhPAAIAAA/IBYAAIAAAPgAo2BRIguhNIgbAAIAABNIgRAAIAAihIAwAAQA4AAAAArQAAASgMAMQgMAIgSACIAwBOgAp/gHIAdAAQApAAAAgeQAAgdgpAAIgdAAg");
	this.shape_1.setTransform(-0.2,-13.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113.2,-22,418.9,17.2);


(lib.frame_05_txt_02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtiA9QgYgZAAgkQAAgjAYgZQAZgYAkAAQAlAAAYAYQAYAZAAAjQAAAkgYAZQgYAYglAAQgkAAgZgYgAtWgwQgSAUAAAcQAAAdASAUQATAVAeAAQAfAAASgVQATgUgBgdQABgcgTgUQgSgWgfAAQgeAAgTAWgAOTBRIAAihIAQAAIAACSIBMAAIAAAPgAMUBRIAAihIBlAAIAAAPIhUAAIAAA4IBPAAIAAAMIhPAAIAAA/IBXAAIAAAPgAK7BRIAAiSIg2AAIAAgPIB9AAIAAAPIg2AAIAACSgAJeBRIhfiKIgBAAIAACKIgQAAIAAihIAVAAIBeCJIABAAIAAiJIAQAAIAAChgAG5BRIAAihIAQAAIAAChgAEoBRIAAhGIg9hbIAVAAIAxBPIAxhPIATAAIg9BbIAABGgAB8BRIAAihIAxAAQAWAAANAJQARALAAAWQAAAMgIAKQgHAKgOADIAAAAQARACAKAIQALAMgBARQAAAUgQAMQgQANgcAAgACNBDIAfAAQATAAAMgIQAOgIAAgQQAAgggqAAIgiAAgACNgJIAhAAQAOAAAJgGQAMgHAAgPQAAgdgoAAIgcAAgAheBRIAAihIA2AAQAiAAAWAVQAbAWAAAlQAAAmgbAWQgWAVgiAAgAhNBCIAgAAQAkAAARgUQATgTgBgbQABgagTgTQgSgUgjAAIggAAgAjcBRIAAihIBkAAIAAAPIhUAAIAAA4IBPAAIAAAMIhPAAIAAA/IBXAAIAAAPgAkHBRIgthMIgcAAIAABMIgQAAIAAihIAwAAQA4AAAAAsQAAARgNAMQgKAIgTACIAvBOgAlQgHIAdAAQAqAAAAgdQAAgegpAAIgeAAgAnfBRIAAihIBlAAIAAAPIhUAAIAAA4IBPAAIAAAMIhPAAIAAA/IBYAAIAAAPgAo0BRIgqiKIAAAAIgpCKIgTAAIgwihIARAAIAoCKIABAAIApiKIATAAIApCKIABAAIAniKIASAAIgwChgAvvBRIAAihIAvAAQAZAAAOALQAQALAAAWQAAAVgQALQgPAJgZAAIgdAAIAABMgAvegHIAcAAQAoAAAAgdQAAgegoAAIgcAAg");
	this.shape.setTransform(45,9.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.8,1,201.6,17.2);


(lib.frame_05_txt_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#93D7E9").s().p("ALJA+IAZgbQAGAIAKAFQAKAFAKAAQAWAAAAgSQAAgJgJgFQgFgDgUgGQgTgGgJgHQgNgMAAgUQAAgZAUgOQARgMAaAAQAfAAAWAUIgZAaQgLgOgSAAQgXAAAAARQAAAHAHAFQAEACAOAFQAYAHAKAIQARAKAAAWQAAAagTAPQgRANgaAAQgnAAgWgXgAGdA9QgZgYAAglQAAgmAZgXQAZgXAnAAQAnAAAYAXQAZAXAAAmQAAAlgZAYQgZAYgmAAQgnAAgZgYgAG7gjQgNAOAAAVQAAAVANAOQANAOAVAAQAUAAANgOQANgOAAgVQAAgVgNgOQgNgOgUAAQgVAAgNAOgAJJBRIAAihIA8AAQBAAAAAAyQAAAbgUALQgRALgcAAIgTAAIAAA+gAJxgKIAQAAQAdAAAAgUQAAgSgcAAIgRAAgAEsBRIAAh/IguAAIAAgiICEAAIAAAiIguAAIAAB/gAB9BRIAAihIA8AAQA/AAAAAyQAAAbgTALQgRALgcAAIgUAAIAAA+gACkgKIARAAQAcAAAAgUQAAgSgcAAIgRAAgABIBRIgNggIg9AAIgMAgIgrAAIBDihIAmAAIBDChgAAHARIApAAIgUg1gAihBRIAAihIAnAAIAAB/IA/AAIAAAigAk0BRIAAh2IgeAYIgUgcIA2gnIAjAAIAAChgAnSBRIhChpIAAAAIAABpIgmAAIAAihIAtAAIBBBoIABAAIgBhoIAmAAIAAChgAp9BRIAAihIAnAAIAAChgAtBBRIAAggIBAg4QANgMAAgNQAAgIgGgGQgFgFgJAAQgKAAgGAHQgGAGgBALIglgFQACgYASgOQARgOAZAAQAYAAARAMQASAOAAAYQAAAPgJANQgGAHgOANIgmAhIBDAAIAAAig");
	this.shape.setTransform(-17.6,17.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.3,8.5,167.6,17.2);


(lib.frame_04_txt_01 = function() {
	this.initialize();

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003F67").s().p("Ag7A8QgZgYAAgkQAAgjAZgZQAYgYAjAAQAkAAAYAYQAZAZgBAjQABAkgZAYQgYAZgkAAQgjAAgYgZgAgwgxQgSAVAAAcQAAAdASAUQATAVAdAAQAeAAATgVQASgUAAgdQAAgcgSgVQgTgVgeAAQgdAAgTAVg");
	this.shape.setTransform(505.8,-20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003F67").s().p("Ag1BRIAAihIAxAAQATAAANAJQASALgBAWQAAAMgIAKQgHAKgNADIAAAAQAQACAKAIQALAMAAARQAAAUgRANQgQAMgaAAgAglBDIAfAAQARAAANgIQANgIAAgQQAAgggoAAIgiAAgAglgJIAiAAQAMAAAJgGQALgHAAgPQAAgdglAAIgdAAg");
	this.shape_1.setTransform(490,-20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003F67").s().p("AA/BRIAAiLIAAAAIg7CLIgHAAIg7iLIAAAAIAACLIgRAAIAAihIAZAAIA2CFIA2iFIAaAAIAAChg");
	this.shape_2.setTransform(472.8,-20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003F67").s().p("Ag7A8QgYgXAAglQAAgjAYgZQAYgYAjAAQAkAAAYAYQAYAZAAAjQAAAkgYAYQgYAZgkAAQgjAAgYgZgAgwgxQgSAVAAAcQAAAcASAVQATAVAdAAQAeAAATgVQASgUAAgdQAAgcgSgVQgTgVgeAAQgdAAgTAVg");
	this.shape_3.setTransform(453.5,-20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003F67").s().p("AgwA8QgXgXAAglQAAgjAYgZQAYgYAiAAQASAAAQAHQAQAHAJAMIgOAJQgHgJgKgFQgNgHgPAAQgcAAgTAVQgSAVAAAcQAAAcASAVQAUAVAbAAQAgAAAQgYIAOAJQgVAegpAAQgjAAgYgZg");
	this.shape_4.setTransform(436.9,-20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003F67").s().p("AhEBRIAAihIA2AAQAgAAAYAVQAcAWgBAlQABAmgcAXQgYAUggAAgAgzBCIAgAAQAgAAAVgUQASgTAAgbQAAgagSgSQgUgVghAAIggAAg");
	this.shape_5.setTransform(415.5,-20.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003F67").s().p("AgzBRIAAihIBjAAIAAAPIhSAAIAAA4IBNAAIAAAMIhNAAIAAA/IBWAAIAAAPg");
	this.shape_6.setTransform(401,-20.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003F67").s().p("AgvA8QgYgXAAglQAAgjAYgZQAYgYAiAAQAlAAAWAVIgLAMQgSgTgdAAQgdAAgTAVQgSAVAAAcQAAAcASAVQATAVAdAAQAcAAAQgLIAAgxIgmAAIAAgNIA2AAIAABIQgbAQgiAAQgiAAgYgZg");
	this.shape_7.setTransform(385.1,-20.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003F67").s().p("AAiBRIgrhMIgcAAIAABMIgQAAIAAihIAwAAQA1AAAAAsQAAARgMAMQgLAIgSACIAvBOgAglgHIAdAAQAoAAAAgdQAAgegnAAIgeAAg");
	this.shape_8.setTransform(371.2,-20.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003F67").s().p("AA7BRIgSgrIhSAAIgSArIgSAAIBHihIAOAAIBGChgAgjAXIBGAAIgjhUg");
	this.shape_9.setTransform(356.1,-20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003F67").s().p("AAsBRIAAhNIhXAAIAABNIgQAAIAAihIAQAAIAABHIBXAAIAAhHIAQAAIAAChg");
	this.shape_10.setTransform(340.4,-20.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003F67").s().p("AgvA8QgYgXAAglQAAgjAYgZQAYgYAjAAQASAAAPAHQAQAHAIAMIgNAJQgGgIgLgGQgNgHgOAAQgdAAgTAVQgSAVAAAcQAAAdASAUQATAVAdAAQAfAAARgYIAMAJQgIANgPAIQgRAJgUAAQgjAAgYgZg");
	this.shape_11.setTransform(325,-20.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003F67").s().p("AAiBRIgrhMIgcAAIAABMIgQAAIAAihIAwAAQA1AAAAAsQAAARgMAMQgLAIgSACIAvBOgAglgHIAdAAQAoAAAAgdQAAgegnAAIgeAAg");
	this.shape_12.setTransform(311.1,-20.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003F67").s().p("AgyBRIAAihIBiAAIAAAPIhSAAIAAA4IBNAAIAAAMIhNAAIAAA/IBVAAIAAAPg");
	this.shape_13.setTransform(298.2,-20.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003F67").s().p("AgxBRIAAihIAuAAQAYAAAOALQAPALAAAWQAAAVgQALQgOAJgXAAIgdAAIAABMgAgggHIAcAAQAmAAgBgdQABgegmAAIgcAAg");
	this.shape_14.setTransform(285.8,-20.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003F67").s().p("AgvA9QgMgSAAgZIAAhkIAQAAIAABiQAAAXAKANQALAQAWAAQAXAAALgQQAKgNAAgXIAAhiIAQAAIAABkQAAAZgMASQgQAWggAAQgfAAgQgWg");
	this.shape_15.setTransform(271,-20.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003F67").s().p("AgzA8IAPgKQAMAUAYAAQANAAAKgHQAMgJAAgPQAAgPgMgJQgIgFgSgGQgUgEgKgIQgOgMAAgUQAAgWARgMQAPgKASAAQAgAAAOATIgNALQgLgQgWAAQgMAAgKAHQgLAJAAAOQAAAOALAIQAGAEAQAHQAYAHAJAFQAQAMAAAVQAAAXgRANQgPALgUAAQghAAgSgZg");
	this.shape_16.setTransform(257.3,-20.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003F67").s().p("AA7BRIgSgrIhSAAIgRArIgSAAIBGihIAOAAIBFChgAgiAXIBFAAIgjhUg");
	this.shape_17.setTransform(238.3,-20.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003F67").s().p("Ag4BRIAAihIBsAAIAAAhIhFAAIAAAfIBBAAIAAAeIhBAAIAAAhIBJAAIAAAig");
	this.shape_18.setTransform(219,-20.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003F67").s().p("AgSBRIAAh/IguAAIAAgiICBAAIAAAiIguAAIAAB/g");
	this.shape_19.setTransform(205.6,-20.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003F67").s().p("AArBRIgNggIg9AAIgMAgIgqAAIBEihIAkAAIBEChgAgTARIAmAAIgTg1g");
	this.shape_20.setTransform(192.5,-20.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003F67").s().p("Ag3BRIAAihIBrAAIAAAhIhFAAIAAAfIBBAAIAAAeIhBAAIAAAhIBJAAIAAAig");
	this.shape_21.setTransform(177.5,-20.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003F67").s().p("AAUBRIghhBIgNAAIAABBIgnAAIAAihIA+AAQAZAAAQALQATANAAAZQAAAgghAKIAqBGgAgagKIASAAQAaAAAAgUQAAgSgYAAIgUAAg");
	this.shape_22.setTransform(163.9,-20.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#003F67").s().p("AgxA9QgZgYAAglQAAglAZgYQAagXAjAAQATAAAPAGQARAGAKAMIgaAaQgLgPgWAAQgTAAgNAPQgNAOAAAUQAAAVANAOQAMAOATAAQAXAAALgQIAcAZQgXAbgoAAQgkAAgZgYg");
	this.shape_23.setTransform(148.6,-20.3);

	this.addChild(this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(141,-28.9,373.3,17.2);


(lib.frame_03_txt_02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#053F69").s().p("AHoA9QgXgYAAglQAAgkAYgYQAYgYAkAAQAlAAAXAWIgMALQgSgTgdAAQgfAAgSAWQgTAUAAAcQAAAdATAUQASAVAfAAQAdAAAOgKIAAgyIglAAIAAgMIA3AAIAABHQgcAQgiAAQglAAgYgYgAEsA9QgYgYAAglQAAgkAYgYQAYgYAlAAQAkAAAZAYQAYAYAAAkQAAAlgYAYQgZAYgkAAQglAAgYgYgAE4gwQgTAUABAcQgBAdATAUQASAVAfAAQAeAAATgVQASgUAAgdQAAgcgSgUQgTgWgeAAQgfAAgSAWgAAJA9QgWgYAAglQAAgkAWgYQAZgYAkAAQAlAAAYAYQAXAYAAAkQAAAlgXAYQgYAYglAAQgkAAgZgYgAAUgwQgSAUAAAcQAAAdASAUQAUAVAeAAQAeAAATgVQASgUAAgdQAAgcgSgUQgTgWgeAAQgeAAgUAWgAnaA9QgYgYAAglQAAgkAYgYQAZgYAkAAQARAAARAHQAQAHAHALIgNAKQgFgIgMgGQgMgGgPgBQgeAAgUAWQgSAUAAAcQAAAdASAVQAUAUAeABQAgAAAQgZIANAIQgJAOgPAIQgRAJgUAAQglAAgYgYgAKrBRIAAhHIg+haIAVAAIAxBPIAxhPIAUAAIg9BaIAABHgAC2BRIAAihIARAAIAACSIBMAAIAAAPgAg+BRIhfiKIAACKIgQAAIAAihIAVAAIBeCIIAAAAIAAiIIARAAIAAChgAjiBRIAAhNIhZAAIAABNIgRAAIAAihIARAAIAABHIBZAAIAAhHIAQAAIAAChgApoBRIAAihIBmAAIAAAPIhVAAIAAA4IBPAAIAAAMIhPAAIAAA/IBXAAIAAAPgArABRIAAiSIg3AAIAAgPIB9AAIAAAPIg2AAIAACSg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76,-8.5,152.1,17.1);


(lib.frame_03_txt_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#053F69").s().p("AD2A9QgYgYAAglQAAgmAYgXQAZgXAnAAQAnAAAZAXQAZAXAAAmQAAAlgZAYQgZAYgnAAQgnAAgZgYgAEVgjQgOAOAAAVQAAAVAOAOQAMAPAVAAQAVAAAMgPQAOgOAAgVQAAgVgOgOQgMgOgVAAQgVAAgMAOgABYA+IAagaQAGAHAJAFQAKAFAKAAQAWAAAAgSQABgIgKgGQgFgDgUgGQgTgGgJgHQgNgMAAgUQAAgZAUgOQASgMAZAAQAgAAAVAUIgZAbQgKgOgTAAQgXAAAAAQQABAHAGAFQAFADAOAEQAXAIAKAHQARALAAAVQAAAagTAPQgRANgaAAQgnAAgWgXgAhCA9QgZgYAAglQAAgmAZgXQAZgXAmAAQAlAAAZAXQAZAXAAAmQAAAlgZAYQgZAYglAAQgmAAgZgYgAgkgjQgOAOAAAVQAAAVAOAOQANAPAUAAQATAAANgPQANgOAAgVQAAgVgNgOQgNgOgTAAQgVAAgMAOgAltA9QgZgYABglQAAglAZgYQAZgXAlAAQATAAAPAGQARAGAKAMIgaAaQgLgOgWAAQgVAAgNAOQgNAOAAAUQAAAWANAOQANANAUAAQAXAAAMgQIAbAaQgXAagoAAQgmAAgZgYgAJDBRIAAh/IguAAIAAgiICEAAIAAAiIguAAIAAB/gAGjBRIAAihIBrAAIAAAiIhEAAIAAAhIA/AAIAAAfIg/AAIAAA/gAiNBRIgjhBIgNAAIAABBIgnAAIAAihIA+AAQAbAAAQALQATANAAAZQABAggiAKIAqBGgAi9gKIASAAQAcAAAAgUQAAgSgaAAIgUAAgAnBBRIAAihIAnAAIAAChgAoEBRIABhxIgBAAIgqBxIgbAAIgqhxIgBAAIABBxIglAAIAAihIA4AAIAlBnIABAAIAjhnIA6AAIAAChg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.5,-8.5,133,17.2);


(lib.frame_02_txt_03 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#053F69").s().p("AjvA9QgZgYAAglQAAgkAZgYQAYgYAkAAQAlAAAYAYQAYAYAAAkQAAAlgYAYQgYAYglAAQgkAAgYgYgAjkgwQgSAUAAAcQAAAdASAVQATAUAeABQAfgBATgUQASgVAAgdQAAgcgSgUQgTgWgfAAQgeAAgTAWgAFpBRIgthMIgbAAIAABMIgRAAIAAihIAwAAQA4ABAAArQAAARgMAMQgLAIgTACIAwBOgAEhgIIAcAAQAqAAAAgcQAAgdgpAAIgdAAgACSBRIAAihIBlAAIAAAPIhVAAIAAA4IBPAAIAAAMIhPAAIAAA/IBXAAIAAAPgAA8BRIgpiJIgBAAIgnCJIgTAAIgwihIARAAIApCLIAniLIATAAIApCLIABAAIAniLIASAAIgwChgAl9BRIAAihIAuAAQAaAAAOALQAPAMAAAVQAAAVgPALQgOAKgaAAIgdAAIAABLgAlsgHIAcAAQAoAAAAgdQAAgdgoAAIgcAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.2,-8.5,76.5,17.1);


(lib.frame_02_txt_02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#053F69").s().p("AIfA9QgYgYAAglQAAgkAYgYQAYgYAlAAQAkAAAXAWIgMALQgSgSgdgBQgeAAgTAWQgTAUAAAcQAAAdATAVQATAUAeABQAcAAAQgLIAAgyIgmAAIAAgMIA3AAIAABIQgbAPgiAAQglAAgYgYgACuA9IAOgKQANAUAYAAQAOAAALgIQAMgJAAgPQAAgPgNgIQgHgFgUgGQgVgFgJgIQgOgLAAgUQAAgWARgMQAPgLAUAAQAfAAAPAUIgNALQgLgRgXAAQgNAAgKAIQgLAIAAAOQAAAOALAIQAGAFASAFQAZAIAIAFQAPAMAAAVQAAAXgRANQgOALgWAAQghAAgSgYgAA1A9IAOgKQANAUAYAAQAOAAALgIQAMgJAAgPQAAgPgNgIQgHgFgUgGQgVgFgJgIQgOgLAAgUQAAgWARgMQAPgLAUAAQAQAAAMAGQAMAGAGAIIgNALQgMgRgWAAQgNAAgKAIQgLAIAAAOQAAAOALAIQAGAFASAFQAZAIAIAFQAPAMAAAVQAAAXgRANQgOALgWAAQghAAgSgYgAjPA9QgYgYAAglQAAgkAYgYQAYgYAkAAQASAAAQAHQAQAHAIAMIgNAKQgGgJgLgFQgNgIgOAAQgfAAgTAWQgSAUAAAcQAAAdASAVQATAUAfABQAgAAAPgZIANAJQgIANgPAIQgRAJgVAAQgkAAgYgYgAmMA9QgYgYAAglQAAgkAYgYQAYgYAlAAQAkAAAYAYQAYAYAAAkQAAAlgYAYQgYAYgkAAQglAAgYgYgAmBgwQgSAUAAAcQAAAdASAVQATAUAfABQAegBATgUQASgVAAgdQAAgcgSgUQgTgWgeAAQgfAAgTAWgAHWBRIheiKIgBAAIAACKIgQAAIAAihIAUAAIBfCJIABAAIAAiJIAQAAIAAChgAEyBRIAAihIAQAAIAAChgAhBBRIAAihIBjAAIAAAPIhTAAIAAA4IBNAAIAAAMIhNAAIAAA/IBVAAIAAAPgAnDBRIgthMIgcAAIAABMIgRAAIAAihIAwAAQA4ABAAArQAAARgMAMQgLAIgTACIAwBOgAoMgIIAdAAQApAAAAgcQAAgdgpAAIgdAAgAqYBRIAAihIAuAAQAaAAAOALQAPAMAAAVQAAAVgPALQgOAKgaAAIgdAAIAABLgAqHgHIAcAAQAoAAAAgdQAAgdgoAAIgcAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66.5,-8.5,133.1,17.1);


(lib.frame_02_txt_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#053F69").s().p("ADJBRIAAihIAoAAIAAB/IA/AAIAAAigABBBRIAAihIBuAAIAAAhIhHAAIAAAfIBDAAIAAAdIhDAAIAAAiIBLAAIAAAigAgdBRIAAh/IgvAAIAAgiICCAAIAAAiIguAAIAAB/gAiEBRIhBhpIgBAAIABBpIgmAAIAAihIAtAAIBBBoIAAAAIAAhoIAmAAIAAChgAkvBRIAAihIAoAAIAAChg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.4,-8.1,60.8,16.3);


(lib.frame_01_txt_02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKGB3IiLjMIAAAAIAADMIgZAAIAAjtIAfAAICKDKIABAAIAAjKIAYAAIAADtgAGLB3IAAjtIAYAAIAADtgAEDB3Ig8jLIgBAAIg8DLIgcAAIhHjtIAaAAIA7DMIABAAIA7jMIAdAAIA8DMIABAAIA6jMIAaAAIhHDtgAjUB3IAAjtICUAAIAAAWIh8AAIAABSIB0AAIAAATIh0AAIAABdICAAAIAAAVgAksB3IAAhxIiDAAIAABxIgYAAIAAjtIAYAAIAABoICDAAIAAhoIAYAAIAADtgApTB3IAAjXIhQAAIAAgWIC4AAIAAAWIhQAAIAADXg");
	this.shape.setTransform(234.2,-29);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(166.5,-40.9,135.4,24);


(lib.frame_01_txt_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#93D7E9").s().p("AFdBaQglgjAAg3QAAg4AlgiQAkgjA5AAQA5AAAlAjQAlAiAAA4QAAA3glAjQglAkg5gBQg4ABglgkgAGJg0QgTAVAAAfQAAAfATAVQATAVAeAAQAfAAATgVQATgVAAgfQAAgfgTgVQgUgUgeAAQgeAAgTAUgAj7BaQglgiAAg4QAAg3AmgjQAkgjA4AAQAcABAZAIQAYAIAPAQIgkApQgTgWgjAAQgeAAgUAVQgUAWAAAeQAAAiATAUQATAVAjgBQAVAAAPgFIAAgsIguAAIAAgtIBjAAIAAB9QgoAVg0gBQg6ABglgkgAOmB3IAAjtICgAAIAAAxIhpAAIAAAtIBkAAIAAAsIhkAAIAAAyIBwAAIAAAxgAM8B3IABinIgBAAIg+CnIgoAAIg9inIgBAAIABCnIg2AAIAAjtIBSAAIA2CYIACAAIA0iYIBTAAIAADtgADYB3IAAhkIhcAAIAABkIg6AAIAAjtIA6AAIAABbIBcAAIAAhbIA6AAIAADtgAmHB3IhhiaIgBAAIACCaIg4AAIAAjtIBBAAIBgCaIABAAIgBiaIA4AAIAADtgAqLB3IAAjtIA6AAIAADtgArrB3Ig0heIgTAAIAABeIg5AAIAAjtIBbAAQAnAAAYAPQAdAUAAAmQAAAXgOARQgNAPgXAHIA/BmgAszgQIAcAAQAqAAAAgcQAAgbgnAAIgfAAgAxMB3IAAjtIBgAAQAhAAAVANQAbAQAAAhQAAAmgnANIAAABQAVADAOANQAOAPAAAXQAAAkgdASQgYAPgmAAgAwUBIIAhAAQAoAAAAgbQAAgbgpAAIggAAgAwUgXIAfAAQAiAAAAgaQAAgXglAAIgcAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-110.1,-12.6,220.3,25.2);


(lib.cta_txt_dk = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A385D").s().p("AhFA3IAAhRIASAAIAAAIIAAAAQAHgJALAAQAMAAAIAJQAHAIAAAKQAAAMgHAJQgIAJgMAAQgMAAgFgHIAAAAIAAAggAgvgIQgDAFgBADQABAHADADQAEAFAGAAQAGAAAEgFQADgDAAgHQAAgDgDgFQgEgEgGAAQgGAAgEAEgAB+AXQgJgJAAgOQAAgLAJgIQAKgIANAAQANAAAJAIQAJAIAAALQAAAOgJAJQgKAHgMAAQgNAAgKgHgACLgIQgDAFgBADQABAGADAEQADAFAHAAQAGAAAEgFQADgDAAgHQAAgDgDgFQgEgEgGAAQgHAAgDAEgAiFAXQgKgJAAgOQAAgLAKgIQAIgIANAAQAOAAAJAIQAJAIAAALQAAAOgJAJQgKAHgNAAQgNAAgIgHgAh5gIQgDAFgBADQABAHADADQAEAFAGAAQAGAAAEgFQADgEAAgGQAAgDgDgFQgEgEgHAAQgGAAgDAEgAkZATIANgMQAHAIAKAAQALAAAAgJQAAgEgEgCQgEgBgJgCQgUgHAAgQQAAgMAKgHQAIgGANAAQAPAAALAKIgMANQgGgHgJAAQgKAAgBAIQABAGAMADQALAEAFAEQAJAFgBAJQAAANgJAHQgIAHgNgBQgTABgLgMgAD0AcIgLggIgLAgIgSAAIgUg2IAUAAIAKAiIAKgiIASAAIALAiIAAAAIAKgiIATAAIgUA2gABTAcIgggyIAAAyIgSAAIAAhNIAVAAIAhAyIAAAAIAAgyIASAAIAABNgAisAcIAAgcQAAgLgIAAQgKAAAAALIAAAcIgSAAIAAhSIASAAIAAAkQAFgJALAAQAKAAAGAIQAEAFABAKIAAAgg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.2,-5.6,56.5,11.2);


(lib.cta_solid = function() {
	this.initialize();

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF200").ss(2,1,1,3,true).p("Al7iFIL3AAQAJAAAAAJIAAD5QAAAJgJAAIr3AAQgJAAAAgJIAAj5QAAgJAJAAg");
	this.shape.setTransform(0.2,-0.5);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F9E351","#FDF04F"],[0.008,1],-39.2,0,39.2,0).s().p("Al+CIQgJAAAAgJIAAj9QAAgJAJAAIL9AAQAJAAgBAJIAAD9QABAJgJAAg");
	this.shape_1.setTransform(0.3,-0.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.7,-14.9,79.8,28.9);


(lib.bg_02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A3DAE4").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300.1,250);


(lib.bg_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0A385D").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300.1,250);


(lib.mc_frame_06 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer 6
	this.instance = new lib.frame_06_txt_02();
	this.instance.setTransform(379.3,-28.8);
	this.instance.alpha = 0;

	this.instance_1 = new lib.frame_06_txt_01();
	this.instance_1.setTransform(-2.3,-14.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(36));

	// gradient_blocker
	this.instance_2 = new lib.gradient_blocker();
	this.instance_2.setTransform(89.7,-27.3,1.833,1.29,180);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({y:60.7},9,cjs.Ease.get(1)).to({_off:true},1).wait(26));

	// frame_01_txt_01
	this.instance_3 = new lib.frame_06_txt_01();
	this.instance_3.setTransform(-2.3,-3.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({y:-14.1},9,cjs.Ease.get(1)).wait(27));

	// gradient_blocker
	this.instance_4 = new lib.gradient_blocker();
	this.instance_4.setTransform(419.1,-39.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({y:-94.4},10,cjs.Ease.get(1)).to({_off:true},1).wait(16));

	// frame_01_txt_02
	this.instance_5 = new lib.frame_06_txt_02();
	this.instance_5.setTransform(379.3,-44.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({y:-28.8},10,cjs.Ease.get(1)).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.5,-36.5,629.8,17.7);


(lib.mc_frame_05 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_46 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(46).call(this.frame_46).wait(1));

	// Layer 6
	this.instance = new lib.g_logo_w10();
	this.instance.setTransform(-614.7,-33.8,1.293,1.293);
	this.instance.alpha = 0;

	this.instance_1 = new lib.frame_05_txt_02();
	this.instance_1.setTransform(196.6,-94.6);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.frame_05_txt_01();
	this.instance_2.setTransform(61.7,-102.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(46));

	// g_logo_w10 copy
	this.instance_3 = new lib.g_logo_w10();
	this.instance_3.setTransform(-614.7,-33.8,1.293,1.293);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({alpha:1},9).wait(37));

	// gradient_blocker
	this.instance_4 = new lib.gradient_blocker();
	this.instance_4.setTransform(57,-90.9,1,1,180);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({y:-20.1},10,cjs.Ease.get(1)).to({_off:true},1).wait(26));

	// frame_01_txt_01
	this.instance_5 = new lib.frame_05_txt_01();
	this.instance_5.setTransform(61.7,-101.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({y:-102.1},10,cjs.Ease.get(1)).wait(27));

	// gradient_blocker
	this.instance_6 = new lib.gradient_blocker();
	this.instance_6.setTransform(236.4,-82.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20).to({_off:false},0).to({y:-154.2},10,cjs.Ease.get(1)).to({_off:true},1).wait(16));

	// frame_01_txt_02
	this.instance_7 = new lib.frame_05_txt_02();
	this.instance_7.setTransform(196.6,-94.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-97,542.4,25.6);


(lib.mc_frame_01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer 6
	this.instance = new lib.frame_01_txt_01();
	this.instance.setTransform(-2.3,-14.1);
	this.instance.alpha = 0;

	this.instance_1 = new lib.frame_01_txt_02();
	this.instance_1.setTransform(-46.8,14.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(36));

	// gradient_blocker
	this.instance_2 = new lib.gradient_blocker();
	this.instance_2.setTransform(-7,-2.5,1,1,180);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({y:56.4},9,cjs.Ease.get(1)).to({_off:true},1).wait(26));

	// frame_01_txt_01
	this.instance_3 = new lib.frame_01_txt_01();
	this.instance_3.setTransform(-2.3,-3.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({y:-14.1},9,cjs.Ease.get(1)).wait(27));

	// gradient_blocker
	this.instance_4 = new lib.gradient_blocker();
	this.instance_4.setTransform(228,-40.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({y:-85.5},10,cjs.Ease.get(1)).to({_off:true},1).wait(16));

	// frame_01_txt_02
	this.instance_5 = new lib.frame_01_txt_02();
	this.instance_5.setTransform(-46.8,-13.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({y:15.1},10,cjs.Ease.get(1)).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.4,-26.9,367.5,25.4);


(lib.mc_2in1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"switch":1,fade:20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_19 = function() {
		this.stop()
	}
	this.frame_29 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(10).call(this.frame_29).wait(1));

	// g_hp_screen_01
	this.instance = new lib.g_hp_screen_01();
	this.instance.setTransform(-9.4,6.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:-0.1,scaleX:1.01,scaleY:0.85,skewX:9.7,skewY:20.7,x:-11.7,y:-35},5,cjs.Ease.get(-1)).to({regX:0.2,regY:0.2,scaleX:1.05,scaleY:1.09,skewX:107.1,skewY:136.8,x:-7.4,y:-55.1},4).to({_off:true},1).wait(20));

	// g_hp_base_02
	this.instance_1 = new lib.g_hp_base_02();
	this.instance_1.setTransform(-3.9,-52.7,0.839,1.068,0,-107,-116.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleX:0.96,scaleY:1.01,skewX:-33.4,skewY:-27,x:2.4,y:-56.3},3).to({_off:true},1).wait(20));

	// g_hp_base_01
	this.instance_2 = new lib.g_hp_base_01();
	this.instance_2.setTransform(8.5,52.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:14.7,x:-1.5,y:2.8},5,cjs.Ease.get(-1)).to({_off:true},1).wait(24));

	// g_fade
	this.instance_3 = new lib.g_fade();
	this.instance_3.setTransform(9.4,13.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:false},0).to({alpha:1},9).wait(1));

	// g_hp_screen_02
	this.instance_4 = new lib.g_hp_screen_02();
	this.instance_4.setTransform(5.1,-41.1,1,1,-23);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({rotation:0,x:5.3,y:10.9},9,cjs.Ease.get(1)).wait(11));

	// g_hp_base_02
	this.instance_5 = new lib.g_hp_base_02();
	this.instance_5.setTransform(-9.3,-52.4,1,1.022,0,-34.9,-23);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({scaleY:1,skewX:0,skewY:0,x:-10.9,y:-6.6},9,cjs.Ease.get(1)).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.9,-71.9,256.9,159.7);


(lib.EndFrameSurface = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1));

	// Layer 2
	this.instance = new lib.frame_07_txt_02();
	this.instance.setTransform(-55.8,-52);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(38));

	// frame_07_txt_02
	this.instance_1 = new lib.frame_07_txt_02();
	this.instance_1.setTransform(-55.8,-48);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:-52,alpha:1},11,cjs.Ease.get(1)).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.1,-59.4,229.7,20.9);


(lib.EndFrameLogoWindows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(2));

	// Layer 3
	this.instance = new lib.g_logo_w10();
	this.instance.setTransform(-92.3,39.3,0.761,0.761);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(20));

	// g_logo_w10
	this.instance_1 = new lib.g_logo_w10();
	this.instance_1.setTransform(-92.3,39.3,0.761,0.761);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:1},9).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(152,2,81.2,15.1);


(lib.EndCardSave100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_46 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(46).call(this.frame_46).wait(1));

	// Layer 2
	this.instance = new lib.frame_07_txt_01();
	this.instance.setTransform(81.1,-65.3,1.002,1.002,0,0,0,116.4,9.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(46));

	// frame_07_txt_01
	this.instance_1 = new lib.frame_07_txt_01();
	this.instance_1.setTransform(547.4,-25.5,5.008,5.008,0,0,0,116.4,9.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({regY:9.8,scaleX:1,scaleY:1,x:81.1,y:-65.3,alpha:1},6,cjs.Ease.get(-1)).to({regY:9.9,scaleX:1.1,scaleY:1.1,x:92.8,y:-64.2},3,cjs.Ease.get(1)).to({regY:9.8,scaleX:1,scaleY:1,x:81.1,y:-65.3},3,cjs.Ease.get(-1)).to({regY:9.9,scaleX:1.03,scaleY:1.03,x:84.6,y:-64.9},3,cjs.Ease.get(1)).to({regY:9.8,scaleX:1,scaleY:1,x:81.1,y:-65.3},2,cjs.Ease.get(-1)).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.6,-91.3,281.8,26.3);


(lib.EndcardLogoIntel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(2));

	// Layer 3
	this.instance = new lib.g_logo_intel();
	this.instance.setTransform(-116.3,65,0.827,0.827);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(20));

	// g_logo_intel
	this.instance_1 = new lib.g_logo_intel();
	this.instance_1.setTransform(-116.3,65,0.827,0.827);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:1},9).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.5,54.3,32.5,21.4);


(lib.btn_solid = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.cta_txt_dk();
	this.instance.setTransform(0,0.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFF200").ss(3,1,1,3,true).p("Al+iHIL9AAQAJAAAAAJIAAD9QAAAJgJAAIr9AAQgJAAAAgJIAAj9QAAgJAJAAg");

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.7,-15.1,81.4,30.3);


(lib.mc_cta = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{hi:22,bye:28});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_21 = function() {
		this.stop()
	}
	this.frame_27 = function() {
		this.stop()
	}
	this.frame_32 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(6).call(this.frame_27).wait(5).call(this.frame_32).wait(1));

	// txt
	this.instance = new lib.txt_yellow();
	this.instance.setTransform(0,0.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({alpha:1},5).to({alpha:0},5).wait(1).to({alpha:1},5).to({alpha:0},5).wait(1));

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#123E64").s().p("AhEA3IAAhRIARAAIAAAIIABAAQAGgJAMAAQALAAAIAJQAHAIAAAKQAAAMgHAJQgHAJgNAAQgMAAgEgHIgBAAIAAAggAgvgIQgEAFABADQgBAHAEADQAEAFAGAAQAGAAADgFQAEgDAAgHQAAgDgEgFQgDgEgGAAQgGAAgEAEgAB/AXQgJgJAAgOQAAgLAJgIQAIgIANAAQAOAAAIAIQAKAIAAALQAAAOgKAJQgIAHgOABQgNgBgIgHgACLgIQgDAFAAADQAAAGADAEQAEAFAFAAQAHAAADgFQAEgDAAgHQAAgDgEgFQgDgEgHAAQgFAAgEAEgAiFAXQgKgJAAgOQAAgLAKgIQAJgIANAAQANAAAIAIQAKAIAAALQAAAOgKAJQgIAHgNABQgNgBgJgHgAh5gIQgEAFAAADQAAAHAEADQAEAFAGAAQAGAAADgFQAEgEAAgGQAAgDgEgFQgDgEgGAAQgGAAgEAEgAkZATIANgMQAGAIALAAQALAAAAgJQAAgEgFgCQgDgBgIgCQgVgHAAgQQAAgMAKgHQAJgGAMAAQAPAAALAKIgMANQgFgHgJAAQgLAAAAAIQAAAGALADQAMADAFAFQAJAFAAAJQAAANgKAHQgIAHgNAAQgUAAgKgMgAD0AcIgLggIgLAgIgTAAIgTg2IAUAAIAKAiIAKgiIASAAIALAiIABAAIAJgiIATAAIgTA2gABTAcIgggxIAAAxIgTAAIAAhNIAXAAIAfAyIABAAIgBgyIATAAIAABNgAisAcIAAgcQAAgLgIAAQgKAAAAALIAAAcIgTAAIAAhSIATAAIAAAkQAFgJALAAQALAAAFAIQAFAFgBAKIAAAgg");
	this.shape.setTransform(0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(33));

	// button
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F9E351","#FDF04F"],[0.008,1],-39.2,0,39.2,0).s().p("Al+CIQgJAAAAgJIAAj9QAAgJAJAAIL9AAQAJAAAAAJIAAD9QAAAJgJAAg");

	this.instance_1 = new lib.cta_solid();
	this.instance_1.setTransform(-0.2,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({alpha:0.602},2).to({alpha:0},3).to({alpha:1},5).wait(1).to({alpha:0},5).to({alpha:1},5).wait(1));

	// btn_solid
	this.instance_2 = new lib.btn_solid();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-13.6,78.4,27.3);


// stage content:



(lib.Q2_MSFT_INTEL_970x66 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (window.devicePixelRatio > 1) {  
		  
		    var canvasWidth = canvas.width;  
		    var canvasHeight = canvas.height;  
		  
		  
		    canvas.width = canvasWidth * window.devicePixelRatio;  
		    canvas.height = canvasHeight * window.devicePixelRatio;  
		    canvas.style.width = canvasWidth+"px";  
		    canvas.style.height = canvasHeight+"px";  
		  
		    //console.log(window.devicePixelRatio);  
		     stage.scaleX=stage.scaleY=window.devicePixelRatio;  
		} 
		
		var tl=this;
		
		document.rollOverFunction = function() {
			 tl.mc_cta.gotoAndPlay("hi");
		}
		
		document.rollOutFunction = function() {
			 tl.mc_cta.gotoAndPlay("bye");
		}
	}
	this.frame_132 = function() {
		this.mc_2in1.gotoAndPlay("switch");
	}
	this.frame_173 = function() {
		this.mc_2in1.gotoAndPlay("fade");
	}
	this.frame_371 = function() {
		this.mc_cta.gotoAndPlay(1);
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(132).call(this.frame_132).wait(41).call(this.frame_173).wait(198).call(this.frame_371).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("EBLtgFEIAAKJMiXZAAAIAAqJg");
	this.shape.setTransform(485,33);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(372));

	// logo_BestBuy
	this.instance = new lib.logo_BestBuy();
	this.instance.setTransform(38.8,33.4,0.932,0.932);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(348).to({y:25.4},10).wait(14));

	// cta
	this.mc_cta = new lib.mc_cta();
	this.mc_cta.setTransform(58.1,119.5,1.048,1.048);
	this.mc_cta.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_cta).wait(338).to({x:768.7,y:12.5},0).to({y:32.5,alpha:1},10,cjs.Ease.get(1)).wait(24));

	// frame_07_txt_01
	this.instance_1 = new lib.EndCardSave100();
	this.instance_1.setTransform(310.1,123.5,0.937,0.937,0,0,0,29.4,29.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(325).to({_off:false},0).wait(47));

	// frame_07_txt_02
	this.instance_2 = new lib.EndFrameSurface();
	this.instance_2.setTransform(278.8,99.9,0.856,0.856,0,0,0,13.1,13.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(334).to({_off:false},0).wait(38));

	// g_logo_w10
	this.instance_3 = new lib.EndFrameLogoWindows();
	this.instance_3.setTransform(384.8,28.9,1.358,1.358,0,0,0,40.6,7.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(338).to({_off:false},0).wait(34));

	// g_logo_intel
	this.instance_4 = new lib.EndcardLogoIntel();
	this.instance_4.setTransform(836.2,-35.7,1.217,1.217,0,0,0,9.7,9.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(338).to({_off:false},0).wait(34));

	// g_legal
	this.instance_5 = new lib.g_legal();
	this.instance_5.setTransform(149.4,239.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(360).to({_off:false},0).to({alpha:1},11).wait(1));

	// g_2in1_end_stylus
	this.instance_6 = new lib.g_2in1_end_stylus();
	this.instance_6.setTransform(464.9,-29.2,0.424,0.424);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(325).to({_off:false},0).wait(1).to({regX:-33.9,regY:-17.8,x:450.5,y:-36.6},0).wait(1).to({y:-36.2},0).wait(1).to({y:-35.4},0).wait(1).to({y:-34.2},0).wait(1).to({y:-32.5},0).wait(1).to({y:-30.2},0).wait(1).to({y:-27.2},0).wait(1).to({y:-23.2},0).wait(1).to({y:-18},0).wait(1).to({y:-11.1},0).wait(1).to({y:-1.7},0).wait(1).to({y:12.3},0).wait(1).to({regX:0,regY:0,x:464.9,y:48.3},0).wait(1).to({regX:-33.9,regY:-17.8,x:450.5,y:41.7},0).wait(1).to({y:42.2},0).wait(1).to({y:42.6},0).wait(1).to({y:42.8},0).wait(1).to({y:43},0).wait(1).to({y:43.1},0).wait(1).to({y:43.2},0).wait(3).to({regX:0,regY:0,x:464.9,y:50.8},0).wait(24));

	// g_2in1_end
	this.instance_7 = new lib.g_2in1_end();
	this.instance_7.setTransform(419.7,-47.2,0.536,0.536);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(325).to({_off:false},0).wait(1).to({regX:102.9,regY:-9.7,x:474.8,y:-52.2},0).wait(1).to({y:-51.8},0).wait(1).to({y:-51},0).wait(1).to({y:-49.8},0).wait(1).to({y:-48},0).wait(1).to({y:-45.6},0).wait(1).to({y:-42.5},0).wait(1).to({y:-38.4},0).wait(1).to({y:-33},0).wait(1).to({y:-25.9},0).wait(1).to({y:-16.2},0).wait(1).to({y:-1.8},0).wait(1).to({regX:0,regY:0,x:419.7,y:32.8},0).wait(34));

	// mc_frame_06
	this.instance_8 = new lib.mc_frame_06();
	this.instance_8.setTransform(484.7,32.3,1,1,0,0,0,199.4,-27);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(255).to({_off:false},0).to({regX:199.5,scaleX:1.02,scaleY:1.02},63).to({regX:199.4,scaleX:1.02,scaleY:1.02,alpha:0},10).to({_off:true},1).wait(43));

	// mc_frame_05
	this.instance_9 = new lib.mc_frame_05();
	this.instance_9.setTransform(485.1,33.6,1,1,0,0,0,71.2,-83.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(185).to({_off:false},0).to({regX:71.3,scaleX:1.04,scaleY:1.04,x:485.2},62).to({regX:71.2,scaleX:1.04,scaleY:1.04,x:485.1,alpha:0},10).to({_off:true},1).wait(114));

	// bg_01
	this.instance_10 = new lib.bg_01();
	this.instance_10.setTransform(484.9,33,3.233,0.264,0,0,0,150,125);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(185).to({_off:false},0).wait(187));

	// frame_04_txt_01
	this.instance_11 = new lib.frame_04_txt_01();
	this.instance_11.setTransform(108,109.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(126).to({_off:false},0).wait(1).to({regX:327.6,regY:-20.3,x:435.6,y:89.3},0).wait(1).to({y:88.8},0).wait(1).to({y:87.9},0).wait(1).to({y:86.5},0).wait(1).to({y:84.4},0).wait(1).to({y:81.4},0).wait(1).to({y:77.1},0).wait(1).to({y:71.2},0).wait(1).to({y:63.5},0).wait(1).to({y:55},0).wait(1).to({y:47.9},0).wait(1).to({y:42.8},0).wait(1).to({y:39.3},0).wait(1).to({y:37.1},0).wait(1).to({y:35.8},0).wait(1).to({y:35.1},0).wait(1).to({regX:0,regY:0,x:108,y:55.2},0).to({y:52.5},41).to({_off:true},1).wait(187));

	// mc_2in1
	this.mc_2in1 = new lib.mc_2in1();
	this.mc_2in1.setTransform(643.7,99.7,0.325,0.325);
	this.mc_2in1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_2in1).wait(81).to({_off:false},0).wait(1).to({regX:-7.1,regY:-36.7,x:641.4,y:87.5},0).wait(1).to({y:86.7},0).wait(1).to({y:85.2},0).wait(1).to({y:82.6},0).wait(1).to({y:78.1},0).wait(1).to({y:70.2},0).wait(1).to({y:54.9},0).wait(1).to({y:37.9},0).wait(1).to({y:29.3},0).wait(1).to({y:25},0).wait(1).to({y:22.7},0).wait(1).to({y:21.6},0).wait(1).to({regX:0,regY:0,x:643.7,y:33.2},0).to({y:30.7},32).wait(1).to({regX:-7.1,regY:-36.7,x:641.5,y:18.8},0).wait(1).to({x:641.8},0).wait(1).to({x:642.3},0).wait(1).to({x:643.1},0).wait(1).to({x:644.3},0).wait(1).to({x:646.1},0).wait(1).to({x:648.7},0).wait(1).to({x:652.5},0).wait(1).to({x:657.6},0).wait(1).to({x:663},0).wait(1).to({x:667.2},0).wait(1).to({x:670.1},0).wait(1).to({x:672},0).wait(1).to({x:673.2},0).wait(1).to({x:673.9},0).wait(1).to({x:674.3},0).wait(1).to({regX:0,regY:0,x:676.7,y:30.7},0).to({x:678.7},30).wait(1).to({regX:-7.1,regY:-36.7,scaleX:0.34,scaleY:0.34,x:676.2,y:18.5},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:675.6,y:17.1},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:674.1,y:14.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:671.6,y:9},0).wait(1).to({scaleX:1,scaleY:1,x:667.7,y:0.9},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:661.9,y:-10.8},0).wait(1).to({scaleX:2.07,scaleY:2.07,x:653.8,y:-27.5},0).wait(1).to({scaleX:2.95,scaleY:2.95,x:642.4,y:-50.8},0).wait(1).to({scaleX:4.19,scaleY:4.19,x:626.2,y:-83.9},0).wait(1).to({scaleX:6.06,scaleY:6.06,x:602.1,y:-133.3},0).wait(1).to({regX:0,regY:0,scaleX:9.29,scaleY:9.29,x:626.1,y:121.9},0).to({_off:true},1).wait(187));

	// frame_03_txt_02
	this.instance_12 = new lib.frame_03_txt_02();
	this.instance_12.setTransform(517.6,118.7);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(81).to({_off:false},0).wait(1).to({y:118.4},0).wait(1).to({y:117.4},0).wait(1).to({y:115.5},0).wait(1).to({y:112.2},0).wait(1).to({y:106.6},0).wait(1).to({y:96.6},0).wait(1).to({y:77.4},0).wait(1).to({y:56.1},0).wait(1).to({y:45.3},0).wait(1).to({y:39.9},0).wait(1).to({y:37},0).wait(1).to({y:35.6},0).wait(1).to({y:35.2},0).to({y:33.2},32).wait(1).to({y:33.1},0).wait(1).to({y:32.8},0).wait(1).to({y:32.1},0).wait(1).to({y:31},0).wait(1).to({y:29.2},0).wait(1).to({y:26.5},0).wait(1).to({y:22.1},0).wait(1).to({y:15.2},0).wait(1).to({y:3.6},0).wait(1).to({y:-14.9},0).to({_off:true},1).wait(235));

	// frame_03_txt_01
	this.instance_13 = new lib.frame_03_txt_01();
	this.instance_13.setTransform(370.3,118.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(81).to({_off:false},0).wait(1).to({y:118.2},0).wait(1).to({y:117.2},0).wait(1).to({y:115.3},0).wait(1).to({y:111.9},0).wait(1).to({y:106.3},0).wait(1).to({y:96.4},0).wait(1).to({y:77.1},0).wait(1).to({y:55.9},0).wait(1).to({y:45.1},0).wait(1).to({y:39.6},0).wait(1).to({y:36.7},0).wait(1).to({y:35.3},0).wait(1).to({y:35},0).to({y:33},32).wait(1).to({y:32.9},0).wait(1).to({y:32.5},0).wait(1).to({y:31.9},0).wait(1).to({y:30.8},0).wait(1).to({y:29},0).wait(1).to({y:26.2},0).wait(1).to({y:21.9},0).wait(1).to({y:14.9},0).wait(1).to({y:3.4},0).wait(1).to({y:-15.2},0).to({_off:true},1).wait(235));

	// g_plus
	this.instance_14 = new lib.g_plus();
	this.instance_14.setTransform(484.7,123,0.494,0.494);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(44).to({_off:false},0).wait(1).to({y:122.4},0).wait(1).to({y:120.2},0).wait(1).to({y:115.4},0).wait(1).to({y:105.9},0).wait(1).to({y:90},0).wait(1).to({y:76.7},0).wait(1).to({y:70.1},0).wait(1).to({y:67.2},0).wait(1).to({y:66.5},0).wait(1).to({y:66.4},0).wait(8).to({y:66.3},0).wait(2).to({y:66.2},0).wait(2).to({y:66.1},0).wait(1).to({y:66},0).wait(1).to({y:65.9},0).wait(1).to({y:65.8},0).wait(1).to({y:65.7},0).wait(2).to({y:65.6},0).wait(2).to({y:65.5},0).wait(8).to({y:65.1},0).wait(1).to({y:64.1},0).wait(1).to({y:62},0).wait(1).to({y:58.4},0).wait(1).to({y:52.7},0).wait(1).to({y:43.6},0).wait(1).to({y:30.8},0).wait(1).to({y:18.6},0).wait(1).to({y:10.3},0).wait(1).to({y:5.5},0).wait(1).to({y:2.7},0).wait(1).to({y:1.3},0).wait(1).to({y:1},0).wait(1).to({y:0.9},0).wait(9).to({y:0.8},0).wait(3).to({y:0.7},0).wait(2).to({y:0.6},0).wait(1).to({y:0.5},0).wait(1).to({y:0.4},0).wait(1).to({y:0.3},0).wait(2).to({y:0.2},0).wait(1).to({y:0.1},0).wait(3).to({y:0},0).wait(9).to({y:-0.2},0).wait(1).to({y:-0.6},0).wait(1).to({y:-1.5},0).wait(1).to({y:-3},0).wait(1).to({y:-5.4},0).wait(1).to({y:-9.1},0).wait(1).to({y:-15},0).wait(1).to({y:-24.5},0).wait(1).to({y:-40.1},0).wait(1).to({y:-65.2},0).to({_off:true},1).wait(235));

	// g_logo_intel
	this.instance_15 = new lib.g_logo_intel_blue();
	this.instance_15.setTransform(635,111.9,0.383,0.383);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(44).to({_off:false},0).wait(1).to({y:111.1},0).wait(1).to({y:108},0).wait(1).to({y:101.3},0).wait(1).to({y:88},0).wait(1).to({y:65.8},0).wait(1).to({y:47.2},0).wait(1).to({y:37.9},0).wait(1).to({y:33.9},0).wait(1).to({y:32.9},0).wait(29).to({y:32.6},0).wait(1).to({y:31.5},0).wait(1).to({y:29.3},0).wait(1).to({y:25.6},0).wait(1).to({y:19.6},0).wait(1).to({y:10.2},0).wait(1).to({y:-3.1},0).wait(1).to({y:-15.8},0).wait(1).to({y:-24.3},0).wait(1).to({y:-29.4},0).wait(1).to({y:-32.3},0).wait(1).to({y:-33.7},0).wait(1).to({y:-34.1},0).to({_off:true},1).wait(277));

	// frame_02_txt_03
	this.instance_16 = new lib.frame_02_txt_03();
	this.instance_16.setTransform(553.4,85.7);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(44).to({_off:false},0).wait(1).to({y:85.1},0).wait(1).to({y:83.1},0).wait(1).to({y:78.6},0).wait(1).to({y:69.8},0).wait(1).to({y:55},0).wait(1).to({y:42.7},0).wait(1).to({y:36.5},0).wait(1).to({y:33.8},0).wait(1).to({y:33.2},0).to({y:30.2},28).wait(1).to({y:29.8},0).wait(1).to({y:28.8},0).wait(1).to({y:26.6},0).wait(1).to({y:23},0).wait(1).to({y:17.2},0).wait(1).to({y:7.9},0).wait(1).to({y:-5},0).wait(1).to({y:-17.5},0).wait(1).to({y:-25.8},0).wait(1).to({y:-30.8},0).wait(1).to({y:-33.6},0).wait(1).to({y:-35},0).wait(1).to({y:-35.3},0).to({_off:true},1).wait(277));

	// frame_02_txt_02
	this.instance_17 = new lib.frame_02_txt_02();
	this.instance_17.setTransform(440.5,85.9);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(44).to({_off:false},0).wait(1).to({y:85.3},0).wait(1).to({y:83.3},0).wait(1).to({y:78.8},0).wait(1).to({y:70},0).wait(1).to({y:55.2},0).wait(1).to({y:42.9},0).wait(1).to({y:36.7},0).wait(1).to({y:34},0).wait(1).to({y:33.4},0).to({y:30.4},28).wait(1).to({y:30},0).wait(1).to({y:29},0).wait(1).to({y:26.8},0).wait(1).to({y:23.2},0).wait(1).to({y:17.4},0).wait(1).to({y:8.1},0).wait(1).to({y:-4.8},0).wait(1).to({y:-17.3},0).wait(1).to({y:-25.6},0).wait(1).to({y:-30.6},0).wait(1).to({y:-33.4},0).wait(1).to({y:-34.8},0).wait(1).to({y:-35.1},0).to({_off:true},1).wait(277));

	// frame_02_txt_01
	this.instance_18 = new lib.frame_02_txt_01();
	this.instance_18.setTransform(336.1,85.9);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(44).to({_off:false},0).wait(1).to({y:85.3},0).wait(1).to({y:83.3},0).wait(1).to({y:78.8},0).wait(1).to({y:70},0).wait(1).to({y:55.2},0).wait(1).to({y:42.9},0).wait(1).to({y:36.7},0).wait(1).to({y:34},0).wait(1).to({y:33.4},0).to({y:30.4},28).wait(1).to({y:30},0).wait(1).to({y:29},0).wait(1).to({y:26.8},0).wait(1).to({y:23.2},0).wait(1).to({y:17.4},0).wait(1).to({y:8.1},0).wait(1).to({y:-4.8},0).wait(1).to({y:-17.3},0).wait(1).to({y:-25.6},0).wait(1).to({y:-30.6},0).wait(1).to({y:-33.4},0).wait(1).to({y:-34.8},0).wait(1).to({y:-35.1},0).to({_off:true},1).wait(277));

	// bg_02
	this.instance_19 = new lib.bg_02();
	this.instance_19.setTransform(484.9,33,3.233,0.264,0,0,0,150,125);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(47).to({_off:false},0).to({_off:true},138).wait(187));

	// mc_frame_01
	this.instance_20 = new lib.mc_frame_01();
	this.instance_20.setTransform(484.8,31.8,0.999,0.999,0,0,0,71.5,-12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({scaleX:1.03,scaleY:1.03,x:484.7},37).wait(1).to({regX:110.5,regY:-14.6,scaleX:1.1,scaleY:1.1,x:527.6,y:29.7},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:540.4,y:29},0).wait(1).to({scaleX:2.15,scaleY:2.15,x:568.5,y:27.7},0).wait(1).to({scaleX:3.41,scaleY:3.41,x:617.4,y:25.2},0).wait(1).to({scaleX:5.4,scaleY:5.4,x:695,y:21.3},0).wait(1).to({scaleX:8.42,scaleY:8.42,x:812.7,y:15.4},0).wait(1).to({scaleX:13.02,scaleY:13.02,x:991.9,y:6.5},0).wait(1).to({scaleX:20.44,scaleY:20.44,x:1281.1,y:-8},0).wait(1).to({regX:71.5,regY:-12.7,scaleX:35.91,scaleY:35.91,x:483.1,y:30.2},0).to({_off:true},1).wait(325));

	// bg_01
	this.instance_21 = new lib.bg_01();
	this.instance_21.setTransform(484.9,33,3.233,0.264,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({_off:true},47).wait(325));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484.5,32.5,971,134.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;