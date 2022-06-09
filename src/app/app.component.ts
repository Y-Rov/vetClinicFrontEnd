import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'vetClinicFrontEnd';

  constructor(
    private iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      this.iconRegistry.addSvgIcon(
        'facebook',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/facebook.svg'));
      
      this.iconRegistry.addSvgIcon(
        'telegram',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/telegram.svg'));

      this.iconRegistry.addSvgIcon(
        'instagram',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/instagram.svg'));
      }
}
