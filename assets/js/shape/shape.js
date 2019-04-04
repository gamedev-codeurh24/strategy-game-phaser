let Shape = {
  shape(){
    this.formeHealthBar = new Phaser.Geom.Rectangle(0, 0, 32, 8);

    this.healthBar = this.make.graphics({
      fillStyle: {
        color: 0x00FF00
      }
    });

    this.healthBar.fillRectShape(this.formeHealthBar);


    var sizeCircle = 128;
    this.graphics3 = this.make.graphics({
      x: 0,
      y: 0,
      add: false,
      lineStyle: {
        color: 0x00ff00
      }
    }).strokeCircleShape(new Phaser.Geom.Circle(sizeCircle, sizeCircle, sizeCircle));
    this.graphics3.generateTexture('viewOfUnit', sizeCircle * 2, sizeCircle * 2);

    var sizeCircle = 18;
    this.graphics4 = this.make.graphics({
      x: 0,
      y: 0,
      add: false,
      lineStyle: {
        color: 0x00ff00
      }
    });
    this.graphics4.fillStyle(0xFF0000, 1.0);
    this.graphics4.fillCircleShape(new Phaser.Geom.Circle(sizeCircle, sizeCircle, sizeCircle));
    this.graphics4.generateTexture('camp1', sizeCircle * 2, sizeCircle * 2);

    this.graphicsCamp2 = this.make.graphics({
      x: 0,
      y: 0,
      add: false,
      lineStyle: {
        color: 0x00ff00
      }
    });
    this.graphicsCamp2.fillStyle(0x4499FF, 1.0);
    this.graphicsCamp2.fillCircleShape(new Phaser.Geom.Circle(sizeCircle, sizeCircle, sizeCircle));
    this.graphicsCamp2.generateTexture('camp2', sizeCircle * 2, sizeCircle * 2);


    this.graphics5 = this.make.graphics({
      x: 0,
      y: 0,
      add: false,
      lineStyle: {
        color: 0x000000
      }
    });
    this.graphics5.strokeCircleShape(new Phaser.Geom.Circle(sizeCircle, sizeCircle, sizeCircle));
    this.graphics5.generateTexture('selectDisable', sizeCircle * 2, sizeCircle * 2);

    this.graphics6 = this.make.graphics({
      x: 0,
      y: 0,
      add: false,
      lineStyle: {
        color: 0x00FF00
      }
    });
    this.graphics6.strokeCircleShape(new Phaser.Geom.Circle(sizeCircle, sizeCircle, sizeCircle));
    this.graphics6.generateTexture('selectEnable', sizeCircle * 2, sizeCircle * 2);
  }
}