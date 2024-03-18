class Pause extends Phaser.Scene {
    constructor() {
        super('scenePause')
    }

    create() {
        //grab keyboard binding from keys scene

        this.scene.setVisible(false, pausedScene)

        this.add.tileSprite(0,0,640,480, 'counterBackdrop').setOrigin(0, 0)
        this.add.tileSprite(0,0, 640, 480, 'blank').setOrigin(0,0).setAlpha(0.5)


        this.KEYS = this.scene.get('sceneKeys').KEYS

        this.scene.pause(pausedScene)

        //pause text
        this.add.bitmapText(centerX, 100, 'cartoonPink_font', "PAUSED", 80, ).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY, 'cartoonPink_font', "Z: Resume", 30, ).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY+30, 'cartoonPink_font', "X: Back to main menu", 30, ).setOrigin(0.5)

        //this.add.text(10, 10, 'game paused, can return to: ' + pausedScene)
    }

    update() {
        const { KEYS } = this

        if (Phaser.Input.Keyboard.JustDown(KEYS.CONFIRM)) {
            this.scene.setVisible(true, pausedScene)
            this.scene.resume(pausedScene)
            pausedScene = ''
            this.scene.stop()
        }

        if (Phaser.Input.Keyboard.JustDown(KEYS.BACK)) {
            this.scene.setVisible(true, pausedScene)
            this.scene.stop(pausedScene)
            pausedScene = ''
            this.scene.start('sceneMenu')
        }
    }
}