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
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsServiceService } from './projects-service.service';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FontAwesomeModule,  RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'projects/:id', component: ProjectDetailsComponent}

  ]) ],
  declarations: [ AppComponent, NavbarComponent, IntroComponent, ProjectTemplateComponent, HomeComponent, FooterComponent, ProjectDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProjectsServiceService, {provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppModule { }
