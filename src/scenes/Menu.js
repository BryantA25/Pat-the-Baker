class Menu extends Phaser.Scene {
    constructor() {
        super('sceneMenu')
    }

    create() {
        //console.log("Menu: create")

        this.add.tileSprite(0, 0, 640, 480, 'trans1').setOrigin(0,0)

        this.add.bitmapText(centerX, centerY-30, 'cartoonPink_font', "Pat the Baker DEMO", 60, ).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY+30, 'cartoonPink_font', "Press UP to start.", 30, ).setOrigin(0.5)


        //grab keyboard binding from keys scene
        this.KEYS = this.scene.get('sceneKeys').KEYS
    }

    update() {
        const { KEYS } = this

        if (KEYS.UP.isDown) {
            this.scene.start('sceneTrans')
        }

        if (KEYS.LEFT.isDown) {
            this.scene.start('sceneTutorial')
        }

        if(KEYS.RIGHT.isDown) {
            this.scene.start('sceneCredits')
        }
    }
}