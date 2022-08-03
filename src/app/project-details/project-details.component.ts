import { Component, OnInit, Input } from '@angular/core';
import { ProjectsServiceService } from '../projects-service.service';
import { ActivatedRoute } from '@angular/router';
import { Dado } from '../../dado';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  projeto: Dado;

  constructor(
    public projects: ProjectsServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let idroute = params.get('id');

      this.projeto = this.projects
        .buscaListaProjetos()
        .find((item) => item.nome == idroute);
    });
  }
}
