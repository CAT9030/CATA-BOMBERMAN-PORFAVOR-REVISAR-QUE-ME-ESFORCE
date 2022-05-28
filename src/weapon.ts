import p5 from 'p5';
import Bomb from './bomb';
import Bullet from './bullet';
import { PlayerDirection } from './types';

export default class Weapon {
  private x!:number;
  private y!:number;
  private direction!:PlayerDirection;
  private angle:number = 0;
  private ammunition:Bullet[] = [];

  constructor(x:number, y:number) {
    this.x = x;
    this.y = y;
    this.direction = 'UP';
    this.reloadBullets();
  }

  reloadBullets() {
    for (let index = 0; index < 10; index += 1) {
      this.ammunition.push(new Bullet());
    }
  }

  show(p:p5) {
    p.fill(0);
    p.circle(this.x, this.y, 20);
    p.push();
    p.rectMode(p.CENTER);
    p.translate(this.x, this.y);
    p.rotate(this.angle);
    p.rect(0, -15, 10, 30);
    p.rectMode(p.CORNER);
    p.pop();
  }

  shoot() {
    const bullet = new Bomb();
    if (bullet !== undefined) {
      const xWeaponOffset = this.x;
      const yWeaponOffset = this.y;
      bullet.shoot(this.x + xWeaponOffset, this.y + yWeaponOffset);
    }
    return bullet;
  }

  defineOffsetX() {
    let result = 0;
    if (this.direction === 'LEFT') {
      result = -30;
    } else if (this.direction === 'RIGHT') {
      result = +30;
    }
    return result;
  }

  defineOffsetY() {
    let result = 0;
    if (this.direction === 'UP') {
      result = -30;
    } else if (this.direction === 'DOWN') {
      result = +30;
    }
    return result;
  }

  setOrientation() {
    switch (this.direction) {
      case 'LEFT':
        this.angle = Math.PI * 1.5;
        break;
      case 'RIGHT':
        this.angle = Math.PI / 2;
        break;
      case 'UP':
        this.angle = 0;
        break;
      case 'DOWN':
        this.angle = Math.PI;
        break;
      default:
        break;
    }
  }

  updatePositionInPixels(newX:number, newY:number) {
    this.x = newX;
    this.y = newY;
  }

  setDirection(direction : PlayerDirection) {
    this.direction = direction;
    this.setOrientation();
  }
}
