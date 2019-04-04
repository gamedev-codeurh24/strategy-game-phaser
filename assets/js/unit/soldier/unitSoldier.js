let UnitSoldier = {

  unitSoldierAttack() {

    if (this.unit !== undefined) {
      var n = this.unit.length;
      if (n > 0) {
        this.physics.add.overlap(window.views, this.unit, (object1, object2) => {
          if (object1.p.id == object2.id) {
            return false;
          }

          if (object1.p.camp == object2.camp) {
            return false;
          }

          var distance = this.distance(object1, object1);
          if (distance > 128) {
            // object2.disableBody(true, true);
            object1.p.sound.stop();
            object1.p.addon.fire.visible = false;

            return false;
          }
          object1.p.shotOn(object2);
          object1.p.lastEnemy = object2;


        });
      }
    }

  }

  
}














    // if (this.unit !== undefined) {
    //   var n = this.unit.length;
    //   for (let index = 0; index < n; index++) {
    //     for (let indexTarget = index + 1; indexTarget < n; indexTarget++) {
    //       this.physics.add.overlap(this.unit[index].addon.view, this.unit[indexTarget], (object1, object2) => {

    //         //console.log('contact ' + object1.p.shotOn())
    //         var distance = this.distance(object1, object1);
    //         if (distance > 128) {
    //           // object2.disableBody(true, true);
    //           object1.p.sound.stop();
    //           object1.p.addon.fire.visible = false;
    //           return false;
    //         }
    //         object1.p.shotOn(object2);


    //       });
    //     }
    //   }

    // }