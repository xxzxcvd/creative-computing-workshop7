let particles = [];

class Particle {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(-2, 2), random(-2, 2));
    this.size = random(5, 15);
  }

  update() {
    this.position.add(this.velocity);
    // 边界检查
    if (this.position.x < 0 || this.position.x > width) {
      this.velocity.x *= -1;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y *= -1;
    }
  }

  display() {
    fill(255, 0, 0);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }
}

function setup() {
  createCanvas(800, 600);
  background(220);
  // 初始化粒子
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(220);
  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}