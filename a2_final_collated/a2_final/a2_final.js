// import * as glitchType1 from '../glitch_1/glitch_1.js';

// glitchType1.draw();

var dropdown;
let nokia;
let lime;
let black;
let sentence = "She paused and then deleted think,\nreplacing it with";
let glitches = [];


function preload() {
   nokia = loadFont('data/nokiafc22.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    lime = color(0, 255, 0);
    black = color(0, 0, 0);
    background(black);
    

    //create dropdown menu
    //reference: https://editor.p5js.org/hs4311/sketches/CXmLU5fRy
    dropdown = createSelect();
    dropdown.position(50, 50); // to edit

    //dropdown options
    dropdown.option ('believe');
    dropdown.option ('conclude');  
    dropdown.option ('feel');
    dropdown.option ('reckon');
    dropdown.option ('sense');
    dropdown.option ('think');
    dropdown.option ('find');

    //styling for dropdown
    dropdown.style ('font-size', '38px');
    dropdown.style ('font-family', 'nokia');
    dropdown.style ('color', 'lime');
    dropdown.style ('border', '1px solid lime');
    dropdown.style ('background-color', 'black');
    dropdown.style ('padding', '5px');

    //text
    fill(lime);
    textSize(38);
    textFont(nokia);
    textLeading(60);
    text(sentence, 100, 100);

    //positioning dropdown to text
    dropdown.position (textWidth (sentence) - 720, 114);
}

function windowResize() {
    resizeCanvas(windowWidth, windowHeight);
}

function selectOption() {
    let selectedOption = dropdown.value();
    switch (selectedOption) {
        case 'believe':
            triggerGlitchEffect(selectedOption, 'glitchType1');
            break;
        case 'conclude':
            triggerGlitchEffect(selectedOption, 'glitchType2');
            break;
        case 'feel':
            if (isCorrectWord(selectedOption)) {
                clearGlitches(); // clean the page
            }
            break;
        case 'reckon':
            loadOption1();
            break;
        case 'sense':
            triggerGlitchEffect(selectedOption, 'glitchType4');
            break;
        case 'think':
            triggerGlitchEffect(selectedOption, 'glitchType5');
            break;
        case 'find':
            triggerGlitchEffect(selectedOption, 'glitchType6');
            break;
        default:
            console.log("No action defined for this option.");
            break;
    }
}
  

class RectangleGlitch {
    constructor(x, y) {
        this.x = x;
        this.y = y;
      
        const minWidth = windowWidth / 8;
        const maxWidth = windowWidth / 2;
        const minHeight = 2;
        const maxHeight = 10;
        
        this.width = random(minWidth, maxWidth);
        this.height = random(minHeight, maxHeight);

        this.colors = [
            [0, 255, 0], // lime green
            [255, 0, 196], // neon pink
            [255, 255, 0], // yellow
        ];

        const selectedColor = random(this.colors);
        this.color1 = selectedColor[0];
        this.color2 = selectedColor[1];
        this.color3 = selectedColor[2];
        
      
    }
    
    display() {
        noStroke();
        fill (this.color1, this.color2, this.color3);
        rect (this.x, this.y, this.width, this.height);
    }

}
function loadOption1() {
    let rectGlitch = new RectangleGlitch(random(windowWidth), random(windowHeight));
    rectGlitch.display();
    frameRate(5);
  }