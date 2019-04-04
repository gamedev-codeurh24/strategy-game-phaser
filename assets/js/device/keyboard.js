let Keyboard = {
  keyboard(){
    this.input.keyboard.on('keydown', function (event) {
      if (event.key == 'Control') {
        window.keyControl = true;
      }
    });

    this.input.keyboard.on('keyup', function (event) {
      if (event.key == 'Control') {
        window.keyControl = false;
      }
    });

  }
}