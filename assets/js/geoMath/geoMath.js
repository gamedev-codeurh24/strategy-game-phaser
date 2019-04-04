let GeoMath = {
  distance(gameObj1, gameObj2) {
    return Phaser.Math.Distance.Between(gameObj1.x, gameObj1.y, gameObj2.x, gameObj2.y);
  }
}