import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-icon',
  templateUrl: './dynamic-icon.component.html',
  styleUrls: ['./dynamic-icon.component.css'],
})
export class DynamicIconComponent implements OnInit {
  private defaultIcon = 'home';
  private _iconValue = '';
  @Input()
  get iconValue() {
    return this._iconValue || this.defaultIcon;
  }
  set iconValue(value: string) {
    this._iconValue = value;
  }

  constructor() {}

  ngOnInit() {}
}
