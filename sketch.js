//https://discourse.processing.org/t/load-obj-model-with-mtl-file-and-jpg-texture/4634/9

let angle = 0;
let bichito = 0;
let c = 0;
let x,
  y,
  z = 0;
let texturita = 0
let vel = 0.03 ; 
function preload() { //si lo cargo aca con preload, cambia la realcion de scala no se porque.


  texturita = loadImage('obj/texturita.png')
  bichito = loadModel("obj/conejitomalevolo.obj", true);
}

function setup() {
  createCanvas(400, 400, WEBGL);
  //bichito = loadModel("bichito.obj");

}

function draw() {
  background(255,255,0);
  ambientLight(200);

  //normalMaterial();
  noStroke();
  specularMaterial(200);
  directionalLight(255, 255, 255, 0, 100, 100);

   //rotateX(angle);


  rotateZ (3.14+angle*1.9);


  translate(0, 0, 200) //mov i

  rotateY(3.14+sin(angle*1));
  rotateX(0);
  scale(1);
  texture(texturita)
  model(bichito);

  //  model(viejos[0]);
  //box( 100,100,100)
  angle += vel;
//console.log(mouseX)
}

// function windowResized() {
//   resizecanvas(windowWidth, windowHeight);
// }

function keyPressed() {
if (key == 'a'){
vel = 0;
}
if (key == 's'){
  vel = 0.8;
  }

}