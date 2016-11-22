import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { DescriptionComponent} from './description.component';
import { NavbarLandingPageComponent} from './navbar-landing-page.component';
import{RegisterLandingComponent} from './register.component';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, JsonpModule ],
  declarations: [ 
    AppComponent, DescriptionComponent , NavbarLandingPageComponent, RegisterLandingComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }