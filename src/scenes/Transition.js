class Transition extends Phaser.Scene {
    constructor() {
        super('sceneTrans')
    }

    create() {
        this.add.text(10, 10, "Round Transition Scene")
    }

    
}