namespace SpriteKind {
    export const npc = SpriteKind.create()
    export const goastss = SpriteKind.create()
    export const backup = SpriteKind.create()
    export const mincrart = SpriteKind.create()
    export const exsogon = SpriteKind.create()
}
namespace StatusBarKind {
    export const levelups = StatusBarKind.create()
}
function song1 (num: number) {
    music.playMelody(music.convertRTTTLToMelody("Fall guys:d=4,o=5,b=153:16f#3,16a#4,16a#4,16a#4,8a#4,8p,16f#4,16a#4,8a#4,8p,8p,16e3,8g#4,8p,16e4,8g#4,8p,8p,16d3,16f#4,16f#4,16f#4,8f#4,8p,16d4,16f#4,8f#4,8p,8p,16e3,8g#4,8p,16e4,8g#4,8p,8p,16f#3,16a#4,16a#4,16a#4,8a#4,8p,16f#4,16a#4,8a#4,8p,8p,16e3,8g#4,8p,16e4,8g#4,8p,8p,16d3,16f#4,16f#4,16f#4,8f#4,8p,16d4,16f#4,8f#4,8p,8p,16e3,16p,8e2,8p,8p,16e3,16p,8e2,8p,8p,16f#2,16a#4,16p,16f#2,16a#4,16p,8f#3,8p,16a#4,16p,16f#2,16p,8f#2,8p,8p,16e2,16p,8e2,8p,8p,16e3,16p,8e2,8p,8p,16d2,16f#4,16p,16d2,16f#4,16p,8d3,8p,16d4,16p,16d2,16p,8d2,8p,8p,16e2,16p,8e2,8p,8p,16e3,16p,8e2,8p,8p,16f#2,16a#4,16p,16f#2,16a#4,16p,8f#3,8p,16f#4,16p,16f#2,16p,8f#2,8p,8p,16e2,16p,8e2,8p,8p,16e3,16p,8e2,8p,f#2,p,f#3,p,2p,2p,2p,2p,2p,2p,2p,8a#.4,16p,p,p,p,16b2,16d#6,16p,16b,16d#6,16p,8b,8p,8p,8p,16b2,16d#6,16p,8b,16d#6,16p,16a#,16p,16d#3,16c#6,16p,8a#,8p,16f#,16d#,16p,16f#,16d#,16p,8a#,8p,16f#,16d#,16p,16p,16g#6,16a#6,16p,16g#6,16p,16p,16p,16a#6,16g#6,16p,16a#6,16p,16p,16p,8g#6,8p,8p,8p,16g#2,16d#6,16p,16b,16p,16p,16g#3,16p,8b,8p,8p,8p,16g#3,16d#6,16p,8b,16d#6,16p,16a#,16p,8g#2,8p,8f6,8p,16c#6,16f6,16p,16c#6,16f6,16p,8c#6,8p,16c#6,16f6,16p,16p,16p,8a#2,16g#6,16p,8c#6,16g#6,16p,8c#6,8p,8p,8p,16b2,16f#6,16p,16d#6,16f#6,16p,8d#6,8p,8p,8p,16b2,16f#6,16p,8d#6,16g#6,16p,16c#6,16p,16d#3,16g#6,16p,8c#6,8p,8p,16d#3,16a#,16p,16p,16d#3,16a#,16p,16p,16d#4,16d#3,16a#,16p,16p,8d#3,16d#3,16p,16p,16d#3,16p,16f6,16d#4,16p,16p,16d#3,16p,8c#6,8p,8p,8p,16f2,16f#6,16p,16d#6,16p,16p,16f3,16p,8d#6,8p,8p,8p,16f2,16f#6,16p,8d#6,8p,16f#6,16p,16f#6,16p,16p,16a3,16p,16f#6,16p,8f#6,8p,16b,16f#6,16f#6,16f#6,16p,16p,16p,16p,16d#4,16g#6,16g#6,16g#6,16p,16p,16p,16p,16e4,16a6,16a6,16a6,16p,16p,16p,16p,16p,16f#4,16p,16p,16b6,16p,16p,8b6,8p,8p,8p,8p,8f#2,8f#2,8p,8p,8p,16f#3,8f#2,8f#2,16f#2,8f#2,8p,8p,8p,16f#3,8f#2,16f#2,16f#2,16f#2,16f#2,16f#2,16p,16p,16p,16f#3,8f#2,8f#2,16f#2,8f#2,8p,8p,8p,16f#3,8f#2,16f#2,8f#2,8f#2,8p,8p,8p,16f#3,8f#2,8f#2,16f#2,8f#2,8p,8p,8p,16f#3,8f#2,16f#2,16f#2,16f#2,16f#2,16f#2,16p,16p,16p,16f#3,8f#2,8f#2,16f#2,8f#2,8p,8p,8p,16f#3,8f#2,16f#2,16p,16p,16e2,16e,16p,16p,16e2,16e,16p,16p,16e3,16e2,16e,16p,16p,8e2,8p,16d2,16p,16p,8d2,8p,16d3,16p,16p,8d2,16d2,16p,16p,16c2,16p,16c2,16p,16p,16c2,16p,16c2,16p,16p,16c3,16c2,16c,16p,16p,8c2,8p,16d2,16p,16p,8d2,8p,16d3,16p,16p,8d2,16d2,16p,16p,16e2,16e,16p,16p,16e2,16e,16p,16p,16e3,16e2,16e,16p,16p,8e2,8p,16d2,16p,16p,16p,8d2,8p,16d3,16p,16p,16p,8d2,16d2,16p,16p,16c2,16p,16c2,16p,16p,16c2,16p,16c2,16p,16p,16c3,16c2,16e,16p,16p,8c2,8p,16d2,16p,16p,8d2,8p,16d3,16p,16p,8d2,16d2,16p,16p,16e2,16e,16p,16p,16e2,16e,16p,16p,16e3,16e2,16e,16p,16p,8e2,8p,16d2,16p,16p,8d2,8p,16d3,16p,16p,8d2,16d2,16p,16p,16c2,16p,16c2,16p,16p,16c2,16p,16c2,16p,16p,16c3,16c2,16c,16p,16p,8c2,8p,16d2,16p,16p,8d2,8p,16d3,16p,16p,8d2,16d2,16p,16p,16e2,16e,16p,16p,16e2,16e,16p,16p,16e3,16e2,16e,16p,16p,8e2,8p,16d2,16p,16p,16p,8d2,8p,16d3,16p,16p,16p,8d2,16d2,16p,16p,16c2,16p,16c2,16p,16p,16c2,16p,16c2,16p,16p,16c3,16c2,16e,16p,16p,8c2,8p,16d2,16p,16p,8d2,8p,16d3,16p,16p,8d2,16d2,16p,16p,16c2,16p,16c2,16p,16p,16c2,16p,16c2,16p,16p,16c3,16c2,16e,16p,16p,8c2,8p,16d2,16p,16p,8d2,8p,16d3,16p,16p,8d.2,8p.,8p.,16b1,16d,16p,16p,16b1,16d,16p,16p,16b2,16b1,16d,16p,16p,8b1,8p,16c2,16p,16p,8c2,8p,16c3,16p,16p,8c.2,8p.,8p.,16c2,16p,16c2,16p,16p,16c2,16p,16c2,16p,16p,16c3,16c2,16e,16p,16p,8c2,8p,16d2,16p,16p,8d2,8p,16d3,16p,16p,8d.2,8p.,8p.,16d2,16g,16p,16p,16d2,16g,16p,16p,16d3,16d2,16g,16p,16p,8d2,8p,16d2,16p,16p,8d2,8p,16d3,16p,16p,8d.2,8p.,8p.,16c2,16p,16c2,16p,16p,16c2,16p,16c2,16p,16p,16c3,16c2,16e,16p,16p,8c2,8p,16d2,16p,16p,8d2,8p,16d3,16p,16p,8d.2,8p.,8p.,16b1,16d,16p,16p,16b1,16d,16p,16p,16b2,16b1,16d,16p,16p,8b1,8p,16c2,16p,16p,8c2,8p,16c3,16p,16p,8c.2,8p.,8p.,16c2,16p,16c2,16p,16p,16c2,16p,16c2,16p,16p,16c3,16c2,16e,16p,16p,8c2,8p,16d2,16p,16p,8d2,8p,16d3,16p,16p,8d.2,8p.,8p.,16d2,16g,16p,16p,16d2,16g,16p,16p,16d3,16d2,16g,16p,16p,8d3,8p,16d3,16p,16p,8d3,8p,16d4,16p,16p,8d.3,8p.,8p.,16f#2,16a#4,16a#4,16a#4,8a#4,8p,8p,16f#2,16a#4,16p,8f#3,8p,8p,16c#3,16g#4,16a2,16p,16e4,16p,8f#2,8p,16d4,16f#4,16p,16f#2,16f#4,8f#4,8p,8p,16f#2,16f#4,16p,8f#3,8p,8p,16c#3,16g#4,16a2,16p,16e4,8g#4,8p,8p,16f#2,16a#4,16a#4,16a#4,8a#4,8p,8p,16f#2,16a#4,16p,8f#3,8p,8p,16c#3,16c#,16a2,16p,16c#,16p,8d2,8p,16a4,16a4,16p,16d2,16a4,8a4,8p,8p,16d2,16a4,16p,8a2,8p,8p,16f#2,16g#4,16c#3,16p,16e4,8g#4,8p,8p,16f#2,16a#4,16a#4,16a#4,8a#4,8p,8p,16f#2,16a#4,16p,8f#3,8p,8p,16c#3,16g#4,16a2,16p,16e4,16p,8f#2,8p,16d4,16f#4,16p,16f#2,16f#4,8f#4,8p,8p,16f#2,16f#4,16p,8f#3,8p,8p,16c#3,16g#4,16a2,16p,16e4,8g#4,8p,8p,16f#2,16a#4,16a#4,16a#4,8a#4,8p,8p,16f#2,16a#4,16p,8f#3,8p,8p,16c#3,16c#,16a2,16p,16c#,16p,8d2,8p,16a4,16a4,16p,16d2,16a4,8a4,8p,8p,16d2,16a4,16p,8a2,8p,8p,16f#2,16g#4,16c#3,16p,16e4,8g#4,8p,8p,16d2,16f#4,16f#4,16f#4,8f#4,8p,8p,16d2,16f#4,16p,8f#2,8p,8p,16d2,16g#4,16a2,16p,16e4,16p,8e2,8p,16e4,16e4,16p,16e2,16e4,8e4,8p,8p,16e2,16e4,16p,8f#2,8p,8p,16a2,16f#4,16f#2,16p,16f#4,8f#4,8p,8p,16b2,16f#4,16f#4,16f#4,8f#4,8p,8p,16b2,16f#4,16p,8f#3,8p,8p,16d3,16c#,16b2,16p,16c#,16p,8d2,8p,16e4,16a4,16p,16d2,16a4,8a4,8p,8p,16d2,16a4,16p,8g#2,8p,8p,16f#2,16g#4,16c#3,16p,16e4,8g#4,8p,8p,16d2,16f#4,16f#4,16f#4,8f#4,8p,8p,16d2,16f#4,16p,8f#2,8p,8p,16d2,16g#4,16a2,16p,16e4,16p,8e2,8p,16e4,16e4,16p,16e2,16e4,8e4,8p,8p,16e2,16e4,16p,8f#2,8p,8p,16a2,16f#4,16f#2,16p,16f#4,8f#4,8p,8p,16b2,16f#4,16f#4,16f#4,8f#4,8p,8p,16b2,16f#4,16p,8f#3,8p,8p,16d3,16c#,16b2,16p,16c#,16p,8d2,8p,16e4,16a4,16p,16d2,16a4,8a4,8p,8p,16d2,16a4,16p,d3,p,p,p,p,p,c#2,8f#2,8f#2,8p,8p,8c#,8f#2,8f#3,8c#3,8p,8p,8p,8a2,8d2,8f#2,8f#3,8p,8p,16d4,16f#2,8f3,16f#2,8e3,16f#2,16p,16p,16p,8d#3,8e3,8p,8f#2,8p,8p,8p,8f#3,8f#2,16c#3,8d3,16f#2,16p,16p,8b4,8d3,8b1,8b2,8p,8p,8p,8c#2,8c#3,16d2,16d3,8e2,8p,8p,8e4,8e3,8p,8p,16f#2,16a#4,16a#4,16a#4,16p,8f#2,8p,16f#4,16p,16f#2,16a#4,16f#2,16p,16p,16d2,16a#4,16e2,16p,16a#4,16p,8f2,8p,8p,8p,16f#2,16a#4,16a#4,16a#4,16p,8f#2,8p,8p,16c#,16p,16f#2,16a#4,16f#2,16p,16p,16p,16d2,16a#4,16a2,16p,16p,16c#,16p,8g#2,8p,8p,8p,8p,16f#2,16a#4,16a#4,16a#4,16p,8f#2,8p,8p,8p,16e,16p,16f#2,16a#4,16f#2,16p,16p,16p,16p,16d2,16a#4,16e2,16p,16p,16p,16e,16p,8f2,8p,8p,8p,8p,16b1,16a#4,16p,16b2,16a#4,16p,8c#2,8p,8p,8p,8p,16c#3,16a#4,16p,16d2,16p,16p,16p,16d3,16e2,16p,8p,8e6,8p,8p,8e3,8p,8p,8p,8p,8p,1f#2,1p,f#3"), num)
}
scene.onOverlapTile(SpriteKind.Food, assets.tile`tile9`, function (sprite, location) {
    sprite.destroy()
})
function TNT (mySprite: Sprite) {
    sprites.setDataSprite(mySprite, "exspogon", sprites.create(img`
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        `, SpriteKind.exsogon))
    tiles.placeOnTile(sprites.readDataSprite(mySprite, "exspogon"), locationofTNT)
    sprites.readDataSprite(mySprite, "exspogon").setFlag(SpriteFlag.GhostThroughWalls, true)
    sprites.readDataSprite(mySprite, "exspogon").y += -15
    sprites.readDataSprite(mySprite, "exspogon").x += -15
    animation.runImageAnimation(
    sprites.readDataSprite(mySprite, "exspogon"),
    [img`
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ...............................b............................
        ..............................bbb...........................
        ...............................b............................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        `,img`
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ........................bbbbbbbbbbb.........................
        .......................bbbbbbbbbbbbb........................
        .....................bbbbbbbbbbbbbbbbb......................
        ....................bbbbbbbbbbbbbbbbbbb.....................
        ...................bbbbbbbbbbbbbbbbbbbbb....................
        ...................bbbbbbbbbbbbbbbbbbbbb....................
        ..................bbbbbbbbbbbbbbbbbbbbbbb...................
        .................bbbbbbbbbbbbbbbbbbbbbbbbb..................
        .................bbbbbbbbbbbbbbbbbbbbbbbbb..................
        .................bbbbbbbbbbbbbbbbbbbbbbbbb..................
        .................bbbbbbbbbbbbbbbbbbbbbbbbb..................
        .................bbbbbbbbbbbbbbbbbbbbbbbbb..................
        .................bbbbbbbbbbbbbbbbbbbbbbbbb..................
        .................bbbbbbbbbbbbbbbbbbbbbbbbb..................
        .................bbbbbbbbbbbbbbbbbbbbbbbbb..................
        .................bbbbbbbbbbbbbbbbbbbbbbbbb..................
        .................bbbbbbbbbbbbbbbbbbbbbbbbb..................
        .................bbbbbbbbbbbbbbbbbbbbbbbbb..................
        ..................bbbbbbbbbbbbbbbbbbbbbbb...................
        ...................bbbbbbbbbbbbbbbbbbbbb....................
        ...................bbbbbbbbbbbbbbbbbbbbb....................
        ....................bbbbbbbbbbbbbbbbbbb.....................
        .....................bbbbbbbbbbbbbbbbb......................
        .......................bbbbbbbbbbbbb........................
        ........................bbbbbbbbbbb.........................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        `,img`
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ..........................bbbbbbbbbbb.......................
        ........................bbbbbbbbbbbbbbb.....................
        ......................bbbbbbbbbbbbbbbbbbb...................
        .....................bbbbbbbbbbbbbbbbbbbbb..................
        ....................bbbbbbbbbbbbbbbbbbbbbbb.................
        ...................bbbbbbbbbbbbbbbbbbbbbbbbb................
        ..................bbbbbbbbbbbbbbbbbbbbbbbbbbb...............
        ..................bbbbbbbbbbbbbbbbbbbbbbbbbbb...............
        .................bbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............
        .................bbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............
        ................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        ................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        ................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        ................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        ................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        ................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        ................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        ................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        ................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        ................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        ................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        .................bbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............
        .................bbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............
        ..................bbbbbbbbbbbbbbbbbbbbbbbbbbb...............
        ..................bbbbbbbbbbbbbbbbbbbbbbbbbbb...............
        ...................bbbbbbbbbbbbbbbbbbbbbbbbb................
        ....................bbbbbbbbbbbbbbbbbbbbbbb.................
        .....................bbbbbbbbbbbbbbbbbbbbb..................
        ......................bbbbbbbbbbbbbbbbbbb...................
        ........................bbbbbbbbbbbbbbb.....................
        ..........................bbbbbbbbbbb.......................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        `,img`
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ......................bbbbbbbbbbbbb.........................
        ...................bbbbbbbbbbbbbbbbbbb......................
        .................bbbbbbbbbbbbbbbbbbbbbbb....................
        ...............bbbbbbbbbbbbbbbbbbbbbbbbbbb..................
        ..............bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................
        .............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................
        ............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............
        ...........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............
        ..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        .........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............
        ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........
        ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........
        .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........
        .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........
        ......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........
        ......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........
        ......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
        ......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........
        ......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........
        ......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........
        .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........
        .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........
        ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........
        ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........
        .........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............
        ..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        ...........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............
        ............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............
        .............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................
        ..............bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................
        ...............bbbbbbbbbbbbbbbbbbbbbbbbbbb..................
        .................bbbbbbbbbbbbbbbbbbbbbbb....................
        ...................bbbbbbbbbbbbbbbbbbb......................
        ......................bbbbbbbbbbbbb.........................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        `,img`
        ............................................................
        .....................bbbbbbbbbbbbbbb........................
        ..................bbbbbbbbbbbbbbbbbbbbb.....................
        ................bbbbbbbbbbbbbbbbbbbbbbbbb...................
        ..............bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................
        .............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................
        ...........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............
        ..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        .........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............
        ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........
        .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........
        ......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........
        ......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
        ....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
        ....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
        ...bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb......
        ...bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb......
        ..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....
        ..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....
        ..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....
        .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....
        ..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....
        ..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....
        ..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....
        ...bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb......
        ...bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb......
        ....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
        ....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......
        .....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........
        ......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........
        ......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........
        .......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........
        ........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........
        .........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............
        ..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............
        ...........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............
        .............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................
        ..............bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................
        ................bbbbbbbbbbbbbbbbbbbbbbbbb...................
        ..................bbbbbbbbbbbbbbbbbbbbb.....................
        .....................bbbbbbbbbbbbbbb........................
        ............................................................
        ............................................................
        ............................................................
        ............................................................
        `],
    100,
    false
    )
    sprites.readDataSprite(mySprite, "exspogon").lifespan = 500
    timer.background(function () {
        while (!(spriteutils.isDestroyed(sprites.readDataSprite(mySprite, "exspogon")))) {
            timer.background(function () {
                for (let value of spriteutils.getSpritesWithin(SpriteKind.npc, 60, sprites.readDataSprite(mySprite, "exspogon"))) {
                    timer.background(function () {
                        if (value.x < sprites.readDataSprite(mySprite, "exspogon").x) {
                            value.setFlag(SpriteFlag.GhostThroughSprites, true)
                            value.setVelocity(-200, 0)
                            timer.background(function () {
                                sprites.setDataBoolean(value, "moveing", false)
                                pause(1000)
                                value.setVelocity(0, 0)
                                sprites.setDataBoolean(value, "moveing", true)
                                value.setFlag(SpriteFlag.GhostThroughSprites, false)
                            })
                        } else if (value.x > sprites.readDataSprite(mySprite, "exspogon").x) {
                            value.setFlag(SpriteFlag.GhostThroughSprites, true)
                            value.setVelocity(200, 0)
                            timer.background(function () {
                                sprites.setDataBoolean(value, "moveing", false)
                                pause(1000)
                                value.setVelocity(0, 0)
                                sprites.setDataBoolean(value, "moveing", true)
                                value.setFlag(SpriteFlag.GhostThroughSprites, false)
                            })
                        }
                    })
                    if (value.y < sprites.readDataSprite(mySprite, "exspogon").y) {
                        value.setFlag(SpriteFlag.GhostThroughSprites, true)
                        value.setVelocity(0, -200)
                        timer.background(function () {
                            sprites.setDataBoolean(value, "moveing", false)
                            pause(1000)
                            value.setVelocity(0, 0)
                            sprites.setDataBoolean(value, "moveing", true)
                            value.setFlag(SpriteFlag.GhostThroughSprites, false)
                        })
                    } else if (value.y > sprites.readDataSprite(mySprite, "exspogon").y) {
                        value.setFlag(SpriteFlag.GhostThroughSprites, true)
                        value.setVelocity(0, 200)
                        timer.background(function () {
                            sprites.setDataBoolean(value, "moveing", false)
                            pause(1000)
                            value.setVelocity(0, 0)
                            sprites.setDataBoolean(value, "moveing", true)
                            value.setFlag(SpriteFlag.GhostThroughSprites, false)
                        })
                    }
                }
            })
            for (let value of spriteutils.getSpritesWithin(SpriteKind.Player, 60, sprites.readDataSprite(mySprite, "exspogon"))) {
                timer.background(function () {
                    if (value.x < sprites.readDataSprite(mySprite, "exspogon").x) {
                        value.setFlag(SpriteFlag.GhostThroughSprites, true)
                        value.setVelocity(-200, 0)
                        timer.background(function () {
                            controller.moveSprite(value, 0, 0)
                            pause(1000)
                            controller.moveSprite(value, 100, 0)
                            value.setVelocity(0, 0)
                            value.setFlag(SpriteFlag.GhostThroughSprites, false)
                        })
                    } else if (value.x > sprites.readDataSprite(mySprite, "exspogon").x) {
                        value.setFlag(SpriteFlag.GhostThroughSprites, true)
                        value.setVelocity(200, 0)
                        timer.background(function () {
                            controller.moveSprite(value, 0, 0)
                            pause(1000)
                            controller.moveSprite(value, 100, 0)
                            value.setVelocity(0, 0)
                            value.setFlag(SpriteFlag.GhostThroughSprites, false)
                        })
                    }
                })
                if (value.y < sprites.readDataSprite(mySprite, "exspogon").y) {
                    value.setFlag(SpriteFlag.GhostThroughSprites, true)
                    value.setVelocity(0, -200)
                    timer.background(function () {
                        controller.moveSprite(value, 0, 0)
                        pause(1000)
                        controller.moveSprite(value, 100, 0)
                        value.setVelocity(0, 0)
                        value.setFlag(SpriteFlag.GhostThroughSprites, false)
                    })
                } else if (value.y > sprites.readDataSprite(mySprite, "exspogon").y) {
                    value.setFlag(SpriteFlag.GhostThroughSprites, true)
                    value.setVelocity(0, 200)
                    timer.background(function () {
                        controller.moveSprite(value, 0, 0)
                        pause(1000)
                        controller.moveSprite(value, 100, 0)
                        value.setVelocity(0, 0)
                        value.setFlag(SpriteFlag.GhostThroughSprites, false)
                    })
                }
            }
            pause(100)
        }
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        if (sprite.y > otherSprite.y) {
            sprite.y += 1
            otherSprite.y += -1
        } else if (sprite.y < otherSprite.y) {
            sprite.y += -1
            otherSprite.y += 1
        }
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
            otherSprite.x += -1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
            otherSprite.x += 1
        }
    }
    timer.background(function () {
        if (sprite.y < otherSprite.y && (controller.A.isPressed() && !(sprite.vy >= 100))) {
            sprite.vy += -10
            pause(2000)
        }
    })
})
function doSomething3 () {
    if (rond == 3) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 5; index++) {
            quofid = 0
            info.setScore(0)
            npc2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc2.vx = randint(45, 80)
        }
    }
    if (rond == 4) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 2; index++) {
            quofid = 0
            info.setScore(0)
            npc2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc2.vx = randint(45, 80)
        }
    }
    if (rond == 5) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 1; index++) {
            quofid = 0
            info.setScore(0)
            npc2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc2.vx = randint(45, 80)
        }
    }
}
function _new () {
    scene.setBackgroundImage(img`
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `)
    game.showLongText("Hi check out season 2 of fall guys 8 bit. It is now the 3.0 version.", DialogLayout.Center)
    pause(100)
    game.showLongText("we have a free DLC feathering new levels, and free skins that will be free for this season", DialogLayout.Center)
    scene.setBackgroundImage(img`
        ddddddddddddddddddd6666666666666666666655555555555555555555aaaaaaaaaaaaaaaaaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        ddddfffffffdddddddd666666fffff6666666665555a55555a555555555aaaaaa4aaaaa4aaaaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        dddfffffffffddddddd66666ff7f7ff666666665555aa555aa555555555aaaaaa44aaa44aaaaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        ddfffffffffffdddddd6666ff7f7f7ff66666665555aaaaaaa555555555aaaaaa4444444aaaaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        dddd2222222dddddddd666ffff7f7ffff6666665555aaaaaaa555555555aaaaaa4444444aaaaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        ddd23111113dddddddd666662222222666666665555a33333a555555555aaaaaa4eeeee4aaaaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        ddd231f1f13dddddddd666623111113666666665555a3f3f3a555555555aaaaaa4efefe4aaaaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        dddd31f1f13dddddddd6666231f1f13666666665555a3f3f3a555555555aaaaaa4efefe4aaaaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        dddd3111113dddddddd6666631f1f13666666665555a33333a555555555aaaaaa4eeeee4aaaaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        dddefeeeeeeeddddddd666663111113666666665555aaaaaaa555555555aaaaa444444444aaaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        ddedffeeeeededddddd6666efeeeeeee6666666555a9999999a55555555aaaa4a4411144a4aaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        ddedeffeeeededddddd666e6ffeeeee6e66666655a599999995a5555555aaaa4a4111114a4aaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        ddedeeffeeededddddd666e6effeeee6e66666655a599999995a5555555aaaa4a4111114a4aaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        ddbdeeeffeed3dddddd66676eeffeee6e66666655a599999995a5555555aaaaea4111114aeaaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        dbddeeeefffdddddddd66766eeeffee6366666655599999999955555555aaaaaa4411144aaaaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        ddbdeeeeeeedddddddd66676eeeefff66666666555999999999aaaa5555aaaaaa444444444444aaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        dddddedddbddddddddd666666e666766666666655555a555a5555555555aaaaaaa4aaa4aaaaaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        ddddddddddddddddddd6666666666666666666655555555555555555555aaaaaaaaaaaaaaaaaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        ddddddddddddddddddd6666666666666666666655555555555555555555aaaaaaaaaaaaaaaaaaaaaa2222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `)
    pause(100)
    game.showLongText("Starting at the top left. The new skins are Pirate, Slime Pirate, ", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
        ddddddddddddddddddd6666666666666666666655555555555555555555aaaaaaaaaaaaaaaaaaaaaa3333333333333333333377777777777777777444444444444444442222222222222222222222222
        ddddfffffffdddddddd666666fffff6666666665555a55555a555555555aaaaaa4aaaaa4aaaaaaaaa3333333333333333333377777777777777777444444444444444442222222222222222222222222
        dddfffffffffddddddd66666ff7f7ff666666665555aa555aa555555555aaaaaa44aaa44aaaaaaaaa3333331133311333333377774777774777777444444444444444442222222222222222222222222
        ddfffffffffffdddddd6666ff7f7f7ff66666665555aaaaaaa555555555aaaaaa4444444aaaaaaaaa333333f13331133333337777447774477777744444bbbbbbb444442222222222222222222222222
        dddd2222222dddddddd666ffff7f7ffff6666665555aaaaaaa555555555aaaaaa4444444aaaaaaaaa3333331111f1f33333337777444444477777744444bb5b5bb444442222222222222222222222222
        ddd23111113dddddddd666662222222666666665555a33333a555555555aaaaaa4eeeee4aaaaaaaaa333333f111ff133333337777444444477777744444bd4d4db444442222222222222222222222222
        ddd231f1f13dddddddd666623111113666666665555a3f3f3a555555555aaaaaa4efefe4aaaaaaaaa333333fddddd133333337777455555477777744444bd2d2db444442222222222222222222222222
        dddd31f1f13dddddddd6666231f1f13666666665555a3f3f3a555555555aaaaaa4efefe4aaaaaaaaa3333331dfdfd13333333777745f5f5477777744444bd2d2db444442222222222222222222222222
        dddd3111113dddddddd6666631f1f13666666665555a33333a555555555aaaaaa4eeeee4aaaaaaaaa3333331dfdfd13333333777745f5f5477777744bb4bdddddb4bb442222222222222222222222222
        dddefeeeeeeeddddddd666663111113666666665555aaaaaaa555555555aaaaa444444444aaaaaaaa333333fddddd13333333777745555547777774444bb22222bb44442222222222222222222222222
        ddedffeeeeededddddd6666efeeeeeee6666666555a9999999a55555555aaaa4a4411144a4aaaaaaa333331ffff111133333377766666666677777444b4b2fff2b4b4442222222222222222222222222
        ddedeffeeeededddddd666e6ffeeeee6e66666655a599999995a5555555aaaa4a4111114a4aaaaaaa333313111111f313333377676666666767777444b4b2f222b4b4442222222222222222222222222
        ddedeeffeeededddddd666e6effeeee6e66666655a599999995a5555555aaaa4a4111114a4aaaaaaa333313fff11ff31333337767616d6d6767777444b4b2ff22b4b4442222222222222222222222222
        ddbdeeeffeed3dddddd66676eeffeee6e66666655a599999995a5555555aaaaea4111114aeaaaaaaa33331311ff11f31333337767111d6d6767777444f4b2f222b4f4442222222222222222222222222
        dbddeeeefffdddddddd66766eeeffee6366666655599999999955555555aaaaaa4411144aaaaaaaaa3333f3111ff113f333337747616d6d674db7744444b22222b444442222222222222222222222222
        ddbdeeeeeeedddddddd66676eeeefff66666666555999999999aaaa5555aaaaaa444444444444aaaa333333ff11fff333333377776166d6677777744444bbbbbbb444442222222222222222222222222
        dddddedddbddddddddd666666e666766666666655555a555a5555555555aaaaaaa4aaa4aaaaaaaaaa333333f111111333333377776666666444477444444b444b4444442222222222222222222222222
        ddddddddddddddddddd6666666666666666666655555555555555555555aaaaaaaaaaaaaaaaaaaaaa3333333f333f3333333377777677767777777444444444444444442222222222222222222222222
        ddddddddddddddddddd6666666666666666666655555555555555555555aaaaaaaaaaaaaaaaaaaaaa3333333333333333333377777777777777777444444444444444442222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `)
    pause(100)
    game.showLongText("Purple Cat, Cinnamon Roll Cat, Zebra, TV Cat, Fire Bot 2.0,", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
        1111111111111111111cccccccccccccccccccc55555555555555555555aaaaaaaaaaaaaaaaaaaaaa3333333333333333333377777777777777777444444444444444449999999999999999999999999
        1111fffffff11111111ccccccfffffccccccccc5555a55555a555555555aaaaaa4aaaaa4aaaaaaaaa3333333333333333333377777777777777777444444444444444449999999999999999999999999
        111fffffffff1111111cccccff7f7ffcccccccc5555aa555aa555555555aaaaaa44aaa44aaaaaaaaa3333331133311333333377774777774777777444444444444444449999949fff949999999999999
        11fffffffffff111111ccccff7f7f7ffccccccc5555aaaaaaa555555555aaaaaa4444444aaaaaaaaa333333f13331133333337777447774477777744444bbbbbbb44444999994ffcff49999999999999
        1111222222211111111cccffff7f7ffffcccccc5555aaaaaaa555555555aaaaaa4444444aaaaaaaaa3333331111f1f33333337777444444477777744444bb5b5bb4444499999fcfffcf9999999999999
        1112311111311111111ccccc2222222cccccccc5555a33333a555555555aaaaaa4eeeee4aaaaaaaaa333333f111ff133333337777444444477777744444bd4d4db44444999fffffffffff99999999999
        111231f1f1311111111cccc23111113cccccccc5555a3f3f3a555555555aaaaaa4efefe4aaaaaaaaa333333fddddd133333337777455555477777744444bd2d2db444449999941111149999999999999
        111131f1f1311111111cccc231f1f13cccccccc5555a3f3f3a555555555aaaaaa4efefe4aaaaaaaaa3333331dfdfd13333333777745f5f5477777744444bd2d2db444449999941f1f149999999999999
        1111311111311111111ccccc31f1f13cccccccc5555a33333a555555555aaaaaa4eeeee4aaaaaaaaa3333331dfdfd13333333777745f5f5477777744bb4bdddddb4bb449999941f1f149999999999999
        111efeeeeeee1111111ccccc3111113cccccccc5555aaaaaaa555555555aaaaa444444444aaaaaaaa333333fddddd13333333777745555547777774444bb22222bb44449999941111149999999999999
        11e1ffeeeee1e111111ccccefeeeeeeeccccccc555a9999999a55555555aaaa4a4411144a4aaaaaaa333331ffff111133333377766666666677777444b4b2fff2b4b4449999fffffffff999999999999
        11e1effeeee1e111111cccecffeeeeececccccc55a599999995a5555555aaaa4a4111114a4aaaaaaa333313111111f313333377676666666767777444b4b2f222b4b444999f9fcfffff9f99999999999
        11e1eeffeee1e111111ccceceffeeeececccccc55a599999995a5555555aaaa4a4111114a4aaaaaaa333313fff11ff31333337767616d6d6767777444b4b2ff22b4b444999f9fffffcf9f99999999999
        11b1eeeffee13111111ccc7ceeffeeececccccc55a599999995a5555555aaaaea4111114aeaaaaaaa33331311ff11f31333337767111d6d6767777444f4b2f222b4f444999f9fffcfff9f99999999999
        1b11eeeefff11111111cc7cceeeffeec3cccccc55599999999955555555aaaaaa4411144aaaaaaaaa3333f3111ff113f333337747616d6d674db7744444b22222b4444499999fffffff9999999999999
        11b1eeeeeee11111111ccc7ceeeefffcccccccc555999999999aaaa5555aaaaaa444444444444aaaa333333ff11fff333333377776166d6677777744444bbbbbbb4444494444fcfffcf9999999999999
        11111e111b111111111cccccceccc7ccccccccc55555a555a5555555555aaaaaaa4aaa4aaaaaaaaaa333333f111111333333377776666666444477444444b444b4444449999fffffffff999999999999
        1111111111111111111cccccccccccccccccccc55555555555555555555aaaaaaaaaaaaaaaaaaaaaa3333333f333f3333333377777677767777777444444444444444449999994999499999999999999
        1111111111111111111cccccccccccccccccccc55555555555555555555aaaaaaaaaaaaaaaaaaaaaa3333333333333333333377777777777777777444444444444444449999999999999999999999999
        88888888888888888885555555555555555555533333333333333333333dddddddddddddddddddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        88884488844888888885555545555545555555533333f33333f33333333dddddd4ddddd4ddddddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        88884444444888888885555544444445555555533333ff333ff33333333dddddd44ddd44ddddddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        88884444444888888885555541111145555555533333fffffff33333333dddddd4444444ddddddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        88884ddddd48888888855511e1f1f1e1155555533333222222222223333dddddd4444444ddddddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        88884dfdfd4888888885555541f1f145555555533333f11111f33322333dddddd4555554ddddddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        88884dfdfd48888888855511e11111e1155555533333f1f1f1f33333333dddd1145f5f5411ddddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        88884ddddd4888488885555544444445555555533333f1f1f1f33333333dddddd45f5f54ddddddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        88844444444488488885555666666666555555533333f11111f33333333dddd11455555411ddddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        884844ddd4484848888555456666666545555553333fffffffff3333333ddddd666666666dddddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        88484ddddd48484888855545666666654555555333f3fffffff3f333333dddd6d6612166d6ddddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        88b84ddddd48b84888855545333333354555555333f3fffffff3f333333dddd6d6612166d6ddddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        888844ddd44884888885555533333334e4e4555333f3fffffff3f333333dddd6d6612166d6ddddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        888844444444488888855555545554555555555333f3fffffff3f333333dddd4d6612166d4ddddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        88888488848888888885555bbbbbbbbb555555533333fffffff33333333dddddd6611166ddddddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        888bbbbbbbbb88888885555555555555555555533333ffffffffffff333ddddddeeeeeee4444ddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        888888888888888888855555555555555555555333333f333f333333333dddddddedddedddddddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        88888888888888888885555555555555555555533333333333333333333dddddddddddddddddddddd2222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        `)
    pause(100)
    game.showLongText("Ava, Chip Von Boom, Gadget Cat, Ninji Cat, and Tom.", DialogLayout.Bottom)
    pause(100)
    game.showLongText("Most of the skins of form the new Purple Cat comic Battle of New Cat City!", DialogLayout.Center)
    pause(100)
    game.showLongText("Pluss there is now a way reset.", DialogLayout.Bottom)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of sprites.allOfKind(SpriteKind.npc)) {
        value.say(sprites.readDataString(value, "name"))
    }
})
function doSomething7 () {
    for (let index = 0; index < 10; index++) {
        if (look == l + 1) {
            doSomething4()
            doSomething5(mySprite)
            picture.drawLine(_1, _2, _1, _2, 2)
            mySprite.setImage(picture)
            doSomething4()
            picture.drawLine(_1, _2, _1, _2, 9)
            doSomething4()
            mySprite.setImage(picture)
            doSomething4()
            picture.drawLine(_1, _2, _1, _2, 5)
            doSomething5(mySprite)
            mySprite.setImage(picture)
            doSomething4()
            picture.drawLine(_1, _2, _1, _2, 3)
            doSomething5(mySprite)
            mySprite.setImage(picture)
            doSomething4()
            picture.drawLine(_1, _2, _1, _2, 10)
            doSomething5(mySprite)
            mySprite.setImage(picture)
            doSomething4()
            picture.drawLine(_1, _2, _1, _2, 4)
            doSomething5(mySprite)
        }
        if (look == l + 1) {
            pause(100)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    if (!(sprites.readDataBoolean(mySprite, "inmincart"))) {
        timer.background(function () {
            if (Achievements.checkForAchievement("All aboard", true)) {
                Achievements.showAchievement(
                "All aboard",
                "Get in a Minecart.",
                1,
                img`
                    . . . . . . . . 
                    f f f f f f f f 
                    f b b b b b b f 
                    f b b b b b b f 
                    f b b b b b b f 
                    f b b b b b b f 
                    f f f f f f f f 
                    . . f . . f . . 
                    `
                )
            }
        })
        sprites.setDataBoolean(mySprite, "inmincart", true)
        sprites.setDataSprite(sprite, "backup", sprites.create(sprite.image.clone(), sprite.kind()))
        sprite.setImage(sprites.readDataSprite(sprite, "backup").image.clone())
        sprites.readDataSprite(sprite, "backup").setFlag(SpriteFlag.Invisible, true)
        mincart = sprite
        sprite.setKind(SpriteKind.mincrart)
        sprite.image.drawLine(1, 8, 12, 8, 15)
        sprite.image.drawLine(1, 14, 12, 14, 15)
        sprite.image.drawLine(1, 8, 1, 14, 15)
        sprite.image.drawLine(12, 8, 12, 14, 15)
        sprite.image.setPixel(4, 15, 15)
        sprite.image.setPixel(5, 15, 15)
        sprite.image.setPixel(8, 15, 15)
        sprite.image.setPixel(9, 15, 15)
        sprite.image.drawLine(2, 9, 11, 9, 11)
        sprite.image.drawLine(2, 10, 11, 10, 11)
        sprite.image.drawLine(2, 11, 11, 11, 11)
        sprite.image.drawLine(2, 12, 11, 12, 11)
        sprite.image.drawLine(2, 13, 11, 13, 11)
        sprite.image.drawLine(0, 8, 0, 15, 0)
        sprite.image.drawLine(13, 8, 13, 15, 0)
        sprite.image.drawLine(14, 8, 14, 15, 0)
        sprite.image.drawLine(15, 8, 15, 15, 0)
        controller.moveSprite(sprite, 0, 0)
        sprite.vx = 150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile7`, function (sprite, location) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`tile67`)) {
        if (look3 == modcount) {
            look3 = 0
        } else {
            look3 += 1
        }
        mySprite.setImage(mods[look3])
    } else {
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`tile27`)) {
            if (look2 == blockSettings.readNumber("listdlc")) {
                look2 = 0
            } else {
                look2 += 1
            }
            mySprite.setImage(Lucas[look2])
        } else {
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`tile37`)) {
                tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 23))
                mySprite.setFlag(SpriteFlag.Invisible, true)
                controller.moveSprite(mySprite, 0, 0)
                scene.setBackgroundImage(img`
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888886666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888886666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888886666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888886668888888888888888888888888888888888888888888888886666666668888888866666688888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888886668888888888888888888888888888888888888888888888886666666666888866666666688888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888886668888888866668888888888888888888888888888888888886666666666686666666666688888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888886666888866666668888888888888888888888888888888888888888888666686666666888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888886666686666666668888888888888888888888888888888888888888888866666666888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888886666666666666888888888888888888888888888888888888888888888666666888888888888888888888888888888888888888888888888888888888888888888888
                    88888888888888888888888888888666666666eeeee888888888888888888888888888888888888886666666666888888888888888888888888888888888888888888888888888888888888888888888
                    88888888888888888888888888886666666eeeeeeeeeeeee8888888888888888888888888888888866666666666666888888888888888888888888888888888888888888888888888888888888888888
                    88888888888888888888888888886666666eeeeeeeeeeeeeee8888888888888888888888888888866666666e666666668888888888888888888888888888888888888888888888888888888888888888
                    88888888888888888888888888866666666668888eeeeeeeeeee88888888888888888888888888866666eeee866666666888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888866666866666688888888eeeeeeee88888888888888888888888886666eeeee888866666688888888888888888888888888888888888888888888888888888888888888
                    888888888888888888888888886666888666666888888888eeeeeee888888888888888888888888888eeee88888888666688888888888888888888888888888888888888888888888888888888888888
                    88888888888888888888888886666888888666666888888888eeeeee88888888888888888888888888eeee88888888866688888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888666688888886666688888888888eeeee888888888888888888888888eeee888888888888888888888888888888888888888888888888888888888888888888888888888
                    88888888888888888888888886668888888886666888888888888eeeeee8888888888888888888888eeee888888888888888888888888888888888888888888888888888888888888888888888888888
                    888888888888888888888888866668888888886668888888888888eeeeee888888888888888888888eee8888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888666666888888888888888888888888eeeeeee888888888888888888eeee8888888888888888888888888888888888888888888888888888888888888888888888888888
                    888888888888888888888888886666688888888888888888888888888eeeeee88888888888888888eeee8888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888886666888888888888888888888888888eeeeee8888888888888888eee88888888888888888888888888888888888888888888888888888888888888888888888888888
                    888888888888888888888888888888888888888888888888888888888888eeeee88888888888888eeee88888888888888888888888888888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888888888888888888eeeeee888888888888eeee88888888888888888888888888888888888888888888888888888888888888888888888888888
                    88888888888888888888888888888888888888888888888888888888888888eeeeee88888888888eee888888888888888888888888888888888888888888888888888888888888888888888888888888
                    888888888888888888888888888888888888888888888888888888888888888eeeee77777777777eee777777777777777777777888888888888888888888888888888888888888888888888888888888
                    88888888888888888888888888888888888888888888888888888877777777777eee77777777777eee777777777777777777777777788888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888888888888877777777777777777777777777777777eee777777777777777777777777777888888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888888887777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888888888888888888
                    8888888888888888888888888888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777788888888888888888888888888888888888888888888
                    8888888888888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888888888888
                    8888888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777778888888888888888888888888888888888888888
                    8888888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777788888888888888888888888888888888888888
                    8888888888888888888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888888888
                    8888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777778888888888888888888888888888888888
                    8888888888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888888
                    8888888888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888888888
                    8888888888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777778888888888888888888888888
                    8888888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777788888888888888888888888
                    8888888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888888
                    8888888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777778888888888888888888
                    8888888888888777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888888888
                    8888888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777778888888888888888
                    8888888888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777788888888888888
                    8888888888777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777778888888888888
                    8888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888888
                    8888888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777778888888888
                    8888888777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888888888
                    8888887777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777778888888
                    8888877777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777788888
                    8888777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777778888
                    8887777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777888
                    8887777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777788
                    8877777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777778
                    8777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    8777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                    `)
                game.showLongText("Hi check out season 3 of fall guys 8 bit. It is now version 4.0.", DialogLayout.Center)
                pause(100)
                game.showLongText("we have a free DLC featuring new levels, and a new way to get skins. ", DialogLayout.Center)
                pause(100)
                game.showLongText("And there is a new spot to access the skins you make.", DialogLayout.Center)
                pause(100)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 3))
                mySprite.setFlag(SpriteFlag.Invisible, false)
                controller.moveSprite(mySprite, 100, 100)
                scene.setBackgroundImage(img`
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    ................................................................................................................................................................
                    `)
            }
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`tile34`)) {
                gg = 11
                _66 = 13
                endgame1 = 14
                endgame2 = 14
                go()
            }
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`tile17`)) {
                gg = 8
                _66 = 8
            }
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`tile1`)) {
                if (look == blockSettings.readNumber("list")) {
                    look = 0
                } else {
                    look += 1
                }
                mySprite.setImage(list1[look])
            }
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`tile2`)) {
                go()
            }
            if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
                mySprite.vy += -100
            }
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`tile35`)) {
                blockSettings.clear()
                Achievements.resetAllAchievements()
                blockSettings.writeNumber("listdlc", 14)
                blockSettings.writeNumber("list", 19)
                game.reset()
            }
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`tile39`)) {
                blockSettings.writeString("Name", game.askForString("Name", 12))
                tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
            }
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`tile46`)) {
                blockSettings.readNumberArray("NPC1Name").push(game.askForNumber("NPC's Name"))
                tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
            }
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`tile72`)) {
                gg = 0
                _66 = sprites.readDataNumber(mySprite, "mod levels") + -1
                sprites.setDataBoolean(mySprite, "mod levels go", true)
                endgame1 = 0
                endgame2 = sprites.readDataNumber(mySprite, "mod levels endings") + -1
                go()
            }
            if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile15`)) {
                acivmints()
            }
        }
    }
})
function Gideon () {
    shop = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 . . . . . . . 
        . . . 1 1 1 1 1 1 1 . . . . . . 
        . . . 1 d d d d d 1 . . . . . . 
        . . . 1 d f d f d 1 . . . . . . 
        . . . 1 d f d f d 1 . . . . . . 
        . . . 1 d d d d d 1 . . . . . . 
        . . 1 1 1 4 4 4 1 1 1 . . . . . 
        . 1 . 1 1 1 4 1 1 1 . 1 . . . . 
        1 1 . 1 1 1 1 1 1 1 . 1 1 . . . 
        1 1 . 1 1 1 1 1 1 1 . 1 1 . . . 
        1 1 . 1 d 1 d 1 d 1 . 1 1 . . . 
        . . . d 1 d 1 d 1 d . . . . . . 
        . . . 1 1 1 1 1 1 1 . . . . . . 
        . . . . 4 . . . 4 . . . . . . . 
        . . . 4 4 . . . 4 4 . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 . . . . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . 3 3 3 3 3 3 3 3 3 . . . . . 
        . 3 1 1 1 1 1 1 1 1 1 3 . . . . 
        . 3 1 e 1 e e 1 e 1 e 3 . . . . 
        . 3 e e e e e e e e e 3 . . . . 
        . 3 1 1 1 1 1 1 1 1 1 3 . . . . 
        . . e e e e e e e e e . . . . . 
        . . e e e e e e e e e . . . . . 
        . . . . 3 . . . 3 . . . . . . . 
        `,
    img`
        . . . . . . 4 . . . . . . . . . 
        . . . f . 4 4 4 . f . . . . . . 
        . . . f 4 4 4 4 4 f . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . f 1 1 1 1 1 f . . . . . . 
        . . . f 1 f 1 f 1 f . . . . . . 
        . . . f 1 f 1 f 1 f . . . . . . 
        . . . f 1 1 1 1 1 f . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f f f f f f f f f . . . . . 
        . f . f f 1 1 1 f f . f . . . . 
        . f . f 1 1 1 1 1 f . f . . . . 
        . 1 . f 1 1 1 1 1 f . 1 . . . . 
        . . . f f 1 1 1 f f . . . . . . 
        . . . f f f f f f f f f f f f . 
        . . . . f . . . f . . . . . . . 
        `,
    img`
        . . . . . . 2 . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . 3 3 3 3 3 3 3 3 3 . . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . . 
        . . . . 3 . . . 3 . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 9 9 9 . . . . . . . 
        . . . 9 9 9 9 9 9 9 . . . . . . 
        . . . 9 1 1 1 1 1 9 . . . . . . 
        . . . 9 1 f 1 f 1 9 . . . . . . 
        . . . 9 1 f 1 f 1 9 . . . . . . 
        . . . 9 1 1 1 1 1 9 . . . . . . 
        . . 9 9 9 9 9 9 9 9 9 . . . . . 
        . 9 3 3 3 3 3 3 3 3 3 9 . . . . 
        . 9 3 e 3 e e 3 e 3 e 9 . . . . 
        . 9 e e e e e e e e e 9 . . . . 
        . 9 3 3 3 3 3 3 3 3 3 9 . . . . 
        . . e e e e e e e e e . . . . . 
        . . e e e e e e e e e . . . . . 
        . . . . 9 . . . 9 . . . . . . . 
        `,
    img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 4 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
        3 4 4 4 4 4 4 4 4 4 4 4 4 4 f 3 
        3 6 4 6 4 4 4 4 4 4 6 4 4 4 f 3 
        3 6 4 6 4 4 4 4 4 4 6 4 4 4 f 3 
        3 6 6 6 2 2 2 9 9 4 6 4 6 4 f 3 
        3 6 4 6 2 4 2 9 4 9 6 6 4 4 f 3 
        3 6 4 6 2 4 2 9 4 9 6 4 6 4 4 3 
        3 6 4 6 2 2 2 9 4 9 6 4 6 4 f 3 
        3 4 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
        3 4 4 4 4 1 1 1 1 1 4 4 4 4 4 3 
        3 4 4 4 4 1 f 1 f 1 4 4 4 4 4 3 
        3 4 4 4 4 1 f 1 f 1 4 4 4 4 4 3 
        3 4 4 4 4 1 1 1 1 1 4 4 4 4 4 3 
        3 4 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `,
    img`
        . . . . . . 2 . . . . . . . . . 
        . . . a . 2 2 2 . a . . . . . . 
        . . . a 2 2 2 2 2 a . . . . . . 
        . . . a a a a a a a . . . . . . 
        . . . a 1 1 1 1 1 a . . . . . . 
        . . . a 1 f 1 f 1 a . . . . . . 
        . . . a 1 f 1 f 1 a . . . . . . 
        . . . a 1 1 1 1 1 a . . . . . . 
        . . . a a a a a a a . . . . . . 
        . . a 9 9 9 9 9 9 9 a . . . . . 
        . a . 9 9 9 9 9 9 9 . a . . . . 
        . a . 9 9 9 9 9 9 9 . a . . . . 
        . a . 9 9 9 9 9 9 9 . a . . . . 
        . . . 9 9 9 9 9 9 9 . . . . . . 
        . . 9 9 9 9 9 9 9 9 9 . . . . . 
        . . . . a . . . a . . . . . . . 
        `,
    img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
        6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
        6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
        6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
        6 9 9 9 9 1 1 1 1 1 9 9 9 9 9 6 
        6 9 9 9 9 1 f 1 f 1 9 9 9 9 9 6 
        6 9 9 9 9 1 f 1 f 1 9 9 9 9 9 6 
        6 5 9 5 9 1 1 1 1 1 5 9 9 9 f 6 
        6 5 9 5 9 9 9 9 9 9 5 9 9 9 f 6 
        6 5 5 5 3 3 3 a a 9 5 9 5 9 f 6 
        6 5 9 5 3 9 3 a 9 a 5 5 9 9 f 6 
        6 5 9 5 3 9 3 a 9 a 5 9 5 9 9 6 
        6 5 9 5 3 3 3 a 9 a 5 9 5 9 f 6 
        6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        `,
    img`
        . . . . . . 2 . . . . . . . . . 
        . . . 4 . 2 2 2 . 4 . . . . . . 
        . . . 4 2 2 2 2 2 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 4 1 1 1 1 1 4 . . . . . . 
        . . . 4 1 f 1 f 1 4 . . . . . . 
        . . . 4 1 f 1 f 1 4 . . . . . . 
        . . . 4 1 1 1 1 1 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . 4 4 4 4 4 4 4 4 4 . . . . . 
        . 4 . 4 4 1 1 1 4 4 . 4 . . . . 
        . 4 . 4 1 1 1 1 1 4 . 4 . . . . 
        . 1 . 4 1 1 1 1 1 4 . 1 . . . . 
        . . . 4 4 1 1 1 4 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . . . . 4 . . . 4 . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 9 9 9 . . . . . . . 
        . . . 9 9 9 9 9 9 9 . . . . . . 
        . . . 9 1 1 1 1 1 9 . . . . . . 
        . . . 9 1 f 1 f 1 9 . . . . . . 
        . . . 9 1 f 1 f 1 9 . . . . . . 
        . . . 9 1 1 1 1 1 9 . . . . . . 
        . . 9 9 9 9 9 9 9 9 9 . . . . . 
        . 9 a a a a a a a a a 9 . . . . 
        . 9 a e a e e a e a e 9 . . . . 
        . 9 e e e e e e e e e 9 . . . . 
        . 9 a a a a a a a a a 9 . . . . 
        . . e e e e e e e e e . . . . . 
        . . e e e e e e e e e . . . . . 
        . . . . 9 . . . 9 . . . . . . . 
        `,
    img`
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . 3 2 2 2 3 . . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . . 1 1 1 1 1 1 1 . . . . . . 
        . . . 1 1 f 1 f 1 1 . . . . . . 
        . . . 1 1 f 1 f 1 1 . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 1 1 1 . . . . . 
        . 3 e e e e e e e e e 3 . . . . 
        . 3 e d d d d d d d e 3 . . . . 
        . 3 e d d d d d d d e 3 . . . . 
        . 3 e e d d d d d e e 3 . . . . 
        . . . e d d d d d e . . . . . . 
        . . . e e e e e e e . . . . . . 
        . . . . 3 . . . 3 . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 3 3 . 3 3 3 . . . . . . 
        . . 3 3 3 3 3 3 3 3 3 . . . . . 
        . 3 3 3 1 1 1 1 1 3 3 3 . . . . 
        . 3 3 3 1 f 1 f 1 3 3 3 . . . . 
        . 3 3 3 1 f 1 f 1 3 3 3 . . . . 
        . 3 3 3 1 1 1 1 1 3 3 3 . . . . 
        . 3 3 3 3 3 3 3 3 3 3 3 . . . . 
        . 3 3 3 3 3 3 3 3 3 3 3 . . . . 
        . 3 3 3 3 3 3 3 3 3 3 3 . . . . 
        . a 3 3 3 3 3 3 3 3 3 3 . . . . 
        . a . 3 3 3 3 3 3 3 . a . . . . 
        . . . . 3 3 3 3 3 . . . . . . . 
        . . . . a 3 3 3 a . . . . . . . 
        . . . . a . . . a . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 . 2 2 2 . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . . 
        . 2 2 2 1 1 1 1 1 2 2 2 . . . . 
        . 2 2 2 1 f 1 f 1 2 2 2 . . . . 
        . 2 2 2 1 f 1 f 1 2 2 2 . . . . 
        . 2 2 2 1 1 1 1 1 2 2 2 . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 . . . . 
        . 3 2 2 2 2 2 2 2 2 2 3 . . . . 
        . 3 . 2 2 2 2 2 2 2 . 3 . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . 3 . . . 3 . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 4 4 4 . 4 4 4 . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . . 
        . a a a 1 1 1 1 1 a a a . . . . 
        . 8 8 8 1 f 1 f 1 8 8 8 . . . . 
        . 7 7 7 1 f 1 f 1 7 7 7 . . . . 
        . 5 5 5 1 1 1 1 1 5 5 5 . . . . 
        . 4 4 4 4 4 4 4 4 4 4 4 . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 . . . . 
        . a a a a a a a a a a a . . . . 
        . 3 8 8 8 8 8 8 8 8 8 3 . . . . 
        . 3 . 7 7 7 7 7 7 7 . 3 . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . 3 4 4 4 3 . . . . . . . 
        . . . . 3 . . . 3 . . . . . . . 
        `,
    img`
        . . . . . . 2 . . . . . . . . . 
        . . . . . 7 3 6 . . . . . . . . 
        . . . . 9 1 1 1 9 . . . . . . . 
        . . . a 5 9 5 9 5 a . . . . . . 
        . . . 5 1 1 1 1 1 5 . . . . . . 
        . . . a 1 f 1 f 1 a . . . . . . 
        . . . 5 1 f 1 f 1 5 . . . . . . 
        . . . a 1 1 1 1 1 a . . . . . . 
        . . 4 5 6 5 6 5 6 5 4 . . . . . 
        . 6 . 6 5 6 5 6 5 6 . 6 . . . . 
        . 4 . 5 6 5 6 5 6 5 . 4 . . . . 
        . 2 . 2 5 2 5 2 5 2 . 2 . . . . 
        . 4 . 5 2 5 2 5 2 5 . 4 . . . . 
        . . . 2 5 2 5 2 5 2 . . . . . . 
        . . . 5 4 5 4 5 4 5 . . . . . . 
        . . . . 5 . . . 5 . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 . 2 2 2 . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . . 
        . 2 2 2 1 1 1 1 1 2 2 2 . . . . 
        . 2 2 2 1 f 1 f 1 2 2 2 . . . . 
        . 2 2 2 1 f 1 f 1 2 2 2 . . . . 
        . 2 2 2 1 1 1 1 1 2 6 6 . . . . 
        . 2 9 2 2 7 2 5 2 5 6 2 . . . . 
        . 2 9 2 7 2 7 5 2 5 6 6 . . . . 
        . 2 9 2 7 2 7 5 2 5 6 2 . . . . 
        . 3 9 9 2 7 2 2 5 2 6 6 . . . . 
        . 3 . 2 2 2 2 2 2 2 . 3 . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . 3 2 2 2 3 . . . . . . . 
        . . . . 3 . . . 3 . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . a a a . a a a . . . . . . 
        . . a a a a a a a a a . . . . . 
        . a a a 1 1 1 1 1 a a a . . . . 
        . a a a 1 f 1 f 1 a a a . . . . 
        . a a a 1 f 1 f 1 a a a . . . . 
        . a a a 1 1 1 1 1 a a a . . . . 
        . a a a a a a a a a a a . . . . 
        . a a a a a a a a a a a . . . . 
        . a a a a a a a a a a a . . . . 
        . 3 a a a a a a a a a 3 . . . . 
        . 3 . a a a a a a a . 3 . . . . 
        . . . a a a a a a a . . . . . . 
        . . . . a a a a a . . . . . . . 
        . . . . 3 . . . 3 . . . . . . . 
        `
    ]
    Lucas = [
    img`
        . . . 1 . . . . . 1 . . . . . . 
        . . . 1 2 2 2 2 2 1 . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 . . . . 
        . . . 1 1 1 1 1 1 1 . . . . . . 
        . . . 1 d d d d d 1 . . . . . . 
        . . . 1 d f d f d 1 . . . . . . 
        . . . 1 d f d f d 1 . . . . . . 
        . . . 1 d d d d d 1 . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 . . . . . 
        . 1 . 1 1 d d d 1 1 . 1 . . . . 
        . 1 . 1 d d d d d 1 . 1 . . . . 
        . 1 . 1 d d d d d 1 . 1 . . . . 
        . 1 . 1 d d d d d 1 . 1 . . . . 
        . . . 1 1 d d d 1 1 . . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . 1 . . . 1 . . . . . . . 
        `,
    img`
        . . . f . . . . . f . . . . . . 
        . . . f f . . . f f . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . f 1 1 1 1 1 f . . . . . . 
        . . . f 1 f 1 f 1 f . . . . . . 
        . . . f 1 f 1 f 1 f . . . . . . 
        . . . f 1 1 1 1 1 f . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f f f f f f f f f . . . . . 
        . f . f f 1 1 1 f f . f . . . . 
        . f . f 1 1 1 1 1 f . f . . . . 
        . f . f 1 1 1 1 1 f . f . . . . 
        . 1 . f 1 1 1 1 1 f . 1 . . . . 
        . . . f f 1 1 1 f f . . . . . . 
        . . . f f f f f f f f f f f f . 
        . . . . f . . . f . . . . . . . 
        `,
    img`
        . . . 4 . . . . . 4 . . . . . . 
        . . . 4 4 . . . 4 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 4 1 1 1 1 1 4 . . . . . . 
        . . . 4 1 f 1 f 1 4 . . . . . . 
        . . . 4 1 f 1 f 1 4 . . . . . . 
        . . . 4 1 1 1 1 1 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . 4 4 4 1 1 1 4 4 4 . . . . . 
        . 4 . 4 1 1 1 1 1 4 . 4 . . . . 
        . 4 . 4 1 1 1 1 1 4 . 4 . . . . 
        . . . 4 4 1 1 1 4 4 . 4 . . . . 
        4 4 4 4 4 4 4 4 4 4 . . . . . . 
        . . . . 4 . . . 4 . . . . . . . 
        . 1 1 1 4 1 1 1 4 1 1 4 4 4 4 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 f 6 . . . . . . . 
        . . . 6 6 f 6 f 6 6 . . . . . . 
        . . . 6 6 6 6 6 6 6 . . . . . . 
        . . . 6 1 1 1 1 1 6 . . . . . . 
        . . . 6 1 f 1 f 1 6 . . . . . . 
        . . . 6 1 f 1 f 1 6 . . . . . . 
        . . . 6 1 1 1 1 1 6 . . . . . . 
        . . 6 6 6 6 6 6 6 6 6 . . . . . 
        . 6 . 6 6 6 6 6 6 6 . 6 . . . . 
        . 6 . 6 6 6 6 6 6 6 . 6 . . . . 
        . 6 . 6 6 6 6 6 6 6 . 6 . . . . 
        . 6 . 6 6 6 6 6 6 6 . 6 . . . . 
        . . . . 6 6 6 6 6 . . . . . . . 
        . . . . 6 6 . 6 6 . . . . . . . 
        . . . 6 6 . . . 6 6 . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . 1 . . 1 . 1 . . 1 . . . . . 
        . . . 1 . 1 . 1 . 1 . . . . . . 
        . . . . b b b b b . . . . . . . 
        . 1 1 b b b b b b b 1 1 . . . . 
        . . . b d d d d d b . . . . . . 
        . 1 1 b d 2 d 2 d b 1 1 . . . . 
        . . . b d 2 d 2 d b . . . . . . 
        . 1 1 b d d d d d b 1 1 . . . . 
        . . b b b b b b b b b . . . . . 
        . b . b b b b b b b . b . . . . 
        . b . b b b b b b b . b . . . . 
        . b . b b b b b b b . b . . . . 
        . b . b b b b b b b . b . . . . 
        . . . b b b b b b b . . . . . . 
        . . . . b . . . b . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 f 2 . . . . . . . 
        . . . 2 2 f 2 f 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . 2 1 1 1 1 1 2 . . . . . . 
        . . . 2 1 f 1 f 1 2 . . . . . . 
        . . . 2 1 f 1 f 1 2 . . . . . . 
        . . . 2 1 1 1 1 1 2 . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 . . . . . 
        . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
        . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
        . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
        . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        . . . 2 2 . . . 2 2 . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 4 4 f 4 . . . . . . . 
        . . . 1 1 f 1 f 1 1 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 1 1 1 1 1 1 1 . . . . . . 
        . . . 4 1 f 1 f 1 4 . . . . . . 
        . . . 1 1 f 1 f 1 1 . . . . . . 
        . . . 4 1 1 1 1 1 4 . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 . . . . . 
        . 4 . 4 4 4 4 4 4 4 . 4 . . . . 
        . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
        . 4 . 4 4 4 4 4 4 4 . 4 . . . . 
        . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
        . . . . 4 4 4 4 4 . . . . . . . 
        . . . . 1 1 . 1 1 . . . . . . . 
        . . . 4 4 . . . 4 4 . . . . . . 
        `,
    img`
        . . . f f f . . . . . . . . . . 
        . . . f f 2 f b . . . . . . . . 
        . . . f 2 2 f b b . . . . . . . 
        . . b f f f f b b b . . . . . . 
        . b b f 1 1 1 1 1 b . . . . . . 
        . b f f 1 f 1 f 1 c . . . . . . 
        . b f b 1 f 1 f 1 c . . . . . . 
        . . . b 1 1 1 1 1 c . . . . . . 
        . . b b b b b c c c b . . . . . 
        . b . b b b b c c c . b . . . . 
        . b . b b b b c c c . b . . . . 
        . b . b b b b b c c . b . . . . 
        . b . b b b b b b b . b . . . . 
        . . . b b b b b b b . . . . . . 
        . . . b b b . b b b . . . . . . 
        . . b b b . . . b b b . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 f 5 . . . . . . . 
        . . . 5 5 f 5 f 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        . . . 5 1 1 1 1 1 5 . . . . . . 
        . . . 5 1 f 1 f 1 5 . . . . . . 
        . . . 5 1 f 1 f 1 5 . . . . . . 
        . . . 5 1 1 1 1 1 5 . . . . . . 
        . . 5 5 5 5 5 5 5 5 5 . . . . . 
        . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
        . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
        . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
        . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . 5 5 . 5 5 . . . . . . . 
        . . . 5 5 . . . 5 5 . . . . . . 
        `,
    img`
        . . . f f f . . . . . . . . . . 
        . . . f f 2 f f . . . . . . . . 
        . 5 5 f 2 2 f f f . . . . . . . 
        . . 5 f f f f f f f . . . . . . 
        . 5 5 f 1 1 1 1 1 f . . . . . . 
        . . 5 f 1 f 1 f 1 f . . . . . . 
        . 5 5 f 1 f 1 f 1 f . . . . . . 
        . . . f 1 1 1 1 1 f . . . . . . 
        . . f f f f f f f f f . . . . . 
        . f . f f f f f f f . f . . . . 
        . f . f f f f f f f . f . . . . 
        . f . f f f f f f f . f . . . . 
        . f . f f f f f f f . f . . . . 
        . . . f f f f f f f . . . . . . 
        . . . f f f . f f f . . . . . . 
        . . f f f . . . f f f . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . a a a f a . . . . . . . 
        . . . a a f a f a a . . . . . . 
        . . . a a a a a a a . . . . . . 
        . . . a 1 1 1 1 1 a . . . . . . 
        . . . a 1 f 1 f 1 a . . . . . . 
        . . . a 1 f 1 f 1 a . . . . . . 
        . . . a 1 1 1 1 1 a . . . . . . 
        . . a a a a a a a a a . . . . . 
        . a . a a a a a a a . a . . . . 
        . a . a a a a a a a . a . . . . 
        . a . a a a a a a a . a . . . . 
        . a . a a a a a a a . a . . . . 
        . . . . a a a a a . . . . . . . 
        . . . . a a . a a . . . . . . . 
        . . . a a . . . a a . . . . . . 
        `,
    img`
        . . . 9 9 9 9 9 9 9 . . . . . . 
        . . 9 9 8 8 8 f 8 9 9 . . . . . 
        . . 9 8 8 f 8 f 8 8 9 . . . . . 
        . . 9 8 8 8 8 8 8 8 9 . . . . . 
        . . 9 8 9 9 9 9 9 8 9 . . . . . 
        . . 9 8 9 f 9 f 9 8 9 . . . . . 
        . . 9 8 9 f 9 f 9 8 9 . . . . . 
        . 9 9 8 9 9 9 9 9 8 9 9 . . . . 
        9 9 8 8 8 8 8 8 8 8 8 9 9 . . . 
        9 8 9 8 8 8 8 8 8 8 9 8 9 . . . 
        9 8 9 8 8 8 8 8 8 8 9 8 9 . . . 
        9 8 9 8 8 8 8 8 8 8 9 8 9 . . . 
        9 9 9 9 8 8 8 8 8 9 9 9 9 . . . 
        . . 9 9 8 8 9 8 8 9 9 . . . . . 
        . . 9 8 8 9 9 9 8 8 9 . . . . . 
        . . 9 9 9 9 . 9 9 9 9 . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 f 3 . . . . . . . 
        . . . 3 3 f 3 f 3 3 . . . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . 3 3 3 3 3 3 3 3 3 . . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . . . . 3 3 3 3 3 . . . . . . . 
        . . . . 3 3 . 3 3 . . . . . . . 
        . . . 3 3 . . . 3 3 . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . b b b f b . . . . . . . 
        . . . b b 2 b f b b . . . . . . 
        . . . b 2 2 b f b b . . . . . . 
        . . . b b b b b b b . . . . . . 
        . . . b 1 1 1 1 1 b . . . . . . 
        . . . b 1 f 1 f 1 b . . . . . . 
        . . . b 1 f 1 f 1 b . . . . . . 
        . . . b 1 1 1 1 1 b . . . . . . 
        . . b b b b b b b b b . . . . . 
        . b . b b b b b b b . b . . . . 
        . b . b b b b b b b . b . . . . 
        . b . b b b b b b b . b . . . . 
        . b . b b b b b b b . b . . . . 
        . . . . . . e . . . . . . . . . 
        . . . . e e e e e . . . . . . . 
        `,
    img`
        . . . b . . . . . b . . . . . . 
        . . . b b . . . b b . . . . . . 
        . . . b b b b b b b . . . . . . 
        . . . b d d d d d b . . . . . . 
        . . . b d 2 d 2 d b . . . . . . 
        . . . b d 2 d 2 d b . . . . . . 
        . . . b d d d d d b . . . . . . 
        . . . b b b b b b b . . . . . . 
        . . b b b d d d b b b . . . . . 
        . b . b d d d d d b . b . . . . 
        . b . b d d d d d b . b . . . . 
        . b . b d d d d d b . b . . . . 
        . b . b d d d d d b . b . . . . 
        . . . b b d d d b b . . . . . . 
        . . . b b b b b b b . . . . . . 
        . . . . b . . . b . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 7 7 7 f 7 . . . . . . . 
        . . . 7 7 f 7 f 7 7 . . . . . . 
        . . . 7 7 7 7 7 7 7 . . . . . . 
        . . . 7 1 1 1 1 1 7 . . . . . . 
        . . . 7 1 f 1 f 1 7 . . . . . . 
        . . . 7 1 f 1 f 1 7 . . . . . . 
        . . . 7 1 1 1 1 1 7 . . . . . . 
        . . 7 7 7 7 7 7 7 7 7 . . . . . 
        . 7 . 7 7 7 7 7 7 7 . 7 . . . . 
        . 7 . 7 7 7 7 7 7 7 . 7 . . . . 
        . 7 . 7 7 7 7 7 7 7 . 7 . . . . 
        . 7 . 7 7 7 7 7 7 7 . 7 . . . . 
        . . . . 7 7 7 7 7 . . . . . . . 
        . . . . 7 7 . 7 7 . . . . . . . 
        . . . 7 7 . . . 7 7 . . . . . . 
        `,
    img`
        . . . b . . . . . b . . . . . . 
        . . . b b . . . b b . . . . . . 
        . . . b b b b b b b . . . . . . 
        . . . b d d d d d b . . . . . . 
        . . . b d 2 d 2 d b . . . . . . 
        . . . b d 2 d 2 d b . . . . . . 
        . . . b d d d d d b . . . . . . 
        . . . b b b b b b b . . . . . . 
        . . b b b d d d b b b . . . . . 
        . b . b d d d d d b . b . . . . 
        . b . b d d d d d b . b . . . . 
        . b . b b d d d b b . b . . . . 
        . . . b b b b b b b . . . . . . 
        . . . . b . . . b . . . . . . . 
        . . b b b b b b b b b . . . . . 
        . . . 2 2 . . . 2 2 . . . . . . 
        `
    ]
}
sprites.onOverlap(SpriteKind.mincrart, SpriteKind.npc, function (sprite, otherSprite) {
    otherSprite.y += -16
})
function acivmints () {
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(8, 23))
    scene.cameraFollowSprite(mySprite4)
    mySprite.setFlag(SpriteFlag.Invisible, true)
    controller.moveSprite(mySprite, 0, 0)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    scene.setBackgroundImage(img`
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        `)
    blockMenu.showMenu(["Passing the time", "Frist place for the first time.", "All aboard", "Back"], MenuStyle.Grid, MenuLocation.FullScreen)
    blockMenu.setColors(3, 0)
    blockMenu.setControlsEnabled(true)
}
scene.onOverlapTile(SpriteKind.npc, assets.tile`myTile12`, function (sprite, location) {
    if (tiles.tileIs(tiles.locationInDirection(location, CollisionDirection.Right), assets.tile`tile87`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setWallAt(location, false)
        locationofTNT = tiles.locationInDirection(location, CollisionDirection.Right)
        TNT(sprite)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Right), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Right), false)
    }
    if (tiles.tileIs(tiles.locationInDirection(location, CollisionDirection.Left), assets.tile`tile87`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setWallAt(location, false)
        locationofTNT = tiles.locationInDirection(location, CollisionDirection.Left)
        TNT(sprite)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Left), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Left), false)
    }
    if (tiles.tileIs(tiles.locationInDirection(location, CollisionDirection.Top), assets.tile`tile87`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setWallAt(location, false)
        locationofTNT = tiles.locationInDirection(location, CollisionDirection.Top)
        TNT(sprite)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Top), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Top), false)
    }
    if (tiles.tileIs(tiles.locationInDirection(location, CollisionDirection.Bottom), assets.tile`tile87`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setWallAt(location, false)
        locationofTNT = tiles.locationInDirection(location, CollisionDirection.Bottom)
        TNT(sprite)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Bottom), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Bottom), false)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    if (tiles.tileIs(tiles.locationInDirection(location, CollisionDirection.Right), assets.tile`tile87`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setWallAt(location, false)
        locationofTNT = tiles.locationInDirection(location, CollisionDirection.Right)
        TNT(sprite)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Right), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Right), false)
    }
    if (tiles.tileIs(tiles.locationInDirection(location, CollisionDirection.Left), assets.tile`tile87`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setWallAt(location, false)
        locationofTNT = tiles.locationInDirection(location, CollisionDirection.Left)
        TNT(sprite)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Left), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Left), false)
    }
    if (tiles.tileIs(tiles.locationInDirection(location, CollisionDirection.Top), assets.tile`tile87`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setWallAt(location, false)
        locationofTNT = tiles.locationInDirection(location, CollisionDirection.Top)
        TNT(sprite)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Top), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Top), false)
    }
    if (tiles.tileIs(tiles.locationInDirection(location, CollisionDirection.Bottom), assets.tile`tile87`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setWallAt(location, false)
        locationofTNT = tiles.locationInDirection(location, CollisionDirection.Bottom)
        TNT(sprite)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Bottom), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Bottom), false)
    }
})
function numper () {
    for (let index = 0; index < 1000; index++) {
        text_list.push("" + randint(0, 9) + randint(0, 9) + randint(0, 9) + randint(0, 9) + randint(0, 9))
        for (let index = 0; index <= blockSettings.readNumberArray("NPC1Name").length; index++) {
            blockSettings.writeNumberArray("NPC1Name", blockSettings.readNumberArray("NPC1Name"))
            text_list.push("" + convertToText(blockSettings.readNumberArray("NPC1Name")[index]) + "NPC's name")
        }
    }
}
function doSomething8 () {
	
}
function placeing (mySprite: Sprite, num: number) {
    timer.background(function () {
        if (num == 1) {
            mySprite.setImage(img`
                . . . f f f f f f f f f f . . . 
                . . f 5 5 5 5 5 5 5 5 5 5 f . . 
                . f 5 4 4 4 4 4 4 4 4 4 4 5 f . 
                . f 5 4 4 4 f f f 4 4 4 4 5 f . 
                . f 5 4 4 f f 5 f 4 4 4 4 5 f . 
                . f 5 4 4 f 5 5 f 4 4 4 4 5 f . 
                . f 5 4 4 f f 5 f 4 4 4 4 5 f . 
                . f 5 4 4 4 f 5 f 4 4 4 4 5 f . 
                . f 5 4 4 4 f 5 f 4 4 4 4 5 f . 
                . f 5 4 4 4 f 5 f 4 4 4 4 5 f . 
                . f 5 4 4 f f 5 f f 4 4 4 5 f . 
                . f 5 4 4 f 5 5 5 f 4 4 4 5 f . 
                . f 5 4 4 f f f f f 4 4 4 5 f . 
                . f 5 4 4 4 4 4 4 4 4 4 4 5 f . 
                . . f 5 5 5 5 5 5 5 5 5 5 f . . 
                . . . f f f f f f f f f f . . . 
                `)
            timer.background(function () {
                if (Achievements.checkForAchievement("Frist place for the first time.", num == 1)) {
                    Achievements.showAchievement(
                    "Frist place for the first time.",
                    "Get first place.",
                    1,
                    img`
                        . 4 4 4 4 4 4 . 
                        4 5 5 5 5 5 5 4 
                        4 5 5 5 f 5 5 4 
                        4 5 5 f f 5 5 4 
                        4 5 5 5 f 5 5 4 
                        4 5 5 f f f 5 4 
                        4 5 5 5 5 5 5 4 
                        . 4 4 4 4 4 4 . 
                        `
                    )
                }
            })
        } else if (num == 2) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f f . . . 
                . . f b b b b b b b b b b f . . 
                . f b d d d d d d d d d d b . . 
                . f b d d d b b b d d d d b f . 
                . f b d d d d d d b d d d b f . 
                . f b d d d d d d b d d d b f . 
                . f b d d d d d d b d d d b f . 
                . f b d d d d d b d d d d b f . 
                . f b d d d d b d d d d d b f . 
                . f b d d d b d d d d d d b f . 
                . f b d d d b b b b d d d b f . 
                . f b d d d d d d d d d d b f . 
                . f b d d d d d d d d d d b f . 
                . . f b b b b b b b b b b f . . 
                . . . f f f f f f f f f f . . . 
                `)
        } else if (num == 3) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . f f f f f f f f f f . . . 
                . . f 4 4 4 4 4 4 4 4 4 4 f . . 
                . f 4 2 2 2 2 2 2 2 2 2 2 4 f . 
                . f 4 2 2 2 2 2 2 2 2 2 2 4 f . 
                . f 4 2 2 2 4 4 2 2 2 2 2 4 f . 
                . f 4 2 2 2 2 2 4 2 2 2 2 4 f . 
                . f 4 2 2 2 2 2 4 2 2 2 2 4 f . 
                . f 4 2 2 2 2 4 2 2 2 2 2 4 f . 
                . f 4 2 2 2 2 2 4 2 2 2 2 4 f . 
                . f 4 2 2 2 2 2 4 2 2 2 2 4 f . 
                . f 4 2 2 2 4 4 2 2 2 2 2 4 f . 
                . f 4 2 2 2 2 2 2 2 2 2 2 4 f . 
                . f 4 2 2 2 2 2 2 2 2 2 2 4 f . 
                . . f 4 4 4 4 4 4 4 4 4 4 f . . 
                . . . f f f f f f f f f f . . . 
                `)
        }
        pause(2000)
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    })
}
function setings () {
    if (blockSettings.exists("timesplayed")) {
        info.setScore(0)
    } else {
        blockSettings.writeNumber("timesplayed", 0)
    }
    if (blockSettings.exists("NPC1Name")) {
        info.setScore(0)
    } else {
        blockSettings.writeNumberArray("NPC1Name", [])
    }
    if (blockSettings.exists("name default")) {
        info.setScore(0)
    } else {
        blockSettings.writeNumber("name default", 0)
    }
    if (blockSettings.exists("listdlc")) {
        info.setScore(0)
    } else {
        blockSettings.writeNumber("listdlc", 3)
    }
    if (!(blockSettings.readNumber("listdlc") >= Lucascunt)) {
        statusbar = statusbars.create(45, 3, StatusBarKind.levelups)
        gaost = sprites.create(Lucas[1 + blockSettings.readNumber("listdlc")], SpriteKind.goastss)
        statusbar.setLabel("XP")
        statusbar.setColor(7, 1, 4)
        tiles.placeOnTile(gaost, tiles.getTileLocation(3, 9))
        statusbar.attachToSprite(gaost, 0, -4)
        if (blockSettings.exists("statbar")) {
            statusbar.value = blockSettings.readNumber("statbar")
        } else {
            blockSettings.writeNumber("statbar", 0)
            statusbar.value = 0
        }
    } else {
        statusbar = statusbars.create(45, 3, StatusBarKind.levelups)
        gaost = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.goastss)
        statusbar.setColor(7, 1, 4)
        statusbar.setLabel("XP")
        tiles.placeOnTile(gaost, tiles.getTileLocation(26, 4))
        statusbar.attachToSprite(gaost, 0, -4)
    }
    if (blockSettings.exists("levelup")) {
        info.setScore(blockSettings.readNumber("levelup"))
        if (!(blockSettings.readNumber("listdlc") >= Lucascunt)) {
            if (blockSettings.readNumber("levelup") >= 4) {
                statusbar.max = 10
            } else {
                statusbar.max = 5 * blockSettings.readNumber("levelup")
            }
        }
    } else {
        blockSettings.writeNumber("levelup", 1)
        info.setScore(blockSettings.readNumber("levelup"))
        if (!(blockSettings.readNumber("listdlc") >= Lucascunt)) {
            statusbar.max = 5 * blockSettings.readNumber("levelup")
        }
    }
    if (!(blockSettings.readNumber("listdlc") >= Lucascunt)) {
        if (statusbar.value >= statusbar.max) {
            game.setDialogCursor(Lucas[1 + blockSettings.readNumber("listdlc")])
            game.splash("you got a new costume!")
            game.setDialogCursor(img`
                . . . . 5 5 . . . . 
                . . . 5 5 5 5 . . . 
                . . 5 5 5 5 5 5 . . 
                5 5 5 5 f f 5 5 5 5 
                . 5 5 f 5 5 f 5 5 . 
                . . 5 f f f f 5 . . 
                . . 5 f 5 5 f 5 . . 
                . . 5 5 5 5 5 5 . . 
                . 5 5 . . . . 5 5 . 
                5 5 . . . . . . 5 5 
                `)
            blockSettings.writeNumber("listdlc", 1 + blockSettings.readNumber("listdlc"))
            blockSettings.writeNumber("levelup", 1 + blockSettings.readNumber("levelup"))
            blockSettings.writeNumber("statbar", 0)
            statusbar.max = 5 * blockSettings.readNumber("levelup")
            gaost.setImage(Lucas[1 + blockSettings.readNumber("listdlc")])
            statusbar.value = 0
        }
    } else {
        tiles.loadMap(tiles.createMap(tilemap`level23`))
    }
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`tile16`, function (sprite, location) {
    sprite.destroy()
})
function song2 (num: number) {
    music.playMelody(music.convertRTTTLToMelody("[Fall Guys:d=4,o=5,b=160:d6,8c.6,16c6,8a,8g,8f,g,8g,8a,f,8d,8f,g,8g,8a,f,8d,8f,g,8c6,8f6,2e6,8p,d6,8c.6,16c6,8a,8g,8f,g,8g,8a,f,8d,8f,g,8g,8a,f,8d,8f,e,8f,8e,d,8d6,8d6,8d6,d6,8c.6,16c6,8a,8g,8f,g,8g,8a,f,8d,8f,g,8g,8a,f,8d,8f,g,8c6,8f6,2e6,8p,d6,8c.6,16c6,8a,8g,8f,g,8g,8a,f,8d,8f,g,8g,8a,f,8d,8f,e,8f,8e,d,8d6,8d6,8d6,f#6,f#6,8f#6,f#6,8g6,8p,g6,8a6,a6,a6,a#6,a#6,8a#6,a#6,8b6,8p,b6,8c7,c7,c7,f#6,f#6,8f#6,f#6,8g6,8p,g6,8a6,a6,a6,a#6,a#6,8a#6,a#6,8b6,8p,b6,8c7,c7,c7,f#6,f#6,8f#6,f#6,8g6,8p,g6,8a6,a6,a6,a#6,a#6,8a#6,a#6,8b6,8p,b6,8c7,c7,c7,f#6,f#6,8f#6,f#6,8g6,8p,g6,8a6,a6,a6,a#6,a#6,8a#6,a#6,8b6,8p,b6,8c7,8c7,8c7,8c#7,8c#7,d7"), num)
}
function dlc_levels2 () {
    list = [tiles.createMap(tilemap`level18`), tiles.createMap(tilemap`level19`), tiles.createMap(tilemap`level20`), tiles.createMap(tilemap`level21`)]
    list = [tiles.createMap(tilemap`level4`), tiles.createMap(tilemap`level_7`), tiles.createMap(tilemap`level_3`), tiles.createMap(tilemap`level_4`)]
    list = [tiles.createMap(tilemap`level4`), tiles.createMap(tilemap`level5`), tiles.createMap(tilemap`level6`), tiles.createMap(tilemap`level7`)]
    for (let value of list) {
        list2.push(value)
    }
}
scene.onOverlapTile(SpriteKind.npc, assets.tile`myTile13`, function (sprite, location) {
    if (!(sprites.readDataBoolean(mySprite, "inmincart"))) {
        sprites.setDataBoolean(mySprite, "inmincart", true)
        sprites.setDataSprite(sprite, "backup", sprites.create(sprite.image.clone(), sprite.kind()))
        sprite.setImage(sprites.readDataSprite(sprite, "backup").image.clone())
        sprites.readDataSprite(sprite, "backup").setFlag(SpriteFlag.Invisible, true)
        mincart = sprite
        sprite.setKind(SpriteKind.mincrart)
        sprite.image.drawLine(1, 8, 12, 8, 15)
        sprite.image.drawLine(1, 14, 12, 14, 15)
        sprite.image.drawLine(1, 8, 1, 14, 15)
        sprite.image.drawLine(12, 8, 12, 14, 15)
        sprite.image.setPixel(4, 15, 15)
        sprite.image.setPixel(5, 15, 15)
        sprite.image.setPixel(8, 15, 15)
        sprite.image.setPixel(9, 15, 15)
        sprite.image.drawLine(2, 9, 11, 9, 11)
        sprite.image.drawLine(2, 10, 11, 10, 11)
        sprite.image.drawLine(2, 11, 11, 11, 11)
        sprite.image.drawLine(2, 12, 11, 12, 11)
        sprite.image.drawLine(2, 13, 11, 13, 11)
        sprite.image.drawLine(0, 8, 0, 15, 0)
        sprite.image.drawLine(13, 8, 13, 15, 0)
        sprite.image.drawLine(14, 8, 14, 15, 0)
        sprite.image.drawLine(15, 8, 15, 15, 0)
        controller.moveSprite(sprite, 0, 0)
        sprite.vx = 150
    }
})
sprites.onOverlap(SpriteKind.npc, SpriteKind.npc, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        if (sprite.y > otherSprite.y) {
            sprite.y += 1
            otherSprite.y += -1
        } else if (sprite.y < otherSprite.y) {
            sprite.y += -1
            otherSprite.y += 1
        }
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
            otherSprite.x += 1
        } else if (otherSprite.isHittingTile(CollisionDirection.Bottom)) {
            otherSprite.vy += -100
        } else if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            sprite.vy += -100
        }
    }
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`tile20`, function (sprite, location) {
    sprite.destroy()
})
function doSomething (mySprite: Sprite, mySprite2: Sprite) {
    rond += 1
    mySprite.destroy()
    tiles.destroySpritesOfKind(SpriteKind.npc)
    game.splash("qualify")
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 4))
    controller.moveSprite(mySprite, 0, 0)
    quofid = 0
    mySprite.ay = 100
    pause(1000)
    level = list2[randint(0, 2)]
    tiles.loadMap(level)
    for (let index = 0; index < 15; index++) {
        quofid = 0
        info.setScore(0)
        npc2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 3 3 3 3 3 3 . . . . . . 
            . . . 3 1 1 1 1 1 3 . . . . . . 
            . . . 3 1 f 1 f 1 3 . . . . . . 
            . . . 3 1 f 1 f 1 3 . . . . . . 
            . . . 3 1 1 1 1 1 3 . . . . . . 
            . . 3 3 3 3 3 3 3 3 3 3 . . . . 
            . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
            . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
            . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
            . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
            . . . 3 3 3 3 3 3 3 . . . . . . 
            . . . 3 3 3 3 3 3 3 . . . . . . 
            . . . . 3 . . . 3 . . . . . . . 
            `, SpriteKind.npc)
        npc2.vx = randint(45, 80)
    }
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 0)
    scene.setBackgroundColor(8)
    if (rond == 3) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 5; index++) {
            quofid = 0
            info.setScore(0)
            npc2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc2.vx = randint(45, 80)
        }
    }
    if (rond == 4) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 2; index++) {
            quofid = 0
            info.setScore(0)
            npc2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc2.vx = randint(45, 80)
        }
    }
    if (rond == 5) {
        tiles.destroySpritesOfKind(SpriteKind.npc)
        for (let index = 0; index < 1; index++) {
            quofid = 0
            info.setScore(0)
            npc2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 f 1 f 1 3 . . . . . . 
                . . . 3 1 1 1 1 1 3 . . . . . . 
                . . 3 3 3 3 3 3 3 3 3 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . 3 3 3 3 3 3 3 . . . . . . 
                . . . . 3 . . . 3 . . . . . . . 
                `, SpriteKind.npc)
            npc2.vx = randint(45, 80)
        }
    }
    if (rond == 6) {
        game.over(true)
    }
}
sprites.onOverlap(SpriteKind.npc, SpriteKind.Enemy, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
        } else {
            if (sprite.y > otherSprite.y) {
                sprite.y += 1
            } else if (sprite.y < otherSprite.y) {
                sprite.y += -1
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Food, assets.tile`tile20`, function (sprite, location) {
    sprite.destroy()
})
function dlc_levels () {
    list = [tiles.createMap(tilemap`level56`), tiles.createMap(tilemap`level56`), tiles.createMap(tilemap`level56`), tiles.createMap(tilemap`level56`)]
    for (let value of list) {
        list2.push(value)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile24`, function (sprite, location) {
    blockSettings.writeNumber("list", 1 + blockSettings.readNumber("list"))
    blockSettings.writeNumber("statbar", 5 + blockSettings.readNumber("statbar"))
    game.over(true)
})
function Mod_levels () {
    // No slime.
    // NPCs go only one way
    // Flag to start.
    modlevels = [tiles.copyMap(tiles.createMap(tilemap`level`)), tiles.copyMap(tiles.createMap(tilemap`level64`)), tiles.copyMap(tiles.createMap(tilemap`level65`)), tiles.copyMap(tiles.createMap(tilemap`level68`))]
    mod_end_levels = [tiles.copyMap(tiles.createMap(tilemap`level18`))]
    mods = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 . . . . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . 3 3 3 3 3 3 3 3 3 . . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . . 
        . . . . 3 . . . 3 . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 . . . . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . 3 3 3 3 3 3 3 3 3 . . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . . 
        . . . . 3 . . . 3 . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 . . . . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . 3 3 3 3 3 3 3 3 3 . . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . . 
        . . . . 3 . . . 3 . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 . . . . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . 3 3 3 3 3 3 3 3 3 . . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . . 
        . . . 3 3 3 3 3 3 3 . . . . . . 
        . . . . 3 . . . 3 . . . . . . . 
        `]
}
function doSomething5 (mySprite: Sprite) {
    picture.setPixel(5, 4, 1)
    picture.setPixel(6, 4, 1)
    picture.setPixel(7, 4, 1)
    picture.setPixel(8, 4, 1)
    picture.setPixel(9, 4, 1)
    picture.setPixel(5, 7, 1)
    picture.setPixel(6, 7, 1)
    picture.setPixel(7, 7, 1)
    picture.setPixel(8, 7, 1)
    picture.setPixel(9, 7, 1)
    picture.setPixel(5, 5, 1)
    picture.setPixel(6, 5, 15)
    picture.setPixel(7, 5, 1)
    picture.setPixel(8, 5, 15)
    picture.setPixel(9, 5, 1)
    picture.setPixel(5, 6, 1)
    picture.setPixel(6, 6, 15)
    picture.setPixel(7, 6, 1)
    picture.setPixel(8, 6, 15)
    picture.setPixel(9, 6, 1)
}
sprites.onOverlap(SpriteKind.mincrart, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.y += -16
})
sprites.onOverlap(SpriteKind.npc, SpriteKind.Food, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        if (sprite.y > otherSprite.y) {
            sprite.y += 1
        } else if (sprite.y < otherSprite.y) {
            sprite.y += -1
        }
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
        } else if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            sprite.vy += -100
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    for (let index = 0; index < 4; index++) {
        if (sprite.y > otherSprite.y) {
            sprite.y += 1
        } else if (sprite.y < otherSprite.y) {
            sprite.y += -1
        }
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
        } else if (sprite.isHittingTile(CollisionDirection.Bottom)) {
            sprite.vy += -100
        }
    }
})
scene.onOverlapTile(SpriteKind.mincrart, assets.tile`myTile12`, function (sprite, location) {
    if (tiles.tileIs(tiles.locationInDirection(location, CollisionDirection.Right), assets.tile`tile87`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setWallAt(location, false)
        locationofTNT = tiles.locationInDirection(location, CollisionDirection.Right)
        TNT(sprite)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Right), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Right), false)
    }
    if (tiles.tileIs(tiles.locationInDirection(location, CollisionDirection.Left), assets.tile`tile87`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setWallAt(location, false)
        locationofTNT = tiles.locationInDirection(location, CollisionDirection.Left)
        TNT(sprite)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Left), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Left), false)
    }
    if (tiles.tileIs(tiles.locationInDirection(location, CollisionDirection.Top), assets.tile`tile87`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setWallAt(location, false)
        locationofTNT = tiles.locationInDirection(location, CollisionDirection.Top)
        TNT(sprite)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Top), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Top), false)
    }
    if (tiles.tileIs(tiles.locationInDirection(location, CollisionDirection.Bottom), assets.tile`tile87`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setWallAt(location, false)
        locationofTNT = tiles.locationInDirection(location, CollisionDirection.Bottom)
        TNT(sprite)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Bottom), assets.tile`transparency16`)
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Bottom), false)
    }
})
function lucas () {
    Lucas = [
    img`
        . . . f f f f f f f . . . . . . 
        . . f f f f f f f f f . . . . . 
        . f f f f f f f f f f f . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . 2 3 1 1 1 1 1 3 . . . . . . 
        . . 2 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . e f e e e e e e e . . . . . 
        . e . f f e e e e e . e . . . . 
        . e . e f f e e e e . e . . . . 
        . e . e e f f e e e . e . . . . 
        . b . e e e f f e e . 3 . . . . 
        b . . e e e e f f f . . . . . . 
        . b . e e e e e e e . . . . . . 
        . . . . e . . . b . . . . . . . 
        `,
    img`
        . . . . f f f f f . . . . . . . 
        . . . f f 7 f 7 f f . . . . . . 
        . . f f 7 f 7 f 7 f f . . . . . 
        . f f f f 7 f 7 f f f f . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . 2 3 1 1 1 1 1 3 . . . . . . 
        . . 2 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 f 1 f 1 3 . . . . . . 
        . . . 3 1 1 1 1 1 3 . . . . . . 
        . . e f e e e e e e e . . . . . 
        . e . f f e e e e e . e . . . . 
        . e . e f f e e e e . e . . . . 
        . 7 . e e f f e e e . e . . . . 
        7 . . e e e f f e e . 3 . . . . 
        . 7 . e e e e f f f . . . . . . 
        . . . . e . . . 7 . . . . . . . 
        `,
    img`
        . . . a . . . . . a . . . . . . 
        . . . a a . . . a a . . . . . . 
        . . . a a a a a a a . . . . . . 
        . . . a a a a a a a . . . . . . 
        . . . a 3 3 3 3 3 a . . . . . . 
        . . . a 3 f 3 f 3 a . . . . . . 
        . . . a 3 f 3 f 3 a . . . . . . 
        . . . a 3 3 3 3 3 a . . . . . . 
        . . . a a a a a a a . . . . . . 
        . . a 9 9 9 9 9 9 9 a . . . . . 
        . a . 9 9 9 9 9 9 9 . a . . . . 
        . a . 9 9 9 9 9 9 9 . a . . . . 
        . a . 9 9 9 9 9 9 9 . a . . . . 
        . . 9 9 9 9 9 9 9 9 9 . . . . . 
        . . 9 9 9 9 9 9 9 9 9 a a a a . 
        . . . . a . . . a . . . . . . . 
        `,
    img`
        . . . 4 . . . . . 4 . . . . . . 
        . . . 4 4 . . . 4 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 4 e e e e e 4 . . . . . . 
        . . . 4 e f e f e 4 . . . . . . 
        . . . 4 e f e f e 4 . . . . . . 
        . . . 4 e e e e e 4 . . . . . . 
        . . 4 4 4 4 4 4 4 4 4 . . . . . 
        . 4 . 4 4 1 1 1 4 4 . 4 . . . . 
        . 4 . 4 1 1 1 1 1 4 . 4 . . . . 
        . 4 . 4 1 1 1 1 1 4 . 4 . . . . 
        . e . 4 1 1 1 1 1 4 . e . . . . 
        . . . 4 4 1 1 1 4 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . . . . 4 . . . 4 . . . . . . . 
        `,
    img`
        . . . 1 1 . . . 1 1 . . . . . . 
        . . . f 1 . . . 1 1 . . . . . . 
        . . . 1 1 1 1 f 1 f . . . . . . 
        . . . f 1 1 1 f f 1 . . . . . . 
        . . . f d d d d d 1 . . . . . . 
        . . . 1 d f d f d 1 . . . . . . 
        . . . 1 d f d f d 1 . . . . . . 
        . . . f d d d d d 1 . . . . . . 
        . . 1 f f f f 1 1 1 1 . . . . . 
        . 1 . 1 1 1 1 1 1 f . 1 . . . . 
        . 1 . f f f 1 1 f f . 1 . . . . 
        . 1 . 1 1 f f 1 1 f . 1 . . . . 
        . f . 1 1 1 f f 1 1 . f . . . . 
        . . . f f 1 1 f f f . . . . . . 
        . . . f 1 1 1 1 1 1 . . . . . . 
        . . . . f . . . f . . . . . . . 
        `,
    img`
        . . . 4 . . . . . 4 . . . . . . 
        . . . 4 4 . . . 4 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 4 5 5 5 5 5 4 . . . . . . 
        . . . 4 5 f 5 f 5 4 . . . . . . 
        . . . 4 5 f 5 f 5 4 . . . . . . 
        . . . 4 5 5 5 5 5 4 . . . . . . 
        . . 6 6 6 6 6 6 6 6 6 . . . . . 
        . 6 . 6 6 6 6 6 6 6 . 6 . . . . 
        . 6 . 6 1 6 d 6 d 6 . 6 . . . . 
        . 6 . 1 1 1 d 6 d 6 . 6 . . . . 
        . 4 . 6 1 6 d 6 d 6 . 4 d b . . 
        . . . 6 1 6 6 d 6 6 . . . . . . 
        . . . 6 6 6 6 6 6 6 4 4 4 4 . . 
        . . . . 6 . . . 6 . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . b b b b b b b . . . . . . 
        . . . b b 5 b 5 b b . . . . . . 
        . . . b d 4 d 4 d b . . . . . . 
        . . . b d 2 d 2 d b . . . . . . 
        . . . b d 2 d 2 d b . . . . . . 
        b b . b d d d d d b . b b . . . 
        . . b b 2 2 2 2 2 b b . . . . . 
        . b . b 2 f f f 2 b . b . . . . 
        . b . b 2 f 2 2 2 b . b . . . . 
        . b . b 2 f f 2 2 b . b . . . . 
        . f . b 2 f 2 2 2 b . f . . . . 
        . . . b 2 2 2 2 2 b . . . . . . 
        . . . b b b b b b b . . . . . . 
        . . . . b . . . b . . . . . . . 
        `,
    img`
        . . . . . 4 . f f f . 4 . . . . 
        . . . . . 4 f f c f f 4 . . . . 
        . . . . . f c f f f c f . . . . 
        . . . f f f f f f f f f f f . . 
        . . . . . 4 1 1 1 1 1 4 . . . . 
        . . . . . 4 1 f 1 f 1 4 . . . . 
        . . . . . 4 1 f 1 f 1 4 . . . . 
        . . . . . 4 1 1 1 1 1 4 . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f . f c f f f f f . f . . 
        . . . f . f f f f f c f . f . . 
        . . . f . f f f c f f f . f . . 
        . . . . . f f f f f f f . . . . 
        . 4 4 4 4 f c f f f c f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . . . 4 . . . 4 . . . . . 
        `,
    img`
        . . . 4 4 . . . 4 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 4 d d d d d 4 . . . . . . 
        . . . 4 d f d f d 4 . . . . . . 
        . . . 4 d f d f d 4 . . . . . . 
        . . . 4 d d d d d 4 . . . 4 . . 
        . . 4 4 4 4 4 4 4 4 4 . . 4 . . 
        . 4 . 4 4 d d d 4 4 . 4 . 4 . . 
        . 4 . 4 d d d d d 4 . 4 . 4 . . 
        . b . 4 d d d d d 4 . b . 4 . . 
        . . . 4 4 d d d 4 4 . . 4 . . . 
        . . . 4 4 4 4 4 4 4 4 4 . . . . 
        . . . . 4 . . . 4 . . . . . . . 
        . . b b b b b b b b b . . . . . 
        . . 8 8 8 8 8 8 8 8 8 . . . . . 
        `,
    img`
        . . . 4 . . . . . 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 4 1 1 1 1 1 4 . . . . . . 
        . 1 1 e 1 f 1 f 1 e 1 1 . . . . 
        . . . 4 1 f 1 f 1 4 . . . . . . 
        . 1 1 e 1 1 1 1 1 e 1 1 . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . 6 6 6 6 6 6 6 6 6 . . . . . 
        . 4 . 6 6 6 6 6 6 6 . 4 . . . . 
        . 4 . 6 6 6 6 6 6 6 . 4 . . . . 
        . 4 . 3 3 3 3 3 3 3 . 4 . . . . 
        . . . 3 3 3 3 3 3 3 4 e 4 e 4 . 
        . . . . 4 . . . 4 . . . . . . . 
        . . b b b b b b b b b . . . . . 
        . . 8 8 8 8 8 8 8 8 8 . . . . . 
        . . 8 8 8 8 8 8 8 8 8 . . . . . 
        `,
    img`
        . . . f . . . . . f . . . . . . 
        . . . f f . . . f f . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . f 1 1 1 1 1 f . . . 2 2 . 
        . . . f 1 f 1 f 1 f . . . . . . 
        . . . f 1 f 1 f 1 f . . . . . . 
        . . . f 1 1 1 1 1 f . . . . . . 
        . . f f f f f f f f f . . . . . 
        . f . f f f f f f f . f . . . . 
        . f . f f f f f f f . f . . . . 
        . f . f f f f f f f . f . . . . 
        . f . f f f f f f f . f . . . . 
        . . . f f f f f f f . . . . . . 
        . . . f f f f f f f f f f f f . 
        . . . . f . . . f . . . . . . . 
        `,
    img`
        . . . 4 . . . . . 4 . . . . . . 
        . . . 4 4 . . . 4 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 4 5 5 5 5 5 4 . . . . . . 
        . 1 1 4 5 f 5 f 5 4 1 1 . . . . 
        . . . 4 5 f 5 f 5 4 . . . . . . 
        . 1 1 4 5 5 5 5 5 4 1 1 . . . . 
        . . 6 6 6 6 6 6 6 6 6 . . . . . 
        . 6 . 6 6 1 2 1 6 6 . 6 . . . . 
        . 6 . 6 6 1 2 1 6 6 . 6 . . . . 
        . 6 . 6 6 1 2 1 6 6 . 6 . . . . 
        . 4 . 6 6 1 2 1 6 6 . 4 . . . . 
        . . . 6 6 1 1 1 6 6 . . . . . . 
        . . . e e e e e e e 4 4 4 4 . . 
        . . . . e . . . e . . . . . . . 
        `
    ]
    Lucascunt = 0
    for (let value of Lucas) {
        Lucascunt += 1
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile10`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    timer.after(500, function () {
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Bottom), false)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Bottom), assets.tile`transparency16`)
    })
})
function doSomething2 (mySprite: Sprite, mySprite2: Sprite) {
    mySprite.destroy()
    for (let index = 0; index < 1; index++) {
        quofid += 1
        info.changeScoreBy(1)
    }
    if (rond == 2 && quofid == 15) {
        game.splash("emulated")
        mySprite.destroy()
        spetate2 = 1
    }
    if (rond == 1 && quofid == 25) {
        game.splash("emulated")
        mySprite.destroy()
        spetate2 = 1
    }
    if (rond == 3 && quofid == 5) {
        game.splash("emulated")
        mySprite.destroy()
        spetate2 = 1
    }
    if (rond == 4 && quofid == 2) {
        game.splash("emulated")
        mySprite.destroy()
        spetate2 = 1
    }
    if (rond == 5 && quofid == 1) {
        game.splash("emulated")
        mySprite.destroy()
        spetate2 = 1
    }
}
scene.onOverlapTile(SpriteKind.mincrart, assets.tile`myTile11`, function (sprite, location) {
    if (sprites.readDataBoolean(mySprite, "inmincart") && mincart == sprite) {
        mincart = mySprite3
        sprites.setDataBoolean(mySprite, "inmincart", false)
        sprite.setKind(sprites.readDataSprite(sprite, "backup").kind())
        controller.moveSprite(sprite, 100, 0)
        sprite.vx = 0
        sprite.setImage(sprites.readDataSprite(sprite, "backup").image)
        sprites.readDataSprite(sprite, "backup").destroy()
    }
})
scene.onOverlapTile(SpriteKind.npc, assets.tile`tile10`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    timer.after(500, function () {
        tiles.setWallAt(tiles.locationInDirection(location, CollisionDirection.Bottom), false)
        tiles.setTileAt(tiles.locationInDirection(location, CollisionDirection.Bottom), assets.tile`transparency16`)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile9`, function (sprite, location) {
    blockSettings.writeNumber("statbar", levelsplayd + blockSettings.readNumber("statbar"))
    game.over(false)
})
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "Passing the time") {
        game.showLongText("Passing the time Play 10 tournaments.", DialogLayout.Bottom)
        if (blockSettings.readNumber("timesplayed") > 10) {
            game.showLongText("You have gotten this achievement.", DialogLayout.Bottom)
        }
    } else if (option == "Back") {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 3))
        mySprite.setFlag(SpriteFlag.Invisible, false)
        controller.moveSprite(mySprite, 100, 100)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        scene.cameraFollowSprite(mySprite)
        blockMenu.setControlsEnabled(false)
        blockMenu.closeMenu()
        mySprite4.destroy()
    } else if (option == "Frist place for the first time.") {
        game.showLongText("Frist place for the first time. Get first place.", DialogLayout.Bottom)
        if (!(Achievements.checkForAchievement("Frist place for the first time.", true))) {
            game.showLongText("You have gotten this achievement.", DialogLayout.Bottom)
        }
    } else if (option == "All aboard") {
        game.showLongText("All aboard. Get in a Minecart.", DialogLayout.Bottom)
        if (!(Achievements.checkForAchievement("All aboard", true))) {
            game.showLongText("You have gotten this achievement.", DialogLayout.Bottom)
        }
    }
})
function doSomething6 () {
    list1 = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 1 f 1 f 1 . . . . . . 
        . . . . . 1 f 1 f 1 . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 1 f 1 f 1 . . . . . . 
        . . . . . 1 f 1 f 1 . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `]
}
function doSomething4 () {
    _2 = randint(0, 16)
    _1 = randint(0, 16)
    while (picture.getPixel(_1, _2) == 0) {
        _2 = randint(0, 16)
        _1 = randint(0, 16)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    controller.moveSprite(sprite, 0, 0)
    for (let index = 0; index < 17; index++) {
        if (sprite.x > otherSprite.x) {
            sprite.x += 1
        } else if (sprite.x < otherSprite.x) {
            sprite.x += -1
        } else {
            if (sprite.y > otherSprite.y) {
                sprite.y += 1
            } else if (sprite.y < otherSprite.y) {
                sprite.y += -1
            }
        }
        pause(1)
    }
    controller.moveSprite(sprite, 100, 0)
})
function go () {
    textSprite2.setFlag(SpriteFlag.Invisible, true)
    sprites.setDataNumber(mySprite, "timesplayed2", blockSettings.readNumber("timesplayed"))
    sprites.changeDataNumberBy(mySprite, "timesplayed2", 1)
    blockSettings.writeNumber("timesplayed", sprites.readDataNumber(mySprite, "timesplayed2"))
    info.setScore(0)
    levelsplayd = 1
    gaost.setFlag(SpriteFlag.Invisible, true)
    gaost.destroy()
    controller.moveSprite(mySprite, 0, 0)
    mySprite.ay = 100
    mySprite.setFlag(SpriteFlag.Ghost, true)
    pause(1000)
    mySprite.setFlag(SpriteFlag.Ghost, false)
    mySprite.ay = 0
    tiles.loadMap(tiles.createMap(tilemap`level45`))
    sprites.setDataNumber(mySprite, "Loading", 1)
    textSprite = textsprite.create("" + sprites.readDataNumber(mySprite, "Loading") + "/" + "50", 0, 1)
    textSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    textSprite.setPosition(72, 99)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 3))
    sprites.setDataBoolean(mySprite, "loadinganamshon", true)
    timer.background(function () {
        song1(160)
    })
    for (let index = 0; index < 49; index++) {
        npc2 = sprites.create(list1[randint(0, l)], SpriteKind.npc)
        if (Math.percentChance(90)) {
            npc2.setImage(Lucas[randint(0, Lucascunt)])
        }
        text_list = [
        "CatMaster",
        "BatGuy",
        "AppleMan",
        "Max969",
        "Luke21",
        "Gameboy9010",
        "butch048",
        "breetoGuy",
        "KittyGirl1",
        "Gid436",
        "Batty",
        "cat323",
        "Luke174"
        ]
        sprites.setDataString(npc2, "name", text_list[randint(0, text_list.length)])
        if (Math.percentChance(50)) {
            sprites.setDataNumber(npc2, "r", 1)
        } else {
            sprites.setDataNumber(npc2, "r", -1)
        }
        sprites.setDataBoolean(mySprite, "q", false)
        npc2.setFlag(SpriteFlag.Invisible, true)
        npc2.setFlag(SpriteFlag.Ghost, true)
        sprites.changeDataNumberBy(mySprite, "Loading", 1)
        sprites.setDataBoolean(npc2, "moveing", true)
        textSprite.setText("" + sprites.readDataNumber(mySprite, "Loading") + "/" + "50")
        pause(randint(10, 500))
    }
    music.stopAllSounds()
    sprites.setDataBoolean(mySprite, "loadinganamshon", false)
    tiles.destroySpritesOfKind(SpriteKind.Food)
    tiles.destroySpritesOfKind(SpriteKind.Projectile)
    tiles.destroySpritesOfKind(SpriteKind.Text)
    count = 50
    leve2 = randint(_66, gg)
    if (sprites.readDataBoolean(mySprite, "mod levels go")) {
        Mod_levels()
        level = tiles.copyMap(modlevels[leve2])
    } else {
        level = tiles.copyMap(list2[leve2])
    }
    sprites.setDataBoolean(mySprite, "manesong", true)
    tiles.loadMap(level)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 0)
    scene.setBackgroundColor(8)
    tiles.placeOnRandomTile(mySprite, assets.tile`tile6`)
    tiles.placeOnRandomTile(mySprite, assets.tile`tile13`)
    mySprite.setFlag(SpriteFlag.Invisible, false)
    mySprite.ay = 100
    for (let value of sprites.allOfKind(SpriteKind.npc)) {
        tiles.placeOnRandomTile(value, assets.tile`tile6`)
        value.setFlag(SpriteFlag.Invisible, false)
        value.setFlag(SpriteFlag.Ghost, false)
    }
}
let list55: Image[] = []
let projectile: Sprite = null
let INiglist: Image[] = []
let mySprite2: Sprite = null
let spetate = false
let npc12: string[] = []
let npclist: Image[] = []
let leve2 = 0
let textSprite: TextSprite = null
let levelsplayd = 0
let spetate2 = 0
let mod_end_levels: tiles.WorldMap[] = []
let level: tiles.WorldMap = null
let list: tiles.WorldMap[] = []
let gaost: Sprite = null
let statusbar: StatusBarSprite = null
let Lucascunt = 0
let mySprite4: Sprite = null
let shop: Image[] = []
let Lucas: Image[] = []
let look2 = 0
let look3 = 0
let _2 = 0
let _1 = 0
let npc2: Sprite = null
let quofid = 0
let locationofTNT: tiles.Location = null
let rond = 0
let look = 0
let player_quofid = 0
let list2: tiles.WorldMap[] = []
let text_list: string[] = []
let l = 0
let list1: Image[] = []
let mincart: Sprite = null
let mySprite3: Sprite = null
let mods: Image[] = []
let modcount = 0
let modlevels: tiles.WorldMap[] = []
let picture: Image = null
let mySprite: Sprite = null
let textSprite2: Sprite = null
let count = 0
let endgame2 = 0
let endgame1 = 0
let _66 = 0
let gg = 0
if (blockSettings.exists("list")) {
    info.setScore(0)
} else {
    blockSettings.writeNumber("list", 19)
}
let Placing = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Placing.setFlag(SpriteFlag.RelativeToCamera, true)
Placing.setPosition(78, 105)
gg = 8
_66 = 0
endgame1 = 9
endgame2 = 10
count = 10
textSprite2 = textsprite.create("Achievements")
textSprite2.setFlag(SpriteFlag.GhostThroughSprites, true)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . 3 3 3 3 3 3 3 3 3 . . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    `, SpriteKind.Player)
sprites.setDataNumber(mySprite, "look", 0)
sprites.setDataBoolean(mySprite, "q", false)
picture = image.create(0, 0)
picture = image.create(16, 16)
sprites.setDataSprite(mySprite, "p2", sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . 3 . . . . . . . 
    . . . . . . . . 3 3 . . . . . . 
    . . . . . . . . 3 . . . . . . . 
    . . . . . . . . 3 . . . . . . . 
    . 3 3 3 3 . 3 3 3 . . . . . . . 
    . . . . . 3 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
sprites.readDataSprite(mySprite, "p2").setFlag(SpriteFlag.Ghost, true)
sprites.readDataSprite(mySprite, "p2").setFlag(SpriteFlag.Invisible, true)
Mod_levels()
sprites.setDataNumber(mySprite, "mod levels", 0)
for (let value of modlevels) {
    sprites.changeDataNumberBy(mySprite, "mod levels", 1)
}
sprites.setDataNumber(mySprite, "mod levels endings", 0)
for (let value of modlevels) {
    sprites.changeDataNumberBy(mySprite, "mod levels endings", 1)
}
sprites.setDataBoolean(mySprite, "mod levels go", false)
modcount = 0
for (let value of mods) {
    modcount += 1
}
mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mincart = mySprite3
sprites.setDataBoolean(mySprite, "inmincart", false)
list1 = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . 3 3 3 3 3 3 3 3 3 . . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 5 1 1 1 1 1 5 . . . . . . 
    . . . 2 1 f 1 f 1 2 . . . . . . 
    . . . 5 1 f 1 f 1 5 . . . . . . 
    . . . 2 1 1 1 1 1 2 . . . . . . 
    . . 5 5 5 5 5 5 5 5 5 . . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 5 5 5 5 5 5 5 . . . . . . 
    . . . . 2 . . . 2 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 2 1 1 1 1 1 2 . . . . . . 
    . . . 2 1 f 1 f 1 2 . . . . . . 
    . . . 2 1 f 1 f 1 2 . . . . . . 
    . . . 2 1 1 1 1 1 2 . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . . 2 . . . 2 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 9 9 9 9 9 . . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . 9 9 9 9 9 9 9 9 9 . . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . . 9 . . . 9 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . a a a a a . . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . a a a a a a a a a . . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . . . a a a a a a a . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . . a . . . a . . . . . . . 
    `,
