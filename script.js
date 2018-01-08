
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

// c.fillStyle = 'rgba(225, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 100);  
// c.fillStyle = 'rgba(225, 100, 0, 0.5)'; 
// c.fillRect(400, 100, 100, 100); 
// c.fillStyle = 'rgba(225, 100, 100, 0.5)'; 
// c.fillRect(300, 200, 100, 100);   


// console.log(canvas);

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();



// for (var i = 0; i < 100; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }
// c.strokeStyle = 'rgba(255, 51, 204, 0.5)';
// c.fillStyle = 'rgba(255, 51, 204, 0.5)';

addEventListener("resize", function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    // init();
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'rgba(255, 102, 102, 0.5)';
        c.fill();
        c.fillStyle = 'rgba(255, 102, 102, 0.5)';
        c.stroke();

    }
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}


var circleArray = [];
for (var i = 0; i < 100; i++) {
    var radius = Math.random() * 100;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius *2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}
animate();
