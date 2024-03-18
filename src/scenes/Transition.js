class Transition extends Phaser.Scene {
    constructor() {
        super('sceneTrans')
    }

    init() {
        this.nextLevelType = -1
        this.nextLevelName = ''
    }

    create() {
        //transition background
        this.add.tileSprite(0, 0, 640, 480, 'trans1').setOrigin(0,0)

        // endless level management
        if (levelType == 0) {
            this.nextLevelType = Phaser.Math.Between(1,2) 
            console.log('level type: ' + this.nextLevelType)
            
        }else { //level management

            // scrambled egg level management
            if (levelType == 1 && roundNumber == 1) {
                // egg gather
                this.nextLevelType = 1

            } else if (levelType == 1 && roundNumber == 2) {
                //start mixing
                this.nextLevelType = 2
            }

            //other level
        }

        //scene name management
        if (this.nextLevelType == 1) {
            this.nextLevelName = 'sceneEgg'
        } else if (this.nextLevelType == 2) {
            this.nextLevelName = 'sceneMixing'
        }

        //text management
        this.add.bitmapText(centerX, centerY-70, 'cartoonPink_font', "ROUND START", 64, ).setOrigin(0.5)
        if (this.nextLevelType == 1) {      //egg catching tutorial
            this.add.bitmapText(centerX, centerY, 'cartoonPink_font', "Use the LEFT and RIGHT to move", 30, ).setOrigin(0.5)
            this.add.bitmapText(centerX, centerY+30, 'cartoonPink_font', "Catch the eggs with the basket!", 30, ).setOrigin(0.5)
        } else if (this.nextLevelType == 2) {   // mixing level tutorial
            this.add.bitmapText(centerX, centerY, 'cartoonPink_font', "Press the right keys", 30, ).setOrigin(0.5)
            this.add.bitmapText(centerX, centerY+30, 'cartoonPink_font', "Whisk the ingredients!", 30, ).setOrigin(0.5)
        }

        this.waitTime = this.time.addEvent({
            delay: 3000,
            callback: this.switchScene,
            callbackScope: this,
            loop: false
        })

    }


    switchScene() {
        this.scene.start(this.nextLevelName)
    }
    
}