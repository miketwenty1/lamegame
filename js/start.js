function start() {
  var canvas = document.getElementById('lamegame');
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(0, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(canvas.width, 50);
  ctx.lineTo(canvas.width-100, 75);
  ctx.lineTo(canvas.width-100, 25);
  ctx.fill();

}

function loadLevel1() {

  var canvas = document.getElementById('lamegame');
  var ctx = canvas.getContext('2d');
  const img = new Image();
  img.src = "enemy1.png"
  img.onload = () => {
    ctx.drawImage(img, 210, 0, 140, 140)
  }
  const MARIO_WIDTH = 32;
  const MARIO_HEIGHT = 39;
  var mario = new Image();
  mario.src = "mario_spritesheet.png"
  // var imge = new Image();
  // imge = "enemy1.png"

  // var img = document.getElementById("e1");
  mario.onload = () => {
    // ctx.drawImage(img, 0, 0, img.width, img.height, 200, 200, img.width, img.height)
    ctx.drawImage(
      // Image
      mario,
      // ---- Selection ----
      0, // sx
      MARIO_HEIGHT * 4, // sy
      MARIO_WIDTH, // sWidth
      MARIO_HEIGHT, // sHeight
      // ---- Drawing ----
      0, // dx
      0, // dy
      MARIO_WIDTH * 1.5, // dWidth
      MARIO_HEIGHT * 1.5 // dHeight
    );
    // update();
    
  }
  // imge.onload = () => { for some reason this doesn't work with multiple images doing this "image on load" may not work multiple times
  //   ctx.drawImage(imge, 0, 0)
  // }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgb(200,0,0)';
  ctx.fillRect(10,10,50,50);
  ctx.fillStyle = 'rgba(0, 0, 200, 0.2)';
  ctx.fillRect(30, 30, 50, 50);
  
  // text bubble
  var rx = 0;
  var ry = 0;
  var xoffset = 250;
  var yoffset = 150;
  ctx.beginPath();
  ctx.moveTo(rx+75+xoffset, ry+25+yoffset);
  ctx.quadraticCurveTo(rx+25+xoffset, ry+25+yoffset, rx+25+xoffset, ry+62.5+yoffset);
  ctx.quadraticCurveTo(rx+25+xoffset, ry+100+yoffset, rx+50+xoffset, ry+100+yoffset);
  ctx.quadraticCurveTo(rx+50+xoffset, ry+120+yoffset, rx+30+xoffset, ry+125+yoffset);
  ctx.quadraticCurveTo(rx+60+xoffset, ry+120+yoffset, rx+65+xoffset, ry+100+yoffset);
  ctx.quadraticCurveTo(rx+125+xoffset, ry+100+yoffset, rx+125+xoffset, ry+62.5+yoffset);
  ctx.quadraticCurveTo(rx+125+xoffset, ry+25+yoffset, rx+75+xoffset, ry+25+yoffset);
  ctx.stroke();

  // bubble grid
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.fillStyle = 'rgba(' + Math.floor(255 - 42.5 * i) + ', ' + Math.floor(255 - 42.5 * j) + ', 255, .8)';
      ctx.fillRect((j * 25)+200, (i * 25)+200, 25, 25);
    }
  }
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' + 
                        Math.floor(255 - 42.5 * j) + ')';
      ctx.beginPath();
      ctx.arc((12.5 + j * 25)+200, (12.5 + i * 25)+200, 10, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }
  
  // game loop (i want to take this out of this and make a generic game loop with parameters.)
  for (var i = 0; i < 10; i++) {
    
  }

}
function loadLevel2() {
  var canvas = document.getElementById('lamegame');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgb(200,200,0)';
  ctx.fillRect(10,10,50,50);
  ctx.fillStyle = 'rgba(50, 200, 50, 0.2)';
  ctx.fillRect(30, 30, 50, 50);

  var p = new Path2D('M100 10 h 180 v 60 h -280 Z');
  ctx.fill(p);
  var img = new Image();
  img.src = "enemy2.png"
  // var img = document.getElementById("e1");
  img.onload = () => {
    ctx.drawImage(img, 190, 190)
  }
}
function loadLevel3() {
  var canvas = document.getElementById('lamegame');
  var ctx = canvas.getContext('2d');
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50);

  var xoffset = 125;
  var yoffset = 140;
  ctx.beginPath();
  ctx.moveTo(75+xoffset, 40+yoffset);
  ctx.bezierCurveTo(75+xoffset, 37+yoffset, 70+xoffset, 25+yoffset, 50+xoffset, 25+yoffset);
  ctx.bezierCurveTo(20+xoffset, 25+yoffset, 20+xoffset, 62.5+yoffset, 20+xoffset, 62.5+yoffset);
  ctx.bezierCurveTo(20+xoffset, 80+yoffset, 40+xoffset, 102+yoffset, 75+xoffset, 120+yoffset);
  ctx.bezierCurveTo(110+xoffset, 102+yoffset, 130+xoffset, 80+yoffset, 130+xoffset, 62.5+yoffset);
  ctx.bezierCurveTo(130+xoffset, 62.5+yoffset, 130+xoffset, 25+yoffset, 100+xoffset, 25+yoffset);
  ctx.bezierCurveTo(85+xoffset, 25+yoffset, 75+xoffset, 37+yoffset, 75+xoffset, 40+yoffset);
  ctx.fill();
  var img = new Image();
  img.src = "enemy3.png"
  // var img = document.getElementById("e1");
  img.onload = () => {
    ctx.drawImage(img, 190, 190)
  }
}
async function loadsmile() {
  var canvas = document.getElementById('lamegame');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var gx = Math.floor(Math.random() * canvas.width+1);
  var j;
  for (j = 0; j < 200; j++) {
    var i;
    for (i = 0; i < 30; i++) {
      var rx = Math.floor(Math.random() * canvas.width+1);
      var ry = Math.floor(Math.random() * canvas.height+1);
      ctx.strokeStyle = "rgb(" + rx % 255 + ","+ gx % 255 +"," + ry % 255 + ")";
      ctx.beginPath();
      ctx.arc(rx, ry, 50, 0, Math.PI * 2, true); // Outer circle
      ctx.moveTo(rx+35, ry);
      ctx.arc(rx, ry, 35, 0, Math.PI, false);  // Mouth (clockwise)
      ctx.moveTo(rx-10, ry-10);
      ctx.arc(rx-15, ry-10, 5, 0, Math.PI * 2, true);  // Left eye
      ctx.moveTo(rx+20, ry-10);
      ctx.arc(rx+15, ry-10, 5, 0, Math.PI * 2, true);  // Right eye
      ctx.stroke();

    }
    await sleep(100);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// function jiggle(img) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }