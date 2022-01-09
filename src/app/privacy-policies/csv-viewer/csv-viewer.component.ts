import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-csv-viewer',
  templateUrl: './csv-viewer.component.html',
  styleUrls: ['./csv-viewer.component.css']
})
export class CsvViewerComponent implements OnInit {

  constructor(
    private translateService: TranslateService) {
  }

  ngOnInit(): void {
  }

  get lang() {
    return this.translateService.currentLang;
  }

}
