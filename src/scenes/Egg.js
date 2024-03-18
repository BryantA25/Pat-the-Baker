class Egg extends Phaser.Scene {
    constructor() {
        super('sceneEgg')
    }

    init() {
        this.score = 0
        this.currentTime = 0
        this.roundTime = 8
        
    }

    create() {
        //grab keyboard binding from keys scene
        this.KEYS = this.scene.get('sceneKeys').KEYS

        
        // setup background
        this.add.tileSprite(0,0, 640, 480, 'eggBackdrop').setOrigin(0,0)

        // display current round
        this.add.bitmapText(20, 20, 'cartoonPurple_font', "Round " + roundNumber, 40, ).setOrigin(0)

        // egg score graphic
        this.eggScoreGraphic = this.add.sprite(410, 5, 'eggScore', 0).setOrigin(0)
        this.scoreText = this.add.text(555, 75, this.score, {
            fontFamily: 'Arial',
            fontStyle: 'bold',
            fontSize: '40px',
            color: '2d32ff'
        })

        //clock and text
        this.clockGraphic = this.add.image(550, 400, 'clock').setAlpha(0)
        this.remainingTime = this.add.text(535, 375, '', {
            fontFamily: 'Arial',
            fontSize: 'bold',
            fontSize: '50px',
            color: '000000'
        })


        //game objects
        this.ground = this.physics.add.body(0, 420, config.width, 1).setAllowGravity(false).setImmovable(true)

        // setup Pat
        this.patBasket = this.physics.add.sprite(300, 300, 'patBasket', 0)
        this.patBasket.setCollideWorldBounds(true)
        this.patBasket.body.setSize(70, 50).setOffset(3,200).setAllowGravity(false).setImmovable(true)

    
        // timers 

        //egg summon timer
        this.eggTimer = this.time.addEvent({
            delay: 1000,
            callback: this.launchEgg,
            callbackScope: this,
            repeat: 9
            //loop: true
        })

        // main timer
        this.clock = this.time.delayedCall(this.roundTime * 1000, ()=> {

            this.sound.stopAll()
            this.scene.start('sceneWin')
            
            //this.add.text(10, 30, "Egg minigame over")

        }, null, this)

        this.panicTimer = this.time.delayedCall((this.roundTime - 3) * 1000, ()=> {
            

            this.eggTimer = this.time.addEvent({
                delay: 500,
                callback: this.launchEgg,
                callbackScope: this,
                loop: true
            })
            
        })



        
    }

    update() {
        const { KEYS } = this

        //time management
        this.currentTime = Phaser.Math.RoundTo((this.roundTime - (this.roundTime * this.clock.getProgress())), 0)
        if(this.currentTime <= 3 && this.currentTime >= 0) {
            this.clockGraphic.setAlpha(1)
            this.remainingTime.text = this.currentTime
        }

        // movement and idle handling
        if(!(KEYS.LEFT.isDown||KEYS.RIGHT.isDown)) {
            this.patBasket.play('patBasketIdle-anim', true)
        }
        if (KEYS.LEFT.isDown) {
            this.patBasket.play('patBasketWalk-anim', true)
            this.patBasket.x -= 3
        }
        if (KEYS.RIGHT.isDown) {
            this.patBasket.play('patBasketWalk-anim', true)
            this.patBasket.x += 3
        }

        // exit to main menu
        if (KEYS.PAUSE.isDown) {
            this.scene.start('sceneMenu')
        }

    }

    launchEgg() {
        let egg = this.physics.add.image(150, 270, 'egg').setVelocity(Phaser.Math.Between(50,200), Phaser.Math.Between(-800,-600))
        this.sound.play('sfx-cluck')
        this.physics.add.collider(egg, this.ground, () => {
            this.add.image(egg.x, egg.y, 'yolk')
            this.sound.play('sfx-crack')
            egg.destroy()
        })
        this.physics.add.collider(egg, this.patBasket, () => {
            this.score += 1
            //console.log(this.score)
            this.scoreText.text = this.score
            egg.destroy()
        })
    }


}