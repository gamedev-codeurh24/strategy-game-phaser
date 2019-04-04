window._camSX=0;
window._camSY=0;
let ScrollCam = {
  scrollCam() {
    var mouse = {
      x: parseInt(this.mouse.x),
      y: parseInt(this.mouse.y)
    }
    
    window.canvas = document.getElementsByTagName("canvas")[0];
    if(mouse.x < 80  ){
      this.cameras.main.scrollX -= 10;
      
      window._camSX -= 10;
      if( window._camSX <= 0) {
        window._camSX = 0
      }
      
    }else if(window.canvas.width-mouse.x < 80  ){
      this.cameras.main.scrollX += 10;
      window._camSX += 10;
    }
    

    if(mouse.y < 80  ){
      this.cameras.main.scrollY -= 10;
      window._camSY -= 10;
      if( window._camSY <= 0) {
        window._camSY = 0
      }
    }else if(window.canvas.height-mouse.y < 80  ){
      this.cameras.main.scrollY += 10;
      window._camSY += 10;
    }
    
  }
}