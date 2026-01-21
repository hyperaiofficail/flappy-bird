const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resetGame() {
  bird.y = 250;
  bird.velocity = 0;
  pipes.reset();
  score.value = 0;
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  updatePhysics();

  if (hasCollision()) {
    SOUND.hit.play();
    resetGame();
  }

  bird.draw(ctx);
  pipes.draw(ctx);
  score.draw(ctx);

  requestAnimationFrame(loop);
}

loop();
