import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { GithubUserProject } from '../services/github-types';
import { GithubUserProjectsService } from '../services/github-user-projects.service';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  public isSearching = false;
  public username = 'amwebexpert';
  public projects: GithubUserProject[];

  constructor(
    private translateService: TranslateService,
    private spinner: NgxSpinnerService,
    private githubUserProjectsService: GithubUserProjectsService) {
  }

  ngOnInit(): void {
    this.refreshProjects();
  }

  refreshProjects() {
    this.isSearching = true;
    this.spinner.show('demo-spinner', {fullScreen: false})

    this.githubUserProjectsService.listUserProjects(this.username)
      .subscribe(
        (data) => this.projects = data,
        (e) => {
          console.error(e);
          this.projects = [];
          this.spinner.hide('demo-spinner');
          this.isSearching = false;
        },
        () => {
          this.spinner.hide('demo-spinner');
          this.isSearching = false;
          console.log('END');
        }
      );
  }

  get lang() {
    return this.translateService.currentLang;
  }

  startSpinnerGlobal() {
    this.spinner.show('global');
    setTimeout(() => this.spinner.hide('global'), 4000);
  }

}
