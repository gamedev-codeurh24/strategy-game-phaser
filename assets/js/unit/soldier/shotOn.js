let ShotOn = {
  shotOn (object2) {
    var object1 = this;

    var angleRad = Phaser.Math.Angle.Between(object1.x, object1.y, object2.x, object2.y);
    var angle = Phaser.Math.RadToDeg(angleRad);
    if (angle < 0) {
      angle = 360 + angle
    }

    object1.angle = angle;
    object1.addon.fire.angle = angle;

    if (!object1.sound.isPlaying) {
      object1.sound.play();
    } else {

      if (object1.sound.seek > 0.5 && object1.sound.seek < 3.5) {
        var milliSeek = parseInt(object1.sound.seek * 20);
        if (milliSeek % 2 == 0) {
          object1.addon.fire.visible = true;
          object2.health -= 0.5;
          if (object2.health < 1) {
            this.self.deleteUnit(object2.id);

          }


        } else {
          object1.addon.fire.visible = false;
        }
      } else {
        object1.addon.fire.visible = false;
      }
    }
    return this;
  }
}