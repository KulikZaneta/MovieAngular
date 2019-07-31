import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {  
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatTableModule } from '@angular/material';
import { ApiModule } from 'src/api/api.module';
import { MovieModule } from './movie/movie.module';
import { StarWarsModule } from './star-wars/star-wars.module';


  

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    LayoutModule,
    ApiModule,
    MovieModule,
    StarWarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
