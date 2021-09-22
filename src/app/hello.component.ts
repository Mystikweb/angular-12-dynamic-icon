import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{ name }} - {{ appTitle }}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  appTitle: string;

  ngOnInit(): void {
    this.appTitle = document.title;
  }
}
