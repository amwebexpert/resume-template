import { AppConstants } from '../app.constants';
import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

declare var $: any; // jQuery reference

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title = AppConstants.APP_TITLE;

  constructor(
    private translateService: TranslateService) {
  }

  ngOnInit() {
  }

  get lang(): string {
    return this.translateService.currentLang;
  }

  changeLanguageTo(languageCode: string): void {
    this.translateService.use(languageCode);
  }

  navItemClick(event) {
    $('.navbar-collapse').collapse('hide');
  }

}
