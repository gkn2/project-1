function spawncollectables () {
    collectable1 = sprites.create(img`
        . . 5 1 1 1 . . 
        . 5 5 1 1 1 1 . 
        5 5 5 5 1 1 1 1 
        5 5 5 5 1 1 1 1 
        5 5 5 5 5 5 1 1 
        5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 . 
        . . 5 5 5 5 . . 
        `, SpriteKind.Food)
    collectable1.setKind(SpriteKind.Food)
    collectable1.setPosition(randint(0, 160), randint(0, 120))
}
function spawnhook () {
    fishinghook = sprites.create(img`
        . . . . . . d d 
        . . . . . . d d 
        . . . . . . d d 
        . d d . . d d d 
        d d d . . d d d 
        d . . . . d d d 
        d d . . . d d d 
        d d d d d d d d 
        `, SpriteKind.Projectile)
    fishinghook.setPosition(randint(0, 160), randint(0, 120))
}
info.onCountdownEnd(function () {
    game.setGameOverScoringType(game.ScoringType.HighScore)
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
function spawnEnemies () {
    enemy_1 = sprites.create(img`
        ....................................
        ....................................
        ....................................
        ...............ccffff...............
        ..............cddbbbf...............
        .......ffffffcddbbbf................
        .....ffbbbbbbbbbbbbbcfff.......ccccc
        ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
        ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
        .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
        .fbbbbbbb222bbcbbbbbccccccccccbbcf..
        .ffbb1111222bbcbbbbcccccccbcffbccf..
        ..ff111111111bbbbccccccbbbcc..fbbcf.
        ....ccccccc111bdbbbfddbccc.....ffbbf
        ........ccccccfbdbbbfcc..........fff
        ...............ffffff...............
        `, SpriteKind.Enemy)
    enemy_2 = sprites.create(img`
        ...........fffffff...ccfff..........
        ..........fbbbbbbbffcbbbbf..........
        ..........fbb111bbbbbffbf...........
        ..........fb1111122bbbbff...........
        ..........f1cccc122bbbbbcff.........
        ..........ffc1c1c1bbcbcbcccf........
        ...........fcc3331bbbcbcbcccf..ccccc
        ............c333c1bbbcbcbccccfcddbbc
        ............c333c1bbbbbbbcccccddbcc.
        ............c333c11bbbbbccccccbbcc..
        ...........cc331c11bbbbccccccfbccf..
        ...........cc13c11cbbbcccccbbcfccf..
        ...........c111111cbbbfdddddc.fbbcf.
        ............cc1111fbdbbfdddc...fbbf.
        ..............cccfffbdbbfcc.....fbbf
        ....................fffff........fff
        `, SpriteKind.Enemy)
    enemy_3 = sprites.create(img`
        .............ccfff..............
        ...........ccddbcf..............
        ..........ccddbbf...............
        ..........fccbbcf...............
        .....fffffccccccff.........ccc..
        ...ffbbbbbbbcbbbbcfff....ccbbc..
        ..fbbbbbbbbcbcbbbbcccff.cdbbc...
        ffbbbbbb22bbcbcbbbcccccfcdbbf...
        fbcbbb11221bcbbbbbcccccffbbf....
        fbbb11111111bbbbbcccccccbbcf....
        .fb11133cc11bbbbcccccccccccf....
        ..fccc31c111bbbcccccbdbffbbcf...
        ...fc13c111cbbbfcddddcc..fbbf...
        ....fccc111fbdbbccdcc.....fbbf..
        ........ccccfcdbbcc........fff..
        .............fffff..............
        `, SpriteKind.Enemy)
    enemy_1.setPosition(134, 79)
    enemy_2.setPosition(20, 14)
    enemy_3.setPosition(121, 22)
    enemy_1.follow(hero, 6)
    enemy_2.follow(hero, 6)
    enemy_3.setBounceOnWall(true)
    enemy_3.setVelocity(randint(5, 8), randint(5, 8))
    enemy_3.setScale(0.6, ScaleAnchor.Middle)
    enemy_2.setScale(0.6, ScaleAnchor.Middle)
    enemy_1.setScale(0.6, ScaleAnchor.Middle)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    spawnhook()
})
function spawnHero () {
    hero = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f e e 4 e e e e e f f 
        f e e 4 4 4 e e e e e f 
        f e e 4 4 4 4 e e e e f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 3 3 3 3 3 3 4 e f 
        . f 4 3 3 2 2 3 3 4 f . 
        . . 4 4 4 4 4 4 4 4 . . 
        e 4 1 1 1 1 1 1 1 1 4 e 
        4 b 1 1 1 1 1 1 1 1 b 4 
        4 4 1 6 6 6 6 6 6 1 4 4 
        . . b 6 6 6 6 6 6 b . . 
        . . . 6 6 . . 6 6 . . . 
        `, SpriteKind.Player)
    controller.moveSprite(hero)
    hero.setPosition(17, 97)
    hero.setScale(1.25, ScaleAnchor.Middle)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
})
let hero: Sprite = null
let enemy_3: Sprite = null
let enemy_2: Sprite = null
let enemy_1: Sprite = null
let fishinghook: Sprite = null
let collectable1: Sprite = null
info.setLife(6)
info.setScore(0)
spawnHero()
spawnEnemies()
spawncollectables()
info.startCountdown(10)
game.onUpdateInterval(15000, function () {
    spawnEnemies()
})
game.onUpdateInterval(1000, function () {
    spawncollectables()
})
