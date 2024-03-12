const container = document.querySelector('.container');
const box = document.querySelector('.box');
const canvas = document.querySelector('.particles');
const ctx = canvas.getContext('2d');
const glow = document.querySelector('.glow');

let particles = [];

function Particle(x, y, radius, color, speed, direction) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.speed = speed;
  this.direction = direction;
  this.alpha = 1;

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
    ctx.fill();
  };

  this.update = function() {
    this.x += this.speed * Math.cos(this.direction);
    this.y += this.speed * Math.sin(this.direction);
    this.alpha -= 0.01;
    this.draw();
  };
}

function init() {
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle, index) => {
    if (particle.alpha <= 0) {
      particles.splice(index, 1);
    } else {
      particle.update();
    }
  });
}

init();
animate();

window.addEventListener('mousemove', (event) => {
  const centerX = event.clientX - container.offsetLeft;
  const centerY = event.clientY - container.offsetTop;
  for (let i = 0; i < 5; i++) {
    const radius = Math.random() * 2 + 1;
    const color = `${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}`;
    const speed = Math.random() * 3 + 1;
    const direction = Math.random() * Math.PI * 2;
    particles.push(new Particle(centerX, centerY, radius, color, speed, direction));
  }
});


/*window.addEventListener('wheel', (event) => {
    const centerX = event.clientX - container.offsetLeft;
    const centerY = event.clientY - container.offsetTop;
    for (let i = 0; i < 5; i++) {
      const radius = Math.random() * 2 + 1;
      const color = `${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}`;
      const speed = Math.random() * 3 + 1;
      const direction = Math.random() * Math.PI * 2;
      particles.push(new Particle(centerX, centerY, radius, color, speed, direction));
    }
  });

*/