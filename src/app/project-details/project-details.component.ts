import { Component, OnInit, Input } from '@angular/core';
import { ProjectsServiceService } from '../projects-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {


  constructor(public projects: ProjectsServiceService, private route: ActivatedRoute) {}
  ngOnInit(){
    this.route.paramMap
      .subscribe(params =>{
        let nome = params.get('id');
      })
  };
  


};