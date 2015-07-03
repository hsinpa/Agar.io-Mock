var game = new Phaser.Game(800, 600, Phaser.AUTO),
    graphics,
    player,
    speed = 5;


var GameState =  {
  preload : function() {
    game.load.image('background','images/background.png');
  },

  create : function(){
        game.add.tileSprite(0, 0, 1920, 1920, 'background');
        game.world.setBounds(0, 0, 1920, 1920);
        player = new Player(game);
        player.set();
  },

  update : function() {
      //player.graphics.clear();
      player.move();

      var xDis = (game.input.x + game.camera.x)- (player.graphics.position.x ),
          yDis = (game.input.y + game.camera.y) - (player.graphics.position.y),
          normalized = Math.sqrt((xDis * xDis) + (yDis * yDis));
          moveDir = {x : xDis / normalized,
                         y : yDis / normalized };
          //console.log(player.position.x + ", " + player.position.y);
          // if (player.position.y < game.world.height && player.position.y > 0 &&
          //     player.position.x < game.world.width && player.position.x > 0) {
          //       player.position.y = player.position.y + moveDir.y * speed;
          //       player.position.x = player.position.x + moveDir.x * speed;
          // } else {
          //
          // }

          player.position.y = player.position.y + moveDir.y * speed;
          player.position.x = player.position.x + moveDir.x * speed;
          game.camera.follow(player.graphics);
  }
};

game.state.add("GameState", GameState);
game.state.start("GameState");
