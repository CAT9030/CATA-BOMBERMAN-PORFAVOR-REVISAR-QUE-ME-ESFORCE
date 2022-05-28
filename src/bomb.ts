import p5 from 'p5';

export default class Bomb {
  private x!:number;
  private y!:number;
  private timeOut! : number;
  private col! : number;
  private row! : number;


  shoot(x:number, y:number) {
    this.x = x / 2;
    this.y = y / 2;
    this.timeOut = 2;
    this.updatePositionInMatrix();
  }

  show(p:p5) {
    p.fill(0, 255, 0);
    p.circle(this.x, this.y , 30);
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

getCol(){
return this.col;
}

getRow(){
  return this.row
  }

 updatePositionInMatrix(){
  this.col = ( this.x - ( 80 / 2 )) / 80;
  this.row = ( this.y - ( 80 / 2 )) / 80;
}
}
