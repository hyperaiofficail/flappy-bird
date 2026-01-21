const birdImg = new Image();
birdImg.src = "assets/images/bird.png";

const bird = {
  x: 80,
  y: 250,
  width: 34,
  height: 24,
  velocity: 0,

  flap() {
    this.velocity = CONFIG.jump;
    SOUND.flap.play();
  },

  update() {
    this.velocity += CONFIG.gravity;
    this.y += this.velocity;
  },

  draw(ctx) {
    ctx.drawImage(birdImg, this.x, this.y, this.width, this.height);
  }
};
