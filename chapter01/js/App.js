//建立遊戲
var game = new Phaser.Game(600, 400, Phaser.AUTO),
    player,
    speed = 5;

//初始遊戲State, 就是你進去遊戲第一個會看到的東西, 放在Phaser.AUTO後面也行
var GameState =  {
  preload : function() {
    //load background先
    game.load.image('background','images/background.png');
  },

  create : function(){
    //設定世界大小, 然後random出玩家的位子
    var spawnXPos = Math.floor((Math.random() * 1920) + 1),
        spawnYPos = Math.floor((Math.random() * 1920) + 1);

        game.add.tileSprite(0, 0, 1920, 1920, 'background');
        game.world.setBounds(0, 0, 1920, 1920);
        //玩家
        player = new Player(game, spawnXPos, spawnYPos);
  },

  update : function() {
      //60fps, 刷新玩家位子
      player.set();

      //滑鼠位子 - 玩家位子 得出雙方差距然後normalized, 將最後的數值加到play position上
      //玩家就會順著滑鼠方向移動
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

          //設定攝影機永遠跟著玩家
          game.camera.follow(player.graphics);
  }
};

//加入以上state, 然後啟動
game.state.add("GameState", GameState);
game.state.start("GameState");
