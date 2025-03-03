import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularIs';
  nom: string = "islem";
  tab: string[] = ["nom", "prenom"];
  name: string = "";

  onClick() {
    alert("Button clicked!");
  }
}
