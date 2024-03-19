class Transition extends Phaser.Scene {
    constructor() {
        super('sceneTrans')
    }

    init() {
        this.nextLevelType = -1
        this.nextLevelName = ''
    }

    create() {
        //grab keyboard binding from keys scene
        this.KEYS = this.scene.get('sceneKeys').KEYS

        //transition background
        this.add.tileSprite(0, 0, 640, 480, 'trans1').setOrigin(0,0)

        // endless level management
        if (levelType == 0) {
            this.nextLevelType = Phaser.Math.Between(1,2) 
            //console.log('level type: ' + this.nextLevelType)
            
        }else { //level management

            // scrambled egg level management
            if (levelType == 1 && roundNumber == 1) {
                // egg gather
                this.nextLevelType = 1

            } else if (levelType == 1 && roundNumber == 2) {
                //start mixing
                this.nextLevelType = 2
            } else if (levelType == 1 && roundNumber == 3) {
                // saute
                this.nextLevelType = 3
            }

            //other level
        }

        //scene name management
        if (this.nextLevelType == 1) {
            this.nextLevelName = 'sceneEgg'
        } else if (this.nextLevelType == 2) {
            this.nextLevelName = 'sceneMixing'
        } else if (this.nextLevelType == 3) {
            this.nextLevelName = 'sceneSaute'
        }

        //console.log("Level type: " + this.nextLevelType)
        //console.log("level name: " + this.nextLevelName)

        //text management
        
        if (this.nextLevelType == 1) {      //egg catching tutorial
            this.add.bitmapText(centerX, centerY-70, 'cartoonPink_font', "CATCH EGGS!", 64, ).setOrigin(0.5)
            this.add.bitmapText(centerX, centerY, 'cartoonPink_font', "Use the LEFT and RIGHT to move", 30, ).setOrigin(0.5)
            this.add.bitmapText(centerX, centerY+30, 'cartoonPink_font', "Catch the eggs with the basket!", 30, ).setOrigin(0.5)
        } else if (this.nextLevelType == 2) {   // mixing level tutorial
            this.add.bitmapText(centerX, centerY-70, 'cartoonPink_font', "GET WHISKING", 64, ).setOrigin(0.5)
            this.add.bitmapText(centerX, centerY, 'cartoonPink_font', "Press the keys in order", 30, ).setOrigin(0.5)
            this.add.bitmapText(centerX, centerY+30, 'cartoonPink_font', "Whisk the ingredients!", 30, ).setOrigin(0.5)
        } else if (this.nextLevelType == 3) {   // saute level tutorial
            this.add.bitmapText(centerX, centerY-70, 'cartoonPink_font', "GET COOKIN\'", 64, ).setOrigin(0.5)
            this.add.bitmapText(centerX, centerY, 'cartoonPink_font', "Press the right keys", 30, ).setOrigin(0.5)
            this.add.bitmapText(centerX, centerY+30, 'cartoonPink_font', "Cook the ingredients in the Pan", 30, ).setOrigin(0.5)
        }

        // no scene detected failsafe
        if (this.add.nextLevelName == '') {
            this.add.nextLevelName = 'sceneMenu'
        }

        this.waitTime = this.time.addEvent({
            delay: 3000,
            callback: this.switchScene,
            callbackScope: this,
            loop: false
        })

    }

    update() {
        const { KEYS } = this

        // Pause handling
        if (KEYS.PAUSE.isDown) {
            pausedScene = 'sceneTrans'
            this.scene.launch('scenePause')
        }
    }


    switchScene() {
        this.scene.start(this.nextLevelName)
    }
    
}