"use strict";
import { Ball } from "./ball.js";
import { Block } from "./block.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);
    // 가변적인 웹 사이즈를 위해 resize 이벤트를 건다
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 20, 5);
    this.block = new Block(300, 30, 300, 450);
    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    this.ctx.scale(2, 2);
  }
  // 애니메이션 실행
  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.block.draw(this.ctx);
    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
  }
}
window.onload = () => {
  new App();
};
