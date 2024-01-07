import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { CopiedComponent } from './copy-to-clipboard/copied.component';

@NgModule({
  declarations: [AppComponent, CopiedComponent],
  imports: [BrowserModule, AppRoutingModule, SliderModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
