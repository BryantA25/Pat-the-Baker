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
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: {
                y: 1000
            }
        },
    },
    scene: [ Load, Keys, Menu, Transition, Win, Egg ]
}

let game = new Phaser.Game(config)

//globals
const centerX = game.config.width / 2
const centerY = game.config.height / 2
let roundNumber = 1