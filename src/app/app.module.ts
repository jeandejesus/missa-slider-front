import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaMusicasComponent } from './components//artistas/detalhar-artista/lista-musicas/lista-musicas.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { DetalharArtistaComponent } from './components/artistas/detalhar-artista/detalhar-artista.component';
import { DetalharMusicaComponent } from './components/artistas/detalhar-artista/lista-musicas/detalhar-musica/detalhar-musica.component';
import { ListaArtistasComponent } from './components/artistas/lista-artistas/lista-artistas.component';
import { FooterComponent } from './components/footer/footer.component';
import { GeradorComponent } from './components/gerador/gerador.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DetalharArtistaComponent,
    HomeComponent,
    ArtistasComponent,
    ListaArtistasComponent,
    ListaMusicasComponent,
    DetalharMusicaComponent,
    GeradorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
