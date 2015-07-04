function Player( game, x, y) {
    this.position = {x : x, y : y, r : 20 };
    this.graphics = game.add.graphics(this.position.x, this.position.y);
}

Player.prototype.set = function() {
    //做個圓圈
    this.graphics.lineStyle(0);
    this.graphics.beginFill(0xFFFF0B, 0.5);
    this.graphics.drawCircle(0, 0, this.position.r);
    this.graphics.endFill();
    //刷新位子
    this.graphics.x = this.position.x;
    this.graphics.y = this.position.y;
}

Player.prototype.demoObject = function(x, y) {
  this.graphics.lineStyle(0);
  this.graphics.beginFill(0xFFFF0B, 0.5);
  this.graphics.drawCircle(x, y, this.position.r);
  this.graphics.endFill();
}
