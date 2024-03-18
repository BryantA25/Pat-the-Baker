const { DOWN } = require("phaser")

class Win extends Phaser.Scene {
    constructor() {
        super('sceneWin')
    }

    init() {
        this.levelEnd = false
    }

    create() {
        //grab keyboard binding from keys scene
        this.KEYS = this.scene.get('sceneKeys').KEYS

        //this.add.text(10, 10, "Round Transition Scene")
        this.add.tileSprite(0, 0, 640, 480, 'trans2').setOrigin(0,0)

        if (roundNumber == 3 && levelType == 1) {
            this.add.bitmapText(centerX, centerY-70, 'cartoonPurple_font', "Congradulations!", 64, ).setOrigin(0.5)
            this.add.bitmapText(centerX, centerY, 'cartoonPurple_font', "You made Scrambled Eggs!", 30, ).setOrigin(0.5)
            

        } else {
            

            this.add.bitmapText(centerX, centerY-70, 'cartoonPurple_font', "Well Done", 64, ).setOrigin(0.5)
            this.add.bitmapText(centerX, centerY, 'cartoonPurple_font', "You completed", 30, ).setOrigin(0.5)
            this.add.bitmapText(centerX, centerY+30, 'cartoonPurple_font', "Round " + roundNumber, 30, ).setOrigin(0.5)
        }

        

        roundNumber += 1

        if (this.levelEnd = false) {
            this.clock = this.time.addEvent({
                delay: 3000,
                callback: this.switchScene,
                callbackScope: this,
                loop: false
            })
        }
    }

    update() {
        const { KEYS } = this

        // Pause handling
        if (KEYS.PAUSE.isDown && this.levelEnd == false) {
            pausedScene = 'sceneWin'
            this.scene.launch('scenePause')
        }

        if (KEYS.PAUSE.isDown || KEYS.CONFIRM.isDown || KEYS.PAUSE.isDown) {
            this.scene.start('sceneMenu')
        }
    }


    switchScene() {
        //console.log("scene transition")
        this.scene.start('sceneTrans')
    }
    
}