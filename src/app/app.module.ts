import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DynamicIconComponent } from './dynamic-icon/dynamic-icon.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [AppComponent, HelloComponent, DynamicIconComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