img`
    . . . . . 2 2 2 . . . . . . . . 
    . . . . d 2 2 2 d . . . . . . . 
    . . . d d 2 2 2 d d . . . . . . 
    . . . d 1 1 1 1 1 d . . . . . . 
    . . . d 1 f 1 f 1 d . . . . . . 
    . . . d 1 f 1 f 1 d . . . . . . 
    . . . d 1 1 1 1 1 d . . . . . . 
    . . d d d 2 2 2 d d d . . . . . 
    . d . d d 2 2 2 d d . d . . . . 
    . d . d d 2 2 2 d d . d . . . . 
    . d . d d 2 2 2 d d . d . . . . 
    . d . d d 2 2 2 d d . d . . . . 
    . . . d d 2 2 2 d d . . . . . . 
    . . . d d 2 2 2 d d . . . . . . 
    . . . . d 2 2 2 d . . . . . . . 
    . . . . d . . . d . . . . . . . 
    `,
img`
    . . . . 1 1 1 1 1 . . . . . . . 
    . f 5 1 1 5 5 5 1 1 5 f . . . . 
    . f 5 1 1 2 5 1 1 1 5 f . . . . 
    . 5 5 1 1 1 2 1 1 1 5 5 . . . . 
    . . . 1 d d 2 d d 1 . . . . . . 
    . . . 1 d f d f d 1 . . . . . . 
    . . . 1 d f d f d 1 . . . . . . 
    . . . 1 d d d d d 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . 1 . 1 e 1 1 1 e 1 . 1 . . . . 
    . 1 . e e e 1 e e e . 1 . . . . 
    . 1 . e e e e e e e . 1 . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . e . . . e . . . . . . . 
    `,
