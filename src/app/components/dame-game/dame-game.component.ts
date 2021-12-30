import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';
import {Pawn} from "../../model/pawn";
import {Tile} from "../../model/tile";

@Component({
  selector: 'app-dame-game',
  templateUrl: './dame-game.component.html',
  styleUrls: ['./dame-game.component.css']
})
export class DameGameComponent implements OnInit {

  boardLength: number = 10;
  numberPawnWhite: number = 20;
  numberPawnBlack: number = 20;
  pawnInLine: number = 5;
  board: Array<Tile>;
  turn: string = 'white';

  constructor() {
    this.board = [];
  }

  ngOnInit(): void {
    this.init()
  }

  init(): void {

    for(let i = 0 ; i<50 ; i++) {
      if (i<this.numberPawnWhite) this.board.push(new Tile(~~(i/this.pawnInLine), ((~~(i/this.pawnInLine)%2===0)?(i%this.pawnInLine)*2+1:(i%this.pawnInLine)*2), new Pawn('white'), false));
      if (i>=50-this.numberPawnBlack) this.board.push(new Tile(~~(i/this.pawnInLine), ((~~(i/this.pawnInLine)%2===0)?(i%this.pawnInLine)*2+1:(i%this.pawnInLine)*2), new Pawn('black'), false));
      if (50-this.numberPawnBlack>i && i>=this.numberPawnWhite) this.board.push(new Tile(~~(i/this.pawnInLine), ((~~(i/this.pawnInLine)%2===0)?(i%this.pawnInLine)*2+1:(i%this.pawnInLine)*2), new Pawn('n'), false));
    }
    console.log(this.board);
  }

  line(x: number, i: number): boolean{
    return (x%2===0 && i===0) || (x%2!==0 && i!==0);
  }

  allowed(tile: Tile){
    if (tile.pawn.color !== 'n') return true;
    return false;
  }

  clickPawn(x: number, y: number) {
    if(this.board[x*this.pawnInLine+~~(y/2)].pawn.color === 'n') {
      const tile = this.board.find(s => s.statePlayed);
      if(tile && this.canMove(x, y, tile)){
        this.board[x*this.pawnInLine+~~(y/2)].pawn.color = tile.pawn.color;
        this.board[this.board.findIndex(s => s.statePlayed)].pawn.color = 'n';
        this.turn === 'white' ? this.turn = 'black' : this.turn = 'white';
      }
      this.board.map(t => t.statePlayed = false);
    }else{
      if(this.board[x*this.pawnInLine+~~(y/2)].pawn.color === this.turn) {
        this.board.map(t => t.statePlayed = false);
        this.board[x*this.pawnInLine+~~(y/2)].statePlayed = true;
      }else {
        alert('C\'est à '+this.turn+' de jouer !');
      }

    }
  }

  canMove(x: number, y: number, tile: Tile): boolean {
    switch (tile.pawn.color) {
      case 'white':
          return x === tile.coordX+1 && (y === tile.coordY-1 || y === tile.coordY+1);
        break;
      case 'black':
        return x === tile.coordX-1 && (y === tile.coordY-1 || y === tile.coordY+1);
        break;
    }
    return false;
  }

  clickEmpty() {
    this.board.map(t => t.statePlayed = false);
  }
}
