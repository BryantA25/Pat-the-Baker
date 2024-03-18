/*
Final Project
Name: Bryant Aberin
Game Title: Pat the Baker
Time Spent: 
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
    scene: [ Load, Keys, Menu, Tutorial, Credits, Levels, Transition, Pause, Win, Egg, Mixing, Saute]
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
let finalScore = 0