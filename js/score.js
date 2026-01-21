const score = {
  value: 0,

  add() {
    this.value++;
  },

  draw(ctx) {
    ctx.fillStyle = "#000";
    ctx.font = "24px Arial";
    ctx.fillText("Score: " + this.value, 10, 30);
  }
};
