import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor(
    private translateService: TranslateService) {
  }

  ngOnInit(): void {
  }

  get lang() {
    return this.translateService.currentLang;
  }

}