img`
    . . . . a a a a a . . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . 1 f a a a f 1 . . . . . . 
    . . . 1 f a a a f 1 . . . . . . 
    . . . a a 5 5 5 a a . . . . . . 
    . . . a a a 5 a a a . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . a a a a a a a a a . . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . . . . a . . . a . . . . . . . 
    `,
img`
    . . . . . a a a a a . . . . . . 
    . . . . 1 f a a a f 1 . . . . . 
    . . . . 1 f a a a f 1 . . . . . 
    . . . . a a a a a a a . . . . . 
    . . . . a f f f f f a . . . . . 
    . . . . a d a a a d a . . . . . 
    . . . . a 1 1 1 1 1 a . . . . . 
    . . . . a 1 f 1 f 1 a . . . . . 
    . . . . a 1 f 1 f 1 a . . . . . 
    . . . . a 1 1 1 1 1 a . . . . . 
    . . . . a a 7 7 7 a a . . . . . 
    . . . a a 7 7 7 7 7 a a . . . . 
    . . a . a 7 7 7 7 7 a . a . . . 
    . . a . a 7 7 7 7 7 a . a . . . 
    . . a . a a 7 7 7 a a . a . . . 
    . . . . . a . . . a . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . 3 3 3 3 3 3 3 3 3 . . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . 3 . a f a a a f a . 3 . . . . 
    . 3 . f a a a a a f . 3 . . . . 
    . . . a a a a a a a . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . 5 1 1 1 1 1 5 . . . . . . 
    . . . 5 1 f 1 f 1 5 . . . . . . 
    . . . 5 1 f 1 f 1 5 . . . . . . 
    . . . 5 1 1 1 1 1 5 . . . . . . 
    . . 5 5 5 5 5 5 5 5 5 . . . . . 
    . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
    . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
    . 5 . 4 2 4 4 4 2 4 . 5 . . . . 
    . 5 . 2 4 4 4 4 4 2 . 5 . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . . 5 . . . 5 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 9 9 9 9 9 . . . . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . 9 9 9 9 9 9 9 9 9 . . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 9 . 8 f 8 8 8 f 8 . 9 . . . . 
    . 9 . f 8 8 8 8 8 f . 9 . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . . 8 8 8 8 8 8 8 . . . . . . 
    . . . . 9 . . . 9 . . . . . . . 
    `,
