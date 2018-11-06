import { Component, OnInit } from '@angular/core';
import { ResolutionService } from '../fwk/service/resolution.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-certifs',
  templateUrl: './certifs.component.html',
  styleUrls: ['./certifs.component.scss']
})
export class CertifsComponent implements OnInit {

  constructor(private resolutionService: ResolutionService,
    private translateService: TranslateService) {
  }

  ngOnInit(): void {
  }

  get lang(): string {
    return this.translateService.currentLang;
  }

  atLeastMediumDevice(): boolean {
    return this.resolutionService.hasAtLeast('md');
  }

}
