class Keys extends Phaser.Scene{
    constructor() {
        super('sceneKeys')
    }

    create() {
        //console.log("loaded key scene")
        const { KeyCodes } = Phaser.Input.Keyboard
        this.KEYS = this.input.keyboard.addKeys({
            CONFIRM:    KeyCodes.Z,
            BACK:       KeyCodes.X,
            UP:         KeyCodes.UP,
            DOWN:       KeyCodes.DOWN,
            LEFT:       KeyCodes.LEFT,
            RIGHT:      KeyCodes.RIGHT,
            PAUSE:      KeyCodes.C
        })

        // launch next scene so it will run concurrently with this one
        //console.log("made keys, opening menu scene")
        this.scene.launch('sceneMenu')
    }

    /*
    update() {
        const { KEYS } = this
        if (KEYS.PAUSE.isDown) {
            this.scene.start('sceneMenu')
        }
    }
    */
}