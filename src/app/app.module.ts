import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectTemplateComponent } from './project-template/project-template.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FontAwesomeModule,  RouterModule.forRoot([
    {path: '', component: HomeComponent}

  ]) ],
  declarations: [ AppComponent, NavbarComponent, IntroComponent, ProjectTemplateComponent, HomeComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
