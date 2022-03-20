import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { DetalharArtistaComponent } from './components/artistas/detalhar-artista/detalhar-artista.component';
import { DetalharMusicaComponent } from './components/artistas/detalhar-artista/lista-musicas/detalhar-musica/detalhar-musica.component';
import { ListaMusicasComponent } from './components/artistas/detalhar-artista/lista-musicas/lista-musicas.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {
    path:'artistas' , component: ArtistasComponent,

  },
  {
    path:'artistas/artista/:id' , component: DetalharArtistaComponent,

  },
  {
    path:'artistas/artista/:id/musicas' , component: ListaMusicasComponent,

  },
  {
    path:'artistas/artista/:idArtista/musicas/:idMusica' , component: DetalharMusicaComponent,

  },
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page



] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
