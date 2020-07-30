import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-template',
  templateUrl: './project-template.component.html',
  styleUrls: ['./project-template.component.scss']
})
export class ProjectTemplateComponent implements OnInit {
  @Input()
  year;
  @Input()
  imgsrc;
  @Input()
  nomeprojeto;
  @Input()
  descricao;

  constructor() { }

  ngOnInit() {
  }

}