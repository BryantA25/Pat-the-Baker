class Credits extends Phaser.Scene {
    constructor() {
        super('sceneCredits')
    }

    create() {

        //this.add.tileSprite(0, 0, 640, 480, 'counterBackdrop').setOrigin(0,0)

        this.add.bitmapText(10, 10, 'cartoonPink_font', "Credits", 50, ).setOrigin(0,0)
        

        //grab keyboard binding from keys scene
        this.KEYS = this.scene.get('sceneKeys').KEYS
    }

    update() {
        const { KEYS } = this

        if (KEYS.DOWN.isDown) {
            this.scene.start('sceneMenu')
        }

    }
}
