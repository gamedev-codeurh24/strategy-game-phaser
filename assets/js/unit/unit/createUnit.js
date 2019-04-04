let CreateUnit = {
  
  createUnit(x, y, camp = 1) {
    var self = this;
    var id;
    if (this.unit === undefined) {
      this.unit = [];
    }
    
    id = this.unit.length;
    if (id == undefined) {
      id = 0;
    }

    this.unit.push(this.physics.add.sprite(x, y, 'infantryUnit').setInteractive());
    this.unit[id].id = id;
    this.unit[id].health = 100;
    this.unit[id].depth = 2;
    this.unit[id].camp = camp;
    this.unit[id].category = 'unit';
    this.unit[id].job = 'soldier'; // vehicle Artillery Aviation
    this.unit[id].discipline = 'machine gun';
    this.unit[id].displayWidth = 32;
    this.unit[id].displayHeight = 21;
    this.unit[id].addon = {};
    this.unit[id].addon.fire = this.physics.add.sprite(x, y, 'fire');
    this.unit[id].addon.fire.displayWidth = 32;
    this.unit[id].addon.fire.displayHeight = 21;
    this.unit[id].addon.fire.visible = false;
    this.unit[id].addon.fire.setOrigin(-0.28, 0.64);
    this.unit[id].addon.fire.depth = 3;

    this.unit[id].addon.view = this.physics.add.sprite(x, y, 'viewOfUnit');
    this.unit[id].addon.view.depth = 1;
    this.unit[id].addon.view.p = this.unit[id];

    if (this.unit[id].camp == 1) {
      this.unit[id].addon.camp = this.physics.add.sprite(x, y, 'camp1');
    } else if (this.unit[id].camp == 2) {
      this.unit[id].addon.camp = this.physics.add.sprite(x, y, 'camp2');
    }
    this.unit[id].addon.camp.depth = 1;
    this.unit[id].addon.camp.p = this.unit[id];

    this.unit[id].addon.selectDisable = this.physics.add.sprite(x, y, 'selectDisable');
    this.unit[id].addon.selectDisable.depth = 1;
    this.unit[id].addon.selectDisable.p = this.unit[id];

    this.unit[id].addon.selectEnable = this.physics.add.sprite(x, y, 'selectEnable');
    this.unit[id].addon.selectEnable.visible = false;
    this.unit[id].addon.selectEnable.depth = 1;
    this.unit[id].addon.selectEnable.p = this.unit[id];

    this.unit[id].addon.healthBar = this.add.rectangle(100, 100, 32, 6, 0x00FF00);
    this.unit[id].addon.healthBar.depth = 3;
    this.unit[id].addon.healthBar.p = this.unit[id];

    ShotOn.self = self;
    Object.assign(this.unit[id], ShotOn);
    
    

    window.views.push(this.unit[id].addon.view);
    this.unit[id].lastEnemy = {};

    this.unit[id].sound = this.sound.add('submachine-gun');

    this.unit[id].on('pointerup', function (pointer, localX, localY, event) {

      // si pas selectionner alors on délectionne
      if (this.addon.selectDisable.visible) {
        this.addon.selectEnable.visible = true;
        this.addon.selectDisable.visible = false;
        window.selectedUnits.push(this);
      } else { //sinon on delectionne l'unité
        this.addon.selectEnable.visible = false;
        this.addon.selectDisable.visible = true;
        window.selectedUnits = [];
      }
    });

    /*###############
    #    TIRE SUR   #
    ################*/
    // this.unit[id].shotOn;
    window.camp[camp].units.push(this.unit[id]);
    window.camp[camp].views.push(this.unit[id].addon.view);
    return;
  }
}

