import p5, { Image } from 'p5';

export default class Explosion {
  private x!:number;
  private y!:number;
  private images:Image[] = [];
  private step:number = 0;
  private visible:boolean = true;
  private started:boolean = false;

  constructor(x:number, y:number, images:Image[]) {
    this.x = x;
    this.y = y;
    this.images = images;
  }

  show(p:p5) {
    if (this.visible && this.started) {
      p.imageMode(p.CENTER);
      p.image(this.images[this.step], this.x, this.y);
      p.imageMode(p.CORNER);

      if (p.frameCount % 3 === 0) {
        this.step += 1;
      }

      if (this.step >= this.images.length) {
        this.visible = false;
        this.started = false;
      }
    }
  }

  run() {
    this.started = true;
  }
}