img`
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . 1 1 1 1 1 1 1 . . . . . . 
    . . . d f 1 1 1 f d . . . . . . 
    . . . d f 1 1 1 f d . . . . . . 
    . . . 1 1 5 5 5 1 1 . . . . . . 
    . . . 1 1 1 5 1 1 1 . . . . . . 
    . . . 1 d d d d d 1 . . . . . . 
    . . . 1 d f d f d 1 . . . . . . 
    . . . 1 d f d f d 1 . . . . . . 
    . . . 1 d d d d d 1 . . . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . 1 . 1 1 1 1 1 1 1 . 1 . . . . 
    . . . . 1 . . . 1 . . . . . . . 
    `,
img`
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . 1 f 6 6 6 f 1 . . . . . 
    . . . . 1 f 6 6 6 f 1 . . . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . . 6 f f f f f 6 . . . . . 
    . . . . 6 d 6 6 6 d 6 . . . . . 
    . . . . 6 1 1 1 1 1 6 . . . . . 
    . . . . 6 1 f 1 f 1 6 . . . . . 
    . . . . 6 1 f 1 f 1 6 . . . . . 
    . . . . 6 1 1 1 1 1 6 . . . . . 
    . . . . 6 6 7 7 7 6 6 . . . . . 
    . . . 6 6 7 7 7 7 7 6 6 . . . . 
    . . 6 . 6 7 7 7 7 7 6 . 6 . . . 
    . . 6 . 6 7 7 7 7 7 6 . 6 . . . 
    . . 6 . 6 6 7 7 7 6 6 . 6 . . . 
    . . . . . 6 . . . 6 . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . 2 f 1 1 1 1 1 f . . . . . . 
    . . 2 f 1 f 1 f 1 f . . . . . . 
    . . 2 f 1 f 1 f 1 f . . . . . . 
    . . . f 1 1 1 1 1 f . . . . . . 
    . . f f f f f f f f f . . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . a f d d d d d f . . . . . . 
    . . a f d f d f d f . . . . . . 
    . . a f d f d f d f . . . . . . 
    . . . f d d d d d f . . . . . . 
    . . f f f f f f f f f . . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . 5 2 5 2 5 2 5 . . . . . . 
    . . 5 f 1 1 1 1 1 f . . . . . . 
    . . 2 f b f b f b f . . . . . . 
    . . 5 f b f b f b f . . . . . . 
    . . . f 1 1 1 1 1 f . . . . . . 
    . . f f f f f f f f f . . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . 3 f 1 1 1 1 1 f . . . . . . 
    . . 3 f 1 f 1 f 1 f . . . . . . 
    . . 3 f 1 f 1 f 1 f . . . . . . 
    . . . f 1 1 1 1 1 f . . . . . . 
    . . f f f f f f f f f . . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . 4 2 5 5 5 5 5 2 . . . . . . 
    . . 4 2 5 f 5 f 5 2 . . . . . . 
    . . 4 2 5 f 5 f 5 2 . . . . . . 
    . . . 2 5 5 5 5 5 2 . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . . 2 . . . 2 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . a a a a a . . . . . . . 
    . . . c c c c c c c . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . . c 1 f 1 f 1 c . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . c 1 1 1 1 1 c . . . . . . 
    . . a a a a a a a a a . . . . . 
    . c . c c c c c c c . c . . . . 
    . a . a a a a a a a . a . . . . 
    . c . c c c c c c c . c . . . . 
    . a . a a a a a a a . a . . . . 
    . . . c c c c c c c . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . . c . . . c . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 6 6 . . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 6 1 1 1 1 1 6 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 6 1 f 1 f 1 6 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . 6 6 6 6 6 6 6 6 6 . . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 6 . 6 6 6 6 6 6 6 . 6 . . . . 
    . 9 . 9 9 9 9 9 9 9 . 9 . . . . 
    . 6 . 6 6 6 6 6 6 6 . 6 . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 6 6 6 6 6 6 6 . . . . . . 
    . . . . 9 . . . 9 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
    . . 9 9 9 9 9 9 9 1 1 1 9 . . . 
    . . 9 9 9 9 9 9 9 9 9 1 9 . . . 
    . . 9 9 9 1 1 1 1 1 9 1 9 . . . 
    . . 9 9 9 1 f 1 f 1 9 9 9 . . . 
    . 6 9 9 9 1 f 1 f 1 9 9 9 6 . . 
    6 . 9 9 9 1 1 1 1 1 9 9 9 . 6 . 
    6 . 9 9 9 9 9 9 9 9 9 9 9 . 6 . 
    6 . 9 1 9 9 9 9 9 9 9 9 9 . 6 . 
    . . 9 1 9 9 9 9 9 9 9 9 9 . . . 
    . . 9 1 1 1 9 9 9 9 9 9 9 . . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . . . 6 . . . 6 . . . . . . 
    `,
