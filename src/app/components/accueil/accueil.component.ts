import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  gamesName = ["Dame"];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onStartGame(form: NgForm): void{
    switch (form.value.game) {
      case "Dame":
        this.router.navigate(['dame']);
        break;
    }
  }

}
