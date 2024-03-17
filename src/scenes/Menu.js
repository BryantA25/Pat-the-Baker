class Menu extends Phaser.Scene {
    constructor() {
        super('sceneMenu')
    }

    create() {
        //console.log("Menu: create")

        this.add.tileSprite(0, 0, 640, 480, 'counterBackdrop').setOrigin(0,0)

        this.add.bitmapText(centerX, 100, 'cartoonPink_font', "Pat the Baker", 80, ).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY+30, 'cartoonPink_font', "Up: Level select.", 30, ).setOrigin(0.5)


        //grab keyboard binding from keys scene
        this.KEYS = this.scene.get('sceneKeys').KEYS
    }

    update() {
        const { KEYS } = this

        if (Phaser.Input.Keyboard.JustDown(KEYS.UP)) {
            this.scene.start('sceneLevels')
        }

        if (Phaser.Input.Keyboard.JustDown(KEYS.LEFT)) {
            this.scene.start('sceneTutorial')
        }

        if(Phaser.Input.Keyboard.JustDown(KEYS.RIGHT)) {
            this.scene.start('sceneCredits')
        }
    }
}