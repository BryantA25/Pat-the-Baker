class Load extends Phaser.Scene {
    constructor() {
        super('sceneLoad')
    }

    preload() {
        // load images
        this.load.path = './assets/img/'
        this.load.image('egg', 'egg.png')
        this.load.image('yolk', 'yolk.png')

        this.load.image('clock', 'clock.png')

        this.load.spritesheet('eggScore', 'eggScore.png', {
            frameWidth: 227,
            frameHeight: 186,
            startFrame: 0,
            endFrame: 0
        })


        this.load.image('eggBackdrop', 'eggBackdrop.png')
        this.load.image('trans1', 'transition1.png')
        this.load.image('trans2', 'transition2.png')

        this.load.spritesheet('patBasket', 'patBasket.png', {
            frameWidth: 211,
            frameHeight: 341,
            startFrame: 0,
            endFrame: 2
        })

        // load sounds
        this.load.path = './assets/sounds/'
        this.load.audio('sfx-cluck', 'cluck.mp3')
        this.load.audio('sfx-crack', 'crack.mp3')
        this.load.audio('sfx-tick', 'tick.mp3')

        // load fonts
        this.load.path = './assets/'
        this.load.bitmapFont('cartoonPink_font', 'font/cartoonPink.png', 'font/cartoonPink.xml')
        this.load.bitmapFont('cartoonPurple_font', 'font/cartoonPurple.png', 'font/cartoonPurple.xml')
    }

    create() {
        // create animations

        // Pat Basket Idle
        this.anims.create({
            key: 'patBasketIdle-anim',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('patBasket', {
                start: 0,
                end: 0
            })
        })

        // Pat Basket walk
        this.anims.create({
            key: 'patBasketWalk-anim',
            frames: this.anims.generateFrameNumbers('patBasket', {start: 0, end: 2, first: 0}),
            frameRate: 8,
            repeat: -1
        })

        //egg score animation
        this.anims.create({
            key: 'eggScore-anim',
            frames: this.anims.generateFrameNumbers('eggScore', {start: 0, end: 0, first: 0}),
            frameRate: 3,
            repeat: -1
        })

        //console.log("loaded assets, opening key scene")
        this.scene.launch('sceneKeys')
    }
}