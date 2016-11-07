import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { DescriptionComponent} from './description.component';
import { NavbarLandingPageComponent} from './navbar-landing-page.component';
import{RegisterLandingComponent} from './register.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent, DescriptionComponent , NavbarLandingPageComponent, RegisterLandingComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }