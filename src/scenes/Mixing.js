class Mixing extends Phaser.Scene {
    constructor() {
        super('sceneMixing')
    }

    init() {
        this.score = 0
        this.stage = 1
        this.currentTime = 0
        this.roundTime = 8
    }

    create() {
        this.add.tileSprite(0, 0, 640, 480, 'counterBackdrop').setOrigin(0,0)

        // display current round
        this.add.bitmapText(20, 20, 'cartoonPurple_font', "Round " + roundNumber, 40, ).setOrigin(0)

        //grab keyboard binding from keys scene
        this.KEYS = this.scene.get('sceneKeys').KEYS

        //score text graphic
        this.scoreText = this.add.bitmapText(500,10, 'cartoonPink_font', "Score: " + this.score, 30,)

        //key guide graphic
        this.keysGuide = this.add.sprite(10, 375, 'keyAll', 0).setOrigin(0,0).setScale(0.75)
        this.keysGuide.play('keyUp-idle', true)

        //mixing bowl sprite
        this.bowl = this.add.sprite(0, 0, 'bowlMix', 0).setOrigin(0, 0)
        this.bowl.play('mix1-anim', true)

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

            //record score

            score2 = (this.score / 18)
            //console.log("score2: " + score2)

            //this.sound.stopAll()
            this.scene.start('sceneWin')
            

        }, null, this)

    }

    update(){
        const { KEYS } = this

        if (Phaser.Input.Keyboard.JustDown(KEYS.UP)) {
            if (this.stage == 1) {
                this.stage += 1
                this.keysGuide.play('keyLeft-idle', true)
                this.bowl.play('mix2-anim', true)
            }
        }
        if (Phaser.Input.Keyboard.JustDown(KEYS.LEFT)) {
            if (this.stage == 2) {
                this.stage += 1
                this.keysGuide.play('keyDown-idle', true)
                this.bowl.play('mix3-anim', true)
            }
        }
        if (Phaser.Input.Keyboard.JustDown(KEYS.DOWN)) {
            if (this.stage == 3) {
                this.stage += 1
                this.keysGuide.play('keyRight-idle', true)
                this.bowl.play('mix4-anim', true)
            }
        }
        if (Phaser.Input.Keyboard.JustDown(KEYS.RIGHT)) {
            if (this.stage == 4) {
                this.stage = 1
                this.keysGuide.play('keyUp-idle', true)
                this.bowl.play('mix1-anim', true)
                this.score += 1
            }
        }
        
        //score management
        this.scoreText.text = this.score
        
        //time management
        this.currentTime = Phaser.Math.RoundTo((this.roundTime - (this.roundTime * this.clock.getProgress())), 0)
        if(this.currentTime <= 3 && this.currentTime >= 0) {
            this.clockGraphic.setAlpha(1)
            this.remainingTime.text = this.currentTime
        }
        
        // Pause handling
        if (KEYS.PAUSE.isDown) {
            pausedScene = 'sceneMixing'
            this.scene.launch('scenePause')
        }
    }
}