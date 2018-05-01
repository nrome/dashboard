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

  constructor() { }

  getSettings() {
    return this.settings;
  }

}
