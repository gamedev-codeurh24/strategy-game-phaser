window.views = [];
window.camp = [];
window.camp[1] = {};
window.camp[2] = {};
window.camp[1].views = [];
window.camp[1].units = [];
window.camp[2].views = [];
window.camp[2].units = [];
window.selectedUnits = [];

window.keyControl = false;




class MainScene {

  target = {
    x: 0,
    y: 0
  };
  container;
  mouse = {x:0,y:0};


  preload() {
    // this.load.image('mario-tiles', 'assets/tilemaps/tiles/super-mario.png');
    this.load.image('tiles', 'assets/img/tiles/tiles-desert.png');
    this.load.image('mario-tiles', 'assets/img/tiles/tiles-2.png');
    this.imageInfantryUnit = this.load.image('infantryUnit', 'assets/img/army/soldier.png');

    this.load.image('fire', 'assets/img/fire.png');
    this.load.image('mouse', 'assets/img/mouse.png');

    this.load.audio('bass', ['assets/sound/uzi-submachine-gun.ogg']);
    this.load.audio('submachine-gun', ['assets/sound/uzi-submachine-gun.ogg']);
  }

  create() {

    /*##################
    #  CONFIGURATION   #
    ##################*/

    /* CANVAS */

    // recupere el canvas qui fait le rendu du jeu
    var canvas = document.getElementsByTagName("canvas")[0];
    // Redimentionne la taille du rendu a la largeur de la 
    // fenetre interne de l'ecran
    Object.assign(canvas.style, {
      width: window.innerWidth + 'px',
      margin: 'auto'
    });

    /* MENU CONTECTUEL */

    /* Menu contextuel du clique droit de la souris désactivé  */
    this.input.mouse.disableContextMenu();
    
    /* CAMERA  */

    // augmente les limites des bords habituel de l'ecran
    this.cameras.main.setBounds(0, 0, 1920 * 10, 1080 * 10);
    this.physics.world.setBounds(0, 0, 1920 * 10, 1080 * 10);
    // zoome par defaut de la caméra
    this.cameras.main.setZoom(1);
    /* Bouton du passe en plein ecran dans le coin
       haut gauche de l'ecran */
    this.fullscreen();
    


    /*###########################
    #    INITIALISATION CARTE   #
    ###########################*/

    /* CARTE (MAP) */
    // creéation de la carte
    this.map1();

    /* UNITEES */
    /* formes des unitées*/
    this.shape();
    
    // Unitées dans le jeu
    this.createUnit(100, 100, 1);
    this.createUnit(100, 200, 1);
    this.createUnit(100, 300, 1);
    this.createUnit(400, 200, 2);


    /*##############################
    #    DEPLACEMENT DES UNITEES   #
    ##############################*/

    /* EVENEMENTS clavier key up et down ect ... */
    this.keyboard();
    /* EVENEMENTS souris clic up et down ect ... */
    this.mouseDevice();

    /*#########################
    #  CHEVAUCHEMENT OVERLAP  #
    #########################*/
    // si une unité entre dans la vue d'une autre unité
    this.unitSoldierAttack();




    this.guiCreate();
  }

  update() {
    // controle du zoom en temps reels avec la molette
    this.zoomCam();
    // déplacement de la caméra avec la curseur de la souris
    this.scrollCam();
    
    // Mise a jour en temps reel de tout les éléments
    // qui compose une unité
    if (this.unit !== undefined) {
      var n = this.unit.length;
      for (let index = 0; index < n; index++) {
        this.updateUnit(index);
      }
    }
    
    // permet de remettre à zéro l'utilisation 
    // de la molette de la souris pour detecter un 
    // etat de changement sinon l'état resterait bloqué
    window.wheel.y = 0;
  }


}



Object.assign(MainScene.prototype, GeoMath);
Object.assign(MainScene.prototype, Map);
Object.assign(MainScene.prototype, Shape);
Object.assign(MainScene.prototype, Keyboard);
Object.assign(MainScene.prototype, Mouse);
Object.assign(MainScene.prototype, UnitSoldier);
Object.assign(MainScene.prototype, Fullscreen);
Object.assign(MainScene.prototype, CreateUnit);
Object.assign(MainScene.prototype, UpdateUnit);
Object.assign(MainScene.prototype, DeleteUnit);
Object.assign(MainScene.prototype, ScrollCam);
Object.assign(MainScene.prototype, ZoomCam);
Object.assign(MainScene.prototype, GUI);


// Object.assign(MainScene.unit.prototype, ShotOn);

// Object.assign(MainScene.unit.prototype, ShotOn);

new Phaser.Game({
  inputMouse: false,
  width: 800, // Width of the game in pixels
  height: 480, // Height of the game in pixels
  backgroundColor: '#3498db', // The background color (blue)
  scene: MainScene, // The name of the scene we created
  physics: {
    default: 'arcade'
  }, // The physics engine to use
  parent: 'game', // Create the game inside the <div id="game"> 
});