window.zoomzoom = 1;
let ZoomCam = {
  zoomCam() {
    var mouse = {
      x: parseInt(this.mouse.x),
      y: parseInt(this.mouse.y)
    }

    if(window.wheel.y > 0 ){
      // this.cameras.main.zoom += 0.03;
      window.zoomzoom += 0.03
      this.cameras.main.setZoom(window.zoomzoom);
    }else if(window.wheel.y < 0 ){
      // this.cameras.main.zoom -= 0.03;
      window.zoomzoom -= 0.03
      this.cameras.main.setZoom(window.zoomzoom);
    }
    this.scoreText.setText('Cam zoom:'+this.cameras.main.zoom+' | x:'+mouse.x+', Y:'+mouse.y);
  }
}