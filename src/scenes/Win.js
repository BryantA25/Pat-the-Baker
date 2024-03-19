class Win extends Phaser.Scene {
    constructor() {
        super('sceneWin')
    }

    init() {
        this.levelEnd = false
        this.finalScore
        this.rank = ''
    }

    create() {
        //grab keyboard binding from keys scene
        this.KEYS = this.scene.get('sceneKeys').KEYS

        //this.add.text(10, 10, "Round Transition Scene")
        this.add.tileSprite(0, 0, 640, 480, 'trans2').setOrigin(0,0)

        if (roundNumber == 3 && levelType == 1) {
            this.sound.play('sfx-successLong')
            this.add.image(centerX, centerY-10, 'scrambledEggs')

            this.levelEnd = true
            this.finalScore = ((score1 + score2 + score3) / 3)
            //console.log("final score: " + this.finalScore)

            // rank calculator
            if(this.finalScore >= 1 && score1 >= 1 && score2 >= 1 && score3 >= 1) {
                this.rank = 'P'
            } else if (this.finalScore > 0.99) {
                this.rank = 'S'
            } else if (this.finalScore <= 0.99 && this.finalScore >= 0.9) {
                this.rank = 'A'
            } else if (this.finalScore < 0.9 && this.finalScore >= 0.8) {
                this.rank = 'B'
            } else if (this.finalScore < 0.8 && this.finalScore >= 0.7) {
                this.rank = 'C'
            } else if (this.finalScore < 0.7 && this.finalScore > 0) {
                this.rank = 'D'
            } else if (this.fina)


            this.add.bitmapText(centerX, 30, 'cartoonPurple_font', "Congradulations!", 64, ).setOrigin(0.5)
            this.add.bitmapText(centerX, 80, 'cartoonPurple_font', "You made Scrambled Eggs!", 30, ).setOrigin(0.5)
            this.add.bitmapText(centerX, 400, 'cartoonPurple_font', "Rank: " + this.rank, 64, ).setOrigin(0.5)
            this.add.bitmapText(10, 420, 'cartoonPurple_font', "Press C to", 20, )
            this.add.bitmapText(10, 450, 'cartoonPurple_font', "return to Main Menu", 20, )
            

        } else {
            this.sound.play('sfx-successShort')

            this.add.bitmapText(centerX, centerY-70, 'cartoonPurple_font', "Well Done", 64, ).setOrigin(0.5)
            this.add.bitmapText(centerX, centerY, 'cartoonPurple_font', "You completed", 30, ).setOrigin(0.5)
            this.add.bitmapText(centerX, centerY+30, 'cartoonPurple_font', "Round " + roundNumber, 30, ).setOrigin(0.5)
        }

        

        roundNumber += 1

        if (this.levelEnd == false) {
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
            roundNumber = 1
            pausedScene = ''
            levelType = 0
            score1 = 0
            score2 = 0
            score3 = 0
            this.scene.start('sceneMenu')
        }
    }


    switchScene() {
        //console.log("scene transition")
        this.scene.start('sceneTrans')
    }
    
}