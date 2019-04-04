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
      // ACTION SANS LE CLIQUE GAUCHE
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

      // DEPLACEMENT UNITE
      var n = this.unit.length;
      if (n > 0) {

        window.canvas = document.getElementsByTagName("canvas")[0];
        var wRef = window.canvas.width;
        // vue cam reduite par le zoom
        var wInferrieur = wRef*this.cameras.main.zoom;
        // nouvelle vue plus large fait:
        var coefSupperieur = wRef/wInferrieur;

        var wNew = window.canvas.width*coefSupperieur;
        console.log('wRef: '+wRef+' ,wNew: '+wNew    );

        this.target.x = (pointer.x*coefSupperieur)+window._camSX;
        this.target.y = (pointer.y*coefSupperieur)+window._camSY;
        
        this.target.x = parseInt(this.target.x);
        this.target.y = parseInt(this.target.y);
        console.log('info camSX: '+window._camSX);
        console.log('info scrollX: '+this.cameras.main.scrollX);
        
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
    