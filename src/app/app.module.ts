import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
  TranslateStaticLoader,
} from 'ng2-translate/ng2-translate';

import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppMissingTranslationHandler } from './fwk/i18n/i18n.module';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

export function createTranslateLoader(pHttp: Http) {
  return new TranslateStaticLoader(pHttp, 'assets/i18n', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: MissingTranslationHandler,
      useClass: AppMissingTranslationHandler
    },
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    MenuComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
