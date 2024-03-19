/*
Final Project
Name: Bryant Aberin
Game Title: Pat the Baker
Time Spent: ~60 Hours
Phaser components used:
- Gravity
- Arcade Physics
- Animation management
- Bitmap Text
- Timers
- 

*/

'use strict'

let config = {
    parent: 'myGame',
    type: Phaser.AUTO,
    height: 480,
    width: 640,
    scale: {
        mode: Phaser.Scale.FIT
    },
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: {
                y: 1000
            }
        },
    },
    scene: [ Load, Keys, Menu, Tutorial, Credits, Levels, Transition, Pause, Win, Lose, Egg, Mixing, Saute]
}

let game = new Phaser.Game(config)

//globals
const centerX = game.config.width / 2
const centerY = game.config.height / 2
let roundNumber = 1
let pausedScene = ''
let levelType = 0
let score1 = 0
let score2 = 0
let score3 = 0




/*
Cluck sound: https://pixabay.com/sound-effects/chicken-single-alarm-call-6056/

Egg crack sound: https://pixabay.com/sound-effects/egg-cracking-6844/ 

Pop Sound: https://pixabay.com/sound-effects/happy-pop-2-185287/ 

Short Success sound: https://pixabay.com/sound-effects/short-success-sound-glockenspiel-treasure-video-game-6346/ 

Long Success Sound: https://pixabay.com/sound-effects/success-1-6297/ 

Cruising Down 8bit Lane: https://pixabay.com/music/video-games-cruising-down-8bit-lane-159615/ 
*/