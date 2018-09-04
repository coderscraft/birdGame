
const heightOfGround = 20;
export const sprites = [
    {
        type: "ground",
        position: { x: 0, y: 80 },
        velocity: { x: -1, y: 0 },
        size: { width: 100, height: heightOfGround }
    },
    {
        type: "ground",
        position: { x: 100, y: 80 },
        velocity: { x: -1, y: 0 },
        size: { width: 100, height: heightOfGround }
    }
]

export function moveSprite(sprites, elapsedTime = 1000/60 ) {
    let newSprites = [];
    sprites.map(sprite => {
        if (sprite.type === 'ground') {
            let groundPosition;
            if (sprite.position.x > -97) {
              groundPosition = { x: sprite.position.x + sprite.velocity.x, y: 80 };
            } else {
              groundPosition = { x: 100, y: 80 };
            }
            var newGround = { ...sprite, position: groundPosition };
            newSprites.push(newGround);
        }
    })
    return newSprites;
}