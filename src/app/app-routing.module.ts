import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceDetailsComponent } from './residences/residence-details/residence-details.component';
import { AddApartmentComponent } from './apartments/add-apartment/add-apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidencesComponent } from './components/residences/residences.component';



const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"residences", component:ResidencesComponent},
  {path:"addApartment", component:AddApartmentComponent},
  {path:"details/:id", component:ResidenceDetailsComponent},

  {path:"**", component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
