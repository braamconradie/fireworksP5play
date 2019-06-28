function Firework(){
    this.firework = new Particle(random(width),height);
    this.update = function(){
        // ONLY SHOW IT IF IT EXISTS
        if (this.firework){
            this.firework.applyForce(gravity);
            this.firework.update();   
          
            if (this.firework.vel.y>=2){
  
              this.explode();
              this.firework=null;
            }
          
        }
      
        // this tests if firework is turning around at the top. setting it to null makes it disappear
        // this works even if you delete the if (this.firework), because if it does not exist there is nothing to show

     this.explode = function (){
        console.log('exploded ');
        rect(this.firework.pos.x, this.firework.pos.y, 10,10);
        animation(braamvuurwerk, this.firework.pos.x,this.firework.pos.y);
        // image('https://cdn.glitch.com/a7ee58d1-abe8-4897-8ef9-48150697c7dd%2Fsprite_7.png?v=1561693676514',40,40)
        // image('https://cdn.glitch.com/a7ee58d1-abe8-4897-8ef9-48150697c7dd%2Fsprite_1.png?v=1561693676634',this.firework.pos.x, this.firework.pos.y);
         // hierdie maak weird vierkante
        // for (let i=0; i<5;i++){
        //   rect(this.firework.pos.x+i*5, this.firework.pos.y+i*5, 10,10);
        // }         
     }    
    }
   this.show = function(){
     // only show if it exists
     if (this.firework){
        this.firework.show();
     }
    
   };
}