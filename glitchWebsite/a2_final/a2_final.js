var dropdown;
let nokia;
let lime;
let black;
let sentence = "She paused and then deleted think,\nreplacing it with";
let glitches = [];
let triggerGlitch = false; // Flag to trigger glitches for other types

function preload() {
   nokia = loadFont('data/nokiafc22.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    lime = color(0, 255, 0);
    black = color(0, 0, 0);
    background(black);

    // Create dropdown menu
    dropdown = createSelect();
    dropdown.position(50, 50);

    // Dropdown options
    dropdown.option('believe');
    dropdown.option('conclude');
    dropdown.option('feel');
    dropdown.option('reckon');
    dropdown.option('sense');
    dropdown.option('think');
    dropdown.option('find');

    // Dropdown styling
    dropdown.style('font-size', '38px');
    dropdown.style('font-family', 'nokia');
    dropdown.style('color', 'lime');
    dropdown.style('border', '1px solid lime');
    dropdown.style('background-color', 'black');
    dropdown.style('padding', '5px');

    // Text display
    fill(lime);
    textSize(38);
    textFont(nokia);
    textLeading(60);
    text(sentence, 100, 100);

    // Position dropdown in the text
    dropdown.position(textWidth(sentence) - 720, 114);

    // Add event listener for dropdown
    dropdown.changed(selectOption);  // Attach selectOption function to the dropdown
}

function windowResize() {
    resizeCanvas(windowWidth, windowHeight);
}

function selectOption() {
    let selectedOption = dropdown.value();
    switch (selectedOption) {
        case 'believe':
        case 'conclude':
        case 'reckon':
        case 'sense':
            break;
        case 'find':
            triggerGlitch = true;  // Start triggering glitches for these incorrect words
            break;
        case 'feel':
            clearGlitches();  // Correct answer clears the glitches
            break;
        case 'think':  // Handle glitch1 with custom frame rate
            triggerGlitch1();  // Activate glitch1 from glitch1.js
            break;
        default:
            console.log("No action defined for this option.");
            break;
    }
}

function triggerGlitchEffect() {
    let rectGlitch = new RectangleGlitch(random(windowWidth), random(windowHeight));
    glitches.push(rectGlitch);
}

function clearGlitches() {
    glitches = [];  // Clear all glitch effects
    triggerGlitch = false;  // Stop triggering glitches
    deactivateGlitch1();  // Deactivate glitch1 and reset frame rate
}

function draw() {
    background(black);
    
    // Redraw text
    fill(lime);
    text(sentence, 100, 100);
    
    // Trigger glitches for other incorrect selections
    if (triggerGlitch) {
        triggerGlitchEffect();
    }
    
    // Continuously update glitch1 if it's active
    updateGlitch1();

    // Display all regular glitches
    glitches.forEach(glitch => glitch.display());
}