// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/CKeyIbT3vXI

function Particle(x,y){
  this.pos = createVector(x,y);
  this.vel = createVector(0,random(-12,-5));
  this.acc = createVector(0,0);
  
  //force = mass * acceleration
  this.applyForce = function (force){
    this.acc.add(force);
  }
  
  this.update = function (){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    //after update must zero out else will keep accumulating
    this.acc.mult(0);
  }
  
  this.show = function (){
    point(this.pos.x, this.pos.y);
  }
  
}