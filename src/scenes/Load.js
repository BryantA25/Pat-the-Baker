class Load extends Phaser.Scene {
    constructor() {
        super('sceneLoad')
    }

    preload() {
        this.load.path = './assets/img/'
        this.load.image('egg', 'egg.png')
        this.load.image('yolk', 'yolk.png')


    }

    create() {
        console.log("loaded assets, opening key scene")
        this.scene.launch('sceneKeys')
    }
}