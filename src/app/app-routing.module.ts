import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {
    path:'artista' , component: ArtistaComponent
  },
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page



] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
