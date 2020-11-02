export class Block {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.maxX = width + x;
    this.maxY = height + y;
  }
  draw(ctx) {
    const xGap = 40;
    const yGap = 30;
    // 막대 그리기
    ctx.fillStyle = "#ff384e";
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();
    // 막대의 아래 그림자 그리기
    ctx.fillStyle = "#190f3a";
    ctx.beginPath();
    ctx.moveTo(this.maxX, this.maxY);
    ctx.lineTo(this.maxX - xGap, this.maxY + yGap);
    ctx.lineTo(this.x - xGap, this.maxY + yGap);
    ctx.lineTo(this.x, this.maxY);
    ctx.fill();
    //막대의 옆 그림자 그리기
    ctx.fillStyle = "#9d0919";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.maxY);
    ctx.lineTo(this.x - xGap, this.maxY + yGap);
    ctx.lineTo(this.x - xGap, this.maxY + yGap - this.height);
    ctx.fill();
  }
}
