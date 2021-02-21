import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GithubUserProject } from '../services/github-types';
import { GithubUserProjectsService } from '../services/github-user-projects.service';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  public username = 'amwebexpert';
  public projects: GithubUserProject[];
  public error: any;

  constructor(
    private translateService: TranslateService,
    private spinner: NgxSpinnerService,
    private githubUserProjectsService: GithubUserProjectsService) {
  }

  ngOnInit(): void {
    this.refreshProjects();
  }

  private refreshProjects() {
    this.spinner.show('demo-spinner', {fullScreen: false})

    this.githubUserProjectsService.listUserProjects(this.username)
      .subscribe(
        (data) => this.projects = data,
        (e) => this.error = e,
        () => this.spinner.hide('demo-spinner')
      );
  }

  ngModelChange() {
    this.refreshProjects();
  }

  get lang() {
    return this.translateService.currentLang;
  }

  startSpinnerGlobal() {
    this.spinner.show('global');
    setTimeout(() => this.spinner.hide('global'), 4000);
  }

}
