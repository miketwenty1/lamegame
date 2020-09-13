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
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgb(200,0,0)';
  ctx.fillRect(10,10,50,50);
  ctx.fillStyle = 'rgba(0, 0, 200, 0.2)';
  ctx.fillRect(30, 30, 50, 50);
}
function loadLevel2() {
  var canvas = document.getElementById('lamegame');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgb(200,200,0)';
  ctx.fillRect(10,10,50,50);
  ctx.fillStyle = 'rgba(50, 200, 50, 0.2)';
  ctx.fillRect(30, 30, 50, 50);
}
function loadLevel3() {
  var canvas = document.getElementById('lamegame');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50);
}
async function loadsmile() {
  var canvas = document.getElementById('lamegame');
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var j;
  for (j = 0; j < 200; j++) {
    var i;
    for (i = 0; i < 5; i++) {
      var rx = Math.floor(Math.random() * 400);
      var ry = Math.floor(Math.random() * 400);
      
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