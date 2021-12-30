export class Pawn {


  private _color: string

  constructor(color: string) {
    this._color = color;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }
}
