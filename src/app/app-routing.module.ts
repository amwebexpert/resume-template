import { ContactsComponent } from './contacts/contacts.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { MembersComponent } from './members/members.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CertifsComponent } from './certifs/certifs.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'certifs',
    component: CertifsComponent,
  },
  {
    path: 'technologies',
    component: TechnologiesComponent,
  },
  {
    path: 'members',
    component: MembersComponent,
  },
  {
    path: 'achievements',
    component: AchievementsComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
