class Lose extends Phaser.Scene {
    constructor() {
        super('sceneLose')
    }

    create() {
        this.sound.stopAll()

        this.add.tileSprite(0, 0, 640, 480, 'blank').setOrigin(0,0)

        if (levelType == 1 && roundNumber == 1) {
            this.scene.stop('sceneEgg')
            this.add.bitmapText(centerX, centerY-70, 'cartoonPink_font', "You didn't catch any eggs", 40, ).setOrigin(0.5)
            this.add.bitmapText(centerX, centerY, 'cartoonPink_font', "It is not possible to make scrambled eggs without eggs.", 20, ).setOrigin(0.5)
            //this.add.bitmapText(centerX, centerY+30, 'cartoonPink_font', "Now there's a huge mess outside.", 20, ).setOrigin(0.5)
        }


        this.clock = this.time.delayedCall(5000, ()=> {

            roundNumber = 1
            pausedScene = ''
            levelType = 0
            score1 = 0
            score2 = 0
            score3 = 0
            this.scene.launch('sceneKeys')
            this.scene.stop('sceneLose')
            

        }, null, this)

        
    }
}