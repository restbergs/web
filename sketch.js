//https://discourse.processing.org/t/load-obj-model-with-mtl-file-and-jpg-texture/4634/9

let angle = 0;
let bichito = 0;
let c = 0;
let x,
  y,
  z = 0;
let texturita = 0
let vel = 0.03 ; 
let iluminacion = 0 ; 
let camara, estado, contador, umbral, max, posX, posY, posZ;
let estadoClick = 0;
let movScala = 1; 
function preload() { //si lo cargo aca con preload, cambia la realcion de scala no se porque.


  texturita = loadImage('obj/texturita.png')
  bichito = loadModel("obj/conejitomalevolo.obj", true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //bichito = loadModel("bichito.obj");

}

function draw() {
  background(255,255,0);
  ambientLight(200,200,200);

  //normalMaterial();
  noStroke();
  specularMaterial(200);
 
  //orbitControl();
   //rotateZ (3.14);
   //rotateY(3.14);

  rotateZ (3.14+angle*1.9);
  rotateY(3.14+angle*1.2);
  //rotateX(0);
 
  
  // translate(0, 0, 200) //mov i

  
  

  
  //console.log ( movScala);
  //constrain ( movScala, )
 
 // movScala = constrain(mouseX/500, 0.1, 0.7);
 movScala= 3; 
 scale(movScala);
  texture(texturita)
  model(bichito);

  //  model(viejos[0]);
  //box( 100,100,100)
  angle += vel;
//console.log(mouseX)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
// function windowResized() {
//   resizecanvas(windowWidth, windowHeight);
// }

function keyPressed() {
if (key == 'a'){
 console.log ( "HOLAAA!")
  vel= 0 ;

}

if (key == 's'){
  vel = 0.8;
  }

}

function mouseClicked(){
   estadoClick ++;
   

   if ( estadoClick == 1){
         vel=0;
   }
   else if (estadoClick == 2){
   // vel=random(0.05, 0.2);
   vel = map ( mouseX, 0, width, 0.02, 0.1);
   }
   
   if (estadoClick == 3){
    vel=0;
    estadoClick = 1;
   }
   console.log (estadoClick)
}

