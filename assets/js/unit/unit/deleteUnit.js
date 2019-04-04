let DeleteUnit = {
  deleteUnit(id) {
    if (this.unit[id] === undefined) {
      return false
    }
    this.unit[id].addon.fire.destroy();
    this.unit[id].addon.view.destroy();
    this.unit[id].addon.selectEnable.destroy();
    this.unit[id].addon.selectDisable.destroy();
    this.unit[id].addon.camp.destroy();
    this.unit[id].addon.healthBar.destroy();
    this.unit[id].lastEnemy.addon.fire.visible = false;
    this.unit[id].lastEnemy.sound.stop();
    this.unit[id].sound.stop();
    this.unit[id].destroy();
    this.unit.splice(id, 1);
  }
}