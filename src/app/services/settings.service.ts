import { Injectable } from '@angular/core';

import { Settings } from '../models/settings';

@Injectable()
export class SettingsService {
  // properties
  settings: Settings = {
    allowRegistration: true,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: true
  }

  constructor() {
    if(localStorage.getItem('settings') != null) {
      // turn back into json object on retrieval
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings() {
    return this.settings;
  }

  changeSettings(settings: Settings) {
    // local storage only holds strings
    // i.e. stringify first on local store
    localStorage.setItem('settings', JSON.stringify(settings));
  }

}
