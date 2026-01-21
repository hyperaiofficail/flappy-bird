function hasCollision() {
  if (bird.y < 0 || bird.y + bird.height > CONFIG.height) return true;

  if (
    bird.x + bird.width > pipes.x &&
    bird.x < pipes.x + pipes.width &&
    (bird.y < pipes.topHeight ||
     bird.y + bird.height > pipes.topHeight + CONFIG.pipeGap)
  ) {
    return true;
  }

  return false;
}
