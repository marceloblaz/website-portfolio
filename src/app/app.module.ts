import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectTemplateComponent } from './project-template/project-template.component';
import { RouterModule } from '@angular/router';
import { ProjectPageModelComponent } from './project-page-model/project-page-model.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path: 'projects/ :lista.nome}', component: ProjectPageModelComponent}
  ]) ],
  declarations: [ AppComponent, NavbarComponent, IntroComponent, ProjectTemplateComponent, ProjectPageModelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
