import { VERSION } from '@angular/core';

declare const bootstrap: any; // global reference

/**
 * Application constants
 */
export class AppConstants {

  public static DATE = '2022-10-19';
  public static APP_TITLE = 'amwebexpert';
  public static AUTHOR_NAME = 'André Masson';
  public static APP_TITLE_VERSION: string = AppConstants.APP_TITLE + ' - ' + AppConstants.DATE;

  public static ANGULAR_VERSION = 'Ng ' + VERSION.full;
  public static BOOTSTRAP_VERSION = bootstrap.Tooltip.VERSION;

}
