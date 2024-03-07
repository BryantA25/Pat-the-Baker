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
            debug: true,
            gravity: {
                y: 1000
            }
        },
    },
    scene: [ Load, Keys, Menu, Transition, Egg ]
}

let game = new Phaser.Game(config)