img`
    . . . . . . . . 5 5 . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 9 9 9 9 9 9 9 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 f 1 f 1 9 . . . . . . 
    . . . 9 1 1 1 1 1 9 . . . . . . 
    . . 6 9 9 9 9 9 9 9 6 . . . . . 
    . 6 . 9 9 9 9 5 9 9 . 6 . . . . 
    . 6 . 9 9 9 5 9 5 9 . 6 . . . . 
    . 6 . 9 9 5 9 9 9 5 . 6 . . . . 
    . 6 . 9 5 9 5 9 9 9 . 6 . . . . 
    . . . 5 9 9 9 9 9 9 . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . . 6 . . . 6 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 4 4 4 5 5 5 4 . . . 
    . . 4 4 4 4 4 4 4 4 4 5 4 . . . 
    . . 4 4 4 1 1 1 1 1 4 5 4 . . . 
    . . 4 4 4 1 f 1 f 1 4 4 4 . . . 
    . 2 4 4 4 1 f 1 f 1 4 4 4 2 . . 
    2 . 4 4 4 1 1 1 1 1 4 4 4 . 2 . 
    2 . 4 4 4 4 4 4 4 4 4 4 4 . 2 . 
    2 . 4 5 4 4 4 4 4 4 4 4 4 . 2 . 
    . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 5 5 5 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . a a a a a . . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . a 1 1 1 1 1 a . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . a 1 f 1 f 1 a . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . a a a a a a a a a . . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . a . a a a a a a a . a . . . . 
    . 3 . 3 3 3 3 3 3 3 . 3 . . . . 
    . a . a a a a a a a . a . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e . . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . e e e e e e e e e . . . . . 
    . e . e e e e e e e . e . . . . 
    . e . e e e e e e e . e . . . . 
    . e . e e e e e e e . e . . . . 
    . e . e e e e e e e . e . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . e . . . e . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . d d d d d d d . . . . . . 
    . . d d d d d d d d d . . . . . 
    . . d d d d d d d d d . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e f e f e e . . . . . . 
    . . . e e f e f e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . d d d d d d d d d . . . . . 
    . e d d d d d d d d d e . . . . 
    e . . d d d d d d d . . e . . . 
    e . . 1 2 1 2 1 2 1 . . e . . . 
    e . . 2 1 2 1 2 1 2 . . e . . . 
    . . . 1 2 1 2 1 2 1 . . . . . . 
    . . . 2 1 2 1 2 1 2 . . . . . . 
    . . . . 2 . . . 2 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . . b 2 2 2 b . . . . . . . 
    . . . . b 2 2 2 b . . . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . . b 5 5 5 b . . . . . . . 
    . . . . b f 5 f b . . . . . . . 
    . . . d b f 5 f b d . . . . . . 
    . . d . b 5 5 5 b . d . . . . . 
    . . d . b b b b b . d . . . . . 
    . . d . b 7 7 7 b . d . . . . . 
    . . d . b 7 7 7 b . d . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . . d d d d d . . . . . . . 
    . . . . . d . d . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . f f f f f f f f f . . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f 1 f f f . . . . . . 
    . . f f f f 1 f f f f . . . . . 
    . f . f f f 1 f f f . f . . . . 
    . f . f f f 1 f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f 1 f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f 1 f f f . . . . . . 
    . . . f f 1 f 1 f f . . . . . . 
    . . f f f 1 f 1 f f f . . . . . 
    . f . f f f f 1 f f . f . . . . 
    . f . f f f 1 f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f 1 f f f . f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . . . 5 . . . . . . . . 
    . . . . 5 . 5 4 . . 5 . . . . . 
    . . 5 . 4 5 4 2 5 5 4 . . . . . 
    . . 4 5 2 4 2 2 4 4 2 5 5 . . . 
    . 5 2 4 2 2 2 2 2 2 2 4 4 5 . . 
    . 4 2 2 2 2 2 2 2 2 2 2 2 4 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 1 1 1 1 1 1 2 2 2 2 . . 
    . 2 2 2 1 f 1 1 f 1 2 2 2 2 . . 
    . 4 2 2 1 f 1 1 f 1 2 2 2 4 . . 
    . 4 2 2 1 1 1 1 1 1 2 2 2 4 . . 
    . 4 2 2 2 2 2 2 2 2 2 2 2 4 . . 
    . 4 2 2 2 2 2 2 2 2 2 2 2 4 . . 
    . 4 2 2 2 2 2 2 2 2 2 2 2 4 . . 
    . 4 . 2 2 2 2 2 2 2 2 2 . 4 . . 
    . . . . . 4 . . . 4 . . . . . . 
    `,
