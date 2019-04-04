let Map = {
  map1() {
    var sol = 13;
    var s1 = 6;
    var s1r = 9;
    var mtl = 0;
    var mtr = 2;
    var mbl = 10;
    var mbr = 12;
    var mt = 1;
    var ml = 5;
    var mr = 7;
    var mb = 11;

    // Load a map from a 2D array of tile indices
    var level = [
      [mtl, mt, mtr, sol, sol, sol, sol, sol, sol, sol, sol],
      [ml, s1, s1r, sol, sol, sol, sol, sol, sol, sol, sol],
      [mbl, mb, mbr, sol, sol, sol, sol, sol, sol, sol, sol],
      [sol, sol, sol, sol, sol, sol, sol, sol, sol, sol, sol],
      [sol, sol, sol, sol, sol, sol, sol, sol, sol, sol, sol],
      [sol, sol, sol, sol, sol, sol, sol, sol, sol, sol, sol],
      [sol, sol, sol, sol, sol, sol, sol, sol, sol, sol, sol],
      [sol, sol, sol, sol, sol, sol, sol, sol, sol, sol, sol],
      [sol, sol, sol, sol, sol, sol, sol, sol, sol, sol, sol],
      [sol, sol, sol, sol, sol, sol, sol, sol, sol, sol, sol],
      [sol, sol, sol, sol, sol, sol, sol, sol, sol, sol, sol]
    ]

    // When loading from an array, make sure to specify the tileWidth and tileHeight
    var map = this.make.tilemap({
      data: level,
      tileWidth: 32,
      tileHeight: 32
    });
    var tiles = map.addTilesetImage('tiles');
    var layer = map.createStaticLayer(0, tiles, 0, 0);
  }
}