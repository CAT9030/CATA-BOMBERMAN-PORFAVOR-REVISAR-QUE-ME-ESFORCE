import p5 from 'p5';
import { PlayerDirection } from './types';

export default class Bullet {
  private x!:number;
  private y!:number;
  private direction!:PlayerDirection;
  private aceleration:number = 0.5;
  private speed:number = 1;

  shoot(x:number, y:number, direction:PlayerDirection) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  move() {
    switch (this.direction) {
      case 'UP':
        this.y -= this.speed;
        break;
      case 'DOWN':
        this.y += this.speed;
        break;
      case 'LEFT':
        this.x -= this.speed;
        break;
      case 'RIGHT':
        this.x += this.speed;
        break;
      default:
        break;
    }
    this.speed += this.aceleration;
  }

  show(p:p5) {
    p.fill(0, 255, 0);
    p.circle(this.x, this.y, 10);
    this.move();
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }
}
