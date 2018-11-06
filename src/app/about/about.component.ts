import { AppConstants } from '../app.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title = AppConstants.APP_TITLE_VERSION;
  ngVersion = AppConstants.ANGULAR_VERSION;
  bootstrapVersion = AppConstants.BOOTSTRAP_VERSION;

  constructor() { }

  ngOnInit() {
  }

}
