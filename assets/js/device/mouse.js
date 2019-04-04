window.wheel = {x:0,y:0};
window.addEventListener('mousewheel', function (e) {
  window.wheel.y = e.deltaY;
});

let Mouse = {
  mouseDevice(){
    
    this.input.on('pointermove', function (pointer) {
      this.mouse = pointer;
      // this.mouseImage.x = pointer.x*2;
      // this.mouseImage.y = pointer.y*2;
      // if(pointer.x > 1800){

      //   this.cameras.main.scrollX++;
      // }
      // this.cameras.main.scrollX = pointer.x;
      
      
    }, this);

    this.input.on('pointerdown', (pointer) => {

      if (!pointer.rightButtonDown()) {
        if (window.keyControl == false) {
          for (let index = 0; index < window.selectedUnits.length; index++) {
            window.selectedUnits[index].addon.selectEnable.visible = false;
            window.selectedUnits[index].addon.selectDisable.visible = true;
          }
          window.selectedUnits = [];
        }
        return false;
      }


      var n = this.unit.length;
      if (n > 0) {
        this.target.x = (pointer.x)+this.cameras.main.scrollX;
        this.target.y = (pointer.y)+this.cameras.main.scrollY;
        for (let index = 0; index < n; index++) {
          if (this.unit[index].addon.selectEnable.visible) {
            var angleRad = this.physics.moveToObject(this.unit[index], this.target, 200);
            var angle = Phaser.Math.RadToDeg(angleRad);
            if (angle < 0) {
              angle = 360 + angle
            }
            this.unit[index].angle = angle;
          }
        }
      }

    }, this);
  }
}    
    