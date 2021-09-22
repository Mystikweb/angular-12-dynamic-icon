import { Component, VERSION } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'icon-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  version = VERSION.full;

  selectedIcon = new FormControl('', Validators.required);
  icons = ['home', 'search', 'settings', 'done', 'info'];
}
