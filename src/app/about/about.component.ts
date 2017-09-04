import { AppConstants } from '../app.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title = AppConstants.APP_TITLE_VERSION;

  constructor() { }

  ngOnInit() {
  }

}