img`
    . . . 5 . 5 . 5 . 5 . . . . . . 
    . . . 5 5 5 . 5 5 5 . 5 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 1 1 1 1 1 1 2 2 . . . . 
    . . . 2 1 f 1 1 f 1 2 2 . . . . 
    . . 1 2 1 f 1 1 f 1 2 2 1 . . . 
    . 1 . 2 1 1 1 1 1 1 2 2 . 1 . . 
    . 1 . 2 2 2 2 2 2 2 2 2 . 1 . . 
    . 1 . 2 2 2 2 2 2 2 2 2 . 1 . . 
    . . . 2 2 2 2 2 2 2 2 2 . 1 . . 
    . . . 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . . 4 . . . 4 . . . . . . 
    `,
img`
    . . . . 5 5 . 5 5 . . . . . . . 
    . . . 5 . 5 5 5 . 5 . . . . . . 
    . . . . . . 5 . . . . . . . . . 
    . . . . e e e e e . . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . 6 e e e e e e e 6 . . . . . 
    . 6 . e e e e e e e . 6 . . . . 
    . 6 . e e e e e e e . 6 . . . . 
    . 6 . e e e e e e e . 6 . . . . 
    . 6 . e e e e e e e . 6 . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . 6 . . . 6 . . . . . . . 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 1 1 1 1 1 8 8 8 8 8 1 
    1 8 8 8 8 1 f 1 f 1 8 8 8 8 8 1 
    1 8 8 8 8 1 f 1 f 1 8 8 8 8 8 1 
    1 8 8 8 8 1 1 1 1 1 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 7 7 7 7 7 7 7 . 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 . . . . . 
    . . . 7 1 1 1 1 1 7 . . . . . . 
    . 7 . 7 1 f 1 f 1 7 . . . . . . 
    . . 7 7 1 f 1 f 1 7 . . . . . . 
    . . . 7 1 1 1 1 1 7 . . . . . . 
    . . 6 7 7 7 7 7 7 7 6 . . . . . 
    . 6 . 7 7 7 7 7 7 7 . 6 . . . . 
    . 6 . 7 7 7 7 7 7 7 . 6 . . . . 
    . 6 . 7 7 7 7 7 7 7 . 6 . . . . 
    . 6 . 7 7 7 7 7 7 7 . 6 . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 . . . . . . 
    . . . . 6 . . . 6 . . . . . . . 
    `,
