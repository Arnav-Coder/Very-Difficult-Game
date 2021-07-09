var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3e7bdbf9-452b-49ff-b099-11253d4c4017","e6f65644-8669-4935-ac54-63c53f7ec679","a79a58e2-ca90-44e9-b353-9f63d7f6586d","d3f272e4-26fc-477f-9f44-c81ec1b256c4","d258e34a-580b-42a7-ba2f-54cb5071eaf4"],"propsByKey":{"3e7bdbf9-452b-49ff-b099-11253d4c4017":{"name":"virus02_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/BnjDVhiSCi1qxzxKHZpbeYSo.y5kz0tq/category_germs/virus02_04.png","frameSize":{"x":400,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"BnjDVhiSCi1qxzxKHZpbeYSo.y5kz0tq","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BnjDVhiSCi1qxzxKHZpbeYSo.y5kz0tq/category_germs/virus02_04.png"},"e6f65644-8669-4935-ac54-63c53f7ec679":{"name":"virus03_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jtYFwldEv_5qJnCT2glgiwdohYvywxlK/category_germs/virus03_02.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"jtYFwldEv_5qJnCT2glgiwdohYvywxlK","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jtYFwldEv_5qJnCT2glgiwdohYvywxlK/category_germs/virus03_02.png"},"a79a58e2-ca90-44e9-b353-9f63d7f6586d":{"name":"virus03_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png","frameSize":{"x":390,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7_fQFvQ9YjMoziYN80X0zhQJiJXHDA.t/category_germs/virus03_04.png"},"d3f272e4-26fc-477f-9f44-c81ec1b256c4":{"name":"virus03_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KoZz0QksHdpzqfX71bq5vgJR__O0e4sP/category_germs/virus03_03.png","frameSize":{"x":388,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"KoZz0QksHdpzqfX71bq5vgJR__O0e4sP","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KoZz0QksHdpzqfX71bq5vgJR__O0e4sP/category_germs/virus03_03.png"},"d258e34a-580b-42a7-ba2f-54cb5071eaf4":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"FBUCox3dcRp3pCA5ydZGVs.T9QB644Jb","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/d258e34a-580b-42a7-ba2f-54cb5071eaf4.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Creating Lives
var life = 10;

//Creating Boundaries and wining point
var boundary1 = createSprite(190,120,420,3);
    boundary1.shapeColor = "Lightblue";
var boundary2 = createSprite(190,260,420,3);
    boundary2.shapeColor = "Yellow";
var winingpoint = createSprite(380,192,52,140);
    winingpoint.shapeColor = "Yellow";
  
//Creating Player Named Sam
var sam = createSprite(20,190,13,13);
    sam.shapeColor = "green";
  
//Creating Enemies  
var car1 = createSprite(90,130,10,10);
    car1.setAnimation("virus02_04_1");
    car1.scale = 0.09;
var car2 = createSprite(160,250,10,10);
    car2.setAnimation("virus03_02_1");
    car2.scale = 0.09;
var car3 = createSprite(230,130,10,10);
    car3.setAnimation("virus03_04_1");
    car3.scale = 0.09;
var car4 = createSprite(300,250,10,10);
    car4.setAnimation("virus03_03_1");
    car4.scale = 0.09;
 
//Creating Gamestate
var gameState = "start";

function draw() {
  
if(keyDown("SPACE") && gameState == "start"){
//add the velocity to make the car move.
  car1.velocityY = 4;
  car2.velocityY = -4;
  car3.velocityY = 4;
  car4.velocityY = -4;
  gameState = "play";
}
  
  background("white");
  
  textSize(50);
  fill("lightgreen");
  text("Lives: " + life,100,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  fill("yellow");
  rect(0,119,3,140);
  fill("lightblue");
  rect(397,120,3,140);
  
// create bounceoff function to make the car bounceoff the boundaries
createEdgeSprites();
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  sam.bounceOff(edges);
  

//Add the condition to make the sam move left and right
if(gameState == "play"){
if(keyDown(LEFT_ARROW)){
  sam.x = sam.x-5;
}

if(keyDown(RIGHT_ARROW)){
  sam.x = sam.x+5;
}
}

//Add the condition to reduce the life of sam if it touches the car.
if(sam.isTouching(car1)){
  life = life-1;
  sam.x = 20;
  sam.y = 190;
  playSound("assets/category_hits/vibrant_next_page_button.mp3", false);
}
 
if(sam.isTouching(car2)){
  life = life-1;
  sam.x = 20;
  sam.y = 190;
  playSound("assets/category_hits/vibrant_next_page_button.mp3", false);

} 
  
if(sam.isTouching(car3)){
  life = life-1;
  sam.x = 20;
  sam.y = 190;
  playSound("assets/category_hits/vibrant_next_page_button.mp3", false);

}


if(sam.isTouching(car4)){
  life = life-1;
  sam.x = 20;
  sam.y = 190;
  playSound("assets/category_hits/vibrant_next_page_button.mp3", false);
}

//GAME OVER if life = 0
if(life == 0){
  background("black");
  textSize(50);
  fill("red");
  stroke("White");
  text("GAME OVER!",50,200);
  car1.destroy();
  car2.destroy();
  car3.destroy();
  car4.destroy();
  boundary1.destroy();
  boundary2.destroy();
  sam.destroy();
  winingpoint.destroy();
}

if(sam.isTouching(winingpoint)){
  background("Yellow");
  textSize(50);
  fill("red");
  stroke("White");
  text("YOU WIN",90,200);
  car1.destroy();
  car2.destroy();
  car3.destroy();
  car4.destroy();
  boundary1.destroy();
  boundary2.destroy();
  sam.shapeColor = "Yellow";
}
  
 drawSprites();

  if(gameState == "start")
{ fill("Red");
  textSize(25);
  text("Press 'SPACE' To Start",60,200);
}
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
