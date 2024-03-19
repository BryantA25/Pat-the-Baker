class Saute extends Phaser.Scene {
    constructor() {
        super('sceneSaute')
    }

    init() {
        this.score = 0
        this.roundTime = 8
        this.stage = 1
    }

    create() {
        this.add.tileSprite(0, 0, 640, 480, 'stoveBackdrop').setOrigin(0,0)

        // display current round
        this.add.bitmapText(20, 20, 'cartoonPurple_font', "Round " + roundNumber, 40, ).setOrigin(0)

        //grab keyboard binding from keys scene
        this.KEYS = this.scene.get('sceneKeys').KEYS

        //score text graphic
        this.scoreText = this.add.bitmapText(490,10, 'cartoonPink_font', "Score: " + this.score, 30)

        // Pat sprite
        this.patPan = this.add.sprite(centerX, centerY, 'patPan', 1)

        //key guide graphic
        this.keysGuide = this.add.sprite(10, 375, 'keyAll', 0).setOrigin(0,0).setScale(0.75)
        this.keysGuide.play('keyLeft-idle', true)

        // fire animation
        this.fireGraphic = this.add.sprite(225, 270, 'fire', 0)
        this.fireGraphic.play('fire-anim', true)

        //clock and text
        this.clockGraphic = this.add.image(550, 400, 'clock').setAlpha(0)
        this.remainingTime = this.add.text(535, 375, '', {
            fontFamily: 'Arial',
            fontSize: 'bold',
            fontSize: '50px',
            color: '000000'
        })

        // main timer
        this.clock = this.time.delayedCall(this.roundTime * 1000, ()=> {

            score3 = this.score / 60
            //console.log("score3: " + score3)

            //this.sound.stopAll()
            this.scene.start('sceneWin')
            

        }, null, this)


    }


    update() {
        const { KEYS } = this


        if (Phaser.Input.Keyboard.JustDown(KEYS.LEFT)) {
            if (this.stage == 1) {
                this.stage += 1
                this.keysGuide.play('keyRight-idle', true)
                this.patPan.play('patPanFront-anim', true)
            }
        }
        if (Phaser.Input.Keyboard.JustDown(KEYS.RIGHT)) {
            if (this.stage == 2) {
                this.stage = 1
                this.score += 1
                this.keysGuide.play('keyLeft-idle', true)
                this.patPan.play('patPanBack-anim', true)
            }
        }

        //score management
        this.scoreText.text = "Score: " + this.score
        
        //time management
        this.currentTime = Phaser.Math.RoundTo((this.roundTime - (this.roundTime * this.clock.getProgress())), 0)
        if(this.currentTime <= 3 && this.currentTime >= 0) {
            this.clockGraphic.setAlpha(1)
            this.remainingTime.text = this.currentTime
        }

        // Pause handling
        if (KEYS.PAUSE.isDown) {
            pausedScene = 'sceneSaute'
            this.scene.launch('scenePause')
        }
    }
}