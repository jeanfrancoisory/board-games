import {Pawn} from "./pawn";

export class Tile {

  private _coordX: number;
  private _coordY: number;
  private _pawn: Pawn;
  private _statePlayed: boolean;

  constructor(x: number, y: number, pawn: Pawn, statePlayed: boolean) {
    this._coordX = x;
    this._coordY = y;
    this._pawn = pawn;
    this._statePlayed = statePlayed;
  }

  get pawn(): Pawn {
    return this._pawn;
  }

  set pawn(value: Pawn) {
    this._pawn = value;
  }

  get coordX(): number {
    return this._coordX;
  }

  set coordX(value: number) {
    this._coordX = value;
  }

  get coordY(): number {
    return this._coordY;
  }

  set coordY(value: number) {
    this._coordY = value;
  }

  get statePlayed(): boolean {
    return this._statePlayed;
  }

  set statePlayed(value: boolean) {
    this._statePlayed = value;
  }
}
