class Tutorial extends Phaser.Scene {
    constructor() {
        super('sceneTutorial')
    }

    create() {

        this.add.tileSprite(0, 0, 640, 480, 'tutorial').setOrigin(0,0)

        //this.add.bitmapText(10, 10, 'cartoonPink_font', "Tutorial", 30, ).setOrigin(0,0)
        

        //grab keyboard binding from keys scene
        this.KEYS = this.scene.get('sceneKeys').KEYS
    }

    update() {
        const { KEYS } = this

        if (KEYS.BACK.isDown) {
            this.scene.start('sceneMenu')
        }

    }
}