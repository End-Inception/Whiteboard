const canvas = document.getElementById('whiteboard');
const ctx = canvas.getContext('2d');

let painting = false;
let color = document.getElementById("colorPicker").value;
let brushSize = document.getElementById("sizePicker").value;

// Set canvas size
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

// Start drawing when mouse is pressed
canvas.addEventListener('mousedown', (e) => {
    painting = true;
    draw(e);
});

// Stop drawing when mouse is released
canvas.addEventListener('mouseup', () => {
    painting = false;
    ctx.beginPath(); // Prevents continuous drawing
});

// Detect mouse movement and draw on canvas
canvas.addEventListener('mousemove', draw);

// Function to handle drawing
function draw(e) {
    if (!painting) return;

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

// Clear the board
function clearBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Change color when a new color is selected
document.getElementById("colorPicker").addEventListener("input", (e) => {
    color = e.target.value;
});

// Change brush size when slider is moved
document.getElementById("sizePicker").addEventListener("input", (e) => {
    brushSize = e.target.value;
});
