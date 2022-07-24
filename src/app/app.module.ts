import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ResolutionService } from './fwk/service/resolution.service';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppMissingTranslationHandler } from './fwk/i18n/i18n.module';
import { HomeComponent } from './home/home.component';
import { CertifsComponent } from './certifs/certifs.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { MembersComponent } from './members/members.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DemosComponent } from './demos/demos.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GithubUserProjectsService } from './services/github-user-projects.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { CsvViewerComponent } from './privacy-policies/csv-viewer/csv-viewer.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/resume-template/assets/i18n/', '.json');
}


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    NgxSpinnerModule,
  ],
  providers: [
    Title,
    ResolutionService,
    {
      provide: MissingTranslationHandler,
      useClass: AppMissingTranslationHandler
    },
    GithubUserProjectsService,
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CertifsComponent,
    TechnologiesComponent,
    MembersComponent,
    AchievementsComponent,
    ContactsComponent,
    DemosComponent,
    NavbarComponent,
    CsvViewerComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
