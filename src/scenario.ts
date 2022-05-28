import p5, { Image } from 'p5';

const SIZE = 80;

export default class Scenario {
  private matrix: Array<Array<number>> = [
    [1, 1, 0, 0, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 0],
  ];

  private grass!:Image;
  private tree!:Image;

  show(p: p5) {
    p.fill(255, 0, 0);
    this.matrix.forEach((arrow, a) => {
      arrow.forEach((cell, c) => {
        p.fill(0, 100, 0);
        p.rect(c * SIZE, a * SIZE, SIZE, SIZE);
        if (cell === 0) {
          p.image(this.grass, c * SIZE, a * SIZE, SIZE, SIZE);
          p.image(this.tree, c * SIZE, a * SIZE, SIZE, SIZE);
        }
        if (cell === 1) {
          p.image(this.grass, c * SIZE, a * SIZE, SIZE, SIZE);
        }
      });
    });
  }

  isFreeSpace(row:number, col:number):boolean {
    if (this.isValidBlockPosition(row, col) === false) {
      return false;
    }
    let result = false;
    switch (this.matrix[row][col]) {
      case 0:
        result = false;
        break;
      case 1:
        result = true;
        break;
      default:
        break;
    }
    return result;
  }

  verifyCollision(x:number, y:number) {

    const result = !this.isFreeSpace(x, y);
    return {
      result,
      x,
      y,
    };
  }

  destroyBlock(row:number, col:number) {
    if (this.isValidBlockPosition(row, col)) {
      this.matrix[row][col] = 1;
    }
  }

  isValidBlockPosition(row:number, col:number):boolean {
    return !(row >= this.matrix.length || row < 0
      || col >= this.matrix[row].length || col < 0);
  }

  setGrassImage(grass: Image) {
    this.grass = grass;
  }

  setBrownTreeImage(tree: Image) {
    this.tree = tree;
  }
}
