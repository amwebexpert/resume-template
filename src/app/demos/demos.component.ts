import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {

  constructor(
    private translateService: TranslateService,
    private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.startSpinner(false);
  }

  get lang() {
    return this.translateService.currentLang;
  }

  startSpinnerGlobal() {
    this.spinner.show('global');
    setTimeout(() => this.spinner.hide('global'), 4000);
  }

  startSpinner(fullScreen: boolean = false) {
    this.spinner.show('demo-spinner', {fullScreen});
    setTimeout(() => this.spinner.hide('demo-spinner'), 4000);
  }

}
