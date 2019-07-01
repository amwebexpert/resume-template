import { VERSION } from '@angular/core';

declare var $: any; // jQuery reference

/**
 * Application constants
 */
export class AppConstants {

  public static DATE = '2019-07-01';
  public static APP_TITLE = 'AM';
  public static APP_TITLE_VERSION: string = AppConstants.APP_TITLE + ' - ' + AppConstants.DATE;

  public static ANGULAR_VERSION = 'Ng ' + VERSION.full;
  public static BOOTSTRAP_VERSION = $.fn.tooltip.Constructor.VERSION;

}
