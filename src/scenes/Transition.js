class Transition extends Phaser.Scene {
    constructor() {
        super('sceneTrans')
    }

    create() {
        //this.add.text(10, 10, "Round Transition Scene")
        //console.log("trans scene create")

        this.add.tileSprite(0, 0, 640, 480, 'trans1').setOrigin(0,0)

        this.add.bitmapText(centerX, centerY-70, 'cartoonPink_font', "ROUND START", 64, ).setOrigin(0.5)

        /*
        this.add.bitmapText(centerX, centerY-70, 'cartoonPink_font', "ROUND START", 64, ).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY, 'cartoonPink_font', "Use the LEFT and RIGHT to move", 30, ).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY+30, 'cartoonPink_font', "Catch the eggs with the basket!", 30, ).setOrigin(0.5)
        */

        this.eggTimer = this.time.addEvent({
            delay: 3000,
            callback: this.switchScene,
            callbackScope: this,
            loop: false
        })
    }


    switchScene() {
        //console.log("scene transition")
        //this.scene.start('sceneEgg')
        this.scene.start('sceneMixing')
    }
    
}