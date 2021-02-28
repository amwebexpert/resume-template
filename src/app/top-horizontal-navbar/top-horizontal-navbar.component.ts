import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-top-horizontal-navbar',
  templateUrl: './top-horizontal-navbar.component.html',
  styleUrls: ['./top-horizontal-navbar.component.css']
})
export class TopHorizontalNavbarComponent implements OnInit {

  appTitleVersion = AppConstants.APP_TITLE_VERSION;
  authorName = AppConstants.AUTHOR_NAME;

  constructor() { }

  ngOnInit(): void {
  }

}
