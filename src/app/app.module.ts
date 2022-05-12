import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EzComponentsModule } from '@jaykain/ez-ui-sdk/ez-components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, EzComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
