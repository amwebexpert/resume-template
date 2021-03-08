import { AppConstants } from './app.constants';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  appTitleVersion = AppConstants.APP_TITLE_VERSION;

  constructor(
    private translateService: TranslateService,
    private titleService: Title) {
  }

  ngOnInit(): void {
    console.log('AppComponent ngOnInit');
    this.titleService.setTitle(this.appTitleVersion);
    this.initLanguageService();
  }

  private initLanguageService(): void {
    // Hack to load all languages
    // If we don't do this, the first time we change language not all elements are properly translated
    this.translateService.reloadLang('fr');

    // this languageCode will be used as a fallback when a translation isn't found in the current languageCode
    this.translateService.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translateService.use(this.translateService.getDefaultLang());
  }

  get lang(): string {
    return this.translateService.currentLang;
  }

  changeLanguageTo(languageCode: string): void {
    this.translateService.use(languageCode);
  }

}
