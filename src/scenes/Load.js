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


        this.load.spritesheet('keyAll', 'ArrowKey.png', {
            frameWidth: 261,
            frameHeight: 127,
            startFrame: 0,
            endFrame: 4
        })

        this.load.spritesheet('eggScore', 'eggScore.png', {
            frameWidth: 227,
            frameHeight: 186,
            startFrame: 0,
            endFrame: 0
        })

        this.load.spritesheet('bowlMix', 'bowlMix.png', {
            frameWidth: 640,
            frameHeight: 480,
            startFrame: 0,
            endFrame: 3
        })

        this.load.spritesheet('patPan', 'patPan.png', {
            frameWidth: 311,
            frameHeight: 294,
            startFrame: 0,
            endFrame: 1
        })

        this.load.spritesheet('fire', 'fire.png', {
            frameWidth: 44,
            frameHeight: 12,
            startFrame: 0,
            endFrame: 1
        })

        // backdrops
        this.load.image('eggBackdrop', 'eggBackdrop.png')
        this.load.image('counterBackdrop', 'counterBackdrop.png')
        this.load.image('stoveBackdrop', 'stoveBackdrop.png')
        this.load.image('trans1', 'transition1.png')
        this.load.image('trans2', 'transition2.png')
        this.load.image('blank', 'blank.png')
        this.load.image('tutorial', 'tutorial.png')

        this.load.spritesheet('patBasket', 'patBasket.png', {
            frameWidth: 211,
            frameHeight: 341,
            startFrame: 0,
            endFrame: 3
        })

        // load sounds
        this.load.path = './assets/sounds/'
        this.load.audio('sfx-cluck', 'cluck.mp3')
        this.load.audio('sfx-crack', 'crack.mp3')
        this.load.audio('sfx-tick', 'tick.mp3')
        this.load.audio('sfx-pop', 'pop.mp3')

        // load fonts
        this.load.path = './assets/'
        this.load.bitmapFont('cartoonPink_font', 'font/cartoonPink.png', 'font/cartoonPink.xml')
        this.load.bitmapFont('cartoonPurple_font', 'font/cartoonPurple.png', 'font/cartoonPurple.xml')
    }

    create() {
        // create animations

        //key LR loop
        this.anims.create({
            key: 'keyLR-anim',
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('keyAll', {
                frames: [2,4]
            })
        })

        //key circle loop
        this.anims.create({
            key: 'keyLoop-anim',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('keyAll', {
                start: 1,
                end: 4
            })
        })

        this.anims.create({
            key: 'keyUp-idle',
            frameRate: 0,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('keyAll', {
                frames: [1]
            })
        })
        this.anims.create({
            key: 'keyLeft-idle',
            frameRate: 0,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('keyAll', {
                frames: [2]
            })
        })
        this.anims.create({
            key: 'keyDown-idle',
            frameRate: 0,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('keyAll', {
                frames: [3]
            })
        })
        this.anims.create({
            key: 'keyRight-idle',
            frameRate: 0,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('keyAll', {
                frames: [4]
            })
        })

        // bowl whisk anims
        this.anims.create({
            key: 'mix1-anim',
            frameRate: 0,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('bowlMix', {
                frames: [0]
            })
        })
        this.anims.create({
            key: 'mix2-anim',
            frameRate: 0,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('bowlMix', {
                frames: [1]
            })
        })
        this.anims.create({
            key: 'mix3-anim',
            frameRate: 0,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('bowlMix', {
                frames: [2]
            })
        })
        this.anims.create({
            key: 'mix4-anim',
            frameRate: 0,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('bowlMix', {
                frames: [3]
            })
        })
        
        
        

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

        // Pat pan forward
        this.anims.create({
            key: 'patPanFront-anim',
            frameRate: 0,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('patPan', {
                frames: [0]
            })
        })

        // Pat Pan back
        this.anims.create({
            key: 'patPanBack-anim',
            frameRate: 0,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('patPan', {
                frames: [1]
            })
        })

        // fire animation
        this.anims.create({
            key: 'fire-anim',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('fire', {
                start: 0,
                end: 1,
                first: 0
            })
        })

        //console.log("loaded assets, opening key scene")
        this.scene.launch('sceneKeys')
    }
}