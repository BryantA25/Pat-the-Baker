class Mixing extends Phaser.Scene {
    constructor() {
        super('sceneMixing')
    }

    init(){
        this.score = 0
        this.stage = 1
    }

    create() {
        this.add.tileSprite(0, 0, 640, 480, 'counterBackdrop').setOrigin(0,0)

        //grab keyboard binding from keys scene
        this.KEYS = this.scene.get('sceneKeys').KEYS

        //score text graphic
        this.scoreText = this.add.bitmapText(600,10, 'cartoonPink_font', this.score, 30)

        //key guide graphic
        this.keysGuide = this.add.sprite(10, 10, 'keyAll', 0).setOrigin(0,0).setScale(0.75)
        this.keysGuide.play('keyUp-idle', true)

        //mixing bowl sprite
        this.bowl = this.add.sprite(0, 0, 'bowlMix', 0).setOrigin(0, 0)
        this.bowl.play('mix1-anim', true)





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

        this.scoreText.text = this.score 
        
    }
}