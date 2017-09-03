import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private translateService: TranslateService) {
  }

  ngOnInit(): void {
  }

}
