$(function() {
  // context.canvas.width  = window.innerWidth-10;
  // context.canvas.height = window.innerHeight-30;
   context.canvas.width  = 400;
   context.canvas.height = 400;

  var velY = 0,
      velX = 0,
      speed = 3,
      friction = 0.98,
      demoObject = [{x : 80, y : 120}, {x : 120, y : 210}],
      targetToGo = {x : 0, y: 0},
      mapSize = {width : 600, height :  600}
      player = new Player(canvas, context);

      update();

  function update() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        // player.position.x += (targetToGo.x - player.position.x)*1/player.position.r;
        // player.position.y += (targetToGo.y - player.position.y)*1/player.position.r;
        var xDis = targetToGo.x - player.position.x,
        yDis = targetToGo.y - player.position.y,
        normalized = Math.sqrt((xDis * xDis) + (yDis * yDis));
        moveDir = {x : xDis / normalized,
                       y : yDis / normalized };

        //console.log(moveDir);
        player.position.y = player.position.y + moveDir.y * speed;
        player.position.x = player.position.x + moveDir.x * speed;
        player.set();
        player.demoObject(-1, 200);
        player.demoObject(-20, 100);

        var imageObj = new Image();
        imageObj.src = context.canvas.toDataURL("image/png");                 

        imageObj.onload = function() {
          context.drawImage(imageObj, player.position.x, player.position.y, context.canvas.width, context.canvas.height, 0, 0, mapSize.x, mapSize.y);
        };

        setTimeout(update, 1000/45);
    }

    function getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    }
  //=============================KEYBOARD CONTROL======================================
  canvas.addEventListener('mousemove', function(evt) {
    targetToGo = getMousePos(canvas, evt);
  }, false);

});
