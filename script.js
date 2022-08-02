const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let painting = false;

function startPosition(e){
    painting = true;
    draw(e)
}
function finishedPosition(){
    painting = false;
    ctx.beginPath();
}
function draw(e){
   if(!painting) return;
    ctx.lineWidth = 10;
    ctx.strokeStyle = "round";
    ctx.lineCap = 'round';
    //draw theline with as the mouse dra along the canvas area.
    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX,e.clientY);
}
// EventListener
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw);