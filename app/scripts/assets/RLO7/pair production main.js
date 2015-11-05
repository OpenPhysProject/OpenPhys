(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Beam = function() {
	this.spriteSheet = ss["pair production main_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.FlashAICBAssets = function() {
	this.spriteSheet = ss["pair production main_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Xraymachine = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHA8IAAgzIgnhEIASAAIAcA6IAAAAIAdg6IASAAIgpBDIAAA0g");
	this.shape.setTransform(55.6,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiA8IgNgmIgpAAIgNAmIgQAAIAph3IARAAIAqB3gAgRAKIAiAAIgRg3g");
	this.shape_1.setTransform(46.6,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXA9QgCgEgGgZQgCgNgGgFQgFgGgKAAIgOAAIAAA1IgQAAIAAh2QAOgDAQAAQAXAAAKAKQAKAJAAAOQAAAXgXAGIAAABQANAEAFAUQAHAeACAEgAgWguIAAAsIAQAAQAKAAAIgGQAIgHgBgKQAAgXgaAAQgHAAgIACg");
	this.shape_2.setTransform(36.6,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAGIAAgKIArAAIAAAKg");
	this.shape_3.setTransform(28.5,26.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcA8IgPgbIgNgYIAAAAIgbAzIgSAAIAlg8Igkg7IASAAIAaAxIAAAAIAbgxIASAAIglA7IAmA8g");
	this.shape_4.setTransform(21,25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AibCAIAAj/IE3AAIAAD/g");
	this.shape_5.setTransform(77.7,26.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AkhEHQgpAAgegdQgdgdAAgqIAAlGQAAgpAdgdQAdgdAqAAIJEAAQApAAAdAdQAdAdAAApIAAFGQAAApgdAeQgdAdgpAAg");
	this.shape_6.setTransform(39,26.3);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93.4,52.7);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Beam();
	this.instance.setTransform(-95.1,-49,0.885,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.1,-49,190.3,98);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Beam();
	this.instance.setTransform(-95.1,-49,0.885,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-95.1,-49,190.3,98);


(lib.Photonstream = function() {
	this.initialize();

	// Photons
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape.setTransform(1436.5,-72.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_1.setTransform(1601.5,73.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_2.setTransform(1445.5,60.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_3.setTransform(1560.5,-68.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_4.setTransform(1913.5,48.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_5.setTransform(1872.5,-54.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_6.setTransform(1826.5,60.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_7.setTransform(1771.5,-23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_8.setTransform(1649.5,32.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_9.setTransform(1625.5,-23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_10.setTransform(1532.5,26.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_11.setTransform(1480.5,-27.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_12.setTransform(-1676.3,-72.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_13.setTransform(-1511.3,73.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_14.setTransform(-1667.3,60.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_15.setTransform(-1552.3,-68.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_16.setTransform(-1199.3,48.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_17.setTransform(-1240.3,-54.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_18.setTransform(-1286.3,60.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_19.setTransform(-1341.3,-23.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_20.setTransform(-1463.3,32.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_21.setTransform(-1487.3,-23.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_22.setTransform(-1580.3,26.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_23.setTransform(-1632.3,-27.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_24.setTransform(898.9,-72.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_25.setTransform(1063.9,73.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_26.setTransform(907.9,60.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_27.setTransform(1022.9,-68.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_28.setTransform(1375.9,48.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_29.setTransform(1334.9,-54.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_30.setTransform(1288.9,60.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_31.setTransform(1233.9,-23.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_32.setTransform(1111.9,32.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_33.setTransform(1087.9,-23.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_34.setTransform(994.9,26.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_35.setTransform(942.9,-27.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_36.setTransform(-1190.7,-72.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_37.setTransform(-1025.7,73.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_38.setTransform(-1181.7,60.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_39.setTransform(-1066.7,-68.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_40.setTransform(-713.7,48.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_41.setTransform(-754.7,-54.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_42.setTransform(-800.7,60.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_43.setTransform(-855.7,-23.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_44.setTransform(-977.7,32.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_45.setTransform(-1001.7,-23.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_46.setTransform(-1094.7,26.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_47.setTransform(-1146.7,-27.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_48.setTransform(380.5,-72.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_49.setTransform(545.5,73.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_50.setTransform(389.5,60.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_51.setTransform(504.5,-68.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_52.setTransform(857.5,48.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_53.setTransform(816.5,-54.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_54.setTransform(770.5,60.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_55.setTransform(715.5,-23.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_56.setTransform(593.5,32.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_57.setTransform(569.5,-23.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_58.setTransform(476.5,26.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_59.setTransform(424.5,-27.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_60.setTransform(-669.1,-72.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_61.setTransform(-504.1,73.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_62.setTransform(-660.1,60.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_63.setTransform(-545.1,-68.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_64.setTransform(-192.1,48.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_65.setTransform(-233.1,-54.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_66.setTransform(-279.1,60.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_67.setTransform(-334.1,-23.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_68.setTransform(-456.1,32.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_69.setTransform(-480.1,-23.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_70.setTransform(-573.1,26.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_71.setTransform(-625.1,-27.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_72.setTransform(-139.5,-72.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_73.setTransform(25.5,73.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_74.setTransform(-130.5,60.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_75.setTransform(-15.5,-68.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_76.setTransform(337.5,48.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_77.setTransform(296.5,-54.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_78.setTransform(250.5,60.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_79.setTransform(195.5,-23.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_80.setTransform(73.5,32.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_81.setTransform(49.5,-23.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_82.setTransform(-43.5,26.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_83.setTransform(-95.5,-27.5);

	this.addChild(this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1680.6,-76.8,3598.5,154.6);


(lib.Title = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FlashAICBAssets();
	this.instance.setTransform(0,-6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-6,345,58);


(lib.Body = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AC/bBQgngNADguQAAgTgTjVQgSjXgDgMQgHgZgHhTQgIhcAGgjQACgcgIglIgShCQgFgYgWjMIgZjbIgNhVQgHgzAAgjIAEgkQABgVgLgDQgMADABAVIADAkQAAAjgHAzIgNBVIgYDdQgXDJgFAZIgTBAQgKAlAGAeQAFAkgHBbQgHBUgHAYQgDAMgTDXQgSDVAAATQADAugnANQgmAMgmgcQgGgEgGgLQgGgMgGgEIgjgYQgRgLAIgWQAIgUAQgDQBDgRgbifIgui4QgahnAAhLQAAgxAEgZQAHgqAVggIAPh6QAOhzgFgKQgFgLgOiiQgNidAAggQACgggEhCQgEhCACggQACgZAIg0QAIgyACgaQAEgeAMg8QAMg8AEgdQAMgqAAguQADhTAAhUQAAijgPhIQgJATgDAkIgEA4IgHAsQgFAbAAARQAGBWgeBZIgfBgQgSA5gKAqIgZBUQgNAxgCAlQgCATgNBAQgKAyAFAiQAAAWgDAOQgGAbgPgPQgHgHgCgYQgBgZgCgIQgHgZgFAVQgEAPAAARQgEAYgMA0QgDAIgJABQgJABgHgHQgFgPAFgQQADgPACgbQACgdACgNQgFAEgNAzQgPA2gDAGQgGAJgLgGQgLgFAAgJIAQhsQgCAAgLAtQgLAugEAFQgNANgHgRQgEgLAAgNQACgZAMgzQAMgzACgdQgOACgTAiQgTAggYAAQgWAAAQgbIAaglIAPggQAJgUAMgHIAggTQATgJANgKQARgPAIgiQAHgnAEgQQANg3AFhYQAGhzADgdQADggAPgrIAahIQAHgaAEixIAFjMQAAgsAEgYQAGgqASgVQAdgeA7gOQBjgkAYgKQBZgpgFghQAAgNgQgpQgQgqgIgDQgMgDgIgkIgIgxQgMgkAAgsQAAhWA2g/QA3g+BKAAIASAAQBLAAA2A+QA3A/AABWQAAAsgMAkIgIAxQgIAkgMADQgIACgPAtIgRA0QgFAiBbApQA0AYBFAVQAfAIAQAGQAZALAQATQASAUAFApQADAXACAvQAAFvAQAoIAaBIQAPArACAgQAEAwAEBgQAGBVAOA6IAMA3QAJAiAPAPQAaATAmATQALAHAKAVQAMAbADAEIAdAmQAWAdgIAFQgXgCgTggQgTgggPgCQACAaAMA0QAMA0ACAaQAAALgGANQgHAQgLgNQgEgEgLguQgLgtgBAAIAPBrQAAANgKAFQgLAGgGgMQgEgHgOg1QgOgzgEgEIAEAqIAEApQAFAQgFAQQgGAJgKgCQgJgBgDgKQgJgbgHgwIgFgiQgDgSgIAYIgDAhQgCAYgHAHQgPAPgGgbQgDgOAAgWQAFgigKgyQgNhBgCgTQAAgjgOgwIgahWQgVhegmhlQgehZAGhXQAAgQgFgbIgHgsQgDgMgEgtQgDgngGgQQgPBIAACkQAABTADBUQAAASAFAaIAHAsQAEAcAMA9QAMA7AEAfQABATAKA5QAJAwAAAdQACAlgDA9IgDBiQAAAhgNCdQgNCkgGAIQgHALANByQANBpAFARQAIAbACAoQACAYAAAxQAABIgbBqQgoCdgFAbQgJA6AEAqQAGBBAnALQAQADAHAUQAHAVgOAMIgkAYQgGAEgGAMQgGALgGAEQgaAUgaAAQgLAAgMgEg");
	this.shape.setTransform(69.8,173.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,139.7,346.7);


(lib.Background = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDFFEA","#94846F"],[0,1],0,0,0,0,0,429.1).s().p("Egq8AfPMAAAg+dMBV5AAAMAAAA+dg");
	this.shape.setTransform(275,200);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,550,400);


// stage content:
(lib.pairproductionmain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"0 sec":0,"1 sec":24,"2 sec":47,"3 sec":71,"4 sec":95,"5 sec":119,"6 sec":143,"7 sec":167,"8 sec":191,"9 sec":215,"10 sec":239,"11 sec":263,"12 sec":287,"13 sec":311,"14 sec":335,"15 sec":359,"16 sec":383,"17 sec":407,"18 sec":431,"19 sec":455,"20 sec":479,"21 sec":503,"22 sec":527,"23 sec":551,"24 sec":575,"25 sec":599,"26 sec":623,"27 sec":647,"28 sec":671,"29 sec":695,"30 sec":719});

	// Title
	this.instance = new lib.Title();
	this.instance.setTransform(287.5,197.6,1,1,0,0,0,174.2,30.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({alpha:0},33).to({_off:true},1).wait(651));

	// X-Ray Source
	this.instance_1 = new lib.Xraymachine();
	this.instance_1.setTransform(123.4,148,1,1,0,0,0,46.6,26.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({_off:false},0).wait(60).to({scaleX:4.3,scaleY:4.3,x:-402.8,y:220.2},24).to({_off:true},12).wait(555));

	// Beam
	this.instance_2 = new lib.Beam();
	this.instance_2.setTransform(143.9,97,0.885,1);

	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(239,146);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(94.8,211.6,4.304,4.304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},84).to({state:[{t:this.instance_3}]},47).to({state:[{t:this.instance_4}]},24).to({state:[]},12).wait(555));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(131).to({_off:false},0).to({_off:true,scaleX:4.3,scaleY:4.3,x:94.8,y:211.6},24).wait(567));

	// Body
	this.instance_5 = new lib.Body();
	this.instance_5.setTransform(285.5,200,1,1,0,0,0,69.9,173.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(107).to({_off:false},0).wait(24).to({scaleX:4.3,scaleY:4.3,x:295,y:444},24).to({_off:true},12).wait(555));

	// Photons
	this.instance_6 = new lib.Photonstream();
	this.instance_6.setTransform(-1249.2,180.1,1,1,0,0,0,118.6,0.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(167).to({_off:false},0).to({x:1815.6},72).to({_off:true},1).wait(482));

	// X-Ray Beam
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("Egq8APiIAA/EMBV5AAAIAAfEg");
	this.shape.setTransform(274,192.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(167).to({_off:false},0).wait(72).to({_off:true},1).wait(482));

	// Background
	this.instance_7 = new lib.Background();
	this.instance_7.setTransform(274.9,200,1,1,0,0,0,274.9,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(722));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,200,550,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;