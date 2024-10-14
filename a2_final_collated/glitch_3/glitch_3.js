let nokia;
let buttons = [];
let buttonCount = 0;
let totalButtons = 105;
let buttonsPerFrame = 7;
let lime;
let black;


function preload(){
  nokia = loadFont('data/nokiafc22.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(3);
    lime = color(0, 255, 0);
    black = color(0, 0, 0);
}

function draw() {
    if (buttonCount < totalButtons) { // outer ensures the loop runs only if the total number of buttons created is less than totalButtons
        for (let i = 0; i < buttonsPerFrame; i++) {
            if (buttonCount < totalButtons) { // ensures the loop stops creating buttons if the total number of buttons reaches totalButtons during the interation
                let button = createButton('error 404');
                button.position(random(width), random(height));
                button.style('font-family', 'nokia');
                button.style('font-size', '12px');
                button.style('color', 'lime');
                button.style('border', '1px solid lime');
                button.style('background-color', 'black');
                button.style('padding', '7px');
                buttons.push(button);
                buttonCount++;
            }
        }
    }
}