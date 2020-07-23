function setup() {
  createCanvas(500,500);
  createSprite(400, 200, 50, 50);
  database = firebase.database();
}

foodStock=database.ref('Food');
foodStock.on("value", readStock);


function draw() {
  background(255,255,255);  
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {
  if(x <= 0){
    x = 0;
  }

  else{
    x = x -1;
  }

  database.ref('/').update ({
    Food: x
  })
}


