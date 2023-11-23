// width and height of the nft
var nftW = 500;
var nftH = 500;
// pre loader array varible n runs in for loop to load the images need for the collection generation
var n = 1;
// this is the number of nft that has been generated at the time of the initialization of the script
var nftN = 0;
// these are the arrays of the layers.
let trait1=[];
let trait2=[];
let trait3=[];
let trait4=[];
let trait5=[];
let trait6=[];
//image number to be show per layer
var t1 = 1;
var t2 = 1;
var t3 = 1;
var t4 = 1;
var t5 = 1;
var t6 = 1;
//bacground color of the nft
var R=100;
var G=200;
var B=250;
//sleep variable to prevent crash
var sleep = false;
// metadata json
let metadata = {};//new JSON object
// attributes json
let attributesJSON = {};//new JSON object
 //setup
function setup() {
  //load all needed images need for each layers using n and  the arrays
// did not use preload cause it was giving me a runtime performance issue
//load background shadow
bg= loadImage('layers/background.png');
//max value of n should be 7 pluse 1 equals 8
for(let n=1; n<19; n++){
trait1[n] = loadImage('layers/'+'trait1/'+n+'.png');
trait2[n]  = loadImage('layers/'+'trait2/'+n+'.png');
trait3[n]  = loadImage('layers/'+'trait3/'+n+'.png');
trait4[n]  = loadImage('layers/'+'trait4/'+n+'.png');
trait5[n]  = loadImage('layers/'+'trait5/'+n+'.png');
trait6[n]  = loadImage('layers/'+'trait6/'+n+'.png');
}

  createCanvas(windowWidth,windowHeight);
  nftNumber = createP('nft number');
  nftNumber.html('loading layers...');
  // set image number variables to their right value using nftN
 
  // set image array to trait name for attributesJSON usage
  //this is one freaking long code use another js called trait map instead
  // don't use if statment, use array instaed
}
//draw real time canvas refresh
function draw() {
  background(250,250,250);
  translate((windowWidth/2)-nftW/2,(windowHeight/2)-nftH/2);
  rect(0,0,nftW,nftH);
  noStroke();
  fill(R,G,B);
  image(bg,0,0,nftW,nftH);
  image(trait1[t1],0,0,nftW,nftH);
  image(trait2[t2],0,0,nftW,nftH);
  image(trait3[t3],0,0,nftW,nftH);
  image(trait4[t4],0,0,nftW,nftH);
  image(trait5[t5],0,0,nftW,nftH);
  image(trait6[t6],0,0,nftW,nftH);
  
  if(sleep==true){
    nftNumber.html('Sleep mode ON');
  }else{
    nftNumber.html(nftN);
  }
}
//fuction update
function update(){
// check if operation is in sleep mode
if(sleep==true){
}else{
   //save current canvas
   //saveCanvas('SandPirate','png');
   //genration algorithm
   //slide the image number varaibles appropraitly

   // generation algorithm
    if(t2<18){
      //change value to 13 for next tribe
      t2++;
      //cloths
      if(t6<7){t6++;}else{t6=1;if(t5<7){t5++;}else{t5=1}}
    }else{
      //change value to 3 for next tribe
      t2=8;
      if(t3<10){
      t3++;
    }else{
      t3=1;
       if(t4<10){
        t4++
       }else{
         t4=1;
         //end of first tribe
       }
    }
  }
    //remove this and make background color a trait that way you gat get the background color name.
   // generate the perfect background color for the image
   R=random(120,250);
   G=random(120,250);
   B=random(120,250);
   // increase nftN
   nftN++; 
}

}

function keyPressed() {
   if(key ==' '){
 update(); }
     }