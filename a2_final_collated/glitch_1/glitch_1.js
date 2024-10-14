//https://editor.p5js.org/robert0504/sketches/OTBqTTLJ (ref for rectangle class)

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


function setup() {
    createCanvas(windowWidth, windowHeight);
    
}

function draw() {
    let rectGlitch = new RectangleGlitch(random(windowWidth), random(windowHeight));
    rectGlitch.display();
    frameRate(5);
}

// glitch_1.js
export function setup() {
    console.log("Setup function called");
}

export function draw() {
    console.log("Draw function called");
}