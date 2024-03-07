class Egg extends Phaser.Scene {
    constructor() {
        super('sceneEgg')
    }

    create() {
        console.log("egg scene: create")
        this.add.text(10, 10, "Egg mini-game scene")

        //keyboard controls
        //this.KEYS = this.scene.get('sceneKEYS').KEYS

        //egg summon timer
        this.eggTimer = this.time.addEvent({
            delay: 1000,
            callback: this.launchEgg,
            callbackScope: this,
            loop: true
        })

        this.eggGroup = this.add.group()
        this.ground = this.physics.add.body(0, 420, config.width, 1).setAllowGravity(false).setImmovable(true)
        this.basket = this.physics.add.body(300, 200, 50, 30).setAllowGravity(false).setImmovable(true)
    
        
        this.clock = this.time.delayedCall(10000, ()=> {
            
            this.add.text(10, 30, "Egg minigame over")

        }, null, this)

        //launch egg at 270, 270 every x seconds
        //this.add.physics.image()
    }

    update() {
        //this.egg.rotation = this.egg.body.angle
    }

    launchEgg() {
        let egg = this.physics.add.image(150, 270, 'egg').setVelocity(Phaser.Math.Between(50,200), Phaser.Math.Between(-800,-600))
        this.physics.add.collider(egg, this.ground, () => {
            this.add.image(egg.x, egg.y, 'yolk')
            egg.destroy()
        })
    }


}