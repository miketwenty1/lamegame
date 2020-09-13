function start() {
  var canvas = document.getElementById('lamegame');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgb(200,0,0)';
  ctx.fillRect(10,10,50,50);
  ctx.fillStyle = 'rgba(0, 0, 200, 0.2)';
  ctx.fillRect(30, 30, 50, 50);
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
  ctx.fillStyle = 'rgb(200,0,200)';
  ctx.fillRect(10,10,50,50);
  ctx.fillStyle = 'rgba(250, 80, 8, 0.2)';
  ctx.fillRect(30, 30, 50, 50);
}