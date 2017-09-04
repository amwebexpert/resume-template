import { ResolutionService } from '../fwk/service/resolution.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

  constructor(private resolutionService: ResolutionService) { }

  ngOnInit() {
  }

  atLeastMediumDevice(): boolean {
    return this.resolutionService.hasAtLeast('md');
  }

}
