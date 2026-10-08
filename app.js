// iport Konva from 'konva';

/* const container = document.getElementById("mainBody");

const stage = new Konva.Stage({
  container: 'mainBody',
  width: container.clientWidth,
  height: container.clientHeight,
});

const layer = new Konva.Layer();

stage.add(layer);

let circleProperties = {
  x: 400,
  y: 300,
  radius: 50,
  fill: 'red',
  draggable: true
}

const circle = new Konva.Circle(circleProperties);

const imageObj = new Image();
imageObj.onload = function () {
  const thing = new Konva.Image({
    x:500,
    y:500,
    image: imageObj,
    width: 1469,
    height: 1008,
    z: 1,

  });

    layer.add(thing);
};

imageObj.src = '..//assets/images/starting-page.jpg';
layer.add(circle);

let html = ``;

html=`
        <button id="startGame" class="start-game-btn">Start Game</button>
        <button id="LoadSaves" class="Load-gamesaves-btn">Load Saves</button>`;

container.innerHTML += html; */

let button = document.getElementById("startGame");
let bg = document.getElementById("bgthing");

button.addEventListener("click", function(){

  bg.style = "background: black; width: 1000rem; height: 100dvh; position: absolute; z-index: 100; align-self: center";

  bg.animate([
    {opacity: 0},
    {opacity: 0.2},
    {opacity: 0.4},
    {opacity: 0.6},
    {opacity: 0.8},
    {opacity: 1},
  ],
  {
    duration: 2000,
    iterations: 1,
    easing: 'ease-in-out'
  }

  );

  document.getElementById("mainBody")

});
