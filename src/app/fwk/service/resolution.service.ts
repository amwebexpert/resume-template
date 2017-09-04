import { Injectable } from '@angular/core';

export type RESOLUTION_TYPE = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
const RESOLUTIONS: RESOLUTION_TYPE[] = ['xl', 'lg', 'md', 'sm', 'xs'];
const RESOLUTIONS_CLASSES = ['.device-xl', '.device-lg', '.device-md', '.device-sm', '.device-xs'];

declare var $: any; // jQuery reference

@Injectable()
export class ResolutionService {

  private currentResolution: RESOLUTION_TYPE;
  private currentResolutionIndex: number;

  constructor() {
    this.updateCurrentState();
    $(window).resize(() => this.updateCurrentState());
  }

  hasResolution(resolution: RESOLUTION_TYPE): boolean {
    return this.currentResolution === resolution;
  }

  hasAtLeast(resolution: RESOLUTION_TYPE): boolean {
    return this.currentResolutionIndex <= this.getIndex(resolution);
  }

  private updateCurrentState() {
    for (let i = 0; i < RESOLUTIONS.length; i++) {
      const resolution = RESOLUTIONS[i];

      if ($(RESOLUTIONS_CLASSES[i]).is(':visible')) {
        if (this.currentResolution !== resolution) {
          // console.log('Resolution changed to ' + resolution);
          this.currentResolution = resolution;
          this.currentResolutionIndex = i;
          break;
        }
      }
    }
  }

  private getIndex(resolution: RESOLUTION_TYPE) {
    for (let i = 0; i < RESOLUTIONS.length; i++) {
      if (RESOLUTIONS[i] === resolution) {
        return i;
      }
    }

    return -1;
  }

}
