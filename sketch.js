//https://discourse.processing.org/t/load-obj-model-with-mtl-file-and-jpg-texture/4634/9

let angle = 0;
let bichito = 0;
let c = 0;
let x,
  y,
  z = 0;
let texturita = 0
let vel = 0.03;
let pg;

function preload() { //si lo cargo aca con preload, cambia la realcion de scala no se porque.


  texturita = loadImage('obj/texturita.png')
  bichito = loadModel("obj/conejitomalevolo.obj", true);
}

function setup() {
  createCanvas(800, 800);
  //bichito = loadModel("bichito.obj");
  pg = createGraphics(800, 800, WEBGL);

}

function draw() {
 

  // pg.ambientLight(200);
  // //normalMaterial();
  // pg.noStroke();
  // pg.specularMaterial(200);
  // pg.directionalLight(255, 255, 255, 0, 100, 100);
  //rotateX(angle);
  pg.push();
  pg.background(150);
  pg.rotateZ(3.14 + angle * 1.9);
 pg.translate(0, 0, 400) //mov i
  pg.rotateY(3.14 + sin(angle * 1));
  pg.rotateX(0);
  pg.scale(1);
  pg.box(100);
  pg.texture(texturita)
  pg.model(bichito);
  angle += vel;
  pg.pop();
 
  image(pg, 0, 0)
  //  model(viejos[0]);
  //box( 100,100,100)

  //console.log(mouseX)
}

// function windowResized() {
//   resizecanvas(windowWidth, windowHeight);
// }

function keyPressed() {
  if (key == 'a') {
    vel = 0;
  }
  if (key == 's') {
    vel = 0.8;
  }

}