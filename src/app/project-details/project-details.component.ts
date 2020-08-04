import { Component, OnInit, Input } from '@angular/core';
import { ProjectsServiceService } from '../projects-service.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  

  constructor(public projects: ProjectsServiceService) { }

  ngOnInit() {
  }

}