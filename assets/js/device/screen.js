let Fullscreen = {
  fullscreen(){
    var canvas = document.getElementsByTagName("canvas")[0];
    let fullscreen = this.add.image(0, 0, 'camp1').setInteractive()
    fullscreen.on('pointerup', () => {
      if (this.scale.isFullscreen) {
        this.scale.stopFullscreen();
        Object.assign(canvas.style, {
          width: window.innerWidth + 'px',
          margin: 'auto'
        })
      } else {
        this.scale.startFullscreen();
        Object.assign(canvas.style, {
          width: '100%',
          marginLeft: '0',
          marginTop: '0'
        })
      }
    })
  }
}    