img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a 1 1 1 1 1 a a a a a 4 
    4 a a a a 1 f 1 f 1 a a a a a 4 
    4 a a a a 1 f 1 f 1 a a a a a 4 
    4 a a a a 1 1 1 1 1 a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 a a a a a a a a a a a a a a 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . 1 2 2 2 1 . . . . . . . 
    . . . . 1 2 2 2 1 . . . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . 1 5 5 5 1 . . . . . . . 
    . . . . 1 f 5 f 1 . . . . . . . 
    . . . 1 1 f 5 f 1 1 . . . . . . 
    . . 1 . 1 5 5 5 1 . 1 . . . . . 
    . . 1 . 1 1 1 1 1 . 1 . . . . . 
    . . 1 . 1 7 7 7 1 . 1 . . . . . 
    . . 1 . 1 7 7 7 1 . 1 . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . 1 1 1 1 1 . . . . . . . 
    . . . . . 1 . 1 . . . . . . . . 
    `,
img`
    . . . 4 . . . . . 4 . . . . . . 
    . . . 4 . . . . . 4 . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . 4 1 1 1 1 1 4 . . . . . . 
    . . . 4 1 f 1 f 1 4 . . . . . . 
    . . . 4 1 f 1 f 1 4 . . . . . . 
    . . . 4 1 1 1 1 1 4 . . . . . . 
    . . 4 4 4 4 4 4 4 4 4 . . . . . 
    . 4 . 4 4 4 4 4 4 4 . 4 . . . . 
    . 4 . 4 4 1 1 1 4 4 . 4 . . . . 
    . 4 . 4 4 1 1 1 4 4 . 4 . . . . 
    . 4 . 4 4 1 1 1 4 4 . 4 . . . . 
    . . . 4 4 1 1 1 4 4 . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . . 4 . . . 4 . . . . . . . 
    `,
img`
    . . . e . . . . . e . . . . . . 
    . . . e . . . . . e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 f 1 f 1 e . . . . . . 
    . . . e 1 1 1 1 1 e . . . . . . 
    . . e e e e e e e e e . . . . . 
    . e . e e e e e e e . e . . . . 
    . e . e e 1 1 1 e e . e . . . . 
    . e . e e 1 1 1 e e . e . . . . 
    . e . e e 1 1 1 e e . e . . . . 
    . . . e e 1 1 1 e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . e . . . e . . . . . . . 
    `,
img`
    . . . b . . . . . b . . . . . . 
    . . . b . . . . . b . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . b 1 1 1 1 1 b . . . . . . 
    . . . b 1 f 1 f 1 b . . . . . . 
    . . . b 1 f 1 f 1 b . . . . . . 
    . . . b 1 1 1 1 1 b . . . . . . 
    . . b b b b b b b b b . . . . . 
    . b . b b b b b b b . b . . . . 
    . b . b b 1 1 1 b b . b . . . . 
    . b . b b 1 1 1 b b . b . . . . 
    . b . b b 1 1 1 b b . b . . . . 
    . . . b b 1 1 1 b b . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . . b . . . b . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . b 1 1 b 1 1 b . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . b b b b b b b b b . . . . . 
    . b . b b d d d b b . b . . . . 
    . 3 . b b d d d b b . 3 . . . . 
    . 3 . b b d d d b b . 3 . . . . 
    . 3 . b b d d d b b . 3 . . . . 
    . . . b b b d b b b . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . . 3 . . . 3 . . . . . . . 
    `,
img`
    . . . . . 3 3 3 . . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . . 3 3 3 3 3 . . . . . . . 
    . . . 6 6 6 6 6 6 6 . . . . . . 
    . 3 3 6 1 1 1 1 1 6 3 3 . . . . 
    3 3 3 6 1 f 1 f 1 6 3 3 3 . . . 
    3 3 3 6 1 f 1 f 1 6 3 3 3 . . . 
    . 3 3 6 1 1 1 1 1 6 3 3 . . . . 
    . . 7 6 6 6 6 6 6 6 7 . . . . . 
    . 7 . 7 3 3 3 3 3 7 . 7 . . . . 
    . 7 . 7 3 3 3 3 3 7 . 7 . . . . 
    . 7 . 7 7 3 3 3 7 7 . 7 . . . . 
    . 7 . e e e e e e e . 7 . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . e . . . e . . . . . . . 
    `,
img`
    . . . . . a a a . . . . . . . . 
    . . . . a a 5 a a . . . . . . . 
    . . . a 5 a a a 5 a . . . . . . 
    . a a a a a a a a a a a . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 f 1 f 1 3 . . . . . . 
    . . . 3 1 1 1 1 1 3 . . . . . . 
    . . a a a a a a a a a . . . . . 
    . a . a a a a a 5 a . a . . . . 
    . a . a a 5 a a a a . a . . . . 
    . a . a a a a a a a . a . . . . 
    . a . a a a a a 5 a . a . . . . 
    . . . a 5 a 5 a a a . . . . . . 
    . . . a a a a a a a . . . . . . 
    . . . . a . . . a . . . . . . . 
    `,
img`
    . . . . . 2 2 2 . . . . . . . . 
    . . . . 2 2 5 2 2 . . . . . . . 
    . . . 2 5 2 2 2 5 2 . . . . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . . 4 5 5 5 5 5 4 . . . . . . 
    . . . 4 5 f 5 f 5 4 . . . . . . 
    . . . 4 5 f 5 f 5 4 . . . . . . 
    . . . 4 5 5 5 5 5 4 . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 . . . . . 
    . 2 . 2 2 2 2 2 5 2 . 2 . . . . 
    . 2 . 2 2 5 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 2 2 . 2 . . . . 
    . 2 . 2 2 2 2 2 5 2 . 2 . . . . 
    . . . 2 5 2 5 2 2 2 . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . . 2 . . . 2 . . . . . . . 
    `,
img`
    . . . . . f f f . . . . . . . . 
    . . . . f f 5 f f . . . . . . . 
    . . . f 5 f f f 5 f . . . . . . 
    . f f f f f f f f f f f . . . . 
    . . . c a a a a a c . . . . . . 
    . . . c a f a f a c . . . . . . 
    . . . c a f a f a c . . . . . . 
    . . . c a a a a a c . . . . . . 
    . . f f f f f f f f f . . . . . 
    . f . f f f f f 5 f . f . . . . 
    . f . f f 5 f f f f . f . . . . 
    . f . f f f f f f f . f . . . . 
    . f . f f f f f 5 f . f . . . . 
    . . . f 5 f 5 f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . f . . . f . . . . . . . 
    `,
img`
    . . . . . 2 2 2 . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . 6 6 6 6 6 6 6 . . . . . . 
    . 2 2 6 1 1 1 1 1 6 2 2 . . . . 
    2 2 2 6 1 f 1 f 1 6 2 2 2 . . . 
    2 2 2 6 1 f 1 f 1 6 2 2 2 . . . 
    . 2 2 6 1 1 1 1 1 6 2 2 . . . . 
    . . 7 6 6 6 6 6 6 6 7 . . . . . 
    . 7 . 7 2 2 2 2 2 7 . 7 . . . . 
    . 7 . 7 2 2 2 2 2 7 . 7 . . . . 
    . 7 . 7 7 2 2 2 7 7 . 7 . . . . 
    . 7 . e e e e e e e . 7 . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . e . . . e . . . . . . . 
    `,
img`
    . . . . . 5 5 5 . . . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . 6 6 6 6 6 6 6 . . . . . . 
    . 5 5 6 1 1 1 1 1 6 5 5 . . . . 
    5 5 5 6 1 f 1 f 1 6 5 5 5 . . . 
    5 5 5 6 1 f 1 f 1 6 5 5 5 . . . 
    . 5 5 6 1 1 1 1 1 6 5 5 . . . . 
    . . 7 6 6 6 6 6 6 6 7 . . . . . 
    . 7 . 7 5 5 5 5 5 7 . 7 . . . . 
    . 7 . 7 5 5 5 5 5 7 . 7 . . . . 
    . 7 . 7 7 5 5 5 7 7 . 7 . . . . 
    . 7 . e e e e e e e . 7 . . . . 
    . . . e e e e e e e . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . e . . . e . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . b 1 1 b 1 1 b . . . . . . 
    . . . 6 1 f 1 f 1 6 . . . . . . 
    . . . 6 1 f 1 f 1 6 . . . . . . 
    . . . 6 1 1 1 1 1 6 . . . . . . 
    . . . 6 6 6 6 6 6 6 . . . . . . 
    . . b b b b b b b b b . . . . . 
    . b . b d b b b b b . b . . . . 
    . 6 . b b d b b b b . 6 . . . . 
    . 6 . b b b d b d b . 6 . . . . 
    . 6 . b b b b d b b . 6 . . . . 
    . . . b b b d b d b . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . . 6 . . . 6 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b b . . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . b 5 5 b 5 5 b . . . . . . 
    . . . 4 5 f 5 f 5 4 . . . . . . 
    . . . 4 5 f 5 f 5 4 . . . . . . 
    . . . 4 5 5 5 5 5 4 . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . b b b b b b b b b . . . . . 
    . b . b d b b b b b . b . . . . 
    . 4 . b b d b b b b . 4 . . . . 
    . 4 . b b b d b d b . 4 . . . . 
    . 4 . b b b b d b b . 4 . . . . 
    . . . b b b d b d b . . . . . . 
    . . . b b b b b b b . . . . . . 
    . . . . 4 . . . 4 . . . . . . . 
    `,
img`
    . . . . f f f f f f f . . . . . 
    . . . f f 1 1 1 1 1 f f . . . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . f 1 f f f f f 1 f . . . . 
    . . . f 1 f 1 f 1 f 1 f . . . . 
    . . . f 1 f 1 f 1 f 1 f . . . . 
    . . f f 1 f f f f f 1 f f . . . 
    . f f 1 1 1 1 1 1 1 1 1 f f . . 
    . f 1 f 1 1 1 1 1 1 1 f 1 f . . 
    . f 1 f 1 1 1 1 1 1 1 f 1 f . . 
    . f 1 f 1 1 1 1 1 1 1 f 1 f . . 
    . f 1 f 1 1 1 1 1 1 1 f 1 f . . 
    . f f f 1 1 1 1 1 1 1 f f f . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . . f f 1 f f f 1 f f . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 1 f f f f f 1 1 . . . . 
    . . . 1 f f f f f f f 1 . . . . 
    . . . 1 f 1 1 1 1 1 f 1 . . . . 
    . . . 1 f 1 f 1 f 1 f 1 . . . . 
    . . . 1 f 1 f 1 f 1 f 1 . . . . 
    . . 1 1 f 1 1 1 1 1 f 1 1 . . . 
    . 1 1 f f f f f f f f f 1 1 . . 
    . 1 f 1 f f f f f f f 1 f 1 . . 
    . 1 f 1 f f f f f f f 1 f 1 . . 
    . 1 f 1 f f f f f f f 1 f 1 . . 
    . 1 f 1 f f f f f f f 1 f 1 . . 
    . 1 1 1 f f f f f f f 1 1 1 . . 
    . . . 1 f f f f f f f 1 . . . . 
    . . . 1 1 f 1 1 1 f 1 1 . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    `,
img`
    . . . . f f f f f f f . . . . . 
    . . . f f 2 2 2 2 2 f f . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . f 2 f f f f f 2 f . . . . 
    . . . f 2 f 2 f 2 f 2 f . . . . 
    . . . f 2 f 2 f 2 f 2 f . . . . 
    . . f f 2 f f f f f 2 f f . . . 
    . f f 2 2 2 2 2 2 2 2 2 f f . . 
    . f 2 f 2 2 2 2 2 2 2 f 2 f . . 
    . f 2 f 2 2 2 2 2 2 2 f 2 f . . 
    . f 2 f 2 2 2 2 2 2 2 f 2 f . . 
    . f 2 f 2 2 2 2 2 2 2 f 2 f . . 
    . f f f 2 2 2 2 2 2 2 f f f . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . f f 2 f f f 2 f f . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . f f f f f f f . . . . . 
    . . . f f 2 2 2 2 2 f f . . . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . f 9 2 2 2 2 2 9 f . . . . 
    . . . f 9 9 9 9 9 9 9 f . . . . 
    . . . f 9 9 9 9 9 9 9 f . . . . 
    . . f f 2 9 9 9 9 9 2 f f . . . 
    . f f 2 2 2 2 2 2 2 2 2 f f . . 
    . f 2 f 2 2 2 2 2 2 2 f 2 f . . 
    . f 2 f 2 2 2 2 2 2 2 f 2 f . . 
    . f 2 f 2 2 2 2 2 2 2 f 2 f . . 
    . f 2 f 2 2 2 2 2 2 2 f 2 f . . 
    . f f f 2 2 2 2 2 2 2 f f f . . 
    . . . f 2 2 2 2 2 2 2 f . . . . 
    . . . f f 2 f f f 2 f f . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . f f f f f f f . . . . . 
    . . . f f a a a a a f f . . . . 
    . . . f a a a a a a a f . . . . 
    . . . f 9 a a a a a 9 f . . . . 
    . . . f 9 9 9 9 9 9 9 f . . . . 
    . . . f 9 9 9 9 9 9 9 f . . . . 
    . . f f a 9 9 9 9 9 a f f . . . 
    . f f a a a a a a a a a f f . . 
    . f a f a a a a a a a f a f . . 
    . f a f a a a a a a a f a f . . 
    . f a f a a a a a a a f a f . . 
    . f a f a a a a a a a f a f . . 
    . f f f a a a a a a a f f f . . 
    . . . f a a a a a a a f . . . . 
    . . . f f a f f f a f f . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . f f f f f f f . . . . . 
    . . . f f 6 6 6 6 6 f f . . . . 
    . . . f 6 6 6 6 6 6 6 f . . . . 
    . . . f 6 7 7 7 7 7 6 f . . . . 
    . . . f 6 7 f f f 7 6 f . . . . 
    . . . f 6 7 f f f 7 6 f . . . . 
    . . f f 6 7 7 7 7 7 6 f f . . . 
    . f f 6 6 6 6 6 6 6 6 6 f f . . 
    . f 6 f 6 6 6 6 6 6 6 f 6 f . . 
    . f 6 f 6 6 6 6 6 6 6 f 6 f . . 
    . f 6 f 6 6 6 6 6 6 6 f 6 f . . 
    . f 6 f 6 6 6 6 6 6 6 f 6 f . . 
    . f f f 6 6 6 6 6 6 6 f f f . . 
    . . . f 6 6 6 6 6 6 6 f . . . . 
    . . . f f 6 f f f 6 f f . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . f f f f f f f . . . . . 
    . . . f f 9 9 9 9 9 f f . . . . 
    . . . f 9 9 9 9 9 9 9 f . . . . 
    . . . f 9 f f f f f 9 f . . . . 
    . . . f 9 f 9 f 9 f 9 f . . . . 
    . . . f 9 f 9 f 9 f 9 f . . . . 
    . . f f 9 f f f f f 9 f f . . . 
    . f f 9 9 9 9 9 9 9 9 9 f f . . 
    . f 9 f 9 9 9 9 9 9 9 f 9 f . . 
    . f 9 f 9 9 9 9 9 9 9 f 9 f . . 
    . f 9 f 9 9 9 9 9 9 9 f 9 f . . 
    . f 9 f 9 9 9 9 9 9 9 f 9 f . . 
    . f f f 9 9 9 9 9 9 9 f f f . . 
    . . . f 9 9 9 9 9 9 9 f . . . . 
    . . . f f 9 f f f 9 f f . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . f f f f f f f . . . . . 
    . . . f f c c c c c f f . . . . 
    . . . f c c c c c c c f . . . . 
    . . . f c f f f f f c f . . . . 
    . . . f c f c f c f c f . . . . 
    . . . f c f c f c f c f . . . . 
    . . f f c f f f f f c f f . . . 
    . f f c c c c c c c c c f f . . 
    . f c f c c c c c c c f c f . . 
    . f c f c c c c c c c f c f . . 
    . f c f c c c c c c c f c f . . 
    . f c f c c c c c c c f c f . . 
    . f f f c c c c c c c f f f . . 
    . . . f c c c c c c c f . . . . 
    . . . f f c f f f c f f . . . . 
    . . . . f f f . f f f . . . . . 
    `,
img`
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . 2 2 4 4 4 4 4 2 2 . . . . 
    . . . 2 4 4 4 4 4 4 4 2 . . . . 
    . . . 2 4 2 2 2 2 2 4 2 . . . . 
    . . . 2 4 2 4 2 4 2 4 2 . . . . 
    . . . 2 4 2 4 2 4 2 4 2 . . . . 
    . . 2 2 4 2 2 2 2 2 4 2 2 . . . 
    . 2 2 4 4 4 4 4 4 4 4 4 2 2 . . 
    . 2 4 2 4 4 4 4 4 4 4 2 4 2 . . 
    . 2 4 2 4 4 4 4 4 4 4 2 4 2 . . 
    . 2 4 2 4 4 4 4 4 4 4 2 4 2 . . 
    . 2 4 2 4 4 4 4 4 4 4 2 4 2 . . 
    . 2 2 2 4 4 4 4 4 4 4 2 2 2 . . 
    . . . 2 4 4 4 4 4 4 4 2 . . . . 
    . . . 2 2 4 2 2 2 4 2 2 . . . . 
    . . . . 2 2 2 . 2 2 2 . . . . . 
    `,
img`
    . . . . 1 1 1 1 1 1 1 . . . . . 
    . . . 1 1 9 9 9 9 9 1 1 . . . . 
    . . . 1 9 9 9 9 9 9 9 1 . . . . 
    . . . 1 9 1 1 1 1 1 9 1 . . . . 
    . . . 1 9 1 9 1 9 1 9 1 . . . . 
    . . . 1 9 1 9 1 9 1 9 1 . . . . 
    . . 1 1 9 1 1 1 1 1 9 1 1 . . . 
    . 1 1 9 9 9 9 9 9 9 9 9 1 1 . . 
    . 1 9 1 9 9 9 9 9 9 9 1 9 1 . . 
    . 1 9 1 9 9 9 9 9 9 9 1 9 1 . . 
    . 1 9 1 9 9 9 9 9 9 9 1 9 1 . . 
    . 1 9 1 9 9 9 9 9 9 9 1 9 1 . . 
    . 1 1 1 9 9 9 9 9 9 9 1 1 1 . . 
    . . . 1 9 9 9 9 9 9 9 1 . . . . 
    . . . 1 1 9 1 1 1 9 1 1 . . . . 
    . . . . 1 1 1 . 1 1 1 . . . . . 
    `,
img`
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . 6 6 7 7 7 7 7 6 6 . . . . 
    . . . 6 7 7 7 7 7 7 7 6 . . . . 
    . . . 6 7 6 6 6 6 6 7 6 . . . . 
    . . . 6 7 6 7 6 7 6 7 6 . . . . 
    . . . 6 7 6 7 6 7 6 7 6 . . . . 
    . . 6 6 7 6 6 6 6 6 7 6 6 . . . 
    . 6 6 7 7 7 7 7 7 7 7 7 6 6 . . 
    . 6 7 6 7 7 7 7 7 7 7 6 7 6 . . 
    . 6 7 6 7 7 7 7 7 7 7 6 7 6 . . 
    . 6 7 6 7 7 7 7 7 7 7 6 7 6 . . 
    . 6 7 6 7 7 7 7 7 7 7 6 7 6 . . 
    . 6 6 6 7 7 7 7 7 7 7 6 6 6 . . 
    . . . 6 7 7 7 7 7 7 7 6 . . . . 
    . . . 6 6 7 6 6 6 7 6 6 . . . . 
    . . . . 6 6 6 . 6 6 6 . . . . . 
    `,
img`
    . . . f f f f f f f . . . . . . 
    . . f f a a a a a f f . . . . . 
    . f f a a a 5 a a a f f . . . . 
    . f a a a a a a a a a f . . . . 
    . f f 3 1 1 1 1 1 3 f f . . . . 
    . . f 3 1 f 1 f 1 3 f . . . . . 
    . . f 3 1 f 1 f 1 3 f . . . . . 
    . f f 3 1 1 1 1 1 3 f f . . . . 
    f f a a a a a a a a a f f . . . 
    f a f a a a a a 5 a f a f . . . 
    f a f a a 5 a a a a f a f . . . 
    f a f a a a a a a a f a f . . . 
    f a f a a 5 a a 5 a f a f . . . 
    f f f a a a a a a a f f f . . . 
    . . f f a f f f a f f . . . . . 
    . . . f f f . f f f . . . . . . 
    `,
img`
    . . . c c c c c c c . . . . . . 
    . . c c f f f f f c c . . . . . 
    . c c f f f f f f f c c . . . . 
    . c f f f f f f f f f c . . . . 
    . c c 3 1 1 1 1 1 3 c c . . . . 
    . . c 3 1 f 1 f 1 3 c . . . . . 
    . . c 3 1 f 1 f 1 3 c . . . . . 
    . c c 3 1 1 1 1 1 3 c c . . . . 
    c c f f f f f f f f f c c . . . 
    c f c f f f f f f f c f c . . . 
    c f c f f f f f f f c f c . . . 
    c f c f f f f f f f c f c . . . 
    c f c f f f f f f f c f c . . . 
    c c c f f f f f f f c c c . . . 
    . . c c f c c c f c c . . . . . 
    . . . c c c . c c c . . . . . . 
    `,
img`
    . . . 3 3 3 3 3 3 3 . . . . . . 
    . . 3 3 a a a a a 3 3 . . . . . 
    . 3 3 a a a 5 a a a 3 3 . . . . 
    . 3 a a a a a a a a a 3 . . . . 
    . 3 3 5 1 1 1 1 1 5 3 3 . . . . 
    . . 3 5 1 f 1 f 1 5 3 . . . . . 
    . . 3 5 1 f 1 f 1 5 3 . . . . . 
    . 3 3 5 1 1 1 1 1 5 3 3 . . . . 
    3 3 a a a a a a a a a 3 3 . . . 
    3 a 3 a a a a a 5 a 3 a 3 . . . 
    3 a 3 a a 5 a a a a 3 a 3 . . . 
    3 a 3 a a a a a a a 3 a 3 . . . 
    3 a 3 a a 5 a a 5 a 3 a 3 . . . 
    3 3 3 a a a a a a a 3 3 3 . . . 
    . . 3 3 a 3 3 3 a 3 3 . . . . . 
    . . . 3 3 3 . 3 3 3 . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . 5 5 5 5 5 5 5 . . . . . . 
    . . . 5 1 1 1 1 1 5 . . . . . . 
    . . . 5 1 f 1 f 1 5 . . . . . . 
    . . . 5 1 f 1 f 1 5 . . . . . . 
    . . . 5 1 1 1 1 1 5 . . . . . . 
    . . 5 5 5 5 5 5 5 5 5 . . . . . 
    . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
    . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
    . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
    . 5 . 5 5 5 5 5 5 5 . 5 . . . . 
    . . . 5 5 5 5 5 5 5 . . . . . . 
    . . . 5 5 5 5 5 5 5 . . . . . . 
    . . . . 5 . . . 5 . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 4 4 4 4 4 . . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . 4 1 1 1 1 1 4 . . . . . . 
    . . . 4 1 f 1 f 1 4 . . . . . . 
    . . . 4 1 f 1 f 1 4 . . . . . . 
    . . . 4 1 1 1 1 1 4 . . . . . . 
    . . 4 4 4 4 4 4 4 4 4 . . . . . 
    . 4 . 4 4 4 4 4 4 4 . 4 . . . . 
    . 4 . 4 4 4 4 4 4 4 . 4 . . . . 
    . 4 . 4 4 4 4 4 4 4 . 4 . . . . 
    . 4 . 4 4 4 4 4 4 4 . 4 . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . . . 4 . . . 4 . . . . . . . 
    `
]
l = 65
lucas()
list1.push(picture)
text_list = [
"CatMaster",
"BatGuy",
"AppleMan",
"Max969",
"Luke21",
"Gameboy9010",
"butch048",
"breetoGuy",
"KittyGirl1",
"Gid436",
"Batty",
"Cat222314",
"fire botxx"
]
for (let index = 0; index < 1000; index++) {
    text_list.push("" + randint(0, 9) + randint(0, 9) + randint(0, 9) + randint(0, 9) + randint(0, 9))
}
list2 = [
tiles.createMap(tilemap`level24`),
tiles.createMap(tilemap`level25`),
tiles.createMap(tilemap`level26`),
tiles.createMap(tilemap`level27`),
tiles.createMap(tilemap`level28`),
tiles.createMap(tilemap`level29`)
]
player_quofid += 1
tiles.loadMap(tiles.createMap(tilemap`level30`))
scene.setBackgroundColor(8)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
controller.moveSprite(mySprite)
look = 0
rond = 1
let sprite_list = sprites.allOfKind(SpriteKind.npc)
scene.cameraFollowSprite(mySprite)
setings()
tiles.placeOnTile(textSprite2, tiles.getTileLocation(11, 1))
sprites.setDataBoolean(mySprite, "manesong", false)
forever(function () {
	
})
forever(function () {
    for (let value4 of sprites.allOfKind(SpriteKind.npc)) {
        if (value4.tileKindAt(TileDirection.Center, assets.tile`tile9`)) {
            value4.destroy()
            info.changeScoreBy(1)
            if (info.score() == 10) {
                for (let value5 of sprites.allOfKind(SpriteKind.npc)) {
                    npclist.push(value5.image)
                    npc12.push(sprites.readDataString(value5, "name"))
                }
                levelsplayd += 1
                sprites.setDataBoolean(mySprite, "q", false)
                count = count - 10
                tiles.destroySpritesOfKind(SpriteKind.npc)
                tiles.destroySpritesOfKind(SpriteKind.Food)
                tiles.destroySpritesOfKind(SpriteKind.Enemy)
                game.splash("qualify")
                controller.moveSprite(mySprite, 0, 0)
                quofid = 0
                mySprite.ay = 100
                if (count == 10) {
                    leve2 = randint(endgame1, endgame2)
                    if (sprites.readDataBoolean(mySprite, "mod levels go")) {
                        Mod_levels()
                        level = mod_end_levels[leve2]
                    } else {
                        level = list2[leve2]
                    }
                    tiles.loadMap(level)
                } else {
                    leve2 = randint(_66, gg)
                    if (sprites.readDataBoolean(mySprite, "mod levels go")) {
                        level = modlevels[leve2]
                    } else {
                        level = list2[leve2]
                    }
                    tiles.loadMap(level)
                }
                tiles.placeOnRandomTile(mySprite, assets.tile`tile6`)
                tiles.placeOnRandomTile(mySprite, assets.tile`tile13`)
                info.setScore(0)
                for (let value6 of npclist) {
                    quofid = 0
                    info.setScore(0)
                    npc2 = sprites.create(value6, SpriteKind.npc)
                    npc2.vx = randint(45, 75)
                    sprites.setDataString(npc2, "name", npc12.shift())
                    tiles.placeOnRandomTile(npc2, assets.tile`tile6`)
                    if (Math.percentChance(50)) {
                        sprites.setDataNumber(npc2, "r", 1)
                    } else {
                        sprites.setDataNumber(npc2, "r", -1)
                    }
                }
                npclist = []
                npc12 = []
                scene.cameraFollowSprite(mySprite)
                controller.moveSprite(mySprite, 100, 0)
                scene.setBackgroundColor(8)
                if (count <= 0) {
                    blockSettings.writeNumber("list", 1 + blockSettings.readNumber("list"))
                    game.over(true)
                }
            }
        }
    }
})
forever(function () {
    for (let value7 of sprites.allOfKind(SpriteKind.npc)) {
        if (value7.tileKindAt(TileDirection.Center, assets.tile`tile7`)) {
            value7.destroy()
            info.changeScoreBy(1)
            npclist.push(value7.image)
            npc12.push(sprites.readDataString(value7, "name"))
            quofid += 1
            if (quofid == count - 10) {
                if (sprites.readDataBoolean(mySprite, "q")) {
                    tiles.destroySpritesOfKind(SpriteKind.Food)
                    tiles.destroySpritesOfKind(SpriteKind.npc)
                    tiles.destroySpritesOfKind(SpriteKind.Enemy)
                    spetate = false
                    sprites.setDataBoolean(mySprite, "q", false)
                    mySprite.setFlag(SpriteFlag.Ghost, false)
                    mySprite.setFlag(SpriteFlag.Invisible, false)
                    count = count - 10
                    controller.moveSprite(mySprite, 100, 0)
                    mySprite.ay = 100
                    if (count == 10) {
                        leve2 = randint(endgame1, endgame2)
                        if (sprites.readDataBoolean(mySprite, "mod levels go")) {
                            Mod_levels()
                            level = mod_end_levels[leve2]
                        } else {
                            level = list2[leve2]
                        }
                        tiles.loadMap(level)
                    } else {
                        leve2 = randint(_66, gg)
                        if (sprites.readDataBoolean(mySprite, "mod levels go")) {
                            level = tiles.copyMap(modlevels[leve2])
                        } else {
                            level = tiles.copyMap(list2[leve2])
                        }
                        tiles.loadMap(level)
                    }
                    tiles.placeOnRandomTile(mySprite, assets.tile`tile6`)
                    tiles.placeOnRandomTile(mySprite, assets.tile`tile13`)
                    info.setScore(0)
                    for (let value8 of npclist) {
                        quofid = 0
                        info.setScore(0)
                        npc2 = sprites.create(value8, SpriteKind.npc)
                        sprites.setDataString(npc2, "name", npc12.shift())
                        if (Math.percentChance(50)) {
                            sprites.setDataNumber(npc2, "r", 1)
                        } else {
                            sprites.setDataNumber(npc2, "r", -1)
                        }
                        npc2.vx = randint(45, 75)
                        tiles.placeOnRandomTile(npc2, assets.tile`tile6`)
                    }
                    npclist = []
                    npc12 = []
                    scene.cameraFollowSprite(mySprite)
                } else {
                    blockSettings.writeNumber("statbar", levelsplayd + blockSettings.readNumber("statbar"))
                    game.over(false)
                    scene.setBackgroundColor(8)
                }
            }
        }
    }
})
forever(function () {
    for (let value13 of sprites.allOfKind(SpriteKind.npc)) {
        if (value13.tileKindAt(TileDirection.Center, assets.tile`tile24`)) {
            scene.cameraFollowSprite(value13)
            game.setDialogCursor(value13.image)
            game.showLongText("" + sprites.readDataString(value13, "name") + " is the winer", DialogLayout.Center)
            blockSettings.writeNumber("statbar", levelsplayd + blockSettings.readNumber("statbar"))
            game.over(false)
        }
    }
})
forever(function () {
    if (spetate2 == 1 && (!(sprite_list.length <= 0) && controller.A.isPressed())) {
        scene.cameraFollowSprite(sprite_list.pop())
        pause(200)
    } else {
        sprite_list = sprites.allOfKind(SpriteKind.npc)
    }
})
forever(function () {
    if (look == l + 1) {
        picture = image.create(16, 16)
        picture = img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 1 1 1 1 1 8 . . . . . 
            . . . . 8 1 f 1 f 1 8 . . . . . 
            . . . . 8 1 f 1 f 1 8 . . . . . 
            . . . . 8 1 1 1 1 1 8 . . . . . 
            . . . 8 8 8 8 8 8 8 8 8 . . . . 
            . . 8 . 8 8 8 8 8 8 8 . 8 . . . 
            . . 8 . 8 8 8 8 8 8 8 . 8 . . . 
            . . 8 . 8 8 8 8 8 8 8 . 8 . . . 
            . . 8 . 8 8 8 8 8 8 8 . 8 . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . . 8 . . . 8 . . . . . . 
            `
        for (let index = 0; index < 20; index++) {
            doSomething7()
        }
    }
})
forever(function () {
    pause(2000)
    for (let value11 of tiles.getTilesByType(assets.tile`tile15`)) {
        mySprite2 = sprites.create(assets.tile`tile15`, SpriteKind.Enemy)
        mySprite2.vx += -60
        tiles.placeOnTile(mySprite2, value11)
    }
    for (let value12 of tiles.getTilesByType(assets.tile`tile14`)) {
        mySprite2 = sprites.create(assets.tile`tile14`, SpriteKind.Enemy)
        mySprite2.vx += -60
        tiles.placeOnTile(mySprite2, value12)
    }
})
forever(function () {
    for (let value2 of sprites.allOfKind(SpriteKind.Player)) {
        if (!(sprites.readDataBoolean(value2, "q"))) {
            if (value2.tileKindAt(TileDirection.Center, assets.tile`tile7`)) {
                value2.setFlag(SpriteFlag.Invisible, true)
                value2.setFlag(SpriteFlag.Ghost, true)
                controller.moveSprite(value2)
                quofid += 1
                game.splash("qualify")
                sprites.setDataBoolean(value2, "q", true)
                mySprite.ay = 0
                levelsplayd += 1
                spetate = true
                info.changeScoreBy(1)
                placeing(Placing, info.score())
                if (quofid == count - 10) {
                    tiles.destroySpritesOfKind(SpriteKind.Food)
                    tiles.destroySpritesOfKind(SpriteKind.npc)
                    tiles.destroySpritesOfKind(SpriteKind.Enemy)
                    spetate = false
                    sprites.setDataBoolean(mySprite, "q", false)
                    mySprite.setFlag(SpriteFlag.Ghost, false)
                    mySprite.setFlag(SpriteFlag.Invisible, false)
                    count = count - 10
                    controller.moveSprite(mySprite, 100, 0)
                    mySprite.ay = 100
                    if (count == 10) {
                        leve2 = randint(endgame1, 9)
                        if (sprites.readDataBoolean(mySprite, "mod levels go")) {
                            Mod_levels()
                            level = modlevels[leve2]
                        } else {
                            level = list2[leve2]
                        }
                        tiles.loadMap(level)
                    } else {
                        leve2 = randint(_66, gg)
                        if (sprites.readDataBoolean(mySprite, "mod levels go")) {
                            level = mod_end_levels[leve2]
                        } else {
                            level = list2[leve2]
                        }
                        tiles.loadMap(level)
                    }
                    tiles.placeOnRandomTile(mySprite, assets.tile`tile6`)
                    tiles.placeOnRandomTile(mySprite, assets.tile`tile13`)
                    info.setScore(0)
                    for (let value3 of npclist) {
                        quofid = 0
                        info.setScore(0)
                        npc2 = sprites.create(value3, SpriteKind.npc)
                        if (Math.percentChance(50)) {
                            sprites.setDataNumber(npc2, "r", 1)
                        } else {
                            sprites.setDataNumber(npc2, "r", -1)
                        }
                        npc2.vx = randint(45, 75)
                        tiles.placeOnRandomTile(npc2, assets.tile`tile6`)
                    }
                    npclist = []
                    npc12 = []
                    scene.cameraFollowSprite(mySprite)
                }
            }
        }
    }
})
forever(function () {
    if (sprites.readDataBoolean(mySprite, "loadinganamshon")) {
        INiglist = [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `]
        projectile = sprites.create(INiglist[randint(0, 2)], SpriteKind.Projectile)
        projectile.setFlag(SpriteFlag.AutoDestroy, true)
        projectile.setFlag(SpriteFlag.DestroyOnWall, true)
        projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
        projectile.setPosition(randint(0, 160), 120)
        projectile.setVelocity(0, randint(-60, -150))
        pause(randint(10, 100))
    }
})
forever(function () {
    if (sprites.readDataBoolean(mySprite, "inmincart")) {
        mincart.vx = 150
    }
})
forever(function () {
    if (sprites.readDataBoolean(mySprite, "mod levels go")) {
        for (let value10 of sprites.allOfKind(SpriteKind.npc)) {
            if (value10.isHittingTile(CollisionDirection.Bottom)) {
                if (value10.isHittingTile(CollisionDirection.Left)) {
                    value10.vy += -100
                } else if (value10.isHittingTile(CollisionDirection.Right)) {
                    value10.vy += -100
                }
            }
        }
    } else {
        if (leve2 == 0) {
            for (let value9 of sprites.allOfKind(SpriteKind.npc)) {
                if (value9.isHittingTile(CollisionDirection.Bottom)) {
                    if (value9.isHittingTile(CollisionDirection.Left)) {
                        value9.vy += -100
                    } else if (value9.isHittingTile(CollisionDirection.Right)) {
                        value9.vy += -100
                    }
                }
            }
        } else if (leve2 >= 2) {
            for (let value10 of sprites.allOfKind(SpriteKind.npc)) {
                if (value10.isHittingTile(CollisionDirection.Bottom)) {
                    if (value10.isHittingTile(CollisionDirection.Left)) {
                        value10.vy += -100
                    } else if (value10.isHittingTile(CollisionDirection.Right)) {
                        value10.vy += -100
                    }
                }
            }
        }
    }
})
forever(function () {
    list2 = [
    tiles.createMap(tilemap`level8`),
    tiles.createMap(tilemap`level9`),
    tiles.createMap(tilemap`level10`),
    tiles.createMap(tilemap`level11`),
    tiles.createMap(tilemap`level12`),
    tiles.createMap(tilemap`level13`),
    tiles.createMap(tilemap`level14`),
    tiles.createMap(tilemap`level15`),
    tiles.createMap(tilemap`level16`)
    ]
    list2.push(tiles.createMap(tilemap`level17`))
    list2.push(tiles.createMap(tilemap`level22`))
    dlc_levels()
})
forever(function () {
    if (blockSettings.exists("Name")) {
        mySprite.say(blockSettings.readString("Name"))
    }
})
forever(function () {
    if (sprites.readDataBoolean(mySprite, "manesong")) {
        music.setVolume(65)
        song2(300)
    }
})
forever(function () {
    if (Achievements.checkForAchievement("Passing the time", blockSettings.readNumber("timesplayed") > 10)) {
        Achievements.showAchievement(
        "Passing the time",
        "Play 10  tournaments.",
        1,
        img`
            . . 5 5 5 . . . 
            . 5 5 5 5 5 . . 
            5 5 1 1 1 5 5 . 
            5 1 1 f 1 1 5 . 
            5 1 1 f f f 5 . 
            5 1 1 1 1 1 5 . 
            5 5 1 1 1 5 5 . 
            . 5 5 5 5 5 . . 
            `
        )
    }
})
game.onUpdateInterval(500, function () {
    for (let value18 of tiles.getTilesByType(assets.tile`tile12`)) {
        list55 = [img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `, img`
            4 4 4 . . 4 4 4 4 4 . . . . . . 
            4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
            b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
            . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
            . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
            b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
            c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
            c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
            c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
            c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
            . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
            . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
            . . c 4 4 d 4 4 4 4 4 d d 5 d c 
            . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
            . . . . c c b 4 4 4 b b 4 5 4 4 
            . . . . . . c c c c c c b b 4 . 
            `, img`
            . . . . . . . 6 . . . . . . . . 
            . . . . . . 8 6 6 . . . 6 8 . . 
            . . . e e e 8 8 6 6 . 6 7 8 . . 
            . . e 2 2 2 2 e 8 6 6 7 6 . . . 
            . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
            . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
            e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
            e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
            e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
            e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
            e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
            e 2 2 2 2 2 2 2 4 e 2 e e c . . 
            e e 2 e 2 2 4 2 2 e e e c . . . 
            e e e e 2 e 2 2 e e e c . . . . 
            e e e 2 e e c e c c c . . . . . 
            . c c c c c c c . . . . . . . . 
            `, img`
            . . . . . . . . . . . 6 6 6 6 6 
            . . . . . . . . . 6 6 7 7 7 7 8 
            . . . . . . 8 8 8 7 7 8 8 6 8 8 
            . . e e e e c 6 6 8 8 . 8 7 8 . 
            . e 2 5 4 2 e c 8 . . . 6 7 8 . 
            e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
            e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
            e 2 e e 2 2 2 2 e e e e c 6 8 . 
            c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
            . c 2 e e e 2 e 2 4 2 2 2 2 c . 
            . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
            . . . e c c e c 2 2 2 2 2 2 2 e 
            . . . . . . . c 2 e e 2 2 e 2 c 
            . . . . . . . c e e e e e e 2 c 
            . . . . . . . . c e 2 2 2 2 c . 
            . . . . . . . . . c c c c c . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . 5 5 5 6 5 5 5 . . . . . 
            . . . 5 4 4 4 4 4 4 4 5 . . . . 
            . . 5 4 4 5 5 4 4 4 4 4 5 . . . 
            . 5 4 4 5 5 4 4 4 4 4 4 4 5 . . 
            . 5 4 5 5 4 4 4 4 4 4 4 4 5 . . 
            . 5 4 5 5 4 4 4 4 4 4 4 4 5 . . 
            . 5 4 4 4 4 4 4 4 4 4 4 4 5 . . 
            . 5 4 4 4 4 4 4 4 4 4 4 4 5 . . 
            . 5 4 4 4 4 4 4 4 4 4 4 4 5 . . 
            . 5 4 4 4 4 4 4 4 4 4 4 4 5 . . 
            . . 5 4 4 4 4 4 4 4 4 4 5 . . . 
            . . . 5 4 4 4 4 4 4 4 5 . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `]
        mySprite2 = sprites.create(list55[randint(0, 4)], SpriteKind.Food)
        if (!(tiles.tileIsWall(tiles.locationInDirection(value18, CollisionDirection.Bottom)))) {
            mySprite2.ay += 100
        } else {
            mySprite2.ay += -100
        }
        if (mySprite.x > mySprite2.x) {
            mySprite2.ax += 60
        } else {
            mySprite2.ax += -60
        }
        mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
        tiles.placeOnTile(mySprite2, value18)
    }
})
game.onUpdateInterval(500, function () {
    if (sprites.readDataBoolean(mySprite, "mod levels go")) {
        for (let value17 of sprites.allOfKind(SpriteKind.npc)) {
            value17.vx = randint(90, 130)
            value17.ay = 100
            if (sprites.readDataBoolean(value17, "moveing")) {
            	
            }
        }
    } else {
        if (leve2 == 1) {
            for (let value14 of sprites.allOfKind(SpriteKind.npc)) {
                if (Math.percentChance(50)) {
                    if (sprites.readDataNumber(value14, "r") == 1) {
                        value14.vx = randint(90, 130)
                        value14.ay = 100
                    } else {
                        value14.vx = randint(-90, -130)
                        value14.ay = 100
                    }
                } else {
                    if (Math.percentChance(50)) {
                        sprites.setDataNumber(value14, "r", 2)
                    } else {
                        sprites.setDataNumber(value14, "r", 1)
                    }
                }
            }
        } else if (leve2 == 2) {
            for (let value15 of sprites.allOfKind(SpriteKind.npc)) {
                if (sprites.readDataNumber(value15, "r") == 2) {
                    value15.vx = randint(90, 130)
                    value15.ay = 100
                } else {
                    value15.vx = randint(-90, -130)
                    value15.ay = 100
                }
                if (tiles.tileIs(tiles.locationInDirection(tiles.locationInDirection(tiles.locationOfSprite(value15), CollisionDirection.Left), CollisionDirection.Bottom), assets.tile`transparency16`)) {
                    sprites.setDataNumber(value15, "r", 1)
                } else if (tiles.tileIs(tiles.locationInDirection(tiles.locationInDirection(tiles.locationOfSprite(value15), CollisionDirection.Right), CollisionDirection.Bottom), assets.tile`transparency16`)) {
                    sprites.setDataNumber(value15, "r", -1)
                }
            }
        } else if (leve2 == 5) {
            for (let value16 of sprites.allOfKind(SpriteKind.npc)) {
                if (Math.percentChance(50)) {
                    if (sprites.readDataNumber(value16, "r") == 1) {
                        value16.vx = randint(90, 130)
                        value16.ay = 100
                    } else {
                        value16.vx = randint(-90, -130)
                        value16.ay = 100
                    }
                } else {
                    if (Math.percentChance(50)) {
                        sprites.setDataNumber(value16, "r", 2)
                    } else {
                        sprites.setDataNumber(value16, "r", 1)
                    }
                }
            }
        } else {
            for (let value17 of sprites.allOfKind(SpriteKind.npc)) {
                value17.vx = randint(90, 130)
                value17.ay = 100
                if (sprites.readDataBoolean(value17, "moveing")) {
                	
                }
            }
        }
    }
})
