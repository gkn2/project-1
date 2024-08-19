function spawnEnemies () {
    enemy_1 = sprites.create(img`
        .............42fff..............
        ...........224422f..............
        ..........224422f...............
        ..........222222f...............
        .....fffff222222ff.........222..
        ...ff2222222422222fff....22222..
        ..f2222222242422222222f.24222...
        ff222222222242422222222f2422f...
        f2422211221242222244442ff22f....
        f22211111111222224444442222f....
        .f2111222211222244444444442f....
        ..f22221211122244444422ff222f...
        ...f21221112222f4442222..f22f...
        ....f222111f242222422.....f22f..
        ........2222f242222........fff..
        .............fffff..............
        `, SpriteKind.Enemy)
    enemy_2 = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f 9 9 . . . . . . f 9 7 7 9 
        f f 9 9 . . . . . . f 9 7 7 9 . 
        f 9 f 9 . . . . . . f 7 9 9 9 . 
        f f f 9 9 . 9 9 . f 9 7 7 9 9 . 
        f f 9 3 9 9 3 9 9 f 7 9 7 7 9 . 
        f f 7 3 7 9 3 7 9 f 7 9 9 7 9 . 
        . 9 1 7 7 7 1 7 9 7 7 9 9 9 . . 
        . 9 1 7 7 7 1 7 7 9 9 9 9 . . . 
        9 7 7 7 7 7 7 7 7 7 9 9 . . . . 
        9 7 1 f f 1 9 7 7 7 7 f . . . . 
        f f 1 f f 1 f 7 7 7 7 f 9 . . . 
        f f 2 2 2 2 f 7 7 7 7 f 9 9 . . 
        . f 2 2 2 2 7 7 7 7 9 f . . . . 
        . . f 7 7 7 7 7 7 9 f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Enemy)
    enemy_3 = sprites.create(img`
        ..............ccccccccc........
        ............cc555555555cc......
        ...........c5555555555555c.....
        ..........c55555555555555dc....
        .........c555555555555b5bdc....
        .........555bc1555555555bdcccc.
        ........c555ccc55555555bbdccddc
        ........c555bcb5555555ccddcdddc
        .......c555555555551ccccddbdddc
        .......c555555b555c1cccbddbbdbc
        .......c5555555bbc33333ddddbcc.
        .......c555555555bc333555ddbc..
        .......c5555555555555555555c...
        .......cd555555555555cccc555c..
        .......cd55555555555c555c555c..
        .......cdd555555555b5555b555c..
        .......cddd55555ddbb555bb555c..
        .......cdddd55555555555b5555c..
        .......cddddd5555555ddb5555dc..
        c......cdddddd555555555555dcc..
        cc...ccddddddd555555555555dc...
        cdccccdddddd555555d55555ddcc...
        cdddddddddbd5555555ddddddccccc.
        ccdddddddbb55555555bddddccbddc.
        .ccddddddbd55555555bdddccdddc..
        ..cccddddbd5555555cddcccddbc...
        ....ccccccd555555bcccc.cccc....
        .........cc555555bc............
        .........cc55555555c...........
        ..........cccccccccc...........
        `, SpriteKind.Enemy)
    enemy_1.setPosition(134, 79)
    enemy_2.setPosition(20, 14)
    enemy_3.setPosition(121, 22)
    enemy_1.follow(hero, 20)
    enemy_2.setVelocity(randint(10, 50), randint(10, 50))
    enemy_3.setVelocity(randint(10, 50), randint(10, 50))
    enemy_2.setBounceOnWall(true)
    enemy_3.setBounceOnWall(true)
    enemy_3.setScale(0.84, ScaleAnchor.Bottom)
    enemy_2.setScale(1.4, ScaleAnchor.Top)
    enemy_1.setScale(1.2, ScaleAnchor.Top)
}
function spawnHero () {
    hero = sprites.create(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ........ccccc...................
        ......ccbbbbbc..................
        ....ccddbbbbbbf.................
        ...cbbbddbbffbf.................
        ....ffffdbbffbff................
        .......fbbbbbbbf................
        .......fbbbbbbbff...............
        ......ffbbbbbbbbfff.............
        ......f6bbbbbb663ddcc...........
        .....cc66bbbb666dddddc..........
        .....cd36666663dddddddc.........
        .....cddd3333dbddddddbcc........
        .....cddddddddbdddddbbddc.......
        .....cddddddddbbdddbbdddbc......
        ......cddddddddbbdbbddddbbccc...
        ......ccddddddddbbbbcccccbbbcc..
        .......ccddddddddddddddbccffff..
        ........cccbddccbddddbbfff......
        ........c333bb333cbbfff.........
        ........c33cc33cc3fff...........
        `, SpriteKind.Player)
    controller.moveSprite(hero)
    hero.setPosition(17, 97)
}
let hero: Sprite = null
let enemy_3: Sprite = null
let enemy_2: Sprite = null
let enemy_1: Sprite = null
spawnHero()
spawnEnemies()
