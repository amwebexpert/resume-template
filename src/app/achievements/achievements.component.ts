import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {

  constructor(
    private translateService: TranslateService) {
  }

  ngOnInit(): void {
  }

  get lang() {
    return this.translateService.currentLang;
  }

}
