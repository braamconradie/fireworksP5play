// Daniel Shiffman 
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/CKeyIbT3vXI

//label m y handr awn pics 

let vuur1, vuur2, vuur3, vuur4, vuur5, vuur6, vuur7, vuur8


var fireworks = [];
var gravity;
var braamvuurwerk;


function preload(){
    vuur1 = 'https://cdn.glitch.com/a7ee58d1-abe8-4897-8ef9-48150697c7dd%2Fsprite_1.png?v=1561693676634';
    vuur2 = 'https://cdn.glitch.com/a7ee58d1-abe8-4897-8ef9-48150697c7dd%2Fsprite_2.png?v=1561693675778';
    vuur3 = 'https://cdn.glitch.com/a7ee58d1-abe8-4897-8ef9-48150697c7dd%2Fsprite_3.png?v=1561693675883';
    vuur4 = 'https://cdn.glitch.com/a7ee58d1-abe8-4897-8ef9-48150697c7dd%2Fsprite_4.png?v=1561693675839';
    vuur5 = 'https://cdn.glitch.com/a7ee58d1-abe8-4897-8ef9-48150697c7dd%2Fsprite_5.png?v=1561693676078';
    vuur6 = 'https://cdn.glitch.com/a7ee58d1-abe8-4897-8ef9-48150697c7dd%2Fsprite_6.png?v=1561693676243';
    vuur7 = 'https://cdn.glitch.com/a7ee58d1-abe8-4897-8ef9-48150697c7dd%2Fsprite_7.png?v=1561693676514';
    vuur8 = 'https://cdn.glitch.com/a7ee58d1-abe8-4897-8ef9-48150697c7dd%2Fsprite_8.png?v=1561693676380';
  
}








function setup() {
  //setting it up here makes it run faster f g
  // image('https://cdn.glitch.com/a7ee58d1-abe8-4897-8ef9-48150697c7dd%2Fsprite_1.png?v=1561693676634',30,30);
  createCanvas(400,300);
  gravity = createVector(0, 0.2);
  braamvuurwerk = loadAnimation(vuur1, vuur2, vuur3, vuur4, vuur5, vuur6, vuur7, vuur8);
  console.log(braamvuurwerk);
  createSprite(200, 200, 50, 50);
  stroke(255);
  strokeWeight(4);

}

function draw() {
  background(51);
  drawSprites();
  
  // give it only a 10% chance of firing else there are too many
  if (random(1)<0.1){
         fireworks.push(new Firework());
      };
  for (var i = 0; i<fireworks.length; i++){
    fireworks[i].update();
    fireworks[i].show();
  }
  
}