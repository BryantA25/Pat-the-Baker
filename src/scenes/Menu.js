class Menu extends Phaser.Scene {
    constructor() {
        super('sceneMenu')
    }

    create() {
        console.log("Menu: create")
        this.add.text(10, 10, "Menu Scene")
        this.add.text(10, 30, "Press UP to enter Egg mini-game")

        //grab keyboard binding from keys scene
        this.KEYS = this.scene.get('sceneKeys').KEYS
    }

    update() {
        const { KEYS } = this

        if (KEYS.UP.isDown) {
            console.log("up key pressed")
            this.scene.start('sceneEgg')
        }
    }
}