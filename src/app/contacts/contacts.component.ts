import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(
    private translateService: TranslateService) {
  }

  ngOnInit(): void {
  }

  get lang() {
    return this.translateService.currentLang;
  }

}
