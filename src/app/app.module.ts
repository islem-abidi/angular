import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ResidencesComponent } from './components/residences/residences.component'; // ✅ Assurez-vous que FormsModule est bien importé

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // ✅ Ajout de FormsModule pour résoudre l'erreur `ngModel`
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
