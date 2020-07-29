import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectTemplateComponent } from './project-template/project-template.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([]) ],
  declarations: [ AppComponent, NavbarComponent, IntroComponent, ProjectTemplateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
