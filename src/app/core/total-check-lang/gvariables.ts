import { Injectable } from '@angular/core';

@Injectable()
export class GVariables {
  checkTotalLangV = false;
  colorSwitcher = false;

  changeLang() {
    return (this.checkTotalLangV = !this.checkTotalLangV);
  }
}
