let playerState = 'light';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');


const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;


const lightingMage  = new Image();
lightingMage.src = 'characters/lighting.png'


const spriteWidth = 128;
const spriteHeight = 128;


let gameFrame = 0;
const staggerFrames = 5;
const characterAnimation = [];
const animationState = [
    {
       
        name: 'light',
        frames: 12
    },
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'hurt',
        frames: 3
    },
    {
        name: 'dead',
        frames: 5
    },
    {
        name: 'attack',
        frames: 9
    },
];

animationState.forEach((state, index) => {
    let frames = {
        loc:[],
    }
    for (let j =0; j <state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY})
    }

    characterAnimation[state.name] = frames;
});
console.log(characterAnimation);


function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % characterAnimation[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = characterAnimation[playerState].loc[position].y;

    ctx.drawImage(lightingMage, frameX, frameY , spriteWidth, spriteHeight, 
        0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);


    gameFrame++;
    requestAnimationFrame(animate);
    ctx.imageSmoothingEnabled = false;
};
animate();


function startGame(){
    console.log('Button works')
}
