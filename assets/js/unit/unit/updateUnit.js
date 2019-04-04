let UpdateUnit = {
  updateUnit(id) {
    var x = this.unit[id].x;
    var y = this.unit[id].y;

    this.unit[id].addon.fire.x = x;
    this.unit[id].addon.fire.y = y;
    this.unit[id].addon.view.x = x;
    this.unit[id].addon.view.y = y;
    this.unit[id].addon.camp.x = x;
    this.unit[id].addon.camp.y = y;
    this.unit[id].addon.selectEnable.x = x;
    this.unit[id].addon.selectEnable.y = y;
    this.unit[id].addon.selectDisable.x = x;
    this.unit[id].addon.selectDisable.y = y;
    this.unit[id].addon.healthBar.x = x;
    this.unit[id].addon.healthBar.y = y - 23;

    if (this.unit[id].health > 80) {
      this.unit[id].addon.healthBar.setFillStyle(0x00FF00, 1.0);

    } else if (this.unit[id].health > 60 && this.unit[id].health <= 80) {
      this.unit[id].addon.healthBar.setFillStyle(0xb4ff00, 1.0);

    } else if (this.unit[id].health > 40 && this.unit[id].health <= 60) {
      this.unit[id].addon.healthBar.setFillStyle(0xffe000, 1.0);

    } else if (this.unit[id].health > 20 && this.unit[id].health <= 40) {
      this.unit[id].addon.healthBar.setFillStyle(0xff7600, 1.0);

    } else {
      this.unit[id].addon.healthBar.setFillStyle(0xff1800, 1.0);
    }

    if (this.distance(this.unit[id], this.unit[id].lastEnemy) > 128) {
      this.unit[id].sound.stop();
      this.unit[id].addon.fire.visible = false;
    }

    var distance = Phaser.Math.Distance.Between(this.unit[id].x, this.unit[id].y, this.target.x, this.target.y);

    if (this.unit[id].body.speed > 0) {
      if (distance < 4) {
        this.unit[id].body.reset(this.target.x, this.target.y);
      }
    }

  }
}