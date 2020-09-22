import { Component, OnInit } from "@angular/core";
import { Dado } from "../../dado";
import { ProjectsServiceService } from "../projects-service.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(public projects: ProjectsServiceService) {}

  ngOnInit() {

  }
}