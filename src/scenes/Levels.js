class Levels extends Phaser.Scene {
    constructor() {
        super('sceneLevels')
    }

    create() {

        this.add.tileSprite(0, 0, 640, 480, 'counterBackdrop').setOrigin(0,0)

        this.add.bitmapText(20, 20, 'cartoonPink_font', "Level Select", 50, ).setOrigin(0,0)

        //this.add.bitmapText(20, 70, 'cartoonPink_font', "UP: Endless", 20, ).setOrigin(0,0)
        this.add.bitmapText(20, 100, 'cartoonPink_font', "LEFT: Scrambled Eggs", 20, ).setOrigin(0,0)

        this.add.bitmapText(20, 130, 'cartoonPink_font', "X: Back to Menu", 20, ).setOrigin(0,0)


        

        //grab keyboard binding from keys scene
        this.KEYS = this.scene.get('sceneKeys').KEYS
    }

    update() {
        const { KEYS } = this

        /*
        if (Phaser.Input.Keyboard.JustDown(KEYS.UP)) {      // Endless
            levelType = 0
            this.scene.start('sceneTrans')
        }
        */


        if (Phaser.Input.Keyboard.JustDown(KEYS.LEFT)) {    // make scrambled eggs
            levelType = 1
            this.scene.start('sceneTrans')
        }

        if (Phaser.Input.Keyboard.JustDown(KEYS.BACK)) {    // return to Menu
            this.scene.start('sceneMenu')
        }

    }